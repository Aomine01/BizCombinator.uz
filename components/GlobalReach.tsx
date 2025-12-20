"use client";

import { motion, useInView, useSpring, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import Globe3D from "@/components/Globe3D";
import { Globe3DErrorBoundary } from "@/components/Globe3DErrorBoundary";

function Counter({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { stiffness: 50, damping: 20 });
    const rounded = useTransform(springValue, (latest) => Math.round(latest));

    useEffect(() => {
        if (inView) {
            motionValue.set(value);
        }
    }, [inView, motionValue, value]);

    return (
        <span ref={ref} className="font-heading font-bold text-5xl md:text-7xl text-white block mb-2 tracking-tight">
            {prefix}
            <motion.span>{rounded}</motion.span>
            {suffix}
        </span>
    );
}

export default function GlobalReach() {
    const { t } = useLanguage();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(window.innerWidth < 768);
    }, []);

    return (
        <section className="py-24 relative overflow-hidden min-h-screen flex items-center">
            {/* Background Glow */}
            <div className="absolute top-1/2 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[128px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight">
                            {t.global.title}
                        </h2>
                        <p className="text-slate-400 text-lg mb-12 leading-relaxed max-w-lg">
                            {t.global.subtitle}
                        </p>

                        <div className="grid grid-cols-2 gap-12 mb-12">
                            <div>
                                <Counter value={50} suffix="+" />
                                <div className="text-slate-500 font-medium uppercase tracking-wider text-sm border-t border-slate-800 pt-4 mt-2">
                                    {t.global.stats.projects}
                                </div>
                            </div>
                            <div>
                                <Counter value={12} />
                                <div className="text-slate-500 font-medium uppercase tracking-wider text-sm border-t border-slate-800 pt-4 mt-2">
                                    {t.global.stats.partners}
                                </div>
                            </div>
                            <div className="col-span-2">
                                <Counter value={100} prefix="$" suffix="M+" />
                                <div className="text-slate-500 font-medium uppercase tracking-wider text-sm border-t border-slate-800 pt-4 mt-2">
                                    {t.global.stats.investment}
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

                    {/* Connected Globe Visual */}
                    <div className="relative h-[600px] flex items-center justify-center">
                        <div className="absolute inset-0 flex items-center justify-center">
                            {isMobile ? (
                                /* Mobile Fallback - GPU optimized */
                                <div
                                    className="w-[300px] h-[300px] rounded-full"
                                    style={{
                                        background: 'radial-gradient(circle at center, rgba(220, 38, 38, 0.15) 0%, transparent 70%)'
                                    }}
                                />
                            ) : (
                                <Globe3DErrorBoundary>
                                    <Globe3D />
                                </Globe3DErrorBoundary>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
