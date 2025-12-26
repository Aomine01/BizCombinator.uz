/**
 * Luxury-grade scroll lock utilities
 * Uses position:fixed pattern to prevent iOS rubber-banding and layout reflow
 */

/**
 * Locks scroll - prevents any scrolling during hero reveal animation
 * For hero reveal: Always locks at top (0) to prevent visual jump
 */
export const lockScroll = (): void => {
    // Set overflow hidden on both html and body
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';

    // CRITICAL: Lock at top:0 to prevent snap-back visual jump
    document.body.style.position = 'fixed';
    document.body.style.top = '0';
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.body.style.width = '100%';
};

/**
 * Unlocks scroll - restores normal scrolling after animation completes
 * For hero reveal, always returns to top (0)
 */
export const unlockScroll = (): void => {
    // Restore all styles
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.left = '';
    document.body.style.right = '';
    document.body.style.width = '';
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
};
