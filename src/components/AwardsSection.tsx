import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import awardImg from "@/assets/award5.webp";
import award2 from "@/assets/award2.webp";
import award3 from "@/assets/award3.webp";
import award4 from "@/assets/award4.webp";
import award5 from "@/assets/award6.webp";
import award6 from "@/assets/award7.jpeg";
import award8 from "@/assets/award8.jpeg";

gsap.registerPlugin(ScrollTrigger);

const awards = [
  { title: "Award", img: award2, zoom: true },
  { title: "Certificate", img: awardImg },
  { title: "Award", img: award3 },
  { title: "Award", img: award4 },
  { title: "Certificate", img: award5 },
  { title: "Certificate", img: award6 },
  { title: "Certificate", img: award8 },
];

const AwardsSection = () => {
  const ref = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      const el = ref.current;
      if (!el) return;
      gsap.fromTo(".award-item", { y: 40, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.7, ease: "power3.out", stagger: 0.15,
        scrollTrigger: { trigger: el, start: "top 85%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="awards" className="section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <p className="font-body text-sm font-semibold text-primary tracking-widest uppercase mb-3">Recognition</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-8 md:mb-12">
          Awards & <span className="text-gold-gradient">Achievements</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 px-4 md:px-8 lg:px-16 max-w-6xl mx-auto">
          {awards.map((a, i) => (
            <div key={i} className="award-item opacity-0">
              <div className="glass-card rounded-2xl md:rounded-3xl overflow-hidden h-full flex flex-col border-none shadow-xl group">
                <div className="overflow-hidden relative h-[22rem] md:h-[28rem] w-full">
                  <img 
                    src={a.img} 
                    alt={a.title} 
                    className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${a.zoom ? "scale-110 group-hover:scale-125" : ""}`} 
                    loading="lazy" 
                  />
                </div>
                <div className="p-4 md:p-6 bg-white/50 backdrop-blur-sm mt-auto relative z-10 border-t border-white/20">
                  <p className="font-heading text-lg md:text-xl font-bold text-secondary">{a.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
