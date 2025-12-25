import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

/**
 * High-performance counter hook using requestAnimationFrame for 60 FPS animation
 * @param end - Target number to count up to
 * @param duration - Animation duration in milliseconds (default: 2000ms)
 * @param options - Configuration options
 * @returns ref to attach to the element that should trigger the animation
 */
export function useSmoothCountUp(
    end: number,
    duration: number = 2000,
    options: {
        prefix?: string;
        suffix?: string;
        decimals?: number;
        startOnView?: boolean;
    } = {}
) {
    const { prefix = '', suffix = '', decimals = 0, startOnView = true } = options;

    const elementRef = useRef<HTMLElement>(null);
    const numberRef = useRef<HTMLSpanElement>(null);
    const frameRef = useRef<number | undefined>(undefined);
    const startTimeRef = useRef<number | undefined>(undefined);
    const hasAnimatedRef = useRef<boolean>(false);

    // Use Intersection Observer via Framer Motion
    const isInView = useInView(elementRef, {
        once: true,
        margin: '-100px 0px'
    });

    useEffect(() => {
        // Don't start if we should wait for viewport and it's not in view
        if (startOnView && !isInView) return;

        // Only animate once
        if (hasAnimatedRef.current) return;
        hasAnimatedRef.current = true;

        const numberElement = numberRef.current;
        if (!numberElement) return;

        /**
         * Ease-out exponential easing function
         * Starts fast, ends slow - feels natural
         */
        const easeOutExpo = (t: number): number => {
            return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
        };

        /**
         * Animation loop using requestAnimationFrame
         * This ensures 60 FPS by syncing with browser repaint cycle
         */
        const animate = (currentTime: number) => {
            if (!startTimeRef.current) {
                startTimeRef.current = currentTime;
            }

            const elapsed = currentTime - startTimeRef.current;
            const progress = Math.min(elapsed / duration, 1);

            // Apply easing function
            const easedProgress = easeOutExpo(progress);
            const currentValue = easedProgress * end;

            // Format the number
            const formattedValue = decimals > 0
                ? currentValue.toFixed(decimals)
                : Math.round(currentValue).toString();

            // Direct DOM manipulation - no React re-renders!
            // This is the key to 60 FPS - we bypass React's reconciliation
            numberElement.textContent = `${prefix}${formattedValue}${suffix}`;

            // Continue animation if not complete
            if (progress < 1) {
                frameRef.current = requestAnimationFrame(animate);
            }
        };

        // Start the animation
        frameRef.current = requestAnimationFrame(animate);

        // Cleanup function
        return () => {
            if (frameRef.current) {
                cancelAnimationFrame(frameRef.current);
            }
        };
    }, [end, duration, prefix, suffix, decimals, isInView, startOnView]);

    return { elementRef, numberRef };
}
