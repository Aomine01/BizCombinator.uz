"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import Globe3D from "@/components/Globe3D";
import { Globe3DErrorBoundary } from "@/components/Globe3DErrorBoundary";
import { useLanguage } from "@/context/LanguageContext";

const SLIDE_COLORS = ["from-blue-500 to-cyan-400", "from-orange-500 to-amber-400", "from-purple-500 to-pink-400"];

export default function ScrollShowcase() {
    const { t } = useLanguage();
    const containerRef = useRef<HTMLDivElement>(null);
    const reduceMotion = useReducedMotion();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const update = () => setIsMobile(window.innerWidth < 768);
        update();
        window.addEventListener("resize", update, { passive: true });
        return () => window.removeEventListener("resize", update);
    }, []);

    const slides = useMemo(
        () => t.showcase.slides.map((s, i) => ({ ...s, color: SLIDE_COLORS[i] ?? "from-primary to-orange-400" })),
        [t.showcase.slides]
    );

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Transform helix appearance based on scroll
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 1.5]); // Increase scale at end for explosion
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
    const opacity = useTransform(scrollYProgress, [0, 0.1, 0.8], [0, 1, 1]); // Keep visible at end

    // Mobile / reduced-motion version: Particle sphere background with scrolling cards
    if (isMobile || reduceMotion) {
        return (
            <section className="py-24 relative overflow-hidden min-h-screen">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_70%)] pointer-events-none z-0" />

                {/* Particle Sphere Background Layer - Fixed & Centered */}
                <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
                    <div className="w-[350px] h-[350px] opacity-30">
                        <Globe3DErrorBoundary fallback={null}>
                            <Globe3D quality="low" paused={false} />
                        </Globe3DErrorBoundary>
                    </div>
                </div>

                {/* Content Layer - Scrolls over background */}
                <div className="container mx-auto px-4 relative z-10">
                    <div className="space-y-16">
                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                className="glass rounded-2xl border border-white/10 p-6 text-center backdrop-blur-md bg-black/40"
                            >
                                <h3 className={`text-3xl font-heading font-bold mb-3 bg-gradient-to-r ${slide.color} bg-clip-text text-transparent mx-auto max-w-2xl`}>
                                    {slide.title}
                                </h3>
                                <p className="text-slate-300 leading-relaxed mx-auto max-w-xl">
                                    {slide.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section ref={containerRef} className="relative h-[300vh]">
            {/* Sticky 3D Background */}
            <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
                <motion.div
                    style={{ scale, rotate, opacity }}
                    className="w-full max-w-4xl aspect-square relative opacity-50"
                >
                    <Globe3DErrorBoundary fallback={
                        <div className="w-full h-full max-w-[600px] max-h-[600px] flex items-center justify-center">
                            <div className="text-center text-slate-400">
                                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                                    <div className="w-16 h-16 rounded-full bg-primary/20" />
                                </div>
                                <p className="text-sm">{t.common.globeUnavailable}</p>
                            </div>
                        </div>
                    }>
                        <Globe3D
                            scrollProgress={scrollYProgress}
                            quality={isMobile ? "low" : "high"}
                        />
                    </Globe3DErrorBoundary>
                </motion.div>

                {/* Background Gradient Mesh */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_70%)] pointer-events-none" />
            </div>

            {/* Scrolling Content Slides */}
            <div className="absolute inset-0">
                {slides.map((slide, index) => (
                    <div key={index} className="h-screen flex items-center justify-center relative pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ margin: "-20% 0px -20% 0px" }}
                            transition={{ duration: 0.8 }}
                            className="max-w-xl text-center z-10 p-8 glass rounded-2xl pointer-events-auto border border-white/10"
                        >
                            <h3 className={`text-4xl md:text-6xl font-heading font-bold mb-6 bg-gradient-to-r ${slide.color} bg-clip-text text-transparent`}>
                                {slide.title}
                            </h3>
                            <p className="text-xl text-slate-300 leading-relaxed">
                                {slide.description}
                            </p>
                        </motion.div>
                    </div>
                ))}
            </div>
        </section>
    );
}
