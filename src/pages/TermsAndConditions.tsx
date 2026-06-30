import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { useEffect } from "react";

const TermsAndConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEOHead
        title="Terms & Conditions — Astrologer Sanjeev Sharmaji"
        description="Terms and conditions for using the website and services of Astrologer Sanjeev Sharmaji. Includes consultation disclaimer, booking policy, and limitation of liability."
        canonicalUrl="/terms-and-conditions"
      />
      <Navbar />
      <main className="flex-grow pt-28 pb-16 px-6 md:px-12 max-w-4xl mx-auto w-full">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-secondary mb-8 text-center">
          <span className="text-gold-gradient">Terms & Conditions</span>
        </h1>
        <div className="glass-card p-8 md:p-12 space-y-6 text-foreground/80 leading-relaxed font-body">
          <p className="text-sm text-muted-foreground">Last Updated: June 30, 2026</p>

          <p>
            Welcome to the website of Astrologer Sanjeev Sharmaji (<strong>astrologersanjeevsharma.com</strong>). By accessing and using this website, you accept and agree to be bound by the terms and conditions outlined below. If you do not agree, please do not use this site.
          </p>

          <h2 className="font-heading text-xl font-bold text-secondary mt-6 mb-2">1. Use of the Site & Services</h2>
          <p>
            You agree to use this site only for lawful purposes. You must be at least 18 years of age to book a consultation or receive astrology services. The content provided on this website is for informational and spiritual guidance purposes only.
          </p>

          <h2 className="font-heading text-xl font-bold text-secondary mt-6 mb-2">2. Astrology Consultation Disclaimer</h2>
          <p>
            Astrology consultations, insights, and recommendations provided by Astrologer Sanjeev Sharmaji are based on interpretation of Vedic astrological charts and traditional methods. They are intended solely for personal reflection, spiritual guidance, and informational purposes.
          </p>
          <p className="font-semibold">
            Astrology is not a substitute for professional medical, legal, financial, or psychological advice. You should always consult qualified professionals for such matters. Any decisions made based on astrological consultations are your sole responsibility.
          </p>

          <h2 className="font-heading text-xl font-bold text-secondary mt-6 mb-2">3. No Guarantee of Results</h2>
          <p>
            While we strive to provide accurate and insightful guidance, we make no guarantees, assurances, or promises regarding the correctness, timeline, or outcomes of any predictions, readings, or recommendations. Astrology interpretation is subjective, and experiences vary from person to person. No specific outcomes are promised or implied.
          </p>

          <h2 className="font-heading text-xl font-bold text-secondary mt-6 mb-2">4. Booking & Cancellation Policy</h2>
          <p>
            Consultations are booked through our website contact form, which redirects you to WhatsApp for scheduling confirmation. Once a consultation session has been confirmed and scheduled:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Cancellations must be communicated at least 24 hours before the scheduled session.</li>
            <li>Rescheduling requests are accommodated on a best-effort basis, subject to availability.</li>
            <li>No-shows without prior notice may result in the consultation slot being forfeited.</li>
            <li>Fees paid for consultations are non-refundable once the session has been conducted.</li>
          </ul>

          <h2 className="font-heading text-xl font-bold text-secondary mt-6 mb-2">5. User Commitments</h2>
          <p>
            When utilizing our contact form, you agree to provide truthful, accurate, and current information. You are responsible for any communications you send through the website.
          </p>

          <h2 className="font-heading text-xl font-bold text-secondary mt-6 mb-2">6. Intellectual Property</h2>
          <p>
            All content, designs, logos, and materials displayed on this website are the property of Astrologer Sanjeev Sharmaji. You may not copy, distribute, modify, or reproduce any material without prior written permission.
          </p>

          <h2 className="font-heading text-xl font-bold text-secondary mt-6 mb-2">7. Limitation of Liability</h2>
          <p>
            Under no circumstances shall Astrologer Sanjeev Sharmaji be liable for any direct, indirect, incidental, or consequential damages resulting from your use of, or inability to use, this website, or reliance on advice given during consultations.
          </p>

          <h2 className="font-heading text-xl font-bold text-secondary mt-6 mb-2">8. Third-Party Services</h2>
          <p>
            This website may use third-party services such as Google Analytics and Google AdSense. Your interaction with these services is governed by their respective terms and privacy policies. We are not responsible for the practices of any third-party services.
          </p>

          <h2 className="font-heading text-xl font-bold text-secondary mt-6 mb-2">9. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms & Conditions at any time. Your continued use of the website following any changes signifies your acceptance of the updated terms.
          </p>

          <h2 className="font-heading text-xl font-bold text-secondary mt-6 mb-2">10. Governing Law</h2>
          <p>
            These Terms & Conditions are governed by and construed in accordance with the laws of India. Any disputes arising in connection with this site shall be subject to the exclusive jurisdiction of the courts in Chandigarh, India.
          </p>

          <h2 className="font-heading text-xl font-bold text-secondary mt-6 mb-2">Contact</h2>
          <p>
            If you have any questions about these Terms & Conditions, please contact us at <strong>Sanjeevsharma1981986@gmail.com</strong> or call <strong>+91 99881 74274</strong>.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
