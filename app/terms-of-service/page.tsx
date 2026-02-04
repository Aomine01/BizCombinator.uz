"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";

export default function TermsOfServicePage() {
    const { t } = useLanguage();

    return (
        <main className="min-h-screen bg-black text-white selection:bg-primary/30">
            <Navbar />

            <section className="pt-32 pb-24 px-6 relative">
                <div className="container mx-auto max-w-4xl relative z-10">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-white">
                        {t.terms.title}
                    </h1>
                    <p className="text-slate-400 mb-12 text-lg">
                        {t.terms.subtitle} <br />
                        {t.terms.lastUpdated}
                    </p>

                    <div className="prose prose-invert prose-lg max-w-none text-slate-300">
                        {/* Acceptance */}
                        <h2 className="text-white font-heading text-2xl mt-12 mb-6">{t.terms.acceptance.title}</h2>
                        <p className="mb-6">{t.terms.acceptance.text}</p>

                        {/* Eligibility */}
                        <h2 className="text-white font-heading text-2xl mt-12 mb-6">{t.terms.eligibility.title}</h2>
                        <p className="mb-6">{t.terms.eligibility.text}</p>
                        <ul className="list-disc pl-6 space-y-4 mb-6">
                            {t.terms.eligibility.items.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>

                        {/* Obligations */}
                        <h2 className="text-white font-heading text-2xl mt-12 mb-6">{t.terms.obligations.title}</h2>
                        <p className="mb-6">{t.terms.obligations.text}</p>
                        <ul className="list-disc pl-6 space-y-4 mb-6">
                            {t.terms.obligations.items.map((item, i) => (
                                <li key={i}>
                                    <strong className="text-white">{item.title}:</strong> {item.text}
                                </li>
                            ))}
                        </ul>

                        {/* IP */}
                        <h2 className="text-white font-heading text-2xl mt-12 mb-6">{t.terms.ip.title}</h2>
                        <ul className="list-disc pl-6 space-y-4 mb-6">
                            {t.terms.ip.items.map((item, i) => (
                                <li key={i}>
                                    <strong className="text-white">{item.title}:</strong> {item.text}
                                </li>
                            ))}
                        </ul>

                        {/* Guarantees */}
                        <h2 className="text-white font-heading text-2xl mt-12 mb-6">{t.terms.guarantees.title}</h2>
                        <p className="mb-6">{t.terms.guarantees.text}</p>

                        {/* Liability */}
                        <h2 className="text-white font-heading text-2xl mt-12 mb-6">{t.terms.liability.title}</h2>
                        <p className="mb-6">{t.terms.liability.text}</p>

                        {/* Governing */}
                        <h2 className="text-white font-heading text-2xl mt-12 mb-6">{t.terms.governing.title}</h2>
                        <p className="mb-6">{t.terms.governing.text}</p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
