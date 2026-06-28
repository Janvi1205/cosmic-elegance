import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const servicesList = [
  { title: "Relationship Problems", detail: "Astrological guidance to help understand relationship dynamics and conflict resolution." },
  { title: "Business Problems", detail: "Astrological consultation for business analysis and decision-making support." },
  { title: "Career Problems", detail: "Personalized advice to help plan career paths and professional developments." },
  { title: "Health Problems", detail: "Astrological perspectives on well-being and lifestyle guidance based on birth charts." },
  { title: "Family Problems", detail: "Guidance for understanding family relationships and planetary influences." },
  { title: "Spiritual Energy Consultation", detail: "Insights and guidance on maintaining a balanced and positive spiritual environment." },
  { title: "Child Problems", detail: "Astrological insights for child development guidance and educational path suggestions." },
  { title: "Horoscope Reading", detail: "Detailed analysis of your birth chart to guide your life journey." },
  { title: "Kundli Making & Matching", detail: "Astrological analysis for compatibility and relationship guidance." },
  { title: "Gem Stone Recommendation", detail: "Discover gemstones traditionally recommended based on your birth chart." },
  { title: "Vedic Protection Consultation", detail: "Traditional guidance and astrological recommendations for spiritual well-being." },
  { title: "Business & Job Problems", detail: "Consultation and astrological guidance for business decisions and career progression." },
  { title: "Education & Career Problem", detail: "Educational counseling and career direction planning through birth chart insights." },
  { title: "Marriage & Compatibility Analysis", detail: "Astrological compatibility checks and timing analysis for relationship harmony." },
  { title: "Bollywood Astrologer", detail: "Astrological guidance and timing analysis for creative pursuits and media projects." },
  { title: "Planetary Color & Number Associations", detail: "Insights into colors and numbers aligned with your birth chart configurations." },
  { title: "Are You Facing Problem In Your Marital Life?", detail: "Spiritual advice and astrological consultation for marital understanding." },
  { title: "Are You Facing Problem In Your Love Relationship?", detail: "Relationship consultation for resolving differences and enhancing mutual understanding." },
  { title: "Are Facing The Problem Of Divorce?", detail: "Vedic astrology counseling to support couples facing marital challenges." },
  { title: "Are Your Children Out Of Your Control Or Are They Victims Of Bad Company?", detail: "Astrological guidance for family dynamics and parent-child relationship support." },
  { title: "Best Online Astrologer", detail: "Consult the most renowned, experienced, and accurate astrologer online." },
  { title: "Spiritual Well-being for Your Home", detail: "Traditional Vedic methods to encourage positive energy and peace in your living space." },
  { title: "Love Problem Solution", detail: "Astrological consultation and relationship guidance to support love and harmony." },
  { title: "Love Specialist Astrologer", detail: "Relationship advisory and compatibility analysis based on Vedic charts." },
  { title: "There Is A Sudden Problem In Your Business Or Job", detail: "Astrological timing analysis to understand career fluctuations and transitions." },
  { title: "Verified Astrologer In India", detail: "Trusted, genuine, highly experienced, and certified astrological services." },
  { title: "Your Love Has Gone Away From You?", detail: "Guidance on relationship reconciliation and understanding planetary transitions." },
  { title: "Foreign Travel & Overseas Settlement", detail: "Astrological analysis of birth chart indications for foreign travel and relocation." },
  { title: "PR (Permanent Residency) & Immigration Consultation", detail: "Vedic astrology advice concerning timings and possibilities for immigration plans." }
];

const FeaturedSection = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const el = ref.current;
      if (!el) return;
      
      // Animate cards on scroll
      gsap.fromTo(".featured-card", 
        { y: 30, opacity: 0 }, 
        {
          y: 0, opacity: 1, duration: 0.5, ease: "power2.out", stagger: 0.05,
          scrollTrigger: { trigger: el, start: "top 80%" },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="featured-services" ref={ref} className="section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <p className="font-body text-sm font-semibold text-primary tracking-widest uppercase mb-3">All Services</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-10 md:mb-16">
          Explore Our Range of <span className="text-gold-gradient">Expertises</span>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 px-4 md:px-0 text-left">
          {servicesList.map((s, i) => (
            <div key={i} className="featured-card opacity-0">
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
  );
};

export default FeaturedSection;
