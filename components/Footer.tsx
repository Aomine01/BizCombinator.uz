"use client";

import { Linkedin, Send, Twitter } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
    const { t } = useLanguage();
    return (
        <footer className="bg-black border-t border-slate-900 pt-20 pb-10 relative overflow-hidden font-sans">
            {/* Background Elements */}
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[128px] pointer-events-none translate-x-1/2 translate-y-1/2" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

                    {/* Brand Column */}
                    <div>
                        <Link href="/" className="block mb-6 w-fit">
                            <div className="relative w-48 h-12">
                                <Image
                                    src="/images/logo-full-red.png"
                                    alt="BizCombinator"
                                    fill
                                    className="object-contain object-left"
                                />
                            </div>
                        </Link>
                        <p className="text-slate-400 mb-8 leading-relaxed">
                            {t.footer.tagline}
                        </p>
                        <div className="flex items-center gap-4">
                            <SocialLink href="#" icon={<Twitter size={20} />} />
                            <SocialLink href="#" icon={<Linkedin size={20} />} />
                            <SocialLink href="#" icon={<Send size={20} />} />
                        </div>
                    </div>

                    {/* Program */}
                    <div>
                        <h4 className="text-white font-bold mb-6">{t.footer.columns.program}</h4>
                        <ul className="space-y-4">
                            <FooterLink href="#the-journey">{t.footer.links.journey}</FooterLink>
                            <FooterLink href="#apply-form">{t.footer.links.apply}</FooterLink>
                            <FooterLink href="#mentors">{t.footer.links.mentors}</FooterLink>
                            <FooterLink href="#global">{t.footer.links.global}</FooterLink>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-white font-bold mb-6">{t.footer.columns.company}</h4>
                        <ul className="space-y-4">
                            <FooterLink href="#">{t.footer.links.about}</FooterLink>
                            <FooterLink href="#">{t.footer.links.stories}</FooterLink>
                            <FooterLink href="#">{t.footer.links.investors}</FooterLink>
                            <FooterLink href="#">{t.footer.links.contact}</FooterLink>
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h4 className="text-white font-bold mb-6">{t.footer.columns.hq}</h4>
                        <p className="text-slate-400 mb-2">{t.footer.hq.line1}</p>
                        <p className="text-slate-400 mb-4">{t.footer.hq.line2}</p>
                        <a href="mailto:hello@bizcombinator.com" className="text-primary hover:text-white transition-colors block mb-2">
                            hello@bizcombinator.com
                        </a>
                        <a href="tel:+998901234567" className="text-white hover:text-primary transition-colors">
                            +998 90 123 45 67
                        </a>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                    <p>{t.footer.copyright}</p>
                    <div className="flex gap-8">
                        <Link href="#" className="hover:text-white transition-colors">{t.footer.links.privacy}</Link>
                        <Link href="#" className="hover:text-white transition-colors">{t.footer.links.terms}</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
    const commonClass =
        "w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary hover:bg-black transition-all duration-300";

    // Avoid placeholder "#" links (hurts Lighthouse SEO "links are crawlable")
    if (!href || href === "#") {
        return <span className={commonClass}>{icon}</span>;
    }

    return (
        <a href={href} className={commonClass} target="_blank" rel="noreferrer">
            {icon}
        </a>
    );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
    const content = (
        <>
            <span className="w-1.5 h-1.5 rounded-full bg-primary/0 group-hover:bg-primary transition-all duration-300" />
            {children}
        </>
    );

    // Avoid placeholder "#" links (hurts Lighthouse SEO "links are crawlable")
    if (!href || href === "#") {
        return (
            <li>
                <span className="text-slate-400 flex items-center gap-2 group cursor-default">
                    {content}
                </span>
            </li>
        );
    }

    return (
        <li>
            <Link href={href} className="text-slate-400 hover:text-primary transition-colors flex items-center gap-2 group">
                {content}
            </Link>
        </li>
    );
}
