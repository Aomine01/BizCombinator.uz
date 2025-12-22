import { motion, useInView, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { useRef, useState, useEffect } from "react";

export default function MentorsGrid() {
    const { t } = useLanguage();
    const reduceMotion = useReducedMotion();
    const sectionRef = useRef<HTMLElement>(null);
    const carouselRef = useRef<HTMLDivElement>(null);
    const dragRef = useRef<HTMLDivElement>(null);
    const inView = useInView(sectionRef, { margin: "-10% 0px -10% 0px" });
    const [width, setWidth] = useState(0);
    const [isHovering, setIsHovering] = useState(false);
    const [isDragging, setIsDragging] = useState(false);

    // Calculate drag constraints
    useEffect(() => {
        if (carouselRef.current) {
            const scrollWidth = carouselRef.current.scrollWidth;
            const offsetWidth = carouselRef.current.offsetWidth;
            setWidth(scrollWidth - offsetWidth);
        }
    }, [t.mentors.items]);

    // Auto-scroll animation
    const shouldAutoScroll = inView && !reduceMotion && !isHovering && !isDragging;

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

                {/* Manual Scroll Container */}
                <div className="relative -mx-4 md:mx-0">
                    {/* Gradient Overlays */}
                    <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
                    <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />

                    <motion.div
                        ref={carouselRef}
                        className="cursor-grab active:cursor-grabbing overflow-hidden px-4 md:px-0"
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                    >
                        <motion.div
                            ref={dragRef}
                            drag="x"
                            dragConstraints={{ right: 0, left: -width }}
                            dragElastic={0.1}
                            dragMomentum={true}
                            dragTransition={{
                                power: 0.3,
                                timeConstant: 200,
                                bounceStiffness: 400,
                                bounceDamping: 25,
                            }}
                            onDragStart={() => setIsDragging(true)}
                            onDragEnd={() => setIsDragging(false)}
                            animate={shouldAutoScroll ? { x: [-width, 0] } : {}}
                            transition={shouldAutoScroll ? {
                                x: {
                                    duration: 30,
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    ease: "linear",
                                },
                            } : {}}
                            className="flex gap-6"
                            style={{ willChange: "transform", touchAction: "pan-y" }}
                        >
                            {t.mentors.items.map((mentor, index) => (
                                <div
                                    key={mentor.id}
                                    className="mentor-card min-w-[280px] md:min-w-[320px] glass-card rounded-3xl p-6 relative group/card overflow-hidden hover:border-primary/50 transition-colors select-none"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />

                                    {/* Avatar */}
                                    <div className="relative z-10 flex flex-col items-center mb-6">
                                        <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-primary/30 mb-4 group-hover/card:border-primary transition-colors">
                                            <Image
                                                src={mentor.image}
                                                alt={mentor.name}
                                                width={96}
                                                height={96}
                                                className="object-cover w-full h-full"
                                            />
                                        </div>

                                        {/* Badge */}
                                        <span className="px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full border border-primary/20">
                                            {mentor.role}
                                        </span>
                                    </div>

                                    {/* Content */}
                                    <div className="relative z-10 text-center">
                                        <h3 className="text-xl font-heading font-bold text-white mb-2">
                                            {mentor.name}
                                        </h3>
                                        <p className="text-sm text-slate-400 leading-relaxed">
                                            {mentor.expertise}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
