import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import ContactFormHeader from "./ContactFormHeader";
import InputFieldForm from "./InputFieldForm";
import { FormValues } from "../../../data/types";

export default function ContactFormMobile() {
  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log(data);
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
        alt="Ambiente de trabalho"
        className="absolute inset-0 w-full h-full object-cover object-[80%_center] brightness-90"
      />

      <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />
      <div className="relative z-10 p-6 text-white font-inter">
        <ContactFormHeader />

        <div className="w-12 bg-brand my-4" />

        <div className="grid grid-cols-1 gap-4 mt-6">
          <InputFieldForm register={register} className="text-foreground" />
        </div>
      </div>
    </motion.form>
  );
}
