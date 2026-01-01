"use client";

import { useEffect, useState, useContext } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { RevealContext } from "@/context/RevealContext";

import { ShinyButton } from "@/components/ui/ShinyButton";
import HeroBackground from "@/components/HeroBackground";

// No longer needed - using automatic timed reveal

export default function Hero() {
    const { t } = useLanguage();
    const ctx = useContext(RevealContext);
    if (!ctx) throw new Error('RevealContext not found');

    const { isRevealed } = ctx;
    const prefersReducedMotion = useReducedMotion();

    const [animationComplete, setAnimationComplete] = useState(false);



    // Handle animation complete
    useEffect(() => {
        if (animationComplete && isRevealed) {
            // Analytics: reveal completed
            if (typeof window !== 'undefined' && (window as any).gtag) {
                (window as any).gtag('event', 'reveal_completed', {
                    event_category: 'engagement',
                    event_label: 'hero_reveal',
                    value: Math.round(performance.now())
                });
            }
        }
    }, [animationComplete, isRevealed]);

    const handleScrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    // Ultra-smooth premium timing
    const titleTransition = (prefersReducedMotion
        ? { duration: 0 }
        : { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }) as any; // Slow, elegant fade

    const contentTransition = (prefersReducedMotion
        ? { duration: 0 }
        : { duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }) as any; // Smooth appear with delay

    const showTitleCard = !isRevealed;
    const showContent = isRevealed;

    return (
        <section className="relative min-h-screen min-h-[100dvh] flex items-center justify-center overflow-hidden pt-20">
            {/* Background Elements (always visible) */}
            <HeroBackground />

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

            {/* CENTERED TITLE CARD (Fade in from dark, then fade out) */}
            <motion.h1
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{
                    opacity: showTitleCard ? 1 : 0,
                    scale: showTitleCard ? 1 : 1.02
                }}
                transition={titleTransition}
                className="title-card absolute inset-0 flex items-center justify-center text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-bold text-white z-50 pointer-events-none px-6 sm:px-8"
                style={{
                    letterSpacing: '-0.02em',
                    willChange: showTitleCard ? 'opacity, transform' : 'auto'
                }}
            >
                BizCombinator
            </motion.h1>

            {/* HERO CONTENT (Fade in smoothly from dark) */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{
                    opacity: showContent ? 1 : 0,
                    y: showContent ? 0 : 20
                }}
                transition={contentTransition}
                onAnimationComplete={() => {
                    if (isRevealed) {
                        setAnimationComplete(true);
                    }
                }}
                className="hero-content container mx-auto px-6 relative z-10 text-center"
                style={{
                    willChange: showContent ? 'opacity, transform' : 'auto'
                }}
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
