import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useState } from "react";
import ContactFormHeader from "./ContactFormHeader";
import InputFieldForm from "./InputFieldForm";
import { ContactFormData, contactSchema } from "../../../utils/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { handleContactSubmit } from "../../../utils/handleContactSubmit";

export default function ContactFormMobile() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });
  const [loading, setLoading] = useState(false);

  const onSubmit = (data: ContactFormData) => {
    handleContactSubmit(data, setLoading, reset);
  };

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative lg:hidden overflow-hidden rounded-3xl shadow-2xl border border-white"
    >
      <img
        src="/images/sectionsImages/escritorio.png"
        alt="Escritório Grupo M2"
        className="absolute inset-0 w-full h-full object-cover object-[80%_center] brightness-90"
      />
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />
      <div className="relative z-10 p-6 text-white font-inter">
        <ContactFormHeader />
        <div className="grid grid-cols-1 gap-4 mt-6">
          <InputFieldForm
            register={register}
            errors={errors}
            loading={loading}
            className="text-foreground"
          />
        </div>
      </div>
    </motion.form>
  );
}
