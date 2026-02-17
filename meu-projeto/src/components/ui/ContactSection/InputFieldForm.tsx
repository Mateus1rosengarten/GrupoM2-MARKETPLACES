import { Building2, Mail, Phone, User } from "lucide-react";
import InputField from "../inputField";
import { UseFormRegister } from "react-hook-form";
import { FormValues } from "../../../data/types";
import Button from "../Button";

type InputFieldFormProps = {
  register: UseFormRegister<FormValues>;
  className?: string;
};

const InputFieldForm = ({ register, className }: InputFieldFormProps) => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-background font-inter">
        <InputField
          icon={<User size={18} />}
          placeholder="Seu nome"
          register={register("name", { required: true })}
        />
        <InputField
          icon={<Phone size={18} />}
          placeholder="Telefone"
          register={register("phone", { required: true })}
        />
        <InputField
          icon={<Mail size={18} />}
          placeholder="Email"
          register={register("email", { required: true })}
        />
        <InputField
          icon={<Building2 size={18} />}
          placeholder="Empresa"
          register={register("company")}
        />
      </div>
      <div className="sm:mt-5">
        <textarea
          rows={4}
          placeholder="Como podemos ajudar?"
          {...register("message", { required: true })}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand transition resize-none text-background font-inter"
        />
      </div>
      <p className={`sm:mt-4 sm:mb-6 text-xs font-inter ${className}`}>
        *Seus dados estão protegidos conforme a{" "}
        <a
          href="https://abrasel.com.br/noticias/noticias/o-que-e-a-lgpd-e-como-ela-impacta-brasileiros-e-empresas/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline transition-colors text-brand"
        >
          Lei Geral de Proteção de Dados (LGPD)
        </a>
        .
      </p>

      <Button children={"FALAR COM A GENTE"} customClass="w-full" />
    </>
  );
};

export default InputFieldForm;
