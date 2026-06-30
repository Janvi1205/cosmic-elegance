import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import SEOHead from "@/components/SEOHead";

gsap.registerPlugin(ScrollTrigger);

const reviews = [
  { name: "Priya Sharma", subtitle: "RELATIONSHIP HEALING", text: "Astrologer Sanjeev Sharmaji's guidance was incredibly insightful. His perspective helped me understand my relationship dynamics during a difficult time. Forever grateful!", rating: 5 },
  { name: "Rahul Verma", subtitle: "CAREER GROWTH", text: "I was facing career uncertainty. Astrologer Sanjeev Sharmaji's advice and guidance gave me the clarity and confidence to make strategic professional decisions. Truly valuable guidance.", rating: 5 },
  { name: "Anita Patel", subtitle: "MARRIAGE HARMONY", text: "We were facing complex marital challenges. Astrologer Sanjeev Sharmaji's consultation helped us understand our astrological compatibility and work towards harmony in our relationship.", rating: 5 },
  { name: "Vikash Kumar", subtitle: "TRUSTED ASTROLOGER", text: "Best astrologer I have ever consulted. Very patient, understanding, and the advice is highly practical. Highly recommended!", rating: 5 },
  { name: "Sunita Devi", subtitle: "LOVE MARRIAGE GUIDANCE", text: "Astrologer Sanjeev Sharmaji provided great support and advice regarding our family relationship concerns. His guidance was extremely comforting. Thank you so much!", rating: 5 },
];

const TestimonialsPage = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % reviews.length);
  const prev = () => setCurrent((c) => (c - 1 + reviews.length) % reviews.length);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".testi-hero", { y: 40, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ".testi-hero", start: "top 80%" },
      });
      gsap.fromTo(".testi-grid-card", { y: 40, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.6, stagger: 0.12, ease: "power3.out",
        scrollTrigger: { trigger: ".testi-grid-card", start: "top 85%" },
      });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, []);

  const review = reviews[current];

  return (
    <div ref={pageRef} className="min-h-screen bg-background">
      <SEOHead
        title="Client Testimonials — What People Say About Astrologer Sanjeev Sharmaji"
        description="Read genuine testimonials from clients of Astrologer Sanjeev Sharmaji. Trusted by thousands for relationship healing, career growth, marriage harmony, and love marriage guidance."
        canonicalUrl="/testimonials"
      />
      <Navbar />

      {/* Hero Carousel Section */}
      <section className="section-padding bg-[#080d17] relative overflow-hidden pt-32">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="flex justify-center mb-8">
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-gold/30 text-gold text-xs font-bold tracking-[0.2em] uppercase bg-gold/5 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
              Testimonials
            </span>
          </div>

          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-medium mb-16 leading-[1.15]">
            <span className="text-cream block">Voices of</span>
            <span className="text-gold block mt-1">Transformation</span>
          </h1>

          <div className="testi-hero relative">
            {/* Quote Icon */}
            <div className="absolute -top-7 left-8 md:left-12 z-20 bg-[#080d17] px-2">
              <svg width="42" height="42" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gold">
                <path d="M10 9C10 6.23858 7.76142 4 5 4C2.23858 4 0 6.23858 0 9C0 11.2355 1.46452 13.129 3.47355 13.784L1.87157 18.5901C1.5284 19.6196 2.29656 20.6667 3.38197 20.6667H6.00001C6.67134 20.6667 7.26629 20.218 7.46979 19.5701L9.77382 12.2307C9.92389 11.7525 10 11.2519 10 10.7431V9ZM24 9C24 6.23858 21.7614 4 19 4C16.2386 4 14 6.23858 14 9C14 11.2355 15.4645 13.129 17.4735 13.784L15.8716 18.5901C15.5284 19.6196 16.2966 20.6667 17.382 20.6667H20C20.6713 20.6667 21.2663 20.218 21.4698 19.5701L23.7738 12.2307C23.9239 11.7525 24 11.2519 24 10.7431V9Z" fill="currentColor"/>
              </svg>
            </div>

            <div className="bg-[#121927] border border-gold/20 rounded-[2rem] p-8 md:p-14 relative z-10 shadow-2xl">
              <div className="flex justify-center gap-1.5 mb-8">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} size={18} className="fill-gold text-gold" />
                ))}
              </div>

              <p className="font-heading text-xl md:text-2xl text-cream/90 leading-relaxed mb-8 min-h-[100px] text-center">
                "{review.text}"
              </p>

              <div className="text-center mb-10">
                <p className="font-heading text-lg font-bold text-gold mb-1">{review.name}</p>
                <p className="font-body text-[10px] text-cream/40 tracking-[0.2em] uppercase">{review.subtitle}</p>
              </div>

              {/* Navigation */}
              <div className="flex justify-center items-center gap-5">
                <button onClick={prev} className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold/10 transition-colors">
                  <ChevronLeft size={18} />
                </button>
                <div className="flex items-center gap-2.5">
                  {reviews.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrent(i)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? "w-6 bg-gold" : "w-1.5 bg-gold/20 hover:bg-gold/40"}`}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>
                <button onClick={next} className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold/10 transition-colors">
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-body text-sm font-semibold text-primary tracking-widest uppercase mb-3">All Reviews</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary">
              What Our <span className="text-gold-gradient">Clients Say</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <div key={i} className="testi-grid-card glass-card rounded-2xl p-8 flex flex-col">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: r.rating }).map((_, j) => (
                    <Star key={j} size={16} className="fill-gold text-gold" />
                  ))}
                </div>
                <Quote size={24} className="text-gold/30 mb-3" />
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                  "{r.text}"
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-heading text-base font-bold text-secondary">{r.name}</p>
                  <p className="font-body text-[10px] text-muted-foreground tracking-[0.15em] uppercase mt-1">{r.subtitle}</p>
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
            Join Thousands of <span className="text-gold">Satisfied Clients</span>
          </h2>
          <p className="font-body text-secondary-foreground/70 mb-8">
            Experience the guidance that has transformed lives. Book your personalized Vedic astrology consultation today.
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

export default TestimonialsPage;
