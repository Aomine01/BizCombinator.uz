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
                        className="mobile-section-title text-4xl md:text-6xl font-heading font-black mb-6 text-white tracking-tight"
                    >
                        {t.features.title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="mobile-section-subtitle text-lg md:text-xl text-slate-300 max-w-3xl mx-auto font-medium"
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
                                className="glass-card p-10 rounded-2xl group cursor-pointer border-2 border-transparent hover:border-primary/20 transition-all duration-300"
                            >
                                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-8 text-primary group-hover:scale-110 group-hover:from-primary/20 group-hover:to-primary/10 transition-all duration-300 border border-primary/20">
                                    <Icon className="w-10 h-10" />
                                </div>

                                <h3 className="mobile-card-title text-xl md:text-2xl font-black text-white mb-5 font-heading group-hover:text-primary transition-colors tracking-tight">
                                    {feature.title}
                                </h3>

                                <p className="mobile-body-text text-base md:text-lg text-slate-300 leading-relaxed font-medium">
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
