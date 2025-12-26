'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

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

    // NO session persistence - reveal happens on EVERY page load
    // This ensures refresh and back navigation always show the reveal

    return (
        <RevealContext.Provider value={{ isRevealed, setIsRevealed }}>
            {children}
        </RevealContext.Provider>
    );
}
