"use client";

import React, { useEffect, useRef, useState } from "react";

export default function HeroBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = useState(false);
    const [isActive, setIsActive] = useState(true);
    const [reduceMotion, setReduceMotion] = useState(false);

    useEffect(() => {
        // client-only
        setIsMobile(window.innerWidth < 768);
        setReduceMotion(window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false);

        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener("resize", handleResize, { passive: true });

        // Pause animation when the hero is offscreen (big win for mobile scroll FPS)
        const el = wrapperRef.current;
        let observer: IntersectionObserver | null = null;
        if (el && "IntersectionObserver" in window) {
            observer = new IntersectionObserver(
                (entries) => {
                    const entry = entries[0];
                    setIsActive(Boolean(entry?.isIntersecting));
                },
                { threshold: 0.05 }
            );
            observer.observe(el);
        }

        return () => {
            window.removeEventListener("resize", handleResize);
            if (observer && el) observer.unobserve(el);
            observer?.disconnect();
        };
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        if (reduceMotion) return;

        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;
        let animationFrameId: number;

        const particles: { x: number; y: number; vx: number; vy: number; }[] = [];
        const PARTICLE_COUNT = isMobile ? 36 : 80;
        const CONNECTION_DISTANCE = isMobile ? 110 : 150;

        // Initialize particles
        for (let i = 0; i < PARTICLE_COUNT; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5
            });
        }

        const render = () => {
            if (!isActive) return;
            ctx.clearRect(0, 0, width, height);

            // Update and draw particles
            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];
                p.x += p.vx;
                p.y += p.vy;

                // Bounce off edges
                if (p.x < 0 || p.x > width) p.vx *= -1;
                if (p.y < 0 || p.y > height) p.vy *= -1;

                // Draw particle
                ctx.beginPath();
                ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
                ctx.fillStyle = "rgba(255, 34, 0, 0.5)"; // Red
                ctx.fill();

                // Connect to neighbors
                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < CONNECTION_DISTANCE) {
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        const alpha = 1 - dist / CONNECTION_DISTANCE;
                        ctx.strokeStyle = `rgba(255, 34, 0, ${alpha * 0.2})`; // Red connections
                        ctx.lineWidth = 1;
                        ctx.stroke();
                    }
                }
            }

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };

        window.addEventListener("resize", handleResize, { passive: true });

        return () => {
            window.removeEventListener("resize", handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, [isActive, isMobile, reduceMotion]);

    return (
        <div ref={wrapperRef} className="absolute inset-0 overflow-hidden pointer-events-none">
            {!reduceMotion && (
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 w-full h-full opacity-60"
                />
            )}
            {/* Vignette Overlay for depth */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,#050505_90%)]" />
        </div>
    );
}
