"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-primary/30">
            <Navbar />

            <section className="pt-32 pb-24 px-6 relative">
                <div className="container mx-auto max-w-4xl relative z-10">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-white">
                        Privacy Policy
                    </h1>
                    <p className="text-slate-400 mb-12 text-lg">
                        Last Updated: February 2026
                    </p>

                    <div className="prose prose-invert prose-lg max-w-none text-slate-300">
                        <h2 className="text-white font-heading text-2xl mt-12 mb-6">1. Introduction</h2>
                        <p className="mb-6">
                            Welcome to BizCombinator ("we," "our," or "us"). We are committed to protecting the privacy of our applicants and participants. This Privacy Policy explains how we collect, use, and share information when you apply for or participate in our accelerator program in Uzbekistan.
                        </p>

                        <h2 className="text-white font-heading text-2xl mt-12 mb-6">2. Information We Collect</h2>
                        <p className="mb-6">We collect two types of data to administer the program effectively:</p>
                        <ul className="list-disc pl-6 space-y-4 mb-6">
                            <li>
                                <strong className="text-white">Personal Information:</strong> Name, date of birth (to verify 18–35 age eligibility), contact details, and identification documents.
                            </li>
                            <li>
                                <strong className="text-white">Business Data:</strong> As part of the program’s requirement for "Transparency", we collect sensitive business metrics including revenue figures, profit margins, operational costs, and tax status.
                            </li>
                        </ul>

                        <h2 className="text-white font-heading text-2xl mt-12 mb-6">3. How We Use Your Information</h2>
                        <p className="mb-6">We use your data for the following purposes:</p>
                        <ul className="list-disc pl-6 space-y-4 mb-6">
                            <li>
                                <strong className="text-white">Selection:</strong> To verify your business has been active for at least 6 months.
                            </li>
                            <li>
                                <strong className="text-white">Program Delivery:</strong> To provide personalized coaching and financial diagnosis.
                            </li>
                            <li>
                                <strong className="text-white">Government Support:</strong> To facilitate your access to government incentives, tax simplified regimes, and "One-Window" services through our government partners (e.g., Ministry of Economy, Soliq).
                            </li>
                        </ul>

                        <h2 className="text-white font-heading text-2xl mt-12 mb-6">4. Data Sharing & Third Parties</h2>
                        <p className="mb-6">We do not sell your data. However, by participating, you consent to sharing specific data with:</p>
                        <ul className="list-disc pl-6 space-y-4 mb-6">
                            <li>
                                <strong className="text-white">Mentors:</strong> To allow them to provide accurate business advice.
                            </li>
                            <li>
                                <strong className="text-white">Government Partners:</strong> For the purpose of fast-tracking registrations, licenses, or export documentation as described in our Administrative Support module.
                            </li>
                            <li>
                                <strong className="text-white">Financial Partners:</strong> If you opt-in for loan or investment facilitation.
                            </li>
                        </ul>

                        <h2 className="text-white font-heading text-2xl mt-12 mb-6">5. Data Security</h2>
                        <p className="mb-6">
                            We implement standard security measures to protect your business's financial data. Access to sensitive sales data is restricted to authorized program staff and assigned mentors.
                        </p>

                        <h2 className="text-white font-heading text-2xl mt-12 mb-6">6. Contact Us</h2>
                        <p className="mb-6">
                            For privacy concerns, please contact us at: <a href="mailto:hello@bizcombinator.com" className="text-primary hover:text-white transition-colors">hello@bizcombinator.com</a>
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
