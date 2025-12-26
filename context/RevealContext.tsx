'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface RevealContextType {
    isRevealed: boolean;
    setIsRevealed: (revealed: boolean) => void;
}

const RevealContext = createContext<RevealContextType>({
    isRevealed: false,
    setIsRevealed: () => { }
});

export const useReveal = () => useContext(RevealContext);

export function RevealProvider({ children }: { children: ReactNode }) {
    const [isRevealed, setIsRevealed] = useState(false);

    // Session persistence - prevent re-trigger on refresh
    useEffect(() => {
        const saved = sessionStorage.getItem('heroRevealed');
        if (saved === 'true') setIsRevealed(true);
    }, []);

    useEffect(() => {
        if (isRevealed) {
            sessionStorage.setItem('heroRevealed', 'true');
        }
    }, [isRevealed]);

    return (
        <RevealContext.Provider value={{ isRevealed, setIsRevealed }}>
            {children}
        </RevealContext.Provider>
    );
}
