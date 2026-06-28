declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

const GA_ID = "AW-18274105252";

export const initGoogleAds = () => {
  if (typeof window === "undefined") return;

  // Ensure script is loaded only once
  if (document.getElementById("google-ads-tag")) return;

  const script = document.createElement("script");
  script.id = "google-ads-tag";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    window.dataLayer.push(arguments);
  };

  window.gtag("js", new Date());
  window.gtag("config", GA_ID);
};

export const trackConversion = () => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "conversion", {
      send_to: "AW-18274105252/iqJCCKGzo8YcEKTv4olE",
    });
  } else {
    console.warn("Google Ads Tag (gtag) has not been initialized yet.");
  }
};
