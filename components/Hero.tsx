"use client";

import { useEffect, useState, useContext } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { RevealContext } from "@/context/RevealContext";
import { unlockScroll } from "@/utils/scrollLock";

import { ShinyButton } from "@/components/ui/ShinyButton";
import HeroBackground from "@/components/HeroBackground";

const SCROLL_THRESHOLD = 8;
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

    // INTENT DETECTION: wheel, touch, keyboard (one-time trigger with preventDefault)
    useEffect(() => {
        if (isRevealed || prefersReducedMotion) return;

        let touchStartY = 0;
        const hasTriggered = { value: false };

        // WHEEL handler - non-passive to call preventDefault
        const onWheel = (e: WheelEvent) => {
            if (hasTriggered.value) return;
            if (e.deltaY <= 0) return; // only downward intent

            // CRITICAL: prevent browser from moving viewport
            e.preventDefault();
            hasTriggered.value = true;
            initRevealIntent();
        };

        // TOUCH handlers - record start position and detect downward swipe
        const onTouchStart = (e: TouchEvent) => {
            touchStartY = e.touches?.[0]?.clientY ?? 0;
        };

        const onTouchMove = (e: TouchEvent) => {
            if (hasTriggered.value) return;
            const currentY = e.touches?.[0]?.clientY ?? 0;
            const dy = touchStartY - currentY; // positive if swiping down

            if (dy > SCROLL_THRESHOLD) {
                // CRITICAL: prevent browser from moving viewport
                e.preventDefault();
                hasTriggered.value = true;
                initRevealIntent();
            }
        };

        // KEYDOWN handler
        const onKeyDown = (e: KeyboardEvent) => {
            if (hasTriggered.value) return;
            if (['ArrowDown', 'PageDown', ' '].includes(e.key)) {
                e.preventDefault();
                hasTriggered.value = true;
                initRevealIntent();
            }
        };

        // Attach listeners (wheel and touchmove must be non-passive for preventDefault)
        window.addEventListener('wheel', onWheel, { passive: false });
        window.addEventListener('touchstart', onTouchStart, { passive: true });
        window.addEventListener('touchmove', onTouchMove, { passive: false });
        window.addEventListener('keydown', onKeyDown);

        return () => {
            window.removeEventListener('wheel', onWheel);
            window.removeEventListener('touchstart', onTouchStart);
            window.removeEventListener('touchmove', onTouchMove);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isRevealed, initRevealIntent, prefersReducedMotion]);

    // Unlock when reveal animation finishes + focus management
    useEffect(() => {
        if (!isRevealed) return;

        // For reduced motion, unlock immediately
        if (prefersReducedMotion) {
            unlockScroll();
            return;
        }

        // SAFETY: Unlock after max 1 second even if animation doesn't complete
        const safetyTimer = setTimeout(() => {
            console.warn('[Hero] Safety unlock triggered - ensuring scroll is unlocked');
            unlockScroll();

            // Focus management
            requestAnimationFrame(() => {
                const firstNav = document.querySelector('nav a, nav button') as HTMLElement | null;
                firstNav?.focus({ preventScroll: true });
            });
        }, 1000);

        return () => clearTimeout(safetyTimer);
    }, [isRevealed, prefersReducedMotion]);

    // Handle animation complete
    useEffect(() => {
        if (animationComplete && isRevealed) {
            // Unlock scroll
            unlockScroll();

            // Focus management for keyboard users
            requestAnimationFrame(() => {
                const firstNav = document.querySelector('nav a, nav button') as HTMLElement | null;
                firstNav?.focus({ preventScroll: true });
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
    }, [animationComplete, isRevealed]);

    const handleScrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    // Luxury-grade timing (550ms, softer easing)
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
                    if (isRevealed) setAnimationComplete(true);
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
