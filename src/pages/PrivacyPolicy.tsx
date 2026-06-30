import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { useEffect } from "react";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEOHead
        title="Privacy Policy — Astrologer Sanjeev Sharmaji"
        description="Privacy policy for astrologersanjeevsharma.com. Learn how we collect, use, and protect your personal information, and about our use of cookies, Google Analytics, and Google AdSense."
        canonicalUrl="/privacy-policy"
      />
      <Navbar />
      <main className="flex-grow pt-28 pb-16 px-6 md:px-12 max-w-4xl mx-auto w-full">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-secondary mb-8 text-center">
          <span className="text-gold-gradient">Privacy Policy</span>
        </h1>
        <div className="glass-card p-8 md:p-12 space-y-6 text-foreground/80 leading-relaxed font-body">
          <p className="text-sm text-muted-foreground">Last Updated: June 30, 2026</p>

          <p>
            Your privacy is important to us. This Privacy Policy explains what personal information is collected by <strong>astrologersanjeevsharma.com</strong> (the "Website"), operated by Astrologer Sanjeev Sharmaji, and how that information is used, stored, and protected. By using this Website, you agree to the practices described in this policy.
          </p>

          <h2 className="font-heading text-xl font-bold text-secondary mt-6 mb-2">1. Information We Collect</h2>
          <p>
            We collect personal information that you voluntarily provide when you use our booking/contact form. This information includes:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Your Name</strong> — to address you personally and schedule your consultation.</li>
            <li><strong>Selected Service Type</strong> — to understand the nature of guidance you seek (e.g., love problem consultation, career guidance, marriage guidance).</li>
            <li><strong>Your Message / Concern</strong> — a brief description of the question or issue you would like to discuss during your consultation.</li>
          </ul>
          <p>
            We do <strong>not</strong> collect sensitive financial information (such as credit card numbers) through this Website. Booking confirmations are processed via WhatsApp, and any payments are handled separately outside this Website.
          </p>

          <h2 className="font-heading text-xl font-bold text-secondary mt-6 mb-2">2. How We Use Your Information</h2>
          <p>
            The personal information you provide is used solely for the following purposes:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>To respond to your consultation request and schedule your session.</li>
            <li>To prepare for your personalized Vedic astrology consultation based on the concerns you shared.</li>
            <li>To redirect you to WhatsApp for direct communication and booking confirmation.</li>
            <li>To improve the quality and relevance of our services based on common client needs.</li>
          </ul>
          <p>
            We do <strong>not</strong> sell, rent, or trade your personal information to any third parties.
          </p>

          <h2 className="font-heading text-xl font-bold text-secondary mt-6 mb-2">3. Google Analytics (GA4)</h2>
          <p>
            This Website uses <strong>Google Analytics 4 (GA4)</strong>, a web analytics service provided by Google LLC, to collect anonymous usage data. GA4 uses cookies and similar technologies to help us understand how visitors interact with our Website — including which pages are visited, how long visitors stay, and what devices and browsers are used.
          </p>
          <p>
            The data collected by Google Analytics is aggregated and anonymous. It does not identify you personally. Google may process this data on servers located outside of India. For more information on how Google handles data, please visit:{" "}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-gold underline">Google's Privacy Policy</a>.
          </p>
          <p>
            You can opt out of Google Analytics tracking by installing the{" "}
            <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-gold underline">Google Analytics Opt-out Browser Add-on</a>.
          </p>

          <h2 className="font-heading text-xl font-bold text-secondary mt-6 mb-2">4. Google AdSense & Advertising Cookies</h2>
          <p>
            This Website may display advertisements served by <strong>Google AdSense</strong>, a service provided by Google LLC. Google AdSense and its partners use cookies to serve ads based on your prior visits to this Website or other websites on the internet. These cookies enable Google and its advertising partners to display relevant advertisements to you.
          </p>
          <p>
            Google's use of advertising cookies is governed by Google's advertising policies. You can learn more about how Google uses your data for advertising and how to control your ad settings by visiting:{" "}
            <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-gold underline">https://policies.google.com/technologies/ads</a>.
          </p>
          <p>
            You may opt out of personalized advertising by visiting{" "}
            <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-gold underline">Google Ads Settings</a>{" "}
            or by visiting{" "}
            <a href="https://optout.aboutads.info" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-gold underline">www.aboutads.info</a>.
          </p>

          <h2 className="font-heading text-xl font-bold text-secondary mt-6 mb-2">5. Cookies</h2>
          <p>
            Cookies are small text files stored on your device when you visit a website. This Website uses cookies for the following purposes:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Analytics Cookies</strong> — Used by Google Analytics (GA4) to collect anonymous visitor statistics.</li>
            <li><strong>Advertising Cookies</strong> — Used by Google AdSense to display relevant advertisements.</li>
            <li><strong>Essential Cookies</strong> — May be used for basic site functionality and visitor preferences.</li>
          </ul>
          <p>
            You can manage or disable cookies through your browser settings. Please note that disabling cookies may affect your experience on this Website.
          </p>

          <h2 className="font-heading text-xl font-bold text-secondary mt-6 mb-2">6. Information Protection</h2>
          <p>
            We implement standard security measures to maintain the safety of your personal information. We do not store your data in any external database — form submissions are directed to WhatsApp for direct communication. We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties, except as described in this policy regarding Google Analytics and Google AdSense.
          </p>

          <h2 className="font-heading text-xl font-bold text-secondary mt-6 mb-2">7. Your Rights</h2>
          <p>
            You have the following rights regarding your personal data:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Right to Access</strong> — You may request a copy of any personal information we hold about you.</li>
            <li><strong>Right to Deletion</strong> — You may request that we delete any personal information you have provided through our contact form.</li>
            <li><strong>Right to Correction</strong> — You may request corrections to any inaccurate personal information.</li>
            <li><strong>Right to Opt Out</strong> — You may opt out of analytics tracking and personalized advertising as described above.</li>
          </ul>
          <p>
            To exercise any of these rights, please contact us at the email address provided below.
          </p>

          <h2 className="font-heading text-xl font-bold text-secondary mt-6 mb-2">8. Third-Party Links</h2>
          <p>
            This Website may contain links to third-party websites (such as WhatsApp, Google, and social media platforms). We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
          </p>

          <h2 className="font-heading text-xl font-bold text-secondary mt-6 mb-2">9. Changes to This Policy</h2>
          <p>
            We reserve the right to update this Privacy Policy at any time. Any changes will be posted on this page with an updated "Last Updated" date. Your continued use of the Website after any changes constitutes acceptance of the updated policy.
          </p>

          <h2 className="font-heading text-xl font-bold text-secondary mt-6 mb-2">10. Contact Us</h2>
          <p>
            If you have any questions, concerns, or requests regarding this Privacy Policy or how your personal data is handled, please contact us:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Email:</strong> <a href="mailto:Sanjeevsharma1981986@gmail.com" className="text-primary hover:text-gold underline">Sanjeevsharma1981986@gmail.com</a></li>
            <li><strong>Phone:</strong> <a href="tel:+919988174274" className="text-primary hover:text-gold underline">+91 99881 74274</a></li>
            <li><strong>Address:</strong> Sector 18-C, Chandigarh, India</li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
