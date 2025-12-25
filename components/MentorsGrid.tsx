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
                                    <p className="text-xs text-gray-500 line-clamp-2 mb-3">
                                        {mentor.credibility}
                                    </p>

                                    {/* Social Media Links */}
                                    {(mentor.telegram || mentor.instagram) && (
                                        <div className="flex gap-3 mt-auto pt-2 border-t border-white/5">
                                            {mentor.telegram && (
                                                <a
                                                    href={mentor.telegram}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-gray-500 hover:text-primary transition-colors"
                                                    aria-label={`${mentor.name} Telegram`}
                                                >
                                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.692-1.653-1.123-2.678-1.799-1.185-.781-.417-1.21.258-1.911.177-.184 3.247-2.977 3.307-3.23.007-.032.015-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.009-1.252-.242-1.865-.442-.751-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.141.121.099.155.232.171.326.016.094.036.308.02.475z" />
                                                    </svg>
                                                </a>
                                            )}
                                            {mentor.instagram && (
                                                <a
                                                    href={mentor.instagram}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-gray-500 hover:text-primary transition-colors"
                                                    aria-label={`${mentor.name} Instagram`}
                                                >
                                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                                    </svg>
                                                </a>
                                            )}
                                        </div>
                                    )}
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
