import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { trackConversion } from "@/lib/googleAds";

gsap.registerPlugin(ScrollTrigger);

const contactInfo = [
  { icon: Phone, label: "CALL", value: "+91 99881 74274", href: "tel:+919988174274" },
  { icon: Mail, label: "EMAIL", value: "Sanjeevsharma1981986@gmail.com", href: "mailto:Sanjeevsharma1981986@gmail.com" },
  { icon: MapPin, label: "CHAMBER", value: "Sector 18-C Chandigarh & Bathinda" },
];

const services = [
  "Love Problem Consultation",
  "Career & Business Guidance",
  "Marriage Guidance",
  "Family Harmony Consultation",
  "Relationship Consultation",
  "Spiritual Well-being Guidance",
  "Other Consultation"
];

const ContactSection = () => {
  const ref = useRef<HTMLElement>(null);
  const [form, setForm] = useState({ name: "", service: "", message: "" });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const anim = gsap.fromTo(el.querySelector(".contact-content")!, { y: 40, opacity: 0 }, {
      y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top 80%" },
    });
    return () => { anim.kill(); };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackConversion();
    const msg = encodeURIComponent(`Hello Astrologer Sanjeev Sharmaji, I would like to book a consultation.\n\nName: ${form.name}\nService: ${form.service}\nMessage: ${form.message}`);
    window.open(`https://wa.me/919988174274?text=${msg}`, "_blank");
  };

  return (
    <section id="contact" ref={ref} className="section-padding bg-background relative overflow-hidden py-24">
      <div className="relative z-10 max-w-5xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-14">
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-gold/30 text-gold text-xs font-bold tracking-[0.2em] uppercase bg-white shadow-sm">
              <span className="text-gold font-body font-bold text-[10px]">#</span>
              BOOK CONSULTATION
            </span>
          </div>
          
          <h2 className="font-heading text-4xl md:text-[2.75rem] font-medium text-secondary mb-4 leading-tight">
            Book Your <span className="text-gold">Consultation</span>
          </h2>
          <p className="font-body text-secondary/60 text-sm max-w-xl mx-auto">
            Share your details and we'll reach out personally to schedule your private session.
          </p>
        </div>

        {/* Content Layout */}
        <div className="contact-content grid grid-cols-1 lg:grid-cols-[1.3fr_1.5fr] gap-6 items-stretch" style={{ opacity: 0 }}>
          
          {/* Left Side: Connect Directly */}
          <div className="order-2 lg:order-1 bg-[#080d17] rounded-3xl p-8 md:p-10 shadow-2xl flex flex-col w-full text-left relative overflow-hidden">
            {/* Subtle glow effect inside dark card */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gold/5 rounded-full blur-[50px] pointer-events-none" />
            
            <h3 className="font-heading text-[1.75rem] text-cream mb-4 relative z-10">Connect Directly</h3>
            <p className="font-body text-cream/70 text-[13px] leading-relaxed mb-10 relative z-10 pr-4">
              Personal guidance is just a message away. Reach out via call, email, or visit our consultation chamber.
            </p>

            <div className="flex flex-col gap-6 flex-1 relative z-10">
              {contactInfo.map((c, i) => {
                const Icon = c.icon;
                return (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 min-w-[40px] min-h-[40px] rounded-xl border border-gold/30 flex items-center justify-center flex-shrink-0 bg-gold/10">
                      <Icon size={18} className="text-gold" />
                    </div>
                    <div className="flex-1 min-w-0 pt-0.5">
                      <p className="font-body text-[10px] font-bold text-gold tracking-widest mb-1 uppercase opacity-90">{c.label}</p>
                      {c.href ? (
                        <a href={c.href} className="font-body text-cream text-[13px] sm:text-[15px] font-medium hover:text-gold transition-colors block break-all sm:break-words">
                          {c.value}
                        </a>
                      ) : (
                        <p className="font-body text-cream text-[13px] sm:text-[15px] font-medium leading-snug break-words pr-2">
                          {c.value}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="order-1 lg:order-2 bg-white rounded-3xl p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-black/[0.03] w-full text-left">
            <form onSubmit={handleSubmit} className="space-y-6 h-full flex flex-col">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="font-body text-[11px] font-bold text-secondary uppercase tracking-wide flex items-center gap-1">
                    Your Name <span className="text-gold">*</span>
                  </label>
                  <input
                    type="text" placeholder="Enter your name" required
                    value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-[#f4f2ee] border-none rounded-xl px-4 py-3.5 font-body text-[13px] text-secondary placeholder:text-secondary/40 focus:outline-none focus:ring-2 focus:ring-gold/30 transition-all"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="font-body text-[11px] font-bold text-secondary uppercase tracking-wide flex items-center gap-1">
                    Select Service <span className="text-gold">*</span>
                  </label>
                  <div className="relative">
                    <select
                      required
                      value={form.service} 
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full bg-[#f4f2ee] border-none rounded-xl px-4 py-3.5 font-body text-[13px] text-secondary appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold/30 transition-all"
                    >
                      <option value="" disabled className="text-secondary/40">Love and marriage harmony</option>
                      {services.map((s) => (
                        <option key={s} value={s} className="text-secondary">{s}</option>
                      ))}
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-secondary/50">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2 flex-1 flex flex-col">
                <label className="font-body text-[11px] font-bold text-secondary uppercase tracking-wide">
                  Describe your concern or question...
                </label>
                <textarea
                  placeholder="Briefly share what guidance you seek..." required
                  value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-[#f4f2ee] border-none rounded-xl px-4 py-4 font-body text-[13px] text-secondary placeholder:text-secondary/40 focus:outline-none focus:ring-2 focus:ring-gold/30 transition-all resize-none flex-1 min-h-[140px]"
                />
              </div>
              
              <div className="pt-2">
                <button 
                  type="submit" 
                  className="w-full bg-[#D4AF37] hover:bg-[#C5A028] text-secondary font-body font-bold text-[14px] py-3.5 rounded-xl inline-flex items-center justify-center gap-2 transition-all shadow-md active:scale-[0.98]"
                >
                  <MessageCircle size={18} className="text-secondary" /> Book Now
                </button>
                <p className="text-center font-body text-[10px] text-secondary/40 mt-4 tracking-wide">
                  By submitting, you'll be redirected to WhatsApp to confirm your booking.
                </p>
                <p className="text-center font-body text-[9px] text-secondary/50 mt-3 border-t border-black/5 pt-3 leading-relaxed">
                  <strong>Disclaimer:</strong> Astrology consultations are provided for spiritual guidance and personal insight only. Results may vary from person to person. No specific outcomes or guarantees are promised.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
