"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Brain, Handshake, TrendingUp, Users, Rocket, CheckCircle2, XCircle, ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useState } from "react";

const iconMap: Record<string, any> = {
    Brain,
    Handshake,
    TrendingUp,
    Users,
    Rocket,
};

export default function GapSection() {
    const { t } = useLanguage();
    const [expandedProblemIndex, setExpandedProblemIndex] = useState<number | null>(null);
    const [expandedSolutionIndex, setExpandedSolutionIndex] = useState<number | null>(null);

    const problemIcons = ["Brain", "Handshake", "TrendingUp"];
    const solutionIcons = ["Users", "Brain", "Rocket"];

    // Mock details for expandable items
    const problemDetails = [
        "First-time founders often struggle with navigating complex industry regulations and market dynamics.",
        "Without a warm intro, getting in front of VCs and Angels is statistically near-impossible.",
        "Premature scaling is the #1 reason startups fail. Knowing when to push is critical."
    ];

    const solutionDetails = [
        "Network with 500+ mentors from Fortune 500 companies who have been there.",
        "Get personalized insights powered by our proprietary AI engine to validate your moves.",
        "Structured roadmap to secure your Seed or Series A funding with metrics that matter."
    ];

    return (
        <section id="the-gap" className="py-24 relative overflow-hidden">
            {/* Decorative Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-start max-w-6xl mx-auto">

                    {/* Problem Card (Red) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="p-8 md:p-10 rounded-3xl bg-black/40 backdrop-blur-md border border-red-900/20 relative overflow-hidden group h-full flex flex-col"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-red-900/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />

                        <h3 className="text-2xl font-heading font-bold text-red-500 mb-10 flex items-center gap-4">
                            <XCircle className="w-8 h-8 shrink-0" />
                            {t.gap.problemTitle}
                        </h3>

                        <div className="space-y-4 flex-1">
                            {t.gap.problems.map((item, index) => {
                                const Icon = iconMap[problemIcons[index]];
                                const isExpanded = expandedProblemIndex === index;

                                return (
                                    <motion.div
                                        key={index}
                                        onClick={() => setExpandedProblemIndex(isExpanded ? null : index)}
                                        className={`rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden
                                            ${isExpanded
                                                ? "bg-red-900/10 border-red-500/30"
                                                : "bg-transparent border-transparent hover:bg-white/5"
                                            }
                                        `}
                                    >
                                        <div className="p-4 flex items-start gap-4">
                                            <div className="p-3 rounded-xl bg-red-500/10 text-red-500 shrink-0">
                                                {Icon && <Icon className="w-5 h-5" />}
                                            </div>
                                            <div className="flex-1 pt-1.5">
                                                <div className="flex justify-between items-center">
                                                    <span className={`text-lg font-medium transition-colors ${isExpanded ? "text-white" : "text-slate-400"}`}>
                                                        {item}
                                                    </span>
                                                    <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} />
                                                </div>

                                                <AnimatePresence>
                                                    {isExpanded && (
                                                        <motion.div
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: "auto", opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            transition={{ duration: 0.3 }}
                                                            className="overflow-hidden"
                                                        >
                                                            <p className="text-slate-400 mt-3 text-sm leading-relaxed border-t border-red-500/20 pt-3">
                                                                {problemDetails[index]}
                                                            </p>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Solution Card (Green - Interactive) */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="p-8 md:p-10 rounded-3xl bg-black/40 backdrop-blur-md border border-green-900/20 relative overflow-hidden h-full flex flex-col"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-green-900/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />

                        <h3 className="text-2xl font-heading font-bold text-green-500 mb-10 flex items-center gap-4">
                            <CheckCircle2 className="w-8 h-8 shrink-0" />
                            {t.gap.solutionTitle}
                        </h3>

                        <div className="space-y-4 flex-1">
                            {t.gap.solutions.map((item, index) => {
                                const Icon = iconMap[solutionIcons[index]];
                                const isExpanded = expandedSolutionIndex === index;

                                return (
                                    <motion.div
                                        key={index}
                                        onClick={() => setExpandedSolutionIndex(isExpanded ? null : index)}
                                        className={`rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden
                                            ${isExpanded
                                                ? "bg-green-900/10 border-green-500/30"
                                                : "bg-transparent border-transparent hover:bg-white/5"
                                            }
                                        `}
                                    >
                                        <div className="p-4 flex items-start gap-4">
                                            <div className="p-3 rounded-xl bg-green-500/10 text-green-500 shrink-0">
                                                {Icon && <Icon className="w-5 h-5" />}
                                            </div>
                                            <div className="flex-1 pt-1.5">
                                                <div className="flex justify-between items-center">
                                                    <span className={`text-lg font-medium transition-colors ${isExpanded ? "text-white" : "text-slate-300"}`}>
                                                        {item}
                                                    </span>
                                                    <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} />
                                                </div>

                                                <AnimatePresence>
                                                    {isExpanded && (
                                                        <motion.div
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: "auto", opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            transition={{ duration: 0.3 }}
                                                            className="overflow-hidden"
                                                        >
                                                            <p className="text-slate-400 mt-3 text-sm leading-relaxed border-t border-green-500/20 pt-3">
                                                                {solutionDetails[index]}
                                                            </p>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
