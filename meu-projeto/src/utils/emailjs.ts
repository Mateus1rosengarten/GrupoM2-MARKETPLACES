import emailjs from "@emailjs/browser";
import { ContactFormData } from "./zod";

export const sendContactEmail = async (data: ContactFormData) => {
  return emailjs.send(
    "service_a9kxnsb",
    "template_vb29vuj",
    {
      name: data.name,
      phone: data.phone,
      email: data.email,
      company: data.company,
      message: data.message,
    },
    "k0moFnA6DqxH_s4ML"
  );
};
