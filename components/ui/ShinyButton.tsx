"use client";

import { motion } from "framer-motion";

export const ShinyButton = ({ children, onClick, className = "" }: { children: React.ReactNode; onClick?: () => void; className?: string }) => {
    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClick}
            className={`relative rounded-full px-8 py-3 text-sm font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 overflow-hidden group ${className}`}
        >
            {/* Border Gradient wrapper */}
            <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Main Background */}
            <span className="absolute inset-[1px] rounded-full bg-slate-950/90 backdrop-blur-3xl transition-colors group-hover:bg-slate-900/90" />

            {/* Sheen/Shine Effect */}
            <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer" />

            {/* Text Content */}
            <span className="relative flex items-center gap-2 z-10">
                {children}
            </span>
        </motion.button>
    );
};
