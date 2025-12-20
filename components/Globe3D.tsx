"use client";

import React, { useEffect, useRef, useState } from "react";
import { MotionValue } from "framer-motion";

interface Globe3DProps {
    scrollProgress?: MotionValue<number>;
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

export default function Globe3D({ scrollProgress }: Globe3DProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    // Fix hydration mismatch: Start with desktop, update client-side
    const [isMobile, setIsMobile] = useState(false);
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        // Client-side only mobile detection
        setIsMobile(window.innerWidth < 768);
        // Trigger fade-in after particle count is determined
        setTimeout(() => setIsReady(true), 50); // Small delay for smooth transition
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = canvas.width = 600;
        let height = canvas.height = 600;
        let rotation = 0;
        let speed = 0.002;
        let animationFrameId: number;

        // Use isMobile state (not direct window check)
        const DOT_COUNT = isMobile ? 300 : 600; // 50% reduction on mobile
        const MOBILE_PARTICLE_BOOST = isMobile ? 1.15 : 1.0; // 15% larger particles on mobile
        const GLOBE_RADIUS = 220;

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
                size: (Math.random() < 0.1 ? 2.5 : 1) * MOBILE_PARTICLE_BOOST,
                velocity: {
                    x: (Math.random() - 0.5) * 2,
                    y: (Math.random() - 0.5) * 2,
                    z: (Math.random() - 0.5) * 2
                }
            });
        }

        const render = () => {
            // Safely get progress
            let progress = 0;
            if (scrollProgress) {
                progress = scrollProgress.get();
            }

            // Trigger explosion after 75% scroll (when entering Global Domination)
            const explosionFactor = Math.max(0, (progress - 0.75) * 8);

            ctx.clearRect(0, 0, width, height);
            ctx.save();
            ctx.translate(width / 2, height / 2);

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

        canvas.addEventListener('mouseenter', handleMouseEnter);
        canvas.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            canvas.removeEventListener('mouseenter', handleMouseEnter);
            canvas.removeEventListener('mouseleave', handleMouseLeave);
            cancelAnimationFrame(animationFrameId);

            // Canvas cleanup to prevent memory leaks
            if (ctx) {
                ctx.clearRect(0, 0, width, height);
            }
        };
    }, [scrollProgress, isMobile]); // Re-run when mobile state changes

    return (
        <div className={`transition-opacity duration-1000 ease-out ${isReady ? 'opacity-100' : 'opacity-0'}`}>
            <canvas
                ref={canvasRef}
                className="w-full h-full max-w-[600px] max-h-[600px] cursor-pointer"
                style={{ width: '100%', height: '100%', willChange: 'transform' }}
            />
        </div>
    );
}
