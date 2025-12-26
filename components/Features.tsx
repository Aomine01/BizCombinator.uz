import { motion } from "framer-motion";
import { Building2, Brain, Globe, Laptop, Box, Network } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

// Map string icon names to Lucide components
const iconMap: Record<string, any> = {
    Building2,
    Brain,
    Globe,
    // Fallbacks
    Laptop,
    Box,
    Network
};

export default function Features() {

    const { t } = useLanguage();
    const featureIcons = ["Building2", "Brain", "Globe"];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { stiffness: 50 } }
    };

    return (
        <section id="features" className="py-24 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[128px] -translate-x-1/2 -translate-y-1/2" />

            <div className="container mx-auto px-4 z-10 relative">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mobile-section-title text-4xl md:text-5xl font-heading font-bold mb-6 text-white"
                    >
                        {t.features.title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="mobile-section-subtitle text-lg md:text-xl text-slate-400 max-w-3xl mx-auto"
                    >
                        {t.features.subtitle}
                    </motion.p>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-3 gap-8"
                >
                    {t.features.items.map((feature, index) => {
                        const Icon = iconMap[featureIcons[index]] || Box;

                        return (
                            <motion.div
                                key={index}
                                variants={item}
                                className="glass-card p-8 rounded-2xl group cursor-pointer hover:border-primary/10 transition-all duration-300"
                            >
                                <div className="w-16 h-16 rounded-xl bg-primary/5 flex items-center justify-center mb-6 text-primary group-hover:scale-105 transition-all duration-300 border border-primary/10">
                                    <Icon className="w-8 h-8" />
                                </div>

                                <h3 className="mobile-card-title text-lg md:text-xl font-bold text-white mb-4 font-heading group-hover:text-primary transition-colors">
                                    {feature.title}
                                </h3>

                                <p className="mobile-body-text text-sm md:text-base text-slate-400 leading-relaxed">
                                    {feature.desc}
                                </p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
