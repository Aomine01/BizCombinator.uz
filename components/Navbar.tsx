
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Language } from "@/constants/translations";

import Image from "next/image";

import { ShinyButton } from "@/components/ui/ShinyButton";

export default function Navbar() {
    const { t, language, setLanguage } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [langMenuOpen, setLangMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        setIsOpen(false);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const scrollToApply = () => {
        setIsOpen(false);
        document.getElementById('apply-form')?.scrollIntoView({ behavior: 'smooth' });
    };

    const languages: { code: Language; label: string }[] = [
        { code: "en", label: "English" },
        { code: "ru", label: "Русский" },
        { code: "uz", label: "O'zbek" }
    ];

    return (
        <nav
            className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "glass h-20" : "bg-transparent h-24 border-none shadow-none"
                }`}
        >
            <div className="container mx-auto px-4 h-full flex items-center justify-between">
                {/* Logo */}
                {/* Logo */}
                <Link href="/" className="z-50 block">
                    <div className="relative w-48 h-10 transition-transform hover:scale-105">
                        <Image
                            src="/images/logo-full-red.png"
                            alt="BizCombinator"
                            fill
                            className="object-contain object-left"
                            priority
                        />
                    </div>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <div className="flex items-center gap-6 text-sm font-medium text-slate-300">
                        <a href="#program" onClick={(e) => handleScrollTo(e, "the-journey")} className="hover:text-primary transition-colors">{t.nav.program}</a>
                        <a href="#benefits" onClick={(e) => handleScrollTo(e, "features")} className="hover:text-primary transition-colors">{t.nav.benefits}</a>
                        <a href="#mentors" onClick={(e) => handleScrollTo(e, "mentors")} className="hover:text-primary transition-colors">{t.nav.mentors}</a>
                    </div>

                    {/* Language Switcher */}
                    <div className="relative">
                        <button
                            className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors text-sm font-medium"
                            onClick={() => setLangMenuOpen(!langMenuOpen)}
                        >
                            <Globe className="w-4 h-4" />
                            {languages.find(l => l.code === language)?.label}
                            <ChevronDown className={`w-3 h-3 transition-transform ${langMenuOpen ? "rotate-180" : ""}`} />
                        </button>

                        <AnimatePresence>
                            {langMenuOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                    className="absolute top-full right-0 mt-4 glass rounded-xl overflow-hidden shadow-2xl min-w-[140px] p-2"
                                >
                                    {languages.map((lang) => (
                                        <button
                                            key={lang.code}
                                            onClick={() => {
                                                setLanguage(lang.code);
                                                setLangMenuOpen(false);
                                            }}
                                            className={`w-full text-left px-4 py-2.5 text-sm rounded-lg transition-colors ${language === lang.code ? "bg-primary/20 text-primary" : "text-slate-300 hover:bg-white/5"
                                                }`}
                                        >
                                            {lang.label}
                                        </button>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <ShinyButton
                        onClick={scrollToApply}
                        className="px-6 py-2.5 text-sm font-bold bg-primary hover:bg-orange-600 shadow-[0_0_15px_rgba(255,102,0,0.3)] hover:shadow-[0_0_25px_rgba(255,102,0,0.5)]"
                    >
                        {t.nav.apply}
                    </ShinyButton>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden z-50 text-white p-2"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/90 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 md:hidden"
                        >
                            <a href="#program" onClick={(e) => handleScrollTo(e, "the-journey")} className="text-2xl font-heading font-bold text-white hover:text-primary transition-colors">{t.nav.program}</a>
                            <a href="#benefits" onClick={(e) => handleScrollTo(e, "features")} className="text-2xl font-heading font-bold text-white hover:text-primary transition-colors">{t.nav.benefits}</a>
                            <a href="#mentors" onClick={(e) => handleScrollTo(e, "mentors")} className="text-2xl font-heading font-bold text-white hover:text-primary transition-colors">{t.nav.mentors}</a>

                            {/* Mobile Language Switcher */}
                            <div className="flex gap-4 mt-4 p-2 bg-white/5 rounded-full border border-white/10">
                                {languages.map((lang) => (
                                    <button
                                        key={lang.code}
                                        onClick={() => setLanguage(lang.code)}
                                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${language === lang.code ? "bg-primary text-white shadow-lg" : "text-slate-400"
                                            }`}
                                    >
                                        {lang.code.toUpperCase()}
                                    </button>
                                ))}
                            </div>

                            <ShinyButton
                                onClick={scrollToApply}
                                className="px-8 py-4 text-lg bg-primary hover:bg-orange-600 shadow-[0_0_20px_rgba(255,102,0,0.4)] hover:shadow-[0_0_30px_rgba(255,102,0,0.6)]"
                            >
                                {t.nav.apply}
                            </ShinyButton>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
}
