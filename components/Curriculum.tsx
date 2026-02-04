"use client";

import { motion } from "framer-motion";
import { BookOpen, TrendingUp, Target, Users, Settings } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const icons = [BookOpen, TrendingUp, Target, Users, Settings];

export default function Curriculum() {
    const { t } = useLanguage();
    return (
        <section className="py-20 px-6 relative overflow-hidden" id="curriculum">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-50" />

            <div className="container mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="mobile-section-title font-heading font-bold text-white mb-4 text-3xl md:text-4xl lg:text-5xl">
                        {t.curriculum.title}
                    </h2>
                    <p className="mobile-section-subtitle text-slate-400 max-w-2xl mx-auto text-base md:text-lg">
                        {t.curriculum.subtitle}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {t.curriculum.modules.map((module, index) => {
                        const Icon = icons[index];
                        return (
                            <motion.div
                                key={module.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`glass-card p-6 rounded-2xl ${module.id === 5 ? "md:col-span-2 lg:col-span-1" : ""
                                    }`}
                            >
                                {/* Module Number Badge */}
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-primary font-bold text-4xl font-heading">
                                        {module.number}
                                    </span>
                                    <span className="text-xs text-slate-500 bg-white/5 px-3 py-1 rounded-full">
                                        {module.duration}
                                    </span>
                                </div>

                                {/* Icon */}
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                                    <Icon className="w-6 h-6 text-primary" />
                                </div>

                                {/* Title */}
                                <h3 className="mobile-card-title font-bold text-white mb-3 text-lg">
                                    {module.title}
                                </h3>

                                {/* What You'll Learn */}
                                <div className="mb-4">
                                    <p className="text-xs text-primary font-semibold mb-2">
                                        WHAT YOU'LL LEARN
                                    </p>
                                    <p className="mobile-card-text text-slate-400 text-sm leading-relaxed">
                                        {module.learn}
                                    </p>
                                </div>

                                {/* The Result */}
                                <div className="pt-4 border-t border-white/10">
                                    <p className="text-xs text-primary font-semibold mb-2">
                                        THE RESULT
                                    </p>
                                    <p className="mobile-card-text text-white text-sm font-medium">
                                        {module.result}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
