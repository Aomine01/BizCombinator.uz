"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

import { ShinyButton } from "@/components/ui/ShinyButton";
import HeroBackground from "@/components/HeroBackground";

export default function Hero() {
    const { t } = useLanguage();

    const handleScrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="relative min-h-screen min-h-[100dvh] flex items-center justify-center overflow-hidden pt-20">
            {/* Background Elements */}
            <HeroBackground />

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="inline-block px-4 py-2 rounded-full glass mb-8"
                >
                    <span className="mobile-hero-badge text-primary font-medium tracking-wide text-sm">
                        {t.hero.badge}
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="mobile-hero-title font-heading font-bold text-white mb-6 leading-[1.1] text-4xl md:text-5xl lg:text-6xl"
                >
                    {t.hero.titleLine1} <br />
                    <span className="text-primary">{t.hero.titleLine2}</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mobile-hero-subtitle text-base md:text-lg text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed"
                >
                    {t.hero.subtitle}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <ShinyButton onClick={() => handleScrollTo("apply-form")} className="bg-primary hover:bg-orange-600">
                        {t.hero.apply} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </ShinyButton>
                    <ShinyButton
                        onClick={() => handleScrollTo("the-gap")}
                        className="bg-white/10 hover:bg-white/20 border border-white/10 backdrop-blur-md"
                    >
                        <Play className="w-4 h-4 fill-current" /> {t.hero.learnMore}
                    </ShinyButton>
                </motion.div>
            </div>
        </section>
    );
}
