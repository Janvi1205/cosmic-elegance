import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface NavItem {
  label: string;
  to: string;
}

const navLinks: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const isActive = (to: string) => location.pathname === to;

  const textColor = scrolled ? "text-foreground/70 hover:text-primary" : "text-cream/70 hover:text-cream";
  const activeColor = scrolled ? "text-primary font-semibold" : "text-cream font-semibold";
  const logoColor = scrolled ? "text-secondary" : "text-cream";

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md shadow-[var(--shadow-soft)]" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className={`font-heading text-2xl font-bold ${logoColor} transition-colors`}>
          Astrologer <span className="text-gold-gradient">Sanjeev Sharmaji</span>
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                to={link.to}
                className={`font-body text-sm font-medium transition-colors duration-200 ${
                  isActive(link.to) ? activeColor : textColor
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/contact"
              className="gold-gradient text-primary-foreground font-body text-sm font-semibold px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity"
            >
              Book Now
            </Link>
          </li>
        </ul>

        <button className={`md:hidden ${scrolled ? "text-foreground" : "text-cream"} transition-colors`} onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className={`block w-full text-left font-body text-base transition-colors ${
                isActive(link.to) ? "text-primary font-semibold" : "text-foreground/80 hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="gold-gradient text-primary-foreground font-body text-sm font-semibold px-5 py-2.5 rounded-full w-full block text-center"
          >
            Book Now
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
