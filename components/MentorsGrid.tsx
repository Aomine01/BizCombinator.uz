import { motion, useMotionValue, useAnimationFrame, useSpring, useTransform, PanInfo } from "framer-motion";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { MENTORS_CONTENT } from "@/constants/data";
import { useLanguage } from "@/context/LanguageContext";

export default function MentorsGrid() {
    const { t } = useLanguage();
    const containerRef = useRef<HTMLDivElement>(null);

    // We duplicate content enough to ensure seamless looping
    // 3 sets is usually safe for most screen createParticles
    const items = [...MENTORS_CONTENT, ...MENTORS_CONTENT, ...MENTORS_CONTENT, ...MENTORS_CONTENT];

    const x = useMotionValue(0);
    const [isDragging, setIsDragging] = useState(false);
    const [contentWidth, setContentWidth] = useState(0);

    useEffect(() => {
        if (containerRef.current) {
            // Measure one set of content
            // Approximate width based on card width (320) + gap (24) * count
            // Or better: measure the first 1/4 of the scrollWidth
            setContentWidth(containerRef.current.scrollWidth / 4);
        }
    }, []);

    useAnimationFrame((t, delta) => {
        if (!isDragging && contentWidth > 0) {
            // Move left by small amount each frame
            const moveBy = -0.5 * (delta / 16); // Base speed

            let newX = x.get() + moveBy;

            // Seamless Loop Logic:
            // If we've scrolled past the first set (contentWidth), reset by adding contentWidth
            // This jumps us "back" but visually it's identical
            if (newX <= -contentWidth) {
                newX += contentWidth;
            }
            // Optional: Support right scrolling too
            else if (newX > 0) {
                newX -= contentWidth;
            }

            x.set(newX);
        }
    });

    const onDragEnd = () => {
        setIsDragging(false);
    };

    const onDragStart = () => {
        setIsDragging(true);
    };

    return (
        <section id="mentors" className="py-24 relative overflow-hidden">
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

                <div className="relative overflow-hidden group cursor-grab active:cursor-grabbing">
                    {/* Gradient Overlays */}
                    <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
                    <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />

                    <motion.div
                        ref={containerRef}
                        className="flex gap-6 w-max"
                        style={{ x }}
                        drag="x"
                        dragConstraints={{ left: -10000, right: 10000 }} // Free drag essentially
                        onDragStart={onDragStart}
                        onDragEnd={onDragEnd}
                    // We rely on the frame loop for movement, but drag overrides x
                    >
                        {items.map((mentor, index) => (
                            <div
                                key={`${mentor.id}-${index}`}
                                className="min-w-[280px] md:min-w-[320px] glass-card rounded-3xl p-6 relative group/card overflow-hidden hover:border-primary/50 transition-colors select-none"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />

                                <div className="relative mb-6">
                                    <div className="w-24 h-24 rounded-full p-1 border-2 border-primary/20 group-hover/card:border-primary transition-colors mx-auto">
                                        <div className="w-full h-full rounded-full overflow-hidden relative">
                                            <Image
                                                src={mentor.image}
                                                alt={mentor.name}
                                                fill
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
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
