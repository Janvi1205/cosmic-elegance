import { lazy, Suspense, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FloatingButtons from "@/components/FloatingButtons";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

// Lazy load all sections below the fold
const AboutSection = lazy(() => import("@/components/AboutSection"));
const AwardsSection = lazy(() => import("@/components/AwardsSection"));
const ServicesSection = lazy(() => import("@/components/ServicesSection"));
const FeaturedSection = lazy(() => import("@/components/FeaturedSection"));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));
const SectionDivider = lazy(() => import("@/components/SectionDivider"));

// Loading placeholder for Suspense
const SectionLoader = () => (
  <div className="section-padding flex items-center justify-center min-h-[400px]">
    <div className="animate-pulse flex flex-col items-center gap-4">
      <div className="w-12 h-12 rounded-full border-2 border-gold/20 border-t-gold animate-spin" />
      <span className="text-gold/40 font-body text-sm">Aligning the Stars...</span>
    </div>
  </div>
);

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace("#", "");
      const el = document.getElementById(targetId);
      if (el) {
        // Wait a short duration for lazy sections to finish loading
        const timer = setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 150);
        return () => clearTimeout(timer);
      }
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Astrologer Sanjeev Sharmaji — Best Vedic Astrologer in Chandigarh"
        description="Personalized Vedic astrology guidance for love, marriage, career, and life's toughest challenges. 25+ years experience, 10,000+ consultations. Book now with Astrologer Sanjeev Sharmaji."
        canonicalUrl="/"
      />
      <Navbar />
      <HeroSection />
      
      <Suspense fallback={<SectionLoader />}>
        <SectionDivider />
        <AboutSection />
        <SectionDivider />
        <ServicesSection />
        <SectionDivider />
        <AwardsSection />
        <SectionDivider />
        <FeaturedSection />
        <SectionDivider />
        <TestimonialsSection />
        <SectionDivider />
        <ContactSection />
        <Footer />
      </Suspense>
      
      <FloatingButtons />
    </div>
  );
};

export default Index;
