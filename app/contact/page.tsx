"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const contactIcons = [MapPin, Mail, Phone, Clock];

export default function ContactPage() {
    const { t } = useLanguage();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitStatus("success");
            setFormData({ name: "", email: "", phone: "", message: "" });

            setTimeout(() => setSubmitStatus("idle"), 5000);
        }, 1500);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <main className="min-h-screen bg-black text-white">
            <Navbar />

            {/* HERO SECTION */}
            <section className="pt-32 pb-12 px-6 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[128px]" />

                <div className="container mx-auto max-w-4xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight">
                            {t.contactPage.hero.titlePart1} <span className="text-primary">{t.contactPage.hero.titleHighlight}</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
                            {t.contactPage.hero.description}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* CONTACT INFO CARDS */}
            <section className="py-12 px-6 relative">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {t.contactPage.contactInfo.map((info, index) => {
                            const Icon = contactIcons[index];

                            return (
                                <motion.div
                                    key={info.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="glass-card p-6 rounded-2xl text-center hover:border-primary/30 transition-all duration-300"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 border border-primary/20">
                                        <Icon className="w-6 h-6 text-primary" />
                                    </div>

                                    <h3 className="text-lg font-bold text-white mb-3">
                                        {info.title}
                                    </h3>

                                    <p className="text-slate-400 text-sm mb-1">
                                        {info.line1}
                                    </p>
                                    <p className="text-slate-500 text-sm">
                                        {info.line2}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* MAP & FORM SECTION */}
            <section className="py-20 px-6 relative">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-12">

                        {/* MAP */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative"
                        >
                            <div className="glass-card p-2 rounded-2xl overflow-hidden h-full min-h-[450px]">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5993.317558846775!2d69.26293322175151!3d41.31628612969019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b3b2aad2add%3A0x1e99c186f53d5b24!2z0JTQstC-0YDQtdGGINCi0LLQvtGA0YfQtdGB0YLQstCwINCc0L7Qu9C-0LTRkdC20Lg!5e0!3m2!1sru!2s!4v1770190756509!5m2!1sru!2s"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0, borderRadius: "12px", minHeight: "430px" }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="rounded-xl"
                                />
                            </div>
                        </motion.div>

                        {/* CONTACT FORM */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="glass-card p-8 rounded-2xl">
                                <h2 className="text-3xl font-heading font-bold mb-2 text-white">
                                    {t.contactPage.form.title}
                                </h2>
                                <p className="text-slate-400 mb-8">
                                    {t.contactPage.form.subtitle}
                                </p>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-primary/50 transition-colors"
                                            placeholder="Your name"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-primary/50 transition-colors"
                                            placeholder="your@email.com"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-primary/50 transition-colors"
                                            placeholder="+998 90 123 45 67"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                                            Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={5}
                                            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                                            placeholder="Tell us what you're looking for..."
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <motion.button
                                        type="submit"
                                        disabled={isSubmitting}
                                        whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                                        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                                        className="w-full px-8 py-4 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? (
                                            <span>Sending...</span>
                                        ) : (
                                            <>
                                                Send Message
                                                <Send className="w-5 h-5" />
                                            </>
                                        )}
                                    </motion.button>

                                    {/* Success Message */}
                                    {submitStatus === "success" && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400 text-sm text-center"
                                        >
                                            ✓ Message sent successfully! We'll get back to you soon.
                                        </motion.div>
                                    )}

                                    {submitStatus === "error" && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm text-center"
                                        >
                                            ✗ Something went wrong. Please try again.
                                        </motion.div>
                                    )}
                                </form>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="py-20 px-6 relative overflow-hidden">
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[128px] translate-x-1/2 translate-y-1/2" />

                <div className="container mx-auto max-w-4xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="glass-card p-12 rounded-2xl text-center"
                    >
                        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-white">
                            {t.contactPage.cta.title}
                        </h2>
                        <p className="text-lg text-slate-400 mb-8">
                            {t.contactPage.cta.description}
                        </p>

                        <Link href="/#apply-form">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-all duration-300"
                            >
                                {t.contactPage.cta.buttonText}
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
