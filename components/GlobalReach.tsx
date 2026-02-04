"use client";

import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function GlobalReach() {
    const { t } = useLanguage();
    return (
        <section id="results" className="py-24 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[128px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="mobile-section-title text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
                            {t.results.title}
                        </h2>
                        <p className="mobile-section-subtitle text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">
                            {t.results.subtitle}
                        </p>
                    </motion.div>

                    {/* Deliverables List */}
                    <div className="space-y-6 mb-12">
                        {t.results.deliverables.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="glass-card p-6 rounded-xl border-primary/10"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                        <CheckCircle2 className="w-6 h-6 text-primary" />
                                    </div>

                                    <div className="flex-1">
                                        <h3 className="mobile-card-title text-lg md:text-xl font-bold text-white mb-2">
                                            {item.title}
                                        </h3>
                                        <p className="mobile-body-text text-sm md:text-base text-slate-400">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Target Growth Metric */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="glass-card p-8 rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent"
                    >
                        <div className="flex items-center justify-center gap-4 flex-wrap">
                            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                                <TrendingUp className="w-8 h-8 text-primary" />
                            </div>

                            <div className="text-center sm:text-left">
                                <div className="text-primary text-4xl md:text-5xl font-bold mb-2">{t.results.targetMetric}</div>
                                <div className="text-slate-300 text-base md:text-lg">{t.results.targetLabel}</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
