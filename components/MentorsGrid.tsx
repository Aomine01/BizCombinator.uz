import { motion, useInView, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { useRef } from "react";

export default function MentorsGrid() {
    const { t } = useLanguage();
    const reduceMotion = useReducedMotion();
    const sectionRef = useRef<HTMLElement>(null);
    const inView = useInView(sectionRef, { margin: "-10% 0px -10% 0px" });

    // Duplicate content for seamless CSS loop
    const items = [...t.mentors.items, ...t.mentors.items];
    const shouldAnimate = !reduceMotion && inView;

    return (
        <section ref={sectionRef} id="mentors" className="py-24 relative overflow-hidden">
            {/* Decor */}
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[128px] translate-x-1/2 translate-y-1/2" />

            <div className="container mx-auto px-4 z-10 relative">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-heading font-bold text-white mb-4"
                        >
                            {t.mentors.title}
                        </motion.h2>
                        <div className="h-1.5 w-24 bg-primary rounded-full" />
                    </div>
                </div>

                {/* CSS Marquee Container */}
                <div className="mentors-marquee-wrapper relative overflow-hidden group">
                    {/* Gradient Overlays */}
                    <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
                    <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />

                    {/* Scrolling Track - Pure CSS Animation */}
                    <div className="mentors-track flex gap-6" style={{ animationPlayState: shouldAnimate ? "running" : "paused" }}>
                        {items.map((mentor, index) => (
                            <div
                                key={`${mentor.id}-${index}`}
                                className="mentor-card min-w-[280px] md:min-w-[320px] glass-card rounded-3xl p-6 relative group/card overflow-hidden hover:border-primary/50 transition-colors select-none"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />

                                <div className="relative mb-6">
                                    <div className="w-24 h-24 rounded-full p-1 border-2 border-primary/20 group-hover/card:border-primary transition-colors mx-auto">
                                        <div className="w-full h-full rounded-full overflow-hidden relative">
                                            <Image
                                                src={mentor.image}
                                                alt={mentor.name}
                                                fill
                                                sizes="(max-width: 768px) 120px, 96px"
                                                className="object-cover pointer-events-none"
                                            />
                                        </div>
                                    </div>
                                    <div className="absolute bottom-0 right-1/2 translate-x-1/2 translate-y-1/2 bg-slate-900 border border-slate-700 px-3 py-1 rounded-full text-xs font-bold text-primary whitespace-nowrap">
                                        {mentor.role}
                                    </div>
                                </div>

                                <div className="text-center mt-6">
                                    <h3 className="text-xl font-bold text-white mb-2">{mentor.name}</h3>
                                    <p className="text-sm text-slate-400 border-t border-white/5 pt-4">
                                        {mentor.expertise}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes scroll-left {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }

                .mentors-track {
                    animation: scroll-left 40s linear infinite;
                    will-change: transform;
                }

                .mentors-marquee-wrapper:hover .mentors-track {
                    animation-play-state: paused;
                }

                @media (prefers-reduced-motion: reduce) {
                    .mentors-track {
                        animation: none !important;
                    }
                }
            `}</style>
        </section>
    );
}
