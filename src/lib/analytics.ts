/**
 * Google Analytics 4 (GA4) Setup
 * 
 * Replace G-XXXXXXXXXX with your actual GA4 Measurement ID
 * after creating your GA4 property at https://analytics.google.com
 */

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

const GA4_MEASUREMENT_ID = "G-XXXXXXXXXX"; // TODO: Replace with your real GA4 Measurement ID

export const initGA4 = () => {
  if (typeof window === "undefined") return;

  // Don't initialize if placeholder ID is still set
  if (GA4_MEASUREMENT_ID === "G-XXXXXXXXXX") {
    console.info("[GA4] Skipping initialization — placeholder Measurement ID detected. Replace G-XXXXXXXXXX in src/lib/analytics.ts with your real ID.");
    return;
  }

  // Don't load twice
  if (document.getElementById("ga4-script")) return;

  const script = document.createElement("script");
  script.id = "ga4-script";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function (...args: unknown[]) {
    window.dataLayer.push(args);
  };

  window.gtag("js", new Date());
  window.gtag("config", GA4_MEASUREMENT_ID, {
    send_page_view: false, // We manually track pageviews on route change
  });
};

export const trackPageView = (path: string, title: string) => {
  if (typeof window === "undefined" || !window.gtag) return;
  if (GA4_MEASUREMENT_ID === "G-XXXXXXXXXX") return;

  window.gtag("event", "page_view", {
    page_path: path,
    page_title: title,
  });
};
