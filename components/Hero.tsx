"use client";

import { useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useReveal } from "@/context/RevealContext";

import { ShinyButton } from "@/components/ui/ShinyButton";
import HeroBackground from "@/components/HeroBackground";

export default function Hero() {
    const { t } = useLanguage();
    const { isRevealed, setIsRevealed } = useReveal();
    const prefersReducedMotion = useReducedMotion();

    // Robust scroll detection (works on ALL devices)
    useEffect(() => {
        if (isRevealed) return;

        const onScroll = () => {
            if (window.scrollY > 0) {
                // Reset scroll immediately
                window.scrollTo(0, 0);
                // Trigger reveal
                setIsRevealed(true);
            }
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, [isRevealed, setIsRevealed]);

    // Temporary scroll lock during animation (400ms)
    useEffect(() => {
        if (!isRevealed) return;

        document.body.style.overflow = 'hidden';

        const timer = setTimeout(() => {
            document.body.style.overflow = '';
        }, 400);

        return () => {
            clearTimeout(timer);
            document.body.style.overflow = '';
        };
    }, [isRevealed]);

    const handleScrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const transition = prefersReducedMotion
        ? { duration: 0 }
        : { duration: 0.4 };

    return (
        <section className="relative min-h-screen min-h-[100dvh] flex items-center justify-center overflow-hidden pt-20">
            {/* Background Elements (always visible) */}
            <HeroBackground />

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

            {/* CENTERED TITLE (Initial State - Title Card) */}
            <motion.h1
                initial={{ opacity: 1 }}
                animate={{ opacity: isRevealed ? 0 : 1 }}
                transition={transition}
                className="absolute inset-0 flex items-center justify-center text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white z-50 pointer-events-none px-4"
                style={{ letterSpacing: '-0.02em' }}
            >
                BizCombinator
            </motion.h1>

            {/* HERO CONTENT (Revealed State) */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isRevealed ? 1 : 0 }}
                transition={transition}
                className="container mx-auto px-4 relative z-10 text-center"
            >
                <motion.h1
                    className="mobile-hero-title font-heading font-bold text-white mb-6 leading-[1.1] text-4xl md:text-5xl lg:text-6xl"
                >
                    {t.hero.titleLine1} <br />
                    <span className="text-primary">{t.hero.titleLine2}</span>
                </motion.h1>

                <motion.p
                    className="mobile-hero-subtitle text-base md:text-lg text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed"
                >
                    {t.hero.subtitle}
                </motion.p>

                <motion.div
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
            </motion.div>
        </section>
    );
}
