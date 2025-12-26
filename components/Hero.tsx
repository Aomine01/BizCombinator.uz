"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useReveal } from "@/context/RevealContext";
import { unlockScroll } from "@/utils/scrollLock";

import { ShinyButton } from "@/components/ui/ShinyButton";
import HeroBackground from "@/components/HeroBackground";

const SCROLL_THRESHOLD = 8; // Avoids iOS address bar & trackpad micro-scroll

export default function Hero() {
    const { t } = useLanguage();
    const { initRevealIntent, isRevealed, scrollY } = useReveal();
    const prefersReducedMotion = useReducedMotion();

    const [atTop, setAtTop] = useState(true);
    const [animationUnlocked, setAnimationUnlocked] = useState(false);

    // Hysteresis for "atTop" detection (prevents flicker on scroll bounce)
    useEffect(() => {
        if (scrollY < 40 && !atTop) {
            setAtTop(true);
        }
        if (scrollY > 70 && atTop) {
            setAtTop(false);
        }
    }, [scrollY, atTop]);

    // Intent detection: wheel, touch, keyboard, scroll
    useEffect(() => {
        if (isRevealed || prefersReducedMotion) return;

        const handleIntent = (e: Event) => {
            // Keyboard: only specific keys trigger reveal
            if (e instanceof KeyboardEvent) {
                const key = e.key;
                if (!['ArrowDown', 'PageDown', ' '].includes(key)) return;
            }

            // Scroll: must exceed threshold
            if (e.type === 'scroll' && window.scrollY <= SCROLL_THRESHOLD) {
                return;
            }

            // Trigger centralized reveal
            initRevealIntent();
        };

        // Attach minimal listeners
        window.addEventListener('wheel', handleIntent, { passive: true });
        window.addEventListener('touchstart', handleIntent, { passive: true });
        window.addEventListener('keydown', handleIntent);
        window.addEventListener('scroll', handleIntent, { passive: true });

        return () => {
            window.removeEventListener('wheel', handleIntent);
            window.removeEventListener('touchstart', handleIntent);
            window.removeEventListener('keydown', handleIntent);
            window.removeEventListener('scroll', handleIntent);
        };
    }, [isRevealed, prefersReducedMotion, initRevealIntent]);

    // Handle animation completion - unlock scroll and manage focus
    const handleAnimationComplete = () => {
        if (isRevealed && !animationUnlocked) {
            setAnimationUnlocked(true);

            // Debug log
            console.log('[Hero] Animation complete - unlocking scroll');

            // Unlock scroll
            unlockScroll();

            // Focus management for keyboard users
            requestAnimationFrame(() => {
                const firstNav = document.querySelector('nav a, nav button') as HTMLElement;
                if (firstNav) {
                    firstNav.focus({ preventScroll: true });
                }
            });

            // Analytics: reveal completed
            if (typeof window !== 'undefined' && (window as any).gtag) {
                (window as any).gtag('event', 'reveal_completed', {
                    event_category: 'engagement',
                    event_label: 'hero_reveal',
                    value: Math.round(performance.now())
                });
            }
        }
    };

    const handleScrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    // Luxury-grade timing and easing
    const transition = (prefersReducedMotion
        ? { duration: 0 }
        : { duration: 0.55, ease: [0.16, 1, 0.3, 1] }) as any; // 550ms, softer easing

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
                onAnimationComplete={handleAnimationComplete}
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
