
"use client";

import Hero from "@/components/Hero";
import GapSection from "@/components/GapSection";
import Features from "@/components/Features";
import MentorsGrid from "@/components/MentorsGrid";
import Timeline from "@/components/Timeline";
import GlobalReach from "@/components/GlobalReach";
import BusinessTypes from "@/components/BusinessTypes";
import ApplyForm from "@/components/ApplyForm";
import QuickContact from "@/components/QuickContact";
import Navbar from "@/components/Navbar";
import BizAiWidget from "@/components/BizAiWidget";
import Footer from "@/components/Footer";
import ScrollShowcase from "@/components/ScrollShowcase";

export default function Home() {
  return (
    <main className="min-h-screen text-white selection:bg-primary/30">
      <Navbar />
      <Hero />
      <GapSection />
      <Features />
      <BusinessTypes />
      <MentorsGrid />
      <Timeline />
      <QuickContact />
      <GlobalReach />
      <ScrollShowcase />
      <ApplyForm />

      <BizAiWidget />

      <Footer />
    </main>
  );
}
