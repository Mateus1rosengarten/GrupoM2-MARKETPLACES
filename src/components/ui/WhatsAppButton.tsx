import React from "react";

const WhatsAppButton: React.FC = () => {
  const phoneNumber = "5511988504105";
  const message = "";

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-3 bottom-5 bg-green-500 hover:bg-green-600 rounded-full p-3 shadow-lg flex items-center justify-center z-50 transition-transform duration-200 hover:scale-110"
      aria-label="WhatsApp"
    >
      <img
        src={"/images/logo/social.png"}
        alt="WhatsApp"
        className="w-10 h-10"
      />
    </a>
  );
};

export default WhatsAppButton;
