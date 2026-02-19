import { ContactFormData } from "./zod";
import { sendContactEmail } from "./emailjs";

export const handleContactSubmit = async (
  data: ContactFormData,
  setLoading: (value: boolean) => void,
  reset: () => void
) => {
  try {
    setLoading(true);
    await sendContactEmail(data);
    alert("Mensagem enviada com sucesso!");
    reset();
  } catch (error) {
    console.error(error);
    alert("Erro ao enviar mensagem.");
  } finally {
    setLoading(false);
  }
};
