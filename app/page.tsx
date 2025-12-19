
"use client";

import Hero from "@/components/Hero";
import GapSection from "@/components/GapSection";
import Features from "@/components/Features";
import MentorsGrid from "@/components/MentorsGrid";
import Timeline from "@/components/Timeline";
import GlobalReach from "@/components/GlobalReach";
import BusinessTypes from "@/components/BusinessTypes";
import ApplyForm from "@/components/ApplyForm";
import Navbar from "@/components/Navbar";
import BizAiWidget from "@/components/BizAiWidget";
import Footer from "@/components/Footer";
import ScrollShowcase from "@/components/ScrollShowcase";
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = anchor.getAttribute('href');
        if (href) {
          document.querySelector(href)?.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <main className="min-h-screen text-white selection:bg-primary/30">
      <Navbar />
      <Hero />
      <GapSection />
      <Features />
      <BusinessTypes />
      <MentorsGrid />
      <Timeline />
      <GlobalReach />
      <ScrollShowcase />
      <ApplyForm />

      <BizAiWidget />

      <Footer />
    </main>
  );
}
