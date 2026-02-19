import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Insira um nome válido")
    .max(60, "Nome muito longo")
    .refine((val) => /^[A-Za-zÀ-ÿ\s]+$/.test(val), {
      message: "O nome deve conter apenas letras",
    }),

  phone: z
    .string()
    .transform((val) => val.replace(/\s|-/g, "")) //
    .refine((val) => /^\+?[1-9]\d{7,14}$/.test(val), {
      message: "Telefone inválido",
    }),

  email: z
    .string()
    .trim()
    .toLowerCase()
    .email("Email inválido")
    .max(100, "Email muito longo"),

  company: z.string().optional(),

  message: z.string().min(3, "Mensagem deve ter pelo menos 3 caracteres"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
