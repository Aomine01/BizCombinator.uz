"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function GapSection() {
    const { t } = useLanguage();

    return (
        <section id="benefits" className="py-24 relative overflow-hidden">
            {/* Decorative Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16 max-w-3xl mx-auto"
                >
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
                        {t.gap.title}
                    </h2>
                    <p className="text-xl text-gray-400">
                        {t.gap.subtitle}
                    </p>
                </motion.div>

                {/* Benefits List - Single Column */}
                <div className="max-w-4xl mx-auto space-y-8">
                    {/* Core Systems (1-5) */}
                    {t.gap.benefits.map((benefit, index) => (
                        <motion.div
                            key={benefit.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{
                                delay: index * 0.1,
                                duration: 0.5,
                                ease: "easeOut"
                            }}
                            className="glass-card p-6 rounded-xl border-l-2 border-primary/20 hover:border-primary/40 transition-all duration-300"
                        >
                            <div className="flex items-start gap-4">
                                {/* Number Badge */}
                                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-primary/10 rounded-lg">
                                    <span className="text-lg font-bold text-primary">
                                        {benefit.id}
                                    </span>
                                </div>

                                <div className="flex-1 pt-1">
                                    <h3 className="text-lg font-semibold text-white mb-2">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-gray-400 text-base leading-relaxed">
                                        {benefit.desc}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}

                    {/* BONUS Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{
                            delay: 0.7,
                            duration: 0.5
                        }}
                        className="mt-12 pt-8 border-t border-gray-800"
                    >
                        <h3 className="text-lg font-semibold text-gray-300 uppercase tracking-wide mb-6">
                            BONUS
                        </h3>
                        <div className="space-y-6">
                            {t.gap.bonuses.map((bonus, index) => (
                                <motion.div
                                    key={bonus.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        delay: 0.8 + (index * 0.1),
                                        duration: 0.4
                                    }}
                                    className="flex items-start gap-4"
                                >
                                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="text-base font-medium text-white mb-1">
                                            {bonus.title}
                                        </h4>
                                        <p className="text-gray-400 text-sm">
                                            {bonus.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
