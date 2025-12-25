"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export default function MentorsGrid() {
    const { t } = useLanguage();
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: -280,
                behavior: "smooth"
            });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: 280,
                behavior: "smooth"
            });
        }
    };

    return (
        <section id="mentors" className="py-20 relative overflow-hidden" aria-label="Mentor profiles">
            {/* Decorative Orb */}
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[128px] translate-x-1/2 translate-y-1/2 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16 max-w-3xl mx-auto"
                >
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
                        {t.mentors.title}
                    </h2>
                    <p className="text-xl text-gray-400">
                        {t.mentors.subtitle}
                    </p>
                </motion.div>

                {/* Swiper Container with Arrows */}
                <div className="relative group">
                    {/* Left Arrow (Desktop only) */}
                    <button
                        onClick={scrollLeft}
                        aria-label="Previous mentor"
                        className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20
                            w-10 h-10 items-center justify-center rounded-full
                            bg-white/5 hover:bg-white/10 
                            opacity-0 group-hover:opacity-60 group-focus-within:opacity-60 hover:opacity-100
                            transition-all duration-300
                            focus:ring-2 focus:ring-primary/50 outline-none"
                    >
                        <ChevronLeft className="w-5 h-5 text-white" />
                    </button>

                    {/* Swiper Container */}
                    <div
                        ref={scrollContainerRef}
                        role="region"
                        aria-roledescription="carousel"
                        className="flex overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory overscroll-x-contain
                            gap-4 md:gap-5 lg:gap-6
                            pb-6"
                        style={{ scrollSnapType: "x mandatory" }}
                    >
                        {t.mentors.items.map((mentor, index) => (
                            <motion.div
                                key={mentor.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{
                                    delay: index * 0.08,
                                    duration: 0.5,
                                    ease: "easeOut"
                                }}
                                className="flex-shrink-0 w-[280px] h-[420px] 
                                    snap-center md:snap-start
                                    glass-card rounded-2xl overflow-hidden
                                    border border-white/5 hover:border-primary/20
                                    transition-all duration-300"
                            >
                                {/* Portrait Image */}
                                <div className="relative h-[60%] overflow-hidden">
                                    <Image
                                        src={mentor.image}
                                        alt={`${mentor.name} - ${mentor.role}`}
                                        width={280}
                                        height={252}
                                        loading={index < 3 ? "eager" : "lazy"}
                                        priority={index === 0}
                                        className="w-full h-full object-cover object-top"
                                    />
                                    {/* Subtle bottom gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                                </div>

                                {/* Text Container */}
                                <div className="bg-black/60 px-6 py-5 h-[40%] flex flex-col justify-center">
                                    <h3 className="text-xl font-semibold text-white leading-tight mb-1.5">
                                        {mentor.name}
                                    </h3>
                                    <p className="text-sm text-gray-400 mb-1">
                                        {mentor.role}
                                    </p>
                                    <p className="text-xs text-gray-500 line-clamp-2">
                                        {mentor.credibility}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right Arrow (Desktop only) */}
                    <button
                        onClick={scrollRight}
                        aria-label="Next mentor"
                        className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20
                            w-10 h-10 items-center justify-center rounded-full
                            bg-white/5 hover:bg-white/10
                            opacity-0 group-hover:opacity-60 group-focus-within:opacity-60 hover:opacity-100
                            transition-all duration-300
                            focus:ring-2 focus:ring-primary/50 outline-none"
                    >
                        <ChevronRight className="w-5 h-5 text-white" />
                    </button>
                </div>

                {/* Dot Indicators (Mobile only - optional, can be CSS-only or state-driven) */}
                <div className="flex lg:hidden justify-center gap-2 mt-6">
                    {t.mentors.items.map((mentor) => (
                        <div
                            key={`dot-${mentor.id}`}
                            className="w-2 h-2 rounded-full bg-gray-600"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
