import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import loveProblemImg from "@/assets/lovesol.webp";
import loveMarriageImg from "@/assets/lovesol1.webp";
import familyImg from "@/assets/service-family.webp";
import husbandWifeImg from "@/assets/husband-wife-problem.webp";
import careerImg from "@/assets/career.webp";
import vashikaranImg from "@/assets/extra-marital.webp";
import foreignTravelImg from "@/assets/serv1.png";
import prImmigrationImg from "@/assets/serv2.png";

gsap.registerPlugin(ScrollTrigger);

const services = [
  { title: "Love Problem Solution", desc: "Personalized Vedic astrology consultation for relationship concerns and guidance.", img: loveProblemImg },
  { title: "Love Marriage Specialist", desc: "Personalized Vedic astrology consultation for love and inter-caste marriage guidance.", img: loveMarriageImg },
  { title: "Relationship Consultation", desc: "Personalized astrological consultation for relationship concerns and emotional guidance.", img: vashikaranImg },
  { title: "Family Problem Solution", desc: "Vedic astrology consultation for family harmony and personal guidance.", img: familyImg },
  { title: "Husband Wife Problem", desc: "Personalized astrological guidance for marital and relationship concerns.", img: husbandWifeImg },
  { title: "Career & Business", desc: "Astrology consultation for career planning, business decisions, and professional guidance.", img: careerImg },
  { title: "Foreign Travel & Visa Problems", desc: "Vedic astrology consultation related to foreign travel and educational or career decisions.", img: foreignTravelImg },
  { title: "PR & Immigration Issues", desc: "Vedic astrology consultation for immigration and relocation-related guidance.", img: prImmigrationImg },
];

const ServicesSection = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const cards = el.querySelectorAll(".service-card");
    const anim = gsap.fromTo(cards, { y: 50, opacity: 0 }, {
      y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power3.out",
      scrollTrigger: { trigger: cards[0], start: "top 85%" },
    });
    return () => { anim.kill(); };
  }, []);

  return (
    <section id="services" ref={ref} className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto text-center">
        <p className="font-body text-sm font-semibold text-primary tracking-widest uppercase mb-3">What I Offer</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-12">
          My <span className="text-gold-gradient">Services</span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="service-card glass-card rounded-2xl overflow-hidden hover-lift group text-left" style={{ opacity: 0 }}>
              <div className="h-48 overflow-hidden">
                <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" width={800} height={900} />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-lg font-bold text-secondary mb-2">{s.title}</h3>
                <p className="font-body text-sm text-muted-foreground mb-4 leading-relaxed">{s.desc}</p>
                <a
                  href="#contact"
                  className="inline-block font-body text-sm font-semibold px-5 py-2 rounded-full bg-primary text-white hover:opacity-90 active:scale-95 transition-all duration-200 shadow-md"
                >
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
