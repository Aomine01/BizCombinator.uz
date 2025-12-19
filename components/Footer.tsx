"use client";

import { Github, Linkedin, MessageCircle, Send, Twitter } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
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
                            The accelerator of the future. Transforming ambitious ideas into global empires through
                            funding, mentorship, and AI-driven growth.
                        </p>
                        <div className="flex items-center gap-4">
                            <SocialLink href="#" icon={<Twitter size={20} />} />
                            <SocialLink href="#" icon={<Linkedin size={20} />} />
                            <SocialLink href="#" icon={<Send size={20} />} />
                        </div>
                    </div>

                    {/* Program */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Program</h4>
                        <ul className="space-y-4">
                            <FooterLink href="#timeline">The Journey</FooterLink>
                            <FooterLink href="#apply">Apply Now</FooterLink>
                            <FooterLink href="#mentors">Mentors</FooterLink>
                            <FooterLink href="#global">Global Network</FooterLink>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Company</h4>
                        <ul className="space-y-4">
                            <FooterLink href="#">About Us</FooterLink>
                            <FooterLink href="#">Success Stories</FooterLink>
                            <FooterLink href="#">For Investors</FooterLink>
                            <FooterLink href="#">Contact</FooterLink>
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Uzbekistan HQ</h4>
                        <p className="text-slate-400 mb-2">Tashkent, Mirabad District</p>
                        <p className="text-slate-400 mb-4">Oybek Street 12, Block B</p>
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
                    <p>© 2025 BizCombinator. All rights reserved.</p>
                    <div className="flex gap-8">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
    return (
        <a
            href={href}
            className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary hover:bg-black transition-all duration-300"
        >
            {icon}
        </a>
    );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <li>
            <Link href={href} className="text-slate-400 hover:text-primary transition-colors flex items-center gap-2 group">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/0 group-hover:bg-primary transition-all duration-300" />
                {children}
            </Link>
        </li>
    );
}
