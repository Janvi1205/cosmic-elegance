import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { Sparkles, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import SEOHead from "@/components/SEOHead";

// Service images from existing ServicesSection
import loveProblemImg from "@/assets/lovesol.webp";
import loveMarriageImg from "@/assets/lovesol1.webp";
import familyImg from "@/assets/service-family.webp";
import husbandWifeImg from "@/assets/husband-wife-problem.webp";
import careerImg from "@/assets/career.webp";
import vashikaranImg from "@/assets/extra-marital.webp";
import foreignTravelImg from "@/assets/serv1.png";
import prImmigrationImg from "@/assets/serv2.png";

gsap.registerPlugin(ScrollTrigger);

const mainServices = [
  {
    title: "Love Problem Solution",
    desc: "Facing challenges in your love life? Whether it's misunderstandings, compatibility issues, or opposition from family, my Vedic astrology consultations offer personalized guidance. Through birth chart analysis and planetary assessments, I help you understand relationship dynamics and find practical paths toward resolution and harmony.",
    img: loveProblemImg,
  },
  {
    title: "Love Marriage Specialist",
    desc: "Love marriages — especially inter-caste unions — often face immense social and familial pressure. With over 25 years of experience guiding couples through these situations, I provide astrological compatibility analysis, timing guidance, and practical advice to help you navigate family discussions with confidence and mutual respect.",
    img: loveMarriageImg,
  },
  {
    title: "Relationship Consultation",
    desc: "Every relationship carries its own energy and dynamics. Through personalized astrological consultation, I help individuals and couples understand their emotional patterns, compatibility factors, and planetary influences affecting their bonds. My goal is to offer clarity and actionable guidance for healthier, more fulfilling connections.",
    img: vashikaranImg,
  },
  {
    title: "Family Problem Solution",
    desc: "Family conflicts can deeply affect your peace and well-being. Using Vedic astrology principles, I analyze the planetary configurations influencing family dynamics and provide guidance on restoring harmony. Whether it's generational issues, in-law challenges, or household tension, I offer insights rooted in traditional wisdom.",
    img: familyImg,
  },
  {
    title: "Husband Wife Problem",
    desc: "Marital difficulties can arise from misunderstandings, personality clashes, or external pressures. I provide astrological guidance to help couples understand each other's perspectives, identify planetary influences on their relationship, and work toward reconciliation and renewed understanding.",
    img: husbandWifeImg,
  },
  {
    title: "Career & Business",
    desc: "Unsure about your career path or facing business challenges? My astrology consultations analyze your birth chart to identify favorable periods for career moves, business decisions, and professional growth. I provide guidance on timing, direction, and strategies aligned with your planetary positions.",
    img: careerImg,
  },
  {
    title: "Foreign Travel & Visa Problems",
    desc: "Dreaming of going abroad for studies, work, or settlement? Vedic astrology can provide insights into the timing and likelihood of foreign travel opportunities. I analyze specific houses and planetary transits in your birth chart to guide your decisions around visa applications and overseas journeys.",
    img: foreignTravelImg,
  },
  {
    title: "PR & Immigration Issues",
    desc: "Immigration and permanent residency decisions are life-changing. Through detailed chart analysis, I help clients understand the astrological timing for relocation decisions, identify potential obstacles, and choose favorable periods for applications and transitions.",
    img: prImmigrationImg,
  },
];

// Additional services from FeaturedSection (Love Solutions folded in)
const additionalServices = [
  { title: "Horoscope Reading", detail: "Detailed analysis of your birth chart to guide your life journey." },
  { title: "Kundli Making & Matching", detail: "Astrological analysis for compatibility and relationship guidance." },
  { title: "Marriage & Compatibility Analysis", detail: "Astrological compatibility checks and timing analysis for relationship harmony." },
  { title: "Gem Stone Recommendation", detail: "Discover gemstones traditionally recommended based on your birth chart." },
  { title: "Vedic Protection Consultation", detail: "Traditional guidance and astrological recommendations for spiritual well-being." },
  { title: "Spiritual Well-being for Your Home", detail: "Traditional Vedic methods to encourage positive energy and peace in your living space." },
  { title: "Spiritual Energy Consultation", detail: "Insights and guidance on maintaining a balanced and positive spiritual environment." },
  { title: "Health & Well-being Guidance", detail: "Astrological perspectives on well-being and lifestyle guidance based on birth charts." },
  { title: "Child & Education Guidance", detail: "Astrological insights for child development guidance and educational path suggestions." },
  { title: "Planetary Color & Number Associations", detail: "Insights into colors and numbers aligned with your birth chart configurations." },
  { title: "Love Specialist Astrologer", detail: "Relationship advisory and compatibility analysis based on Vedic charts." },
  { title: "Bollywood Astrologer", detail: "Astrological guidance and timing analysis for creative pursuits and media projects." },
  { title: "Best Online Astrologer", detail: "Consult the most renowned, experienced, and accurate astrologer online." },
  { title: "Foreign Travel & Overseas Settlement", detail: "Astrological analysis of birth chart indications for foreign travel and relocation." },
  { title: "PR (Permanent Residency) & Immigration Consultation", detail: "Vedic astrology advice concerning timings and possibilities for immigration plans." },
];

const ServicesPage = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".service-main-card", { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power3.out",
        scrollTrigger: { trigger: ".service-main-card", start: "top 85%" },
      });
      gsap.fromTo(".service-extra-card", { y: 30, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.5, stagger: 0.05, ease: "power2.out",
        scrollTrigger: { trigger: ".service-extra-card", start: "top 85%" },
      });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="min-h-screen bg-background">
      <SEOHead
        title="Astrology Services — Love, Marriage, Career & Family Guidance"
        description="Explore Vedic astrology services by Astrologer Sanjeev Sharmaji: love problem solutions, marriage guidance, career consulting, family harmony, horoscope reading, Kundli matching, and more."
        canonicalUrl="/services"
      />
      <Navbar />

      {/* Header */}
      <section className="section-padding bg-muted/30 pt-32 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="font-body text-sm font-semibold text-primary tracking-widest uppercase mb-3">What I Offer</p>
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-secondary mb-6">
            My <span className="text-gold-gradient">Services</span>
          </h1>
          <p className="font-body text-muted-foreground leading-relaxed">
            I offer a comprehensive range of Vedic astrology consultations tailored to your unique birth chart and life circumstances. From love and relationship guidance to career planning and family harmony, every session is personalized with care and deep astrological insight.
          </p>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((s, i) => (
              <div key={i} className="service-main-card glass-card rounded-2xl overflow-hidden hover-lift group text-left">
                <div className="h-52 overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                    width={800}
                    height={900}
                  />
                </div>
                <div className="p-6">
                  <h2 className="font-heading text-lg font-bold text-secondary mb-3">{s.title}</h2>
                  <p className="font-body text-sm text-muted-foreground mb-4 leading-relaxed">{s.desc}</p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 font-body text-sm font-semibold px-5 py-2 rounded-full bg-primary text-white hover:opacity-90 active:scale-95 transition-all duration-200 shadow-md"
                  >
                    Book Now <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services — folded-in Love Solutions / Featured content */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-7xl mx-auto text-center">
          <p className="font-body text-sm font-semibold text-primary tracking-widest uppercase mb-3">All Services</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-10 md:mb-14">
            Explore Our Range of <span className="text-gold-gradient">Expertises</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 text-left">
            {additionalServices.map((s, i) => (
              <div key={i} className="service-extra-card">
                <div className="bg-[#fef8e6]/90 hover:bg-white text-secondary rounded-2xl p-5 flex items-start gap-4 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer border border-[#f5e6d3] h-full group">
                  <div className="bg-white group-hover:bg-[#fef8e6] p-2.5 rounded-full shadow-sm flex-shrink-0 mt-0.5 transition-colors duration-300">
                    <Sparkles className="text-[#8B5CF6] w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-bold text-secondary leading-tight mb-1.5 pr-2 group-hover:text-primary transition-colors duration-300">{s.title}</h3>
                    <p className="text-xs md:text-sm text-foreground/80 leading-relaxed">{s.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">
            Need <span className="text-gold">Guidance?</span>
          </h2>
          <p className="font-body text-secondary-foreground/70 mb-8">
            Every journey begins with a single step. Book your personalized consultation and let the stars illuminate your path forward.
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

export default ServicesPage;
