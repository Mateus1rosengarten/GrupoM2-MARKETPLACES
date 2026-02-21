import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import ContactFormHeader from "./Header";
import InputFieldForm from "./Content";
import { useState } from "react";
import { ContactFormData, contactSchema } from "../../../utils/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { handleContactSubmit } from "../../../utils/functions";
import MotionDiv from "../../../components/ui/MotionDiv";
import { ContactFormProps } from "../../../data/types";

export default function ContactFormCard({ onSucess }: ContactFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: ContactFormData) => {
    const result = await handleContactSubmit(data, setLoading, reset);
    if (result.success) {
      onSucess();
    }
  };

  return (
    <MotionDiv className="relative bg-white grid lg:grid-cols-2 h-full border rounded-3xl shadow-2xl w-full overflow-hidden">
      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        className="relative overflow-hidden p-8 sm:p-10"
      >
        <ContactFormHeader className="text-black" />

        <p className="text-sm font-inter mb-8 text-muted">
          Iremos analisar suas duvidas e retornararemos o mais breve possivel.
        </p>

        <InputFieldForm
          register={register}
          errors={errors}
          loading={loading}
          className="text-background"
        />
      </motion.form>

      <div className="relative h-72 lg:h-auto border-light">
        <img
          src="/images/section/escritorio.png"
          alt="Ambiente de trabalho"
          className="w-full h-full object-cover object-center brightness-75 contrast-95"
        />

        <div className="absolute inset-0 backdrop-blur-[1.5px] bg-black/15" />
      </div>
    </MotionDiv>
  );
}
