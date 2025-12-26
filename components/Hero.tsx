"use client";

import { useEffect, useState, useContext } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { RevealContext } from "@/context/RevealContext";

import { ShinyButton } from "@/components/ui/ShinyButton";
import HeroBackground from "@/components/HeroBackground";

const SCROLL_THRESHOLD = 5;
const HYSTERESIS_TOP = { enter: 40, leave: 70 };

export default function Hero() {
    const { t } = useLanguage();
    const ctx = useContext(RevealContext);
    if (!ctx) throw new Error('RevealContext not found');

    const { isRevealed, scrollY, initRevealIntent } = ctx;
    const prefersReducedMotion = useReducedMotion();

    const [atTop, setAtTop] = useState(true);
    const [animationComplete, setAnimationComplete] = useState(false);

    // HYSTERESIS for atTop (prevents flicker on scroll bounce)
    useEffect(() => {
        if (scrollY < HYSTERESIS_TOP.enter && !atTop) {
            setAtTop(true);
        }
        if (scrollY > HYSTERESIS_TOP.leave && atTop) {
            setAtTop(false);
        }
    }, [scrollY, atTop]);

    // SIMPLIFIED SCROLL DETECTION (no preventDefault - more reliable)
    useEffect(() => {
        if (isRevealed || prefersReducedMotion) return;

        const handleScroll = () => {
            if (window.scrollY > SCROLL_THRESHOLD) {
                // Trigger reveal immediately
                initRevealIntent();
            }
        };

        // Use scroll event with passive listener
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isRevealed, initRevealIntent, prefersReducedMotion]);



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

    // Smooth luxury timing
    const transition = (prefersReducedMotion
        ? { duration: 0 }
        : { duration: 0.55, ease: [0.16, 1, 0.3, 1] }) as any;

    const showTitleCard = atTop;
    const showContent = isRevealed && !atTop;

    return (
        <section className="relative min-h-screen min-h-[100dvh] flex items-center justify-center overflow-hidden pt-20">
            {/* Background Elements (always visible) */}
            <HeroBackground />

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

            {/* CENTERED TITLE CARD (Initial State) */}
            <motion.h1
                initial={{ opacity: 1 }}
                animate={{ opacity: showTitleCard ? 1 : 0 }}
                transition={transition}
                className="title-card absolute inset-0 flex items-center justify-center text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white z-50 pointer-events-none px-4"
                style={{
                    letterSpacing: '-0.02em',
                    willChange: showTitleCard ? 'opacity' : 'auto'
                }}
            >
                BizCombinator
            </motion.h1>

            {/* HERO CONTENT (Revealed State) */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: showContent ? 1 : 0 }}
                transition={transition}
                onAnimationComplete={() => {
                    if (isRevealed && !atTop) {
                        setAnimationComplete(true);
                    }
                }}
                className="hero-content container mx-auto px-4 relative z-10 text-center"
                style={{
                    willChange: showContent ? 'opacity' : 'auto'
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
