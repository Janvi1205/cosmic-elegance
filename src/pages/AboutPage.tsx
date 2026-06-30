import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { Award, Heart, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import SEOHead from "@/components/SEOHead";
import aboutImg from "@/assets/about.webp";
import awardImg from "@/assets/award5.webp";
import ProgressiveImage from "@/components/common/ProgressiveImage";

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  { year: "Early Years", text: "Began studying Vedic astrology under the guidance of respected scholars, developing a deep understanding of ancient astrological scriptures and their practical applications." },
  { year: "Foundation", text: "After years of dedicated study, established a professional practice in Chandigarh, quickly gaining recognition for accurate readings and compassionate guidance." },
  { year: "Specialization", text: "Developed specialized expertise in love marriage and inter-caste marriage astrology — an area where families often face immense emotional and social pressure." },
  { year: "Present Day", text: "Trusted by thousands across India and abroad, continuing to provide personalized Vedic astrology consultations from chambers in Sector 18-C Chandigarh and Bathinda." },
];

const AboutPage = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".about-hero-img", { x: -60, opacity: 0 }, {
        x: 0, opacity: 1, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: ".about-hero-img", start: "top 80%" },
      });
      gsap.fromTo(".about-hero-text", { x: 60, opacity: 0 }, {
        x: 0, opacity: 1, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: ".about-hero-text", start: "top 80%" },
      });
      gsap.fromTo(".about-milestone", { y: 40, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.6, stagger: 0.15, ease: "power3.out",
        scrollTrigger: { trigger: ".about-milestone", start: "top 85%" },
      });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="min-h-screen bg-background">
      <SEOHead
        title="About Astrologer Sanjeev Sharmaji — 25+ Years Vedic Astrology Experience"
        description="Learn about Astrologer Sanjeev Sharmaji's 25+ years of Vedic astrology experience, specializing in love marriage, inter-caste marriage guidance, career, and family harmony consultations in Chandigarh and Bathinda."
        canonicalUrl="/about"
      />
      <Navbar />

      {/* Hero Section */}
      <section className="section-padding bg-muted/30 pt-32">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="about-hero-img flex items-center justify-center">
            <div className="rounded-3xl overflow-hidden shadow-[var(--shadow-elevated)] max-w-md w-full">
              <ProgressiveImage
                src={aboutImg}
                alt="Astrologer Sanjeev Sharmaji — Vedic Astrology Expert"
                width={800}
                height={900}
                className="max-h-[500px]"
              />
            </div>
          </div>
          <div className="about-hero-text">
            <p className="font-body text-sm font-semibold text-primary tracking-widest uppercase mb-3">About Me</p>
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-6">
              Reuniting Hearts & Building <span className="text-gold-gradient">Strong Relationships</span>
            </h1>
            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              I am Astrologer Sanjeev Sharmaji, a dedicated Vedic astrology practitioner with over 25 years of professional experience helping individuals and families navigate life's most challenging crossroads. Based in Chandigarh and Bathinda, I have conducted more than 10,000 personalized consultations and guided over 5,000 clients toward clarity, confidence, and peace of mind.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              My journey into the ancient science of Jyotish Shastra began at a young age, driven by a profound curiosity about how celestial movements influence human life, relationships, and destiny. Over the decades, I have honed my practice through continuous study of classical Vedic texts, mentorship under esteemed astrologers, and — most importantly — the real-world experience of thousands of client interactions spanning every walk of life.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              I specialize in love marriage and inter-caste marriage guidance — an area where I have helped countless couples navigate family opposition, social pressures, and emotional challenges with compassion and astrological insight. My approach combines traditional Vedic chart analysis, planetary transit evaluation, and practical remedial suggestions tailored to each individual's unique birth chart and circumstances.
            </p>
            <Link
              to="/contact"
              className="inline-block gold-gradient text-primary-foreground font-body text-sm font-semibold px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity shadow-[var(--shadow-gold)]"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-body text-sm font-semibold text-primary tracking-widest uppercase mb-3">My Journey</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary">
              Years of <span className="text-gold-gradient">Dedication</span>
            </h2>
          </div>
          <div className="space-y-8">
            {milestones.map((m, i) => (
              <div key={i} className="about-milestone flex gap-6 items-start">
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="font-heading text-sm font-bold text-primary">{m.year}</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full gold-gradient shadow-[var(--shadow-gold)]" />
                  {i < milestones.length - 1 && <div className="w-px h-full bg-gold/20 min-h-[60px]" />}
                </div>
                <div className="flex-1 pb-8">
                  <p className="font-body text-muted-foreground leading-relaxed">{m.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Highlight */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-5xl mx-auto text-center">
          <p className="font-body text-sm font-semibold text-primary tracking-widest uppercase mb-3">Recognition</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-8">
            Awards & <span className="text-gold-gradient">Credentials</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="rounded-3xl overflow-hidden shadow-[var(--shadow-elevated)]">
              <img src={awardImg} alt="Astrologer Sanjeev Sharmaji Award" className="w-full h-auto object-cover" loading="lazy" />
            </div>
            <div className="text-left space-y-4">
              <p className="font-body text-muted-foreground leading-relaxed">
                Over the course of my career, I have been honored with multiple awards and certificates recognizing my contributions to the field of Vedic astrology. These accolades reflect the trust placed in me by clients, peers, and astrology institutions alike.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                My credentials include certifications in Jyotish Shastra, recognition as a specialist in love and marriage astrology, and appreciation awards from community organizations for my guidance and service.
              </p>
              <div className="flex items-center gap-3 pt-4">
                <Star className="text-gold fill-gold" size={20} />
                <span className="font-body text-sm text-muted-foreground">Rated 4.9/5 by clients across India</span>
              </div>
              <div className="flex items-center gap-3">
                <Heart className="text-gold fill-gold" size={20} />
                <span className="font-body text-sm text-muted-foreground">Recognized Love Marriage Specialist</span>
              </div>
              <div className="flex items-center gap-3">
                <Award className="text-gold fill-gold" size={20} />
                <span className="font-body text-sm text-muted-foreground">15+ awards & certifications</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">
            Ready to Find <span className="text-gold">Clarity?</span>
          </h2>
          <p className="font-body text-secondary-foreground/70 mb-8">
            Book a personalized Vedic astrology consultation today and take the first step toward understanding your path.
          </p>
          <Link
            to="/contact"
            className="inline-block gold-gradient text-primary-foreground font-body text-sm font-semibold px-10 py-4 rounded-full hover:opacity-90 transition-opacity shadow-[var(--shadow-gold)]"
          >
            Book Your Consultation
          </Link>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default AboutPage;
