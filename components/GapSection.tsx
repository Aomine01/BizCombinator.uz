"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function GapSection() {
    const { t } = useLanguage();

    return (
        <section id="the-gap" className="py-24 relative overflow-hidden">
            {/* Decorative Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16 max-w-3xl mx-auto"
                >
                    <h2 className="mobile-section-title text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
                        {t.painPoints.title}
                    </h2>
                    <p className="mobile-section-subtitle text-base md:text-lg text-slate-400">
                        {t.painPoints.subtitle}
                    </p>
                </motion.div>

                {/* Pain Points Grid */}
                <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
                    {t.painPoints.points.map((point, index) => (
                        <motion.div
                            key={point.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass-card p-6 rounded-2xl border-l-4 border-primary/50 hover:border-primary transition-all duration-300 group"
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                                    <X className="w-5 h-5 text-primary" />
                                </div>

                                <div className="flex-1">
                                    <h3 className="mobile-card-title text-lg font-bold text-white mb-2">
                                        {point.title}
                                    </h3>

                                    <p className="mobile-card-text text-sm text-slate-400 leading-relaxed">
                                        {point.desc}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Text */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="text-center max-w-4xl mx-auto"
                >
                    <p className="text-lg md:text-xl text-white font-medium">
                        {t.painPoints.cta.part1} <span className="text-primary">{t.painPoints.cta.part2}</span>
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
