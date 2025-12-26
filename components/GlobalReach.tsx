"use client";
// Force rebuild: 2025-12-20 19:50

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import Globe3D from "@/components/Globe3D";
import { Globe3DErrorBoundary } from "@/components/Globe3DErrorBoundary";
import { useSmoothCountUp } from "@/hooks/useSmoothCountUp";

function Counter({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
    const { elementRef, numberRef } = useSmoothCountUp(value, 2000, {
        prefix,
        suffix,
        decimals: 0,
        startOnView: true
    });

    return (
        <span
            ref={elementRef}
            className="font-heading font-bold text-5xl md:text-7xl text-white block mb-2 tracking-tight"
            style={{
                fontSize: 'clamp(2.5rem, 6vw + 1rem, 4.5rem)'
            }}
        >
            <span ref={numberRef}>0</span>
        </span>
    );
}

export default function GlobalReach() {
    const { t } = useLanguage();
    const [isMobile, setIsMobile] = useState(false);
    const reduceMotion = useReducedMotion();
    const globeWrapRef = useRef<HTMLDivElement>(null);
    const globeInView = useInView(globeWrapRef, { margin: "-10% 0px -10% 0px" });

    useEffect(() => {
        setIsMobile(window.innerWidth < 768);
    }, []);

    return (
        <section id="global" className="py-24 relative overflow-hidden min-h-screen flex items-center">
            {/* Background Glow */}
            <div className="absolute top-1/2 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[128px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="mobile-section-title text-4xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight">
                            {t.global.title}
                        </h2>
                        <p className="mobile-section-subtitle text-base md:text-lg text-slate-400 mb-12 leading-relaxed max-w-lg">
                            {t.global.subtitle}
                        </p>

                        <div className="grid grid-cols-2 gap-12 mb-12">
                            <div>
                                <Counter value={45} suffix="+" />
                                <div className="text-slate-500 font-medium uppercase tracking-wider text-sm border-t border-slate-800 pt-4 mt-2">
                                    {t.global.stats.businesses}
                                </div>
                            </div>
                            <div>
                                <Counter value={15} suffix="+" />
                                <div className="text-slate-500 font-medium uppercase tracking-wider text-sm border-t border-slate-800 pt-4 mt-2">
                                    {t.global.stats.mentors}
                                </div>
                            </div>
                            <div className="col-span-2">
                                <Counter value={65} suffix="%" />
                                <div className="text-slate-500 font-medium uppercase tracking-wider text-sm border-t border-slate-800 pt-4 mt-2">
                                    {t.global.stats.growth}
                                </div>
                            </div>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 glass text-white font-medium rounded-lg hover:bg-white/5 transition-all flex items-center gap-2 group"
                        >
                            {t.global.viewNetwork}
                            <span className="w-2 h-2 rounded-full bg-primary group-hover:animate-ping" />
                        </motion.button>

                    </motion.div>

                    {/* Connected Globe Visual - Desktop Only */}
                    <div className="hidden md:flex relative h-[400px] md:h-[600px] items-center justify-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="absolute inset-0 flex items-center justify-center"
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
                                <div className="w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[520px] md:h-[520px] rounded-full overflow-hidden">
                                    <Globe3D
                                        quality="high"
                                        paused={reduceMotion || !globeInView} // Keep existing paused logic
                                    />
                                </div>
                            </Globe3DErrorBoundary>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
