const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function initGA4() {
  if (typeof window === "undefined") return;
  if (!GA_MEASUREMENT_ID) return;
  if (window.gtag) return;

  window.dataLayer = window.dataLayer || [];

  function gtag(...args: unknown[]) {
    window.dataLayer!.push(args);
  }

  window.gtag = gtag;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  gtag("js", new Date());
  gtag("config", GA_MEASUREMENT_ID, { send_page_view: false });
}

export function trackPageView(path: string) {
  if (typeof window === "undefined") return;
  if (!GA_MEASUREMENT_ID || !window.gtag) return;

  window.gtag("event", "page_view", {
    page_path: path,
  });
}

