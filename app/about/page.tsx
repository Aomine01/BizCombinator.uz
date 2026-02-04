"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Target, Eye, Lightbulb, Users, TrendingUp, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";

const philosophyIcons = [Lightbulb, Target, Users, ShieldCheck];

export default function AboutPage() {
    const { t } = useLanguage();
    return (
        <main className="min-h-screen bg-black text-white">
            <Navbar />

            {/* HERO SECTION */}
            <section className="pt-32 pb-20 px-6 relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[128px] translate-x-1/2 -translate-y-1/2" />

                <div className="container mx-auto max-w-4xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight">
                            {t.aboutPage.hero.title}{" "}
                            <span className="text-primary">{t.aboutPage.hero.highlight}</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-400 leading-relaxed">
                            {t.aboutPage.hero.description}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* THE STORY */}
            <section className="py-20 px-6 relative">
                <div className="container mx-auto max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 text-center">
                            {t.aboutPage.story.title}
                        </h2>

                        <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                            {t.aboutPage.story.paragraphs.map((paragraph, index) => (
                                <p key={index} className={paragraph.highlight ? "text-2xl font-semibold text-white" : ""}>
                                    {paragraph.text}
                                </p>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* MISSION & VISION */}
            <section className="py-20 px-6 relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[128px] -translate-x-1/2 translate-y-1/2" />

                <div className="container mx-auto max-w-5xl relative z-10">
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Mission */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="glass-card p-8 rounded-2xl"
                        >
                            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 border border-primary/20">
                                <Target className="w-7 h-7 text-primary" />
                            </div>

                            <h3 className="text-2xl font-heading font-bold mb-4 text-white">
                                {t.aboutPage.mission.title}
                            </h3>

                            <p className="text-slate-300 leading-relaxed">
                                {t.aboutPage.mission.description}
                            </p>
                        </motion.div>

                        {/* Vision */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="glass-card p-8 rounded-2xl"
                        >
                            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 border border-primary/20">
                                <Eye className="w-7 h-7 text-primary" />
                            </div>

                            <h3 className="text-2xl font-heading font-bold mb-4 text-white">
                                {t.aboutPage.vision.title}
                            </h3>

                            <p className="text-slate-300 leading-relaxed">
                                {t.aboutPage.vision.description}
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* OUR PHILOSOPHY */}
            <section className="py-20 px-6 relative">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                            {t.aboutPage.philosophy.title}
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {t.aboutPage.philosophy.points.map((point, index) => {
                            const Icon = philosophyIcons[index];

                            return (
                                <motion.div
                                    key={point.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="glass-card p-8 rounded-2xl hover:border-primary/30 transition-all duration-300"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 border border-primary/20">
                                            <Icon className="w-6 h-6 text-primary" />
                                        </div>

                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold text-white mb-3 font-heading">
                                                {point.title}
                                            </h3>
                                            <p className="text-slate-400 leading-relaxed">
                                                {point.desc}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* THE BIZCOMBINATOR STANDARD */}
            <section className="py-20 px-6 relative">
                <div className="container mx-auto max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                            {t.aboutPage.standards.title}
                        </h2>
                        <p className="text-xl text-slate-400">
                            {t.aboutPage.standards.subtitle}
                        </p>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 gap-6">
                        {t.aboutPage.standards.items.map((standard, index) => (
                            <motion.div
                                key={standard.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="glass-card p-6 rounded-xl hover:border-primary/30 transition-all duration-300"
                            >
                                <div className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-2">
                                            {standard.title}
                                        </h3>
                                        <p className="text-slate-400 text-sm leading-relaxed">
                                            {standard.desc}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="py-24 px-6 relative overflow-hidden">
                {/* Background glow */}
                <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[128px] -translate-x-1/2 -translate-y-1/2" />

                <div className="container mx-auto max-w-4xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                            {t.aboutPage.cta.title}
                        </h2>

                        <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed">
                            {t.aboutPage.cta.description}
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/#apply-form">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-4 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-all duration-300 flex items-center gap-2 group"
                                >
                                    {t.aboutPage.cta.primaryButton}
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </motion.button>
                            </Link>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 glass text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-300"
                            >
                                {t.aboutPage.cta.secondaryButton}
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
