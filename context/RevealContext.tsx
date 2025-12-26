'use client';

import { createContext, useContext, useState, useCallback, useEffect, useRef, ReactNode } from 'react';
import { useReducedMotion } from 'framer-motion';

interface RevealContextType {
    isRevealed: boolean;
    setIsRevealed: (revealed: boolean) => void;
    scrollY: number;
    initRevealIntent: () => void;
}

export const RevealContext = createContext<RevealContextType>({
    isRevealed: false,
    setIsRevealed: () => { },
    scrollY: 0,
    initRevealIntent: () => { }
});

export const useReveal = () => useContext(RevealContext);

export function RevealProvider({ children }: { children: ReactNode }) {
    const [isRevealed, setIsRevealed] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const hasTriggeredRef = useRef(false);
    const prefersReducedMotion = useReducedMotion();

    // Single scroll listener for position tracking
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Reset on mount & control browser scroll restoration
    useEffect(() => {
        // Prevent browser from auto-restoring scroll on back navigation
        const previousScrollRestoration = 'scrollRestoration' in history
            ? history.scrollRestoration
            : undefined;

        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
        }

        // Reset reveal state
        setIsRevealed(false);
        hasTriggeredRef.current = false;
        window.scrollTo(0, 0);

        // Restore previous setting on unmount
        return () => {
            if ('scrollRestoration' in history && previousScrollRestoration !== undefined) {
                history.scrollRestoration = previousScrollRestoration;
            }
        };
    }, []);

    // Instant reveal for reduced motion users
    useEffect(() => {
        if (prefersReducedMotion) {
            setIsRevealed(true);
        }
    }, [prefersReducedMotion]);

    // CENTRALIZED REVEAL INTENT - single entry point for all triggers
    const initRevealIntent = useCallback(() => {
        if (isRevealed || hasTriggeredRef.current || prefersReducedMotion) {
            return;
        }

        // Mark as triggered (single execution guard)
        hasTriggeredRef.current = true;

        // Analytics: reveal started
        if (typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('event', 'reveal_started', {
                event_category: 'engagement',
                event_label: 'hero_reveal'
            });
        }

        // Debug log
        console.log('[RevealIntent] Triggered - natural scroll');

        // Set revealed state (allow natural scrolling during reveal)
        requestAnimationFrame(() => {
            setIsRevealed(true);
        });
    }, [isRevealed, prefersReducedMotion]);

    return (
        <RevealContext.Provider value={{
            isRevealed,
            setIsRevealed,
            scrollY,
            initRevealIntent
        }}>
            {children}
        </RevealContext.Provider>
    );
}
