"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useState } from "react";

export default function QuickContact() {
    const { t } = useLanguage();
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('sending');
        setErrorMessage('');

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get('name'),
            phone: formData.get('phone'),
            email: formData.get('email') || '',
            type: 'quick_contact'
        };

        try {
            const response = await fetch('/api/apply', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                if (response.status === 429) throw new Error(t.form.errors.rateLimited);
                throw new Error(t.form.errors.submitFailed);
            }

            setStatus('success');
            e.currentTarget.reset();

            // Auto-reset after 5 seconds
            setTimeout(() => setStatus('idle'), 5000);
        } catch (error: any) {
            console.error('Quick Contact Error:', error);
            setStatus('error');
            setErrorMessage(error?.message || t.form.errors.submitFailed);
        }
    };

    return (
        <section className="py-20 relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto"
                >
                    {/* Header */}
                    <div className="text-center md:text-left mb-8">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-3">
                            {t.quickContact.title}
                        </h2>
                        <p className="text-slate-400 text-lg">
                            {t.quickContact.subtitle}
                        </p>
                    </div>

                    {/* Form Container */}
                    <div className="glass-card p-6 md:p-8 rounded-2xl">
                        {status === 'success' ? (
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="text-center py-8"
                            >
                                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Send className="w-8 h-8 text-green-500" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">
                                    {t.quickContact.success.title}
                                </h3>
                                <p className="text-slate-300">
                                    {t.quickContact.success.body}
                                </p>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Inline Form Fields */}
                                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        placeholder={t.quickContact.namePlaceholder}
                                        className="bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-primary/50 outline-none transition-all"
                                    />
                                    <input
                                        type="tel"
                                        name="phone"
                                        required
                                        placeholder={t.quickContact.phonePlaceholder}
                                        className="bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-primary/50 outline-none transition-all"
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder={t.quickContact.emailPlaceholder}
                                        className="bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-primary/50 outline-none transition-all"
                                    />
                                    <button
                                        type="submit"
                                        disabled={status === 'sending'}
                                        className="px-6 py-3 bg-primary text-white font-bold rounded-lg shadow-[0_0_20px_rgba(255,34,0,0.3)] hover:shadow-[0_0_30px_rgba(255,34,0,0.5)] transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {status === 'sending' ? t.form.sending : t.quickContact.submit}
                                        {status !== 'sending' && <Send className="w-4 h-4" />}
                                    </button>
                                </div>

                                {/* Helper Text */}
                                <p className="text-sm text-slate-500">
                                    {t.quickContact.helperText}
                                </p>

                                {/* Error Message */}
                                {status === 'error' && (
                                    <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 text-red-400 text-sm">
                                        {errorMessage}
                                    </div>
                                )}
                            </form>
                        )}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
