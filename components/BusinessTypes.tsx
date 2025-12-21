"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
const BUSINESS_IMAGES = [
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2070&auto=format&fit=crop"
];

export default function BusinessTypes() {
    const { t } = useLanguage();
    const reduceMotion = useReducedMotion();
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const carouselRef = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const update = () => setIsMobile(window.innerWidth < 768);
        update();
        window.addEventListener("resize", update, { passive: true });
        return () => window.removeEventListener("resize", update);
    }, []);

    useEffect(() => {
        const el = carouselRef.current;
        if (!el) return;

        const update = () => {
            setWidth(Math.max(0, el.scrollWidth - el.offsetWidth));
        };

        update();

        // Keep constraints accurate when language/content changes or viewport resizes.
        let ro: ResizeObserver | null = null;
        if ("ResizeObserver" in window) {
            ro = new ResizeObserver(update);
            ro.observe(el);
        }

        window.addEventListener("resize", update, { passive: true });
        return () => {
            ro?.disconnect();
            window.removeEventListener("resize", update);
        };
    }, [t.business.cards.length, isMobile]);

    const cards = t.business.cards.map((card, index) => ({
        ...card,
        image: BUSINESS_IMAGES[index] ?? BUSINESS_IMAGES[0],
    }));

    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 flex flex-col items-start text-left"
                >
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4 text-left">
                        {t.business.title}
                    </h2>
                    <p className="text-slate-400 text-lg m-0 p-0 text-left">
                        {t.business.subtitle}
                    </p>
                </motion.div>

                {/* Swiper / Carousel Region */}
                <div className="relative -mx-4 md:mx-0">
                    <motion.div
                        ref={carouselRef}
                        className="cursor-grab active:cursor-grabbing overflow-hidden px-4 md:px-0"
                    >
                        <motion.div
                            drag={reduceMotion ? false : "x"}
                            dragConstraints={{ right: 0, left: -width }}
                            dragElastic={0.06}
                            dragMomentum={!reduceMotion}
                            dragTransition={{
                                // Standardize "feel" across breakpoints (similar to Swiper freeMode momentum).
                                power: 0.22,
                                timeConstant: 260,
                                bounceStiffness: 520,
                                bounceDamping: 32,
                            }}
                            className="flex gap-6 touch-pan-y"
                            style={{ willChange: "transform", touchAction: "pan-y" }}
                        >
                            {cards.map((card, index) => (
                                <motion.div
                                    key={index}
                                    className={`relative min-w-[300px] ${isMobile ? "h-[460px]" : "md:min-w-[400px] h-[500px]"} rounded-2xl overflow-hidden transition-all duration-500 group border
                                        ${activeIndex === index
                                            ? "border-primary shadow-[0_0_30px_rgba(255,34,0,0.3)] z-10"
                                            : "border-slate-800"
                                        }
                                        ${!isMobile ? "grayscale hover:grayscale-0 hover:border-slate-600" : ""}
                                    `}
                                    onMouseEnter={isMobile ? undefined : () => setActiveIndex(index)}
                                    onMouseLeave={isMobile ? undefined : () => setActiveIndex(null)}
                                >
                                    {/* Image Background */}
                                    <div className="absolute inset-0">
                                        <Image
                                            src={card.image}
                                            alt={card.title}
                                            fill
                                            loading="lazy"
                                            sizes={isMobile ? "300px" : "(max-width: 768px) 300px, 400px"}
                                            className={`object-cover transition-transform duration-700 ${!isMobile && activeIndex === index ? "scale-110" : "scale-100"}`}
                                        />
                                        <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent transition-opacity duration-500 ${!isMobile && activeIndex === index ? "opacity-90" : "opacity-85"}`} />
                                    </div>

                                    {/* Content */}
                                    <div className={`absolute inset-0 ${isMobile ? "p-6" : "p-8"} flex flex-col justify-end select-none pointer-events-none`}>
                                        <h3 className={`${isMobile ? "text-xl" : "text-2xl"} font-bold font-heading mb-2 text-white`}>
                                            {card.title}
                                        </h3>

                                        <div className={`${isMobile ? "max-h-40 opacity-100" : activeIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"} overflow-hidden transition-all duration-500`}>
                                            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                                                {card.desc}
                                            </p>
                                            <div className={`mt-3 h-1 ${isMobile ? "w-10" : "w-12"} bg-primary rounded-full`} />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Visual Hint for Scrolling */}
                    <div className="hidden md:flex justify-center mt-8 gap-2">
                        {cards.map((_, i) => (
                            <div
                                key={i}
                                className={`h-1.5 rounded-full transition-all duration-300 ${activeIndex === i ? "w-8 bg-primary" : "w-1.5 bg-slate-800"}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
