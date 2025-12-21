"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";

function TimelineStep({ step, index }: { step: { title: string; desc: string }; index: number }) {
    const ref = useRef<HTMLDivElement>(null);
    // Trigger when the element is active (roughly when it crosses into bottom part of view)
    const isInView = useInView(ref, { margin: "-50% 0px -50% 0px", once: true });

    // We want it to trigger exactly when the line hits it. 
    // The line grows from top (0%) to bottom (100%) based on container scroll.
    // However, simplest visual match is 'whileInView' with an offset or just tracking if it's been passed.
    // 'once: true' ensures it stays lit after the line passes.

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative grid grid-cols-[40px_1fr] md:grid-cols-[1fr_40px_1fr] gap-x-10 gap-y-4 items-start"
        >
            {/* Left column (desktop number) */}
            <div className="hidden md:block">
                <span className={`text-8xl font-bold font-heading select-none transition-all duration-500 ${isInView ? "text-primary/20 scale-110" : "text-slate-900 opacity-50"}`}>
                    0{index + 1}
                </span>
            </div>

            {/* Center column dot */}
            <div className="relative flex items-start justify-center pt-2 md:pt-6">
                <div className={`w-4 h-4 rounded-full border-4 z-20 transition-all duration-500 bg-slate-950 ${isInView ? "border-primary scale-125 shadow-[0_0_20px_rgba(255,102,0,0.5)]" : "border-slate-800"}`}>
                    <div className={`absolute inset-0 bg-primary rounded-full transition-opacity duration-500 ${isInView ? "opacity-100" : "opacity-0"}`} />
                </div>
            </div>

            {/* Right column (content) */}
            <div>
                <h3 className={`text-2xl md:text-3xl font-bold mb-4 font-heading transition-colors duration-500 ${isInView ? "text-primary" : "text-white"}`}>
                    {step.title}
                </h3>
                <p className={`leading-relaxed text-lg transition-colors duration-500 ${isInView ? "text-slate-300" : "text-slate-500"}`}>
                    {step.desc}
                </p>

                {/* Mobile number watermark */}
                <div className="md:hidden mt-6">
                    <span className={`text-6xl font-bold font-heading select-none transition-all duration-500 ${isInView ? "text-primary/20" : "text-slate-900 opacity-50"}`}>
                        0{index + 1}
                    </span>
                </div>
            </div>

        </motion.div>
    );
}

export default function Timeline() {
    const { t } = useLanguage();
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Transform-based animation to avoid layout thrash (no animated height).
    const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <section id="the-journey" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-24">
                    <span className="text-primary font-medium tracking-wider text-sm uppercase mb-3 block">{t.timeline.subtitle}</span>
                    <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">{t.timeline.title}</h2>
                </div>

                <div ref={containerRef} className="relative max-w-5xl mx-auto">
                    {/* Central Line Background */}
                    <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-800 -translate-x-1/2 md:translate-x-0" />

                    {/* Progress Line */}
                    <motion.div
                        style={{ scaleY: lineScaleY }}
                        className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-0.5 bg-primary -translate-x-1/2 md:translate-x-0 z-10 origin-top shadow-[0_0_15px_rgba(255,102,0,0.6)]"
                    />

                    <div className="space-y-24">
                        {t.timeline.steps.map((step, index) => (
                            <TimelineStep key={index} step={step} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
