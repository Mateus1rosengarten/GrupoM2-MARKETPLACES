import { ContactFormData } from "./zodSchema";
import { sendContactEmail } from "./emailjs";
import { whatsPhone } from "./whatsapp";

export const handleContactSubmit = async (
  data: ContactFormData,
  setLoading: (value: boolean) => void,
  reset: () => void
) => {
  try {
    setLoading(true);
    await sendContactEmail(data);
    reset();
    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false };
  } finally {
    setLoading(false);
  }
};

export function sendWhatsApp(message: string) {
  const url = `https://wa.me/${whatsPhone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}
