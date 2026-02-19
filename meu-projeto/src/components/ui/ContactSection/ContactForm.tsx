import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import ContactFormHeader from "./ContactFormHeader";
import InputFieldForm from "./InputFieldForm";
import { useState } from "react";
import { ContactFormData, contactSchema } from "../../../utils/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { handleContactSubmit } from "../../../utils/handleContactSubmit";

export default function ContactFormCard() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const [loading, setLoading] = useState(false);

  const onSubmit = (data: ContactFormData) =>
    handleContactSubmit(data, setLoading, reset);

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative bg-foreground grid lg:grid-cols-2 h-full border rounded-3xl shadow-2xl w-full overflow-hidden"
    >
      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        className="relative overflow-hidden p-8 sm:p-10"
      >
        <ContactFormHeader className="text-background" />

        <p className="text-sm font-inter mb-8 text-muted-light">
          Iremos analisar suas duvidas e retornararemos o mais breve possivel.
        </p>

        <InputFieldForm
          register={register}
          errors={errors}
          loading={loading}
          className="text-background"
        />
      </motion.form>

      <div className="relative h-72 lg:h-auto">
        <img
          src="/images/sectionsImages/escritorio.png"
          alt="Ambiente de trabalho"
          className="w-full h-full object-cover object-center brightness-75 contrast-95"
        />

        <div className="absolute inset-0 backdrop-blur-[1.5px] bg-black/15" />
      </div>
    </motion.div>
  );
}
