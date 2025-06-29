"use client";

import { Navigation } from '@/components/navigation';
import { HeroSection } from '@/components/hero-section';
import { FeaturesSection } from '@/components/features-section';
import { PortfolioSection } from '@/components/portfolio-section';
import { AboutSection } from '@/components/about-section';
import { StylesSection } from '@/components/styles-section';
import { TestimonialsSection } from '@/components/testimonials-section';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/sonner';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <PortfolioSection />
      <AboutSection />
      <StylesSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <Toaster />
    </main>
  );
}