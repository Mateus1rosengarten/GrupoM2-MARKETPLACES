import { Cookie, CookieIcon } from "lucide-react";
import CookieConsent from "react-cookie-consent";

export default function CookieBanner() {
  const handleAccept = () => {
    if (!window.gtag) return;

    window.gtag("consent", "update", {
      analytics_storage: "granted",
      ad_storage: "granted",
    });
  };

  const handleDecline = () => {
    if (!window.gtag) return;

    window.gtag("consent", "update", {
      analytics_storage: "denied",
      ad_storage: "denied",
    });
  };

  return (
    <CookieConsent
      location="bottom"
      enableDeclineButton
      buttonText="Aceitar"
      declineButtonText="Recusar"
      cookieName="m2_cookie_consent"
      expires={180}
      onAccept={handleAccept}
      onDecline={handleDecline}
      containerClasses="!bg-zinc-900/95 backdrop-blur-md border-t border-white/10"
      contentClasses="max-w-7xl mx-auto px-0 py-0 sm:px-5 sm:py-3 flex flex-col md:flex-row items-start md:items-center gap-4"
      buttonWrapperClasses="mx-auto sm:mx-0 sm:px-3 flex gap-3"
      buttonClasses="!bg-[#ffaa00] !text-white font-semibold !px-5 !py-2 !rounded-2xl transition"
      declineButtonClasses="!bg-transparent !text-white border border-white/30 font-semibold px-5 py-2 rounded-xl hover:bg-white/10 transition"
    >
      <CookieIcon className="text-brand" />

      <span className="text-sm text-zinc-200 font-inter leading-relaxed">
        Utilizamos cookies para melhorar sua experiência e personalizar nossos
        conteúdos. Ao clicar em <strong>Aceitar</strong>, você concorda com
        nossa política de cookies.
      </span>
    </CookieConsent>
  );
}
