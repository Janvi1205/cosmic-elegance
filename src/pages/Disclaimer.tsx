import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Disclaimer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-grow pt-28 pb-16 px-6 md:px-12 max-w-4xl mx-auto w-full">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-secondary mb-8 text-center">
          <span className="text-gold-gradient">Disclaimer</span>
        </h1>
        <div className="glass-card p-8 md:p-12 space-y-6 text-foreground/80 leading-relaxed font-body">
          <p>
            The astrology consultations and information provided on this website are intended solely for spiritual guidance and personal insight.
          </p>
          <p>
            Astrology should not be considered a substitute for professional medical, legal, financial, or psychological advice.
          </p>
          <p>
            Results and experiences vary from person to person.
          </p>
          <p>
            No specific outcomes, guarantees, or assurances are made regarding consultations, remedies, predictions, or recommendations.
          </p>
          <p>
            By using this website, you acknowledge that any decisions made based on consultations are your own responsibility.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Disclaimer;
