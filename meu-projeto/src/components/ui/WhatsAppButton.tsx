import React from "react";

const WhatsAppButton: React.FC = () => {
  const phoneNumber = "5511988504105";
  const message = "";

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed hidden sm:block right-3 bottom-5 bg-green-500 hover:bg-green-600 text-foreground rounded-full p-4 shadow-lg flex items-center justify-center z-50 transition-transform duration-default hover:scale-zoom"
      aria-label="WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M20.52 3.48A11.928 11.928 0 0012 .5C6.19.5 1.5 5.19 1.5 11c0 1.94.54 3.75 1.48 5.28L.5 23.5l7.55-2.5a11.52 11.52 0 005.94 1.71c5.81 0 10.5-4.69 10.5-10.5 0-2.81-1.15-5.43-3.47-7.73zm-8.52 15.54a9.436 9.436 0 01-5.06-1.4l-.36-.22-4.49 1.49 1.51-4.38-.23-.37a9.336 9.336 0 0116.14-8.21 9.42 9.42 0 01-6.51 13.19zm5.16-6.31c-.28-.14-1.64-.8-1.9-.89-.25-.1-.43-.14-.62.14-.19.28-.73.88-.9 1.06-.17.19-.35.21-.64.07-.28-.14-1.17-.43-2.23-1.38-.82-.73-1.37-1.63-1.53-1.91-.16-.28-.02-.43.12-.57.13-.13.28-.35.43-.53.14-.18.19-.3.28-.49.09-.19.05-.36-.02-.5-.07-.14-.62-1.5-.85-2.07-.22-.54-.44-.47-.62-.48-.16 0-.36-.01-.55-.01-.19 0-.5.07-.76.36-.26.28-1 1-.99 2.44 0 1.44 1.02 2.83 1.16 3.03.14.19 2 3.05 4.83 4.27.67.29 1.2.46 1.61.59.68.22 1.3.19 1.79.12.55-.08 1.64-.67 1.87-1.32.23-.64.23-1.19.16-1.32-.07-.13-.25-.19-.53-.33z" />
      </svg>
    </a>
  );
};
export default WhatsAppButton;
