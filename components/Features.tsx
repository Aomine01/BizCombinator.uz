"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, BookOpen, Users2, Target } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const icons = [MapPin, Calendar, BookOpen, Users2, Target];

export default function Features() {
    const { t } = useLanguage();

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section id="features" className="py-20 px-6 relative overflow-hidden">
            {/* Decorative Orb */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[128px] pointer-events-none" />

            <div className="container mx-auto max-w-6xl relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="mobile-section-title text-4xl md:text-5xl font-heading font-bold text-white mb-4">
                        {t.aboutProgram.title}
                    </h2>
                    <p className="mobile-section-subtitle text-base md:text-lg text-slate-400 max-w-2xl mx-auto">
                        {t.aboutProgram.subtitle}
                    </p>
                </motion.div>

                {/* Program Details Grid */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex flex-wrap justify-center gap-6 mb-12"
                >
                    {t.aboutProgram.details.map((detail, index) => {
                        const Icon = icons[index];
                        return (
                            <motion.div
                                key={detail.id}
                                variants={item}
                                className="glass-card p-6 rounded-2xl hover:border-primary/30 transition-all duration-300 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                            >
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 border border-primary/20">
                                    <Icon className="w-6 h-6 text-primary" />
                                </div>

                                <h3 className="mobile-card-title text-lg font-bold text-white mb-2">
                                    {detail.title}
                                </h3>

                                <p className="mobile-card-text text-slate-400 text-sm leading-relaxed">
                                    {detail.desc}
                                </p>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Footer Text */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-center max-w-4xl mx-auto"
                >
                    <p className="text-slate-300 text-base md:text-lg leading-relaxed">
                        {t.aboutProgram.footer}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
