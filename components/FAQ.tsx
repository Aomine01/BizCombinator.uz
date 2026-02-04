"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function FAQ() {
    const { t } = useLanguage();
    const [openId, setOpenId] = useState<number | null>(null);

    return (
        <section className="py-20 px-6 relative overflow-hidden" id="faq">
            {/* Background gradient */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-20" />

            <div className="container mx-auto max-w-3xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="mobile-section-title font-heading font-bold text-white mb-4 text-3xl md:text-4xl lg:text-5xl">
                        {t.faq.title}
                    </h2>
                    <p className="mobile-section-subtitle text-slate-400 text-base md:text-lg">
                        {t.faq.subtitle}
                    </p>
                </motion.div>

                <div className="space-y-4">
                    {t.faq.items.map((faq, index) => (
                        <motion.div
                            key={faq.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <button
                                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                                className="w-full glass-card p-6 rounded-2xl text-left transition-all duration-300 hover:border-primary/40"
                            >
                                <div className="flex items-center justify-between gap-4">
                                    <h3 className="font-semibold text-white text-lg">
                                        {faq.question}
                                    </h3>
                                    <motion.div
                                        animate={{ rotate: openId === faq.id ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
                                    </motion.div>
                                </div>

                                <AnimatePresence>
                                    {openId === faq.id && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <p className="text-slate-400 mt-4 leading-relaxed">
                                                {faq.answer}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
