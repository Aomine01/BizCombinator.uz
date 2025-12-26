"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";

function TimelineStep({ step, index }: { step: { title: string; desc: string }; index: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { margin: "-50% 0px -50% 0px", once: true });

    // Odd indices (1, 3, 5) = right side, Even indices (0, 2, 4) = left side
    const isRight = index % 2 === 1;

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative grid grid-cols-[40px_1fr] md:grid-cols-[1fr_40px_1fr] gap-x-6 md:gap-x-10 gap-y-4 items-start"
        >
            {/* Desktop: Left content (for even indices) */}
            <div className={`hidden md:block ${isRight ? 'md:text-right' : ''}`}>
                {!isRight && (
                    <>
                        <h3 className={`mobile-card-title text-xl md:text-2xl font-bold mb-4 font-heading transition-colors duration-500 ${isInView ? "text-primary" : "text-white"}`}>
                            {step.title}
                        </h3>
                        <p className={`mobile-body-text leading-relaxed text-base md:text-lg transition-colors duration-500 ${isInView ? "text-slate-300" : "text-slate-500"}`}>
                            {step.desc}
                        </p>
                    </>
                )}
                {isRight && (
                    <span className={`text-8xl font-bold font-heading select-none transition-all duration-500 ${isInView ? "text-primary/20 scale-110" : "text-slate-900 opacity-50"}`}>
                        0{index + 1}
                    </span>
                )}
            </div>

            {/* Center column dot */}
            <div className="relative flex items-start justify-center pt-2 md:pt-6">
                <div className={`w-4 h-4 rounded-full border-4 z-20 transition-all duration-500 bg-slate-950 ${isInView ? "border-primary scale-125 shadow-[0_0_20px_rgba(255,102,0,0.5)]" : "border-slate-800"}`}>
                    <div className={`absolute inset-0 bg-primary rounded-full transition-opacity duration-500 ${isInView ? "opacity-100" : "opacity-0"}`} />
                </div>
            </div>

            {/* Desktop: Right content (for odd indices) / Mobile: Always right */}
            <div className={isRight ? '' : 'md:text-left'}>
                {/* Mobile: Always show content here */}
                <div className="md:hidden">
                    <h3 className={`text-2xl font-bold mb-4 font-heading transition-colors duration-500 ${isInView ? "text-primary" : "text-white"}`}>
                        {step.title}
                    </h3>
                    <p className={`leading-relaxed text-lg transition-colors duration-500 ${isInView ? "text-slate-300" : "text-slate-500"}`}>
                        {step.desc}
                    </p>
                    {/* Mobile number watermark */}
                    <div className="mt-6">
                        <span className={`text-6xl font-bold font-heading select-none transition-all duration-500 ${isInView ? "text-primary/20" : "text-slate-900 opacity-50"}`}>
                            0{index + 1}
                        </span>
                    </div>
                </div>

                {/* Desktop: Content for odd indices, Number for even indices */}
                <div className="hidden md:block">
                    {isRight ? (
                        <>
                            <h3 className={`text-2xl md:text-3xl font-bold mb-4 font-heading transition-colors duration-500 ${isInView ? "text-primary" : "text-white"}`}>
                                {step.title}
                            </h3>
                            <p className={`leading-relaxed text-lg transition-colors duration-500 ${isInView ? "text-slate-300" : "text-slate-500"}`}>
                                {step.desc}
                            </p>
                        </>
                    ) : (
                        <span className={`text-8xl font-bold font-heading select-none transition-all duration-500 ${isInView ? "text-primary/20 scale-110" : "text-slate-900 opacity-50"}`}>
                            0{index + 1}
                        </span>
                    )}
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
                    <span className="mobile-hero-badge text-primary font-medium tracking-wider text-sm uppercase mb-3 block">{t.timeline.subtitle}</span>
                    <h2 className="mobile-section-title text-4xl md:text-6xl font-heading font-bold text-white mb-6">{t.timeline.title}</h2>
                </div>

                <div ref={containerRef} className="relative max-w-5xl mx-auto">
                    {/* Central Line Background */}
                    <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-800 -translate-x-1/2 md:translate-x-0" />

                    {/* Progress Line */}
                    <motion.div
                        style={{ scaleY: lineScaleY }}
                        className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-0.5 bg-primary -translate-x-1/2 md:translate-x-0 z-10 origin-top [will-change:transform] [transform:translateZ(0)] shadow-none md:shadow-[0_0_15px_rgba(255,102,0,0.6)]"
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
