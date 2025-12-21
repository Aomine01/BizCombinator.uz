"use client";

import { motion } from "framer-motion";
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
        // Only needed for desktop drag constraints.
        if (!isMobile && carouselRef.current) {
            setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
        }
    }, [isMobile]);

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
                    {isMobile ? (
                        <div
                            ref={carouselRef}
                            className="overflow-x-auto px-4 md:px-0 pb-4 [-webkit-overflow-scrolling:touch]"
                        >
                            <div className="flex gap-6 snap-x snap-mandatory">
                                {cards.map((card, index) => (
                                    <div
                                        key={index}
                                        className="snap-center relative min-w-[300px] h-[460px] rounded-2xl overflow-hidden border border-slate-800"
                                    >
                                        <div className="absolute inset-0">
                                            <Image
                                                src={card.image}
                                                alt={card.title}
                                                fill
                                                loading="lazy"
                                                sizes="300px"
                                                className="object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90" />
                                        </div>
                                        <div className="absolute inset-0 p-6 flex flex-col justify-end">
                                            <h3 className="text-xl font-bold font-heading mb-2 text-white">
                                                {card.title}
                                            </h3>
                                            <p className="text-slate-300 leading-relaxed text-sm">
                                                {card.desc}
                                            </p>
                                            <div className="mt-3 h-1 w-10 bg-primary rounded-full" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <motion.div
                            ref={carouselRef}
                            className="cursor-grab active:cursor-grabbing overflow-hidden px-4 md:px-0"
                        >
                            <motion.div
                                drag="x"
                                dragConstraints={{ right: 0, left: -width }}
                                className="flex gap-6 touch-pan-y"
                                style={{ willChange: "transform" }}
                            >
                                {cards.map((card, index) => (
                                    <motion.div
                                        key={index}
                                        className={`relative min-w-[300px] md:min-w-[400px] h-[500px] rounded-2xl overflow-hidden transition-all duration-500 group border
                                            ${activeIndex === index
                                                ? "border-primary shadow-[0_0_30px_rgba(255,34,0,0.3)] z-10"
                                                : "border-slate-800 grayscale hover:grayscale-0 hover:border-slate-600"
                                            }
                                        `}
                                        onMouseEnter={() => setActiveIndex(index)}
                                        onMouseLeave={() => setActiveIndex(null)}
                                    >
                                        {/* Image Background */}
                                        <div className="absolute inset-0">
                                            <Image
                                                src={card.image}
                                                alt={card.title}
                                                fill
                                                loading="lazy"
                                                sizes="(max-width: 768px) 300px, 400px"
                                                className={`object-cover transition-transform duration-700 ${activeIndex === index ? "scale-110" : "scale-100"}`}
                                            />
                                            <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent transition-opacity duration-500 ${activeIndex === index ? "opacity-90" : "opacity-80"}`} />
                                        </div>

                                        {/* Content */}
                                        <div className="absolute inset-0 p-8 flex flex-col justify-end select-none pointer-events-none">
                                            <h3 className={`text-2xl font-bold font-heading mb-3 transition-colors duration-300 ${activeIndex === index ? "text-white" : "text-white/90"}`}>
                                                {card.title}
                                            </h3>

                                            <div className={`overflow-hidden transition-all duration-500 ${activeIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                                                <p className="text-slate-300 leading-relaxed">
                                                    {card.desc}
                                                </p>
                                                <div className="mt-4 h-1 w-12 bg-primary rounded-full" />
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    )}

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
