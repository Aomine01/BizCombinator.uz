"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsOfServicePage() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-primary/30">
            <Navbar />

            <section className="pt-32 pb-24 px-6 relative">
                <div className="container mx-auto max-w-4xl relative z-10">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-white">
                        Terms of Service
                    </h1>
                    <p className="text-slate-400 mb-12 text-lg">
                        Last Updated: February 2026
                    </p>

                    <div className="prose prose-invert prose-lg max-w-none text-slate-300">
                        <h2 className="text-white font-heading text-2xl mt-12 mb-6">1. Acceptance of Terms</h2>
                        <p className="mb-6">
                            By applying to BizCombinator, you agree to these Terms of Service. If you do not agree, you may not participate in the program.
                        </p>

                        <h2 className="text-white font-heading text-2xl mt-12 mb-6">2. Eligibility Requirements</h2>
                        <p className="mb-6">To qualify for the program, you must:</p>
                        <ul className="list-disc pl-6 space-y-4 mb-6">
                            <li>Be between 18 and 35 years old.</li>
                            <li>Have an active business operating for at least 6 months.</li>
                            <li>Not be in an excluded sector (e.g., gambling, alcohol, tobacco).</li>
                        </ul>

                        <h2 className="text-white font-heading text-2xl mt-12 mb-6">3. Participant Obligations</h2>
                        <p className="mb-6">Selected participants agree to:</p>
                        <ul className="list-disc pl-6 space-y-4 mb-6">
                            <li>
                                <strong className="text-white">Mandatory Attendance:</strong> You must attend the offline sessions (12 days). Repeated absence may result in expulsion.
                            </li>
                            <li>
                                <strong className="text-white">Transparency:</strong> You agree to share accurate sales and financial data with mentors. Falsifying business data is grounds for immediate termination.
                            </li>
                            <li>
                                <strong className="text-white">Execution:</strong> You commit to implementing the systems and tasks assigned during the program.
                            </li>
                        </ul>

                        <h2 className="text-white font-heading text-2xl mt-12 mb-6">4. Intellectual Property</h2>
                        <ul className="list-disc pl-6 space-y-4 mb-6">
                            <li>
                                <strong className="text-white">Our Content:</strong> All training materials, templates, frameworks, and curriculum provided by BizCombinator are our intellectual property and may not be resold or distributed.
                            </li>
                            <li>
                                <strong className="text-white">Your Data:</strong> You retain full ownership of your business data and intellectual property.
                            </li>
                        </ul>

                        <h2 className="text-white font-heading text-2xl mt-12 mb-6">5. No Guarantees of Results</h2>
                        <p className="mb-6">
                            While we aim for a 20% revenue growth target and provide support for obtaining loans/investments, BizCombinator does not guarantee specific financial results, funding, or business success. All business decisions remain your responsibility.
                        </p>

                        <h2 className="text-white font-heading text-2xl mt-12 mb-6">6. Limitation of Liability</h2>
                        <p className="mb-6">
                            BizCombinator and its mentors are educators and advisors. We are not liable for any business losses or legal issues arising from your business operations during or after the program.
                        </p>

                        <h2 className="text-white font-heading text-2xl mt-12 mb-6">7. Governing Law</h2>
                        <p className="mb-6">
                            These terms are governed by the laws of the Republic of Uzbekistan.
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
