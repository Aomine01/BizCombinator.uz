"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Globe3D from "@/components/Globe3D";
import { Globe3DErrorBoundary } from "@/components/Globe3DErrorBoundary";

const SLIDES = [
    {
        title: "From Zero to One",
        description: "It starts with a spark. We help you ignite the initial idea, structuring your vision into a viable business model.",
        color: "from-blue-500 to-cyan-400"
    },
    {
        title: "Rapid Scaling",
        description: "Once product-market fit is found, we fuel the fire. Our network and resources help you scale exponentially.",
        color: "from-orange-500 to-amber-400"
    },
    {
        title: "Global Domination",
        description: "The sky is not the limit. We connect you with global markets, partners, and exit opportunities.",
        color: "from-purple-500 to-pink-400"
    }
];

export default function ScrollShowcase() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Transform helix appearance based on scroll
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 1.5]); // Increase scale at end for explosion
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
    const opacity = useTransform(scrollYProgress, [0, 0.1, 0.8], [0, 1, 1]); // Keep visible at end

    return (
        <section ref={containerRef} className="relative h-[300vh]">
            {/* Sticky 3D Background */}
            <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
                <motion.div
                    style={{ scale, rotate, opacity }}
                    className="w-full max-w-4xl aspect-square relative opacity-50"
                >
                    <Globe3DErrorBoundary>
                        <Globe3D scrollProgress={scrollYProgress} />
                    </Globe3DErrorBoundary>
                </motion.div>

                {/* Background Gradient Mesh */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_70%)] pointer-events-none" />
            </div>

            {/* Scrolling Content Slides */}
            <div className="absolute inset-0">
                {SLIDES.map((slide, index) => (
                    <div key={index} className="h-screen flex items-center justify-center relative pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ margin: "-20% 0px -20% 0px" }}
                            transition={{ duration: 0.8 }}
                            className="max-w-xl text-center z-10 p-8 glass rounded-2xl pointer-events-auto border border-white/10"
                        >
                            <h3 className={`text-4xl md:text-6xl font-heading font-bold mb-6 bg-gradient-to-r ${slide.color} bg-clip-text text-transparent`}>
                                {slide.title}
                            </h3>
                            <p className="text-xl text-slate-300 leading-relaxed">
                                {slide.description}
                            </p>
                        </motion.div>
                    </div>
                ))}
            </div>
        </section>
    );
}
