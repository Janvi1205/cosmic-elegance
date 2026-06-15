import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const servicesList = [
  { title: "Relationship Problems", detail: "Expert solutions to resolve conflicts and bring harmony back to your relationship." },
  { title: "Business Problems", detail: "Overcome obstacles and attract growth, success, and prosperity in your business." },
  { title: "Career Problems", detail: "Find the right path and eliminate hurdles blocking your professional success." },
  { title: "Health Problems", detail: "Astrological remedies to support your overall well-being and speedy recovery." },
  { title: "Family Problems", detail: "Restore peace, understanding, and love among your family members." },
  { title: "Negative Energy Removal", detail: "Cleanse your aura and surroundings of negative influences and blockages." },
  { title: "Child Problems", detail: "Astrological guidance for your child's behavior, education, and bright future." },
  { title: "Horoscope Reading", detail: "Detailed analysis of your birth chart to predict and guide your life journey." },
  { title: "Kundli Making & Matching", detail: "Accurate birth chart creation and compatibility checks for a happy marriage." },
  { title: "Gem Stone Recommendation", detail: "Discover the lucky gemstones to enhance your planetary strengths." },
  { title: "Evil Eye Removal", detail: "Protect yourself and your loved ones from the malicious and envious evil eye." },
  { title: "Business & Job Problems", detail: "Effective astrological remedies to secure your job and boost business profits." },
  { title: "Education & Career Problem", detail: "Guidance to excel in studies and choose the right rewarding career path." },
  { title: "Marriage Predictions", detail: "Know exactly when and whom you will marry, and ensure a happy married life." },
  { title: "Bollywood Astrologer", detail: "Trusted astrological guidance for success and fame in the entertainment industry." },
  { title: "Lucky Number, Lucky Color", detail: "Find out the specific numbers and colors that bring you luck and fortune." },
  { title: "Are You Facing Problem In Your Marital Life?", detail: "Resolve marital discord and prevent separation or painful divorce." },
  { title: "Are You Facing Problem In Your Love Relationship?", detail: "Get your ex back and solve misunderstandings with your beloved partner." },
  { title: "Are You Facing The Problem Of Divorce?", detail: "Powerful remedies to stop an unwanted divorce and reunite with your spouse." },
  { title: "Are Your Children Out Of Your Control Or Are They Victims Of Bad Company?", detail: "Bring your children back on the right track with specialized astrological help." },
  { title: "Best Online Astrologer", detail: "Consult the most renowned, experienced, and accurate astrologer online." },
  { title: "Here Is Some Evil Eye On Your House.", detail: "Safeguard your home and family from negative vibrations and outside jealousy." },
  { title: "Love Problem Solution", detail: "Quick, effective, and permanent solutions for all your love-related issues." },
  { title: "Love Specialist Astrologer", detail: "Expert guidance and remedies to ensure a successful, lasting, and happy love life." },
  { title: "There Is A Sudden Problem In Your Business Or Job", detail: "Identify the hidden root cause of sudden downfalls and find quick, proven remedies." },
  { title: "Verified Astrologer In India", detail: "Trusted, genuine, highly experienced, and certified astrological services." },
  { title: "Your Love Has Gone Away From You?", detail: "Bring back lost love, rekindle the romance, and strengthen your bond." }
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
