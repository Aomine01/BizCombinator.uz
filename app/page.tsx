
"use client";

import { useEffect } from "react";
import Hero from "@/components/Hero";
import GapSection from "@/components/GapSection";
import Features from "@/components/Features";
import Curriculum from "@/components/Curriculum";
import MentorsGrid from "@/components/MentorsGrid";
import Timeline from "@/components/Timeline";
import GlobalReach from "@/components/GlobalReach";
import BusinessTypes from "@/components/BusinessTypes";
import FAQ from "@/components/FAQ";
import ApplyForm from "@/components/ApplyForm";
import Navbar from "@/components/Navbar";
import BizAiWidget from "@/components/BizAiWidget";
import Footer from "@/components/Footer";

export default function Home() {
  // Handle hash navigation when coming from other pages
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  return (
    <main className="min-h-screen text-white selection:bg-primary/30">
      {/* NAVIGATION */}
      <Navbar />

      {/* ACT 1: THE HOOK & THE PAIN */}
      <Hero />             {/* Hook: "Turn Business into System" */}
      <GapSection />       {/* Pain: "Chief Everything Officer?" */}

      {/* ACT 2: THE SOLUTION & QUALIFICATION */}
      <Features />         {/* About Program: 12 Days, Offline, Tashkent */}
      <BusinessTypes />    {/* Qualification: "Who is this for?" */}

      {/* ACT 3: THE AUTHORITY & EDUCATION */}
      <MentorsGrid />      {/* Authority: Show the experts FIRST to build trust */}
      <Curriculum />       {/* Education: Now they trust the teachers, show the content */}

      {/* ACT 4: THE DESIRE & THE PATH */}
      <GlobalReach />      {/* Results: The Destination - +20% Growth, Systematization */}
      <Timeline />         {/* The Path: App -> Interview -> Graduation */}

      {/* ACT 5: OBJECTION HANDLING & CONVERSION */}
      <FAQ />              {/* Kill doubts before the ask */}
      <ApplyForm />        {/* PRIMARY CTA: The "Big Ask" */}

      {/* UTILITIES */}
      <BizAiWidget />      {/* Floating Helper */}
      <Footer />           {/* Links to "For Investors" go here */}
    </main>
  );
}

