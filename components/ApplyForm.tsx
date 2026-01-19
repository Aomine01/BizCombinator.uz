"use client";

import { motion } from "framer-motion";
import { Upload, Send, CheckCircle, AlertCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useState } from "react";

export default function ApplyForm() {
    const { t } = useLanguage();
    const [fileName, setFileName] = useState<string | null>(null);

    // Form State
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const allowedTypes = ['application/pdf', 'application/vnd.ms-powerpoint', 'application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
            const maxSize = 10 * 1024 * 1024; // 10MB

            if (!allowedTypes.includes(file.type)) {
                setErrorMessage(t.form.errors.invalidFileType);
                e.target.value = ''; // Clear input
                return;
            }

            if (file.size > maxSize) {
                setErrorMessage(t.form.errors.fileTooLarge);
                e.target.value = ''; // Clear input
                return;
            }

            setFileName(file.name);
            setErrorMessage(''); // Clear any previous errors
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('sending');
        setErrorMessage('');

        const formData = new FormData(e.currentTarget);

        // Add Web3Forms access key
        formData.append("access_key", "313f672e-4dc0-4ec8-81fc-afbb4406c28d");

        try {
            // Primary: Send to Web3Forms
            const web3Response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const web3Data = await web3Response.json();

            if (!web3Data.success) {
                console.error('Web3Forms submission failed:', web3Data);
                throw new Error(t.form.errors.submitFailed);
            }

            // Secondary: Send to your Telegram API as backup (optional)
            // Remove the access_key before sending to your API
            const backupFormData = new FormData(e.currentTarget);
            fetch('/api/apply', {
                method: 'POST',
                body: backupFormData,
            }).catch(err => {
                // Log but don't fail - Web3Forms is primary
                console.warn('Backup submission to Telegram failed:', err);
            });

            setStatus('success');
            setFileName(null);

            // Safely reset form
            if (e.currentTarget) {
                e.currentTarget.reset();
            }
        } catch (error: any) {
            console.error('Submission Error:', error);
            setStatus('error');

            setErrorMessage(error?.message || t.form.errors.submitFailed);
        }
    };

    return (
        <section id="apply-form" className="py-24 relative">
            <div className="container mx-auto px-6 max-w-2xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                        {t.form.title}
                    </h2>
                    <p className="text-slate-400">
                        {t.form.subtitle}
                    </p>
                </motion.div>

                {status === 'success' ? (
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="bg-green-500/10 border border-green-500/20 rounded-2xl p-8 text-center"
                    >
                        <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <CheckCircle className="w-8 h-8 text-green-500" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">{t.form.success.title}</h3>
                        <p className="text-slate-300">
                            {t.form.success.body}
                        </p>
                        <button
                            onClick={() => setStatus('idle')}
                            className="mt-6 text-primary hover:text-white transition-colors text-sm font-medium"
                        >
                            {t.form.success.sendAnother}
                        </button>
                    </motion.div>
                ) : (
                    <motion.form
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="space-y-6"
                    >
                        {/* Hidden fields for Web3Forms configuration */}
                        <input type="hidden" name="subject" value="New BizCombinator Application" />
                        <input type="hidden" name="from_name" value="BizCombinator Website" />
                        <input type="hidden" name="redirect" value="false" />

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-300">{t.form.name}</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-primary/50 outline-none transition-all text-base"
                                    placeholder={t.form.placeholders.name}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-300">{t.form.email}</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-primary/50 outline-none transition-all text-base"
                                    placeholder={t.form.placeholders.email}
                                />
                            </div>
                            <div className="space-y-2 md:col-span-2">
                                <label className="text-sm font-medium text-slate-300">{t.form.phone}</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    required
                                    className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-primary/50 outline-none transition-all text-base"
                                    placeholder={t.form.placeholders.phone}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-300">{t.form.startupName}</label>
                            <input
                                type="text"
                                name="startup_name"
                                required
                                className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-primary/50 outline-none transition-all text-base"
                                placeholder={t.form.placeholders.startup}
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-300">{t.form.stage}</label>
                            <select
                                name="stage"
                                required
                                defaultValue=""
                                className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-primary/50 outline-none transition-all appearance-none cursor-pointer text-base"
                            >
                                <option value="" disabled>{t.form.selectStage}</option>
                                <option value="idea">{t.form.stages.idea}</option>
                                <option value="mvp">{t.form.stages.mvp}</option>
                                <option value="revenue">{t.form.stages.revenue}</option>
                                <option value="scale">{t.form.stages.scale}</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-300">{t.form.pitch}</label>
                            <div className="relative group">
                                <input
                                    type="file"
                                    id="file-upload"
                                    name="pitch_deck"
                                    className="hidden"
                                    onChange={handleFileChange}
                                    accept=".pdf,.doc,.docx,.ppt,.pptx"
                                />
                                <label
                                    htmlFor="file-upload"
                                    className="flex flex-col items-center justify-center w-full p-8 border-2 border-dashed border-slate-800 rounded-lg cursor-pointer hover:border-primary/50 hover:bg-slate-800/50 transition-all bg-slate-950"
                                >
                                    <Upload className="w-8 h-8 text-slate-500 mb-3 group-hover:text-primary transition-colors" />
                                    <p className="text-sm text-slate-400 group-hover:text-slate-300">
                                        {fileName ? fileName : t.form.dropText}
                                    </p>
                                    <p className="text-xs text-slate-600 mt-1">{t.form.dropHint}</p>
                                </label>
                            </div>
                            <p className="text-xs text-slate-500 mt-2">{t.form.pitchNote}</p>
                        </div>

                        {status === 'error' && (
                            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 flex items-center gap-3 text-red-400">
                                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                                <p className="text-sm">{errorMessage}</p>
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={status === 'sending'}
                            className="w-full py-4 bg-primary text-white font-bold rounded-lg shadow-[0_0_20px_rgba(255,87,34,0.3)] hover:shadow-[0_0_30px_rgba(255,87,34,0.5)] transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {status === 'sending' ? t.form.sending : t.form.submit}
                            {status !== 'sending' && <Send className="w-4 h-4" />}
                        </button>

                    </motion.form>
                )}
            </div>
        </section>
    );
}
