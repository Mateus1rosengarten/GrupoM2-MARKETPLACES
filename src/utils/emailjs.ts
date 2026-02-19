import emailjs from "@emailjs/browser";
import { ContactFormData } from "./zodSchema";

export const sendContactEmail = async (data: ContactFormData) => {
  return emailjs.send(
    process.env.REACT_APP_EMAILJS_SERVICE_ID as string,
    process.env.REACT_APP_EMAILJS_TEMPLATE_ID as string,
    {
      name: data.name,
      phone: data.phone,
      email: data.email,
      company: data.company,
      message: data.message,
    },
    process.env.REACT_APP_EMAILJS_PUBLIC_KEY as string
  );
};
