export const GA_ID = "G-LZMP8ZCBTJ";

export function initGA() {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];

  function gtag(...args: any[]) {
    window.dataLayer!.push(args);
  }

  window.gtag = gtag;

  window.gtag("consent", "default", {
    analytics_storage: "denied",
    ad_storage: "denied",
  });

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);

  window.gtag("js", new Date());
  window.gtag("config", GA_ID);
}
