"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";

export default function PrivacyPolicyPage() {
    const { t } = useLanguage();

    return (
        <main className="min-h-screen bg-black text-white selection:bg-primary/30">
            <Navbar />

            <section className="pt-32 pb-24 px-6 relative">
                <div className="container mx-auto max-w-4xl relative z-10">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-white">
                        {t.privacy.title}
                    </h1>
                    <p className="text-slate-400 mb-12 text-lg">
                        {t.privacy.lastUpdated}
                    </p>

                    <div className="prose prose-invert prose-lg max-w-none text-slate-300">
                        {/* Intro */}
                        <h2 className="text-white font-heading text-2xl mt-12 mb-6">{t.privacy.intro.title}</h2>
                        <p className="mb-6">{t.privacy.intro.text}</p>

                        {/* Collection */}
                        <h2 className="text-white font-heading text-2xl mt-12 mb-6">{t.privacy.collection.title}</h2>
                        <p className="mb-6">{t.privacy.collection.text}</p>
                        <ul className="list-disc pl-6 space-y-4 mb-6">
                            {t.privacy.collection.items.map((item, i) => (
                                <li key={i}>
                                    <strong className="text-white">{item.title}:</strong> {item.text}
                                </li>
                            ))}
                        </ul>

                        {/* Usage */}
                        <h2 className="text-white font-heading text-2xl mt-12 mb-6">{t.privacy.usage.title}</h2>
                        <p className="mb-6">{t.privacy.usage.text}</p>
                        <ul className="list-disc pl-6 space-y-4 mb-6">
                            {t.privacy.usage.items.map((item, i) => (
                                <li key={i}>
                                    <strong className="text-white">{item.title}:</strong> {item.text}
                                </li>
                            ))}
                        </ul>

                        {/* Sharing */}
                        <h2 className="text-white font-heading text-2xl mt-12 mb-6">{t.privacy.sharing.title}</h2>
                        <p className="mb-6">{t.privacy.sharing.text}</p>
                        <ul className="list-disc pl-6 space-y-4 mb-6">
                            {t.privacy.sharing.items.map((item, i) => (
                                <li key={i}>
                                    <strong className="text-white">{item.title}:</strong> {item.text}
                                </li>
                            ))}
                        </ul>

                        {/* Security */}
                        <h2 className="text-white font-heading text-2xl mt-12 mb-6">{t.privacy.security.title}</h2>
                        <p className="mb-6">{t.privacy.security.text}</p>

                        {/* Contact */}
                        <h2 className="text-white font-heading text-2xl mt-12 mb-6">{t.privacy.contact.title}</h2>
                        <p className="mb-6">
                            {t.privacy.contact.text} <a href={`mailto:${t.privacy.contact.email}`} className="text-primary hover:text-white transition-colors">{t.privacy.contact.email}</a>
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
