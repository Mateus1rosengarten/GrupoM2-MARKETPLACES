import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import ContactFormHeader from "./ContactFormHeader";
import InputFieldForm from "./InputFieldForm";
import { FormValues } from "../../../data/types";

export default function ContactFormCard() {
  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

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
          Nossa equipe analisará seu cenário e retornará com um diagnóstico
          estratégico.
        </p>

        <InputFieldForm register={register} className="text-background" />
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
