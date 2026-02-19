import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(3, "Nome deve ter pelo menos 3 caracteres"),

  phone: z.string().min(8, "Telefone inválido"),

  email: z.string().email("Email inválido"),

  company: z.string().optional(),

  message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
