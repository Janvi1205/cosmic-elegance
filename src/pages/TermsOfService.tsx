import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-grow pt-28 pb-16 px-6 md:px-12 max-w-4xl mx-auto w-full">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-secondary mb-8 text-center">
          <span className="text-gold-gradient">Terms of Service</span>
        </h1>
        <div className="glass-card p-8 md:p-12 space-y-6 text-foreground/80 leading-relaxed font-body">
          <p>
            Welcome to the website of Astrologer Sanjeev Sharmaji. By accessing and using this website, you accept and agree to be bound by the terms and conditions outlined below. If you do not agree, please do not use this site.
          </p>

          <h2 className="font-heading text-xl font-bold text-secondary mt-6 mb-2">1. Use of the Site & Services</h2>
          <p>
            You agree to use this site only for lawful purposes. You must be at least 18 years of age to book a consultation or receive astrology services. The content provided on this website is for informational and spiritual guidance purposes.
          </p>

          <h2 className="font-heading text-xl font-bold text-secondary mt-6 mb-2">2. Consultation & Advice Disclaimer</h2>
          <p>
            Astrology consultations, insights, and recommendations are based on interpretation of Vedic charts. They are intended solely for personal reflection and guidance. Astrology should not be used as a substitute for professional legal, medical, financial, or psychological advice. Decisions made based on consultations are your sole responsibility.
          </p>

          <h2 className="font-heading text-xl font-bold text-secondary mt-6 mb-2">3. Accuracy of Information</h2>
          <p>
            While we strive to provide accurate insights, we make no guarantees, assurances, or promises regarding the correctness, timeline, or outcomes of predictions. Astrology interpretation is subjective and experiences vary from person to person.
          </p>

          <h2 className="font-heading text-xl font-bold text-secondary mt-6 mb-2">4. User Commitments</h2>
          <p>
            When utilizing our contact form, you agree to provide truthful, accurate, and current information. You are responsible for any communications you send through the website.
          </p>

          <h2 className="font-heading text-xl font-bold text-secondary mt-6 mb-2">5. Intellectual Property</h2>
          <p>
            All content, designs, logos, and materials displayed on this website are the property of Astrologer Sanjeev Sharmaji. You may not copy, distribute, modify, or reproduce any material without prior written permission.
          </p>

          <h2 className="font-heading text-xl font-bold text-secondary mt-6 mb-2">6. Limitation of Liability</h2>
          <p>
            Under no circumstances shall Astrologer Sanjeev Sharmaji be liable for any direct, indirect, incidental, or consequential damages resulting from your use of, or inability to use, this website, or reliance on advice given during consultations.
          </p>

          <h2 className="font-heading text-xl font-bold text-secondary mt-6 mb-2">7. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms of Service at any time. Your continued use of the website following any changes signifies your acceptance of the updated terms.
          </p>

          <h2 className="font-heading text-xl font-bold text-secondary mt-6 mb-2">8. Governing Law</h2>
          <p>
            These Terms of Service are governed by and construed in accordance with the laws of India. Any disputes arising in connection with this site shall be subject to the exclusive jurisdiction of the courts in Chandigarh, India.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
