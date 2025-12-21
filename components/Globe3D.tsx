"use client";

import React, { useEffect, useRef, useState } from "react";
import { MotionValue } from "framer-motion";

interface Globe3DProps {
    scrollProgress?: MotionValue<number>;
    /**
     * Rendering quality. "auto" adapts to mobile/desktop.
     * Use "low" to force a lightweight globe on mobile contexts.
     */
    quality?: "auto" | "low" | "high";
    /**
     * If true, the animation loop is paused (useful when offscreen).
     */
    paused?: boolean;
}

interface Dot {
    x: number;
    y: number;
    z: number;
    size: number;
    velocity: { x: number; y: number; z: number };
}

interface ProjectedDot {
    x: number;
    y: number;
    z: number;
    size: number;
    alpha: number;
}

export default function Globe3D({
    scrollProgress,
    quality = "auto",
    paused = false,
}: Globe3DProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);
    // Fix hydration mismatch: Start with desktop, update client-side
    const [isMobile, setIsMobile] = useState(false);
    const [isReady, setIsReady] = useState(false);
    const [reduceMotion, setReduceMotion] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Client-side only mobile detection
        setIsMobile(window.innerWidth < 768);
        setReduceMotion(window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false);
        // Trigger fade-in after particle count is determined
        setTimeout(() => setIsReady(true), 50); // Small delay for smooth transition
    }, []);

    useEffect(() => {
        // Pause animation when the globe is offscreen (big win for scroll FPS).
        const el = wrapperRef.current;
        if (!el || !("IntersectionObserver" in window)) return;

        const obs = new IntersectionObserver(
            (entries) => {
                setIsVisible(Boolean(entries[0]?.isIntersecting));
            },
            { threshold: 0.05 }
        );

        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        if (reduceMotion) return;

        // Size to the rendered element to avoid overdraw on mobile.
        const wrapper = wrapperRef.current;
        if (!wrapper) return;

        const dprCap = isMobile ? 1.25 : 2;

        let cssSize = 600;
        let animationFrameId: number | null = null;
        let rotation = 0;
        let speed = 0.002;

        const qualityMode: "low" | "high" =
            quality === "high" ? "high" :
                quality === "low" ? "low" :
                    isMobile ? "low" : "high";

        const DOT_COUNT =
            qualityMode === "low"
                ? (scrollProgress ? 220 : 180)
                : 600;

        const PARTICLE_BOOST = qualityMode === "low" ? 1.1 : 1.0;
        const GLOBE_RADIUS = qualityMode === "low" ? 170 : 220;

        const applyCanvasSize = () => {
            const rect = wrapper.getBoundingClientRect();
            cssSize = Math.max(220, Math.min(600, Math.floor(rect.width || 600)));
            const dpr = Math.min(window.devicePixelRatio || 1, dprCap);

            canvas.width = Math.floor(cssSize * dpr);
            canvas.height = Math.floor(cssSize * dpr);
            canvas.style.width = `${cssSize}px`;
            canvas.style.height = `${cssSize}px`;

            // Draw in CSS pixel space while letting the backing store scale with DPR.
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        };

        applyCanvasSize();

        const dots: Dot[] = [];

        // Initialize dots on a sphere
        for (let i = 0; i < DOT_COUNT; i++) {
            const phi = Math.acos(-1 + (2 * i) / DOT_COUNT);
            const theta = Math.sqrt(DOT_COUNT * Math.PI) * phi;
            const x = GLOBE_RADIUS * Math.cos(theta) * Math.sin(phi);
            const y = GLOBE_RADIUS * Math.sin(theta) * Math.sin(phi);
            const z = GLOBE_RADIUS * Math.cos(phi);
            dots.push({
                x, y, z,
                size: (Math.random() < 0.1 ? 2.5 : 1) * PARTICLE_BOOST,
                velocity: {
                    x: (Math.random() - 0.5) * 2,
                    y: (Math.random() - 0.5) * 2,
                    z: (Math.random() - 0.5) * 2
                }
            });
        }

        const render = () => {
            // Hard stop if offscreen or caller requests pause.
            if (!isVisible || paused) return;

            // Safely get progress
            let progress = 0;
            if (scrollProgress) {
                progress = scrollProgress.get();
            }

            // Trigger explosion after 75% scroll (used in ScrollShowcase)
            const explosionFactor = Math.max(0, (progress - 0.75) * 8);

            // Clear in CSS pixel space since we've set a dpr transform above.
            ctx.clearRect(0, 0, cssSize, cssSize);
            ctx.save();
            ctx.translate(cssSize / 2, cssSize / 2);

            rotation += speed;

            const projectedDots: ProjectedDot[] = [];

            // Projection Loop with Camera Culling
            for (const dot of dots) {
                // Apply explosion expansion
                const currentRadius = GLOBE_RADIUS + (explosionFactor * 200);

                // Add jitter/scatter effect based on explosion
                const scatterX = dot.velocity.x * explosionFactor * 50;
                const scatterY = dot.velocity.y * explosionFactor * 50;
                const scatterZ = dot.velocity.z * explosionFactor * 50;

                // Normalize original position and scale to new radius + scatter
                const scaleFactor = (currentRadius / GLOBE_RADIUS);
                let dx = dot.x * scaleFactor + scatterX;
                let dy = dot.y * scaleFactor + scatterY;
                let dz = dot.z * scaleFactor + scatterZ;

                // Rotate around Y axis
                const xRot = dx * Math.cos(rotation) - dz * Math.sin(rotation);
                const zRotY = dx * Math.sin(rotation) + dz * Math.cos(rotation);
                const yRot = dy;

                // Tilt around X axis slightly (20 degrees)
                const tilt = 0.35;
                const yFinal = yRot * Math.cos(tilt) - zRotY * Math.sin(tilt);
                const zFinal = yRot * Math.sin(tilt) + zRotY * Math.cos(tilt);

                // CAMERA CULLING: 
                // Don't render points that are behind the camera or too close to the focal plane
                // This prevents 'zFinal' from being <-300 which would flip the perspective math
                if (zFinal > -250) {
                    const perspective = 300 / (300 + zFinal);
                    projectedDots.push({
                        x: xRot * perspective,
                        y: yFinal * perspective,
                        z: zFinal,
                        size: Math.max(0.1, dot.size * perspective), // Ensure safe positive radius
                        alpha: (zFinal + GLOBE_RADIUS) / (2 * GLOBE_RADIUS)
                    });
                }
            }

            // Sort painter's algorithm
            projectedDots.sort((a, b) => a.z - b.z);

            // Draw Connection Lines (Arcs) - Fade out during explosion
            const lineOpacity = Math.max(0, 1 - explosionFactor);
            if (lineOpacity > 0.1) {
                for (let i = 0; i < 8; i++) {
                    const idx1 = i * 20;
                    const idx2 = i * 20 + 50;
                    if (idx1 < projectedDots.length && idx2 < projectedDots.length) {
                        const p1 = projectedDots[idx1];
                        const p2 = projectedDots[idx2];

                        // Double check existing logic
                        if (p1 && p2 && p1.z > -50 && p2.z > -50) {
                            ctx.beginPath();
                            ctx.moveTo(p1.x, p1.y);
                            ctx.quadraticCurveTo(0, -150, p2.x, p2.y);
                            ctx.strokeStyle = `rgba(255, 34, 0, ${0.4 * p1.alpha * lineOpacity})`;
                            ctx.lineWidth = 1;
                            ctx.stroke();
                        }
                    }
                }
            }

            // Draw Dots
            for (const dot of projectedDots) {
                ctx.beginPath();
                const alpha = Math.max(0.1, dot.alpha);
                // Red Color or White
                ctx.fillStyle = dot.size > 2 ? `rgba(255, 34, 0, ${alpha})` : `rgba(255, 255, 255, ${alpha * 0.5})`;

                // Extra safety check for radius
                const safeRadius = Math.max(0, dot.size);
                ctx.arc(dot.x, dot.y, safeRadius, 0, Math.PI * 2);
                ctx.fill();

                // Glow for large dots
                if (dot.size > 2) {
                    ctx.shadowBlur = 10;
                    ctx.shadowColor = "rgba(255, 34, 0, 0.8)";
                    ctx.fill();
                    ctx.shadowBlur = 0;
                }
            }

            ctx.restore();
            animationFrameId = requestAnimationFrame(render);
        };

        render();

        // Interaction
        const handleMouseEnter = () => { speed = 0.008; };
        const handleMouseLeave = () => { speed = 0.002; };

        // Only enable hover interactions on non-touch contexts
        if (!isMobile) {
            canvas.addEventListener('mouseenter', handleMouseEnter);
            canvas.addEventListener('mouseleave', handleMouseLeave);
        }

        // Keep the canvas sized correctly on resize/orientation changes.
        const onResize = () => applyCanvasSize();
        window.addEventListener("resize", onResize, { passive: true });

        let ro: ResizeObserver | null = null;
        if ("ResizeObserver" in window) {
            ro = new ResizeObserver(() => applyCanvasSize());
            ro.observe(wrapper);
        }

        return () => {
            if (!isMobile) {
                canvas.removeEventListener('mouseenter', handleMouseEnter);
                canvas.removeEventListener('mouseleave', handleMouseLeave);
            }
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
            window.removeEventListener("resize", onResize);
            ro?.disconnect();

            // Canvas cleanup to prevent memory leaks
            if (ctx) {
                ctx.clearRect(0, 0, cssSize, cssSize);
            }
        };
    }, [scrollProgress, isMobile, isVisible, reduceMotion, quality, paused]); // re-run when quality/paused changes

    return (
        // Canvas is square; we mask it into a circle for the “globe” silhouette.
        <div
            ref={wrapperRef}
            className={`relative rounded-full overflow-hidden transition-opacity duration-1000 ease-out ${isReady ? 'opacity-100' : 'opacity-0'}`}
        >
            <canvas
                ref={canvasRef}
                className="block w-full h-full max-w-[600px] max-h-[600px] cursor-pointer"
                style={{ width: '100%', height: '100%' }}
            />
        </div>
    );
}
