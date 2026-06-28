import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-grow pt-28 pb-16 px-6 md:px-12 max-w-4xl mx-auto w-full">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-secondary mb-8 text-center">
          <span className="text-gold-gradient">Privacy Policy</span>
        </h1>
        <div className="glass-card p-8 md:p-12 space-y-6 text-foreground/80 leading-relaxed font-body">
          <p>
            Your privacy is highly important to us. This Privacy Policy document outlines the types of personal information collected and recorded by this website, and how we use it.
          </p>

          <h2 className="font-heading text-xl font-bold text-secondary mt-6 mb-2">Information We Collect</h2>
          <p>
            We collect personal information that you voluntarily provide to us when you fill out our contact and booking forms. This information may include:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Your Name</li>
            <li>Select service fields (such as relationship or career advice)</li>
            <li>Message content describing your queries or concerns</li>
          </ul>

          <h2 className="font-heading text-xl font-bold text-secondary mt-6 mb-2">How We Use Your Information</h2>
          <p>
            The information we collect is used solely in the following ways:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>To schedule and prepare for your personalized Vedic astrology consultations.</li>
            <li>To redirect you to WhatsApp for direct chat and scheduling.</li>
            <li>To monitor website performance and improve user experience.</li>
          </ul>

          <h2 className="font-heading text-xl font-bold text-secondary mt-6 mb-2">Cookies & Analytics</h2>
          <p>
            Like many other websites, we utilize cookies to store visitor preferences and compile aggregate data about site traffic and interactions. We load conversion tags and basic analytics scripts to optimize campaigns and ensure policy compliance. You can choose to disable cookies through your individual browser options.
          </p>

          <h2 className="font-heading text-xl font-bold text-secondary mt-6 mb-2">Information Protection</h2>
          <p>
            We implement standard security measures to maintain the safety of your personal information. We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. This does not include trusted third parties who assist us in operating our website, so long as those parties agree to keep this information confidential.
          </p>

          <h2 className="font-heading text-xl font-bold text-secondary mt-6 mb-2">Consent</h2>
          <p>
            By using our website, you hereby consent to our Privacy Policy and agree to its terms.
          </p>

          <h2 className="font-heading text-xl font-bold text-secondary mt-6 mb-2">Contact Us</h2>
          <p>
            If you have any questions or require more information about our Privacy Policy, please contact us at <strong>Sanjeevsharma1981986@gmail.com</strong>.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
