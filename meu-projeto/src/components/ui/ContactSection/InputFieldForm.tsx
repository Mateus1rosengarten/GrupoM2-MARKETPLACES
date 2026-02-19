import { Building2, Mail, Phone, User } from "lucide-react";
import InputField from "../inputField";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import Button from "../Button";
import { ContactFormData } from "../../../utils/zodSchema";
import ErrorText from "./ErrorText";

type InputFieldFormProps = {
  register: UseFormRegister<ContactFormData>;
  errors: FieldErrors<ContactFormData>;
  className?: string;
  loading?: boolean;
};

const InputFieldForm = ({
  register,
  errors,
  className,
  loading,
}: InputFieldFormProps) => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 text-background font-inter">
        <InputField
          icon={<User size={18} />}
          placeholder="Seu nome"
          register={register("name")}
        />
        {errors.name && <ErrorText text={errors.name.message} />}
        <InputField
          icon={<Phone size={18} />}
          placeholder="Telefone"
          register={register("phone")}
        />
        {errors.phone && <ErrorText text={errors.phone.message} />}

        <InputField
          icon={<Mail size={18} />}
          placeholder="Email"
          register={register("email")}
        />
        {errors.email && <ErrorText text={errors.email.message} />}

        <InputField
          icon={<Building2 size={18} />}
          placeholder="Empresa"
          register={register("company")}
        />
      </div>
      <div className="mt-3 sm:mt-5">
        <textarea
          rows={4}
          placeholder="Como podemos ajudar?"
          {...register("message")}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand transition resize-none text-background font-inter"
        />
        {errors.message && <ErrorText text={errors.message.message} />}
      </div>
      <p
        className={`sm:mt-4 sm:mb-6 text-xs font-inter ml-2 sm:ml-0 ${className}`}
      >
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

      <Button
        type="submit"
        children={!loading ? "FALAR COM A GENTE" : "ENVIANDO..."}
        customClass="w-full"
      />
    </>
  );
};

export default InputFieldForm;
