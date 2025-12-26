/**
 * Luxury-grade scroll lock utilities
 * Uses position:fixed pattern to prevent iOS rubber-banding and layout reflow
 */

/**
 * Locks scroll - prevents any scrolling during hero reveal animation
 * iOS-safe implementation using position:fixed
 */
export const lockScroll = (): void => {
    const scrollY = window.scrollY || 0;

    // Lock overflow on both html and body
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';

    // CRITICAL: position:fixed prevents iOS rubber-banding and layout reflow
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%'; // Prevent horizontal shift

    // Store scroll position for precise restoration
    document.body.dataset.revealScrollY = String(scrollY);
};

/**
 * Unlocks scroll - restores normal scrolling after animation completes
 * Precisely restores scroll position
 */
export const unlockScroll = (): void => {
    const scrollY = Number(document.body.dataset.revealScrollY || 0);

    // Restore all styles
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';

    // Cleanup data attribute
    delete document.body.dataset.revealScrollY;

    // Restore scroll position (or go to 0 for hero reveal)
    window.scrollTo(0, scrollY);
};
