import { ContactFormData } from "./zodSchema";
import { sendContactEmail } from "./emailjs";

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
