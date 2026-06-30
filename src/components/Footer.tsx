import { Phone, Mail, MapPin, ArrowUp, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "Contact", to: "/contact" },
];

const serviceAreas = [
  "Love Problem Solution in Chandigarh",
  "Career & Business in Chandigarh",
  "Marriage Solution in Chandigarh",
  "Family Issues in Chandigarh",
  "Relationship Consultation in Chandigarh",
  "Horoscope Matching in Chandigarh",
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-secondary text-cream overflow-hidden">
      {/* Decorative background accent */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -mb-48 -mr-48" />
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-[80px] -mt-32 -ml-32" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link to="/" className="font-heading text-2xl font-bold text-cream block">
              Astrologer <span className="text-gold-gradient">Sanjeev Sharmaji</span>
            </Link>
            <p className="font-body text-sm text-cream/60 leading-relaxed max-w-xs">
              Empowering lives through the ancient wisdom of Vedic astrology. Trusted by thousands for clarity in love, career, and life's journey.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-bold text-gold mb-8">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="font-body text-sm text-cream/60 hover:text-gold hover:translate-x-1 transition-all">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-lg font-bold text-gold mb-8">Service Areas</h4>
            <ul className="space-y-4">
              {serviceAreas.map((item) => (
                <li key={item}>
                  <Link to="/services" className="font-body text-sm text-cream/60 hover:text-gold hover:translate-x-1 transition-all text-left">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-heading text-lg font-bold text-gold mb-8">Get In Touch</h4>
            <div className="space-y-5">
              <a href="tel:+919988174274" className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold group-hover:scale-110 transition-transform flex-shrink-0">
                  <Phone size={18} />
                </div>
                <span className="font-body text-sm text-cream/60 group-hover:text-gold transition-colors">+91 99881 74274</span>
              </a>
              <a href="mailto:Sanjeevsharma1981986@gmail.com" className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold group-hover:scale-110 transition-transform flex-shrink-0">
                  <Mail size={18} />
                </div>
                <span className="font-body text-sm text-cream/60 group-hover:text-gold transition-colors break-all">Sanjeevsharma1981986@gmail.com</span>
              </a>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold flex-shrink-0">
                  <MapPin size={18} />
                </div>
                <p className="font-body text-sm text-cream/50 leading-relaxed">
                  Sector 18-C Chandigarh & Bathinda
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-10 border-t border-cream/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="font-body text-xs text-cream/30 flex items-center gap-1">
              &copy; {new Date().getFullYear()} Astrologer Sanjeev Sharmaji. Crafted with <Heart size={12} className="text-gold fill-gold" />
            </p>
            <div className="flex items-center gap-8 text-xs text-cream/30 font-body flex-wrap justify-center">
              <Link to="/privacy-policy" className="hover:text-gold transition-colors">Privacy Policy</Link>
              <Link to="/terms-and-conditions" className="hover:text-gold transition-colors">Terms & Conditions</Link>
              <Link to="/disclaimer" className="hover:text-gold transition-colors">Disclaimer</Link>
              <Link to="/about" className="hover:text-gold transition-colors">About</Link>
              <Link to="/services" className="hover:text-gold transition-colors">Services</Link>
              <Link to="/testimonials" className="hover:text-gold transition-colors">Testimonials</Link>
              <Link to="/contact" className="hover:text-gold transition-colors">Contact</Link>
              <button
                onClick={scrollToTop}
                className="w-10 h-10 rounded-full gold-gradient text-primary-foreground flex items-center justify-center hover:scale-110 transition-transform shadow-[var(--shadow-gold)]"
                aria-label="Scroll to top"
              >
                <ArrowUp size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative bottom line */}
      <div className="h-1.5 w-full gold-gradient" />
    </footer>
  );
};

export default Footer;
