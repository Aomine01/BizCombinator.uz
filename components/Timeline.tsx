"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, FileText, Users, Award, Rocket } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const icons = [FileText, Users, Award, Rocket, CheckCircle2];

function TimelineStep({ step, index, icon }: { step: { id: number; title: string; desc: string }; index: number; icon: any }) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { margin: "-50% 0px -50% 0px", once: true });

    // Odd indices (1, 3) = right side, Even indices (0, 2, 4) = left side
    const isRight = index % 2 === 1;
    const Icon = icon;

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
                <div className={`w-12 h-12 rounded-full border-4 z-20 transition-all duration-500 bg-slate-950 flex items-center justify-center ${isInView ? "border-primary scale-125 shadow-[0_0_20px_rgba(255,34,0,0.5)]" : "border-slate-800"}`}>
                    <Icon className={`w-6 h-6 transition-colors duration-500 ${isInView ? "text-primary" : "text-slate-600"}`} />
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

    const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <section id="the-journey" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-24">
                    <span className="mobile-hero-badge text-primary font-medium tracking-wider text-sm uppercase mb-3 block">
                        We select only the most motivated entrepreneurs
                    </span>
                    <h2 className="mobile-section-title text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
                        {t.newTimeline.title}
                    </h2>
                    <p className="mobile-section-subtitle text-base md:text-lg text-slate-400 max-w-2xl mx-auto">
                        {t.newTimeline.subtitle}
                    </p>
                </div>

                <div ref={containerRef} className="relative max-w-5xl mx-auto">
                    {/* Central Line Background */}
                    <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-800 -translate-x-1/2 md:translate-x-0" />

                    {/* Progress Line */}
                    <motion.div
                        style={{ scaleY: lineScaleY }}
                        className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-0.5 bg-primary -translate-x-1/2 md:translate-x-0 z-10 origin-top [will-change:transform] [transform:translateZ(0)] shadow-none md:shadow-[0_0_15px_rgba(255,34,0,0.6)]"
                    />

                    <div className="space-y-12 max-w-4xl mx-auto">
                        {t.newTimeline.steps.map((step, index) => {
                            const Icon = icons[index];
                            return (
                                <TimelineStep key={step.id} step={step} index={index} icon={Icon} />
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
