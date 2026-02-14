import Button from "./Button";
import {
  FolderPenIcon,
  HeadsetIcon,
  ListCheckIcon,
  MailCheckIcon,
  MessageSquareCodeIcon,
  Phone,
} from "lucide-react";
import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Dados do form:", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="relative max-w-3xl p-6 mx-auto border-t-2 border-b-2 border-l-2 bg-white rounded-2xl border-background sm:rounded-bl-2xl sm:rounded-tl-2xl sm:pb-14 sm:pl-16 sm:pr-20 sm:pt-12 lg:rounded-br-none lg:rounded-tr-none lg:p-12 xl:p-20"
    >
      <div className="absolute w-full top-0 right-0 bg-brand text-white px-6 py-4 rounded-tl-xl shadow-lg flex items-center justify-center gap-3">
        <HeadsetIcon className="w-8 h-8" />
        <h1 className="text-xl font-bold font-varela sm:text-3xl">
          FALE COM A GENTE
        </h1>
      </div>

      <h2 className="mt-16 sm:mt-8 mb-8 text-base sm:text-center font-inter text-surface sm:text-lg">
        Estamos prontos para ouvir você! Preencha o formulário e{" "}
        <span className="font-bold">
          entraremos em contato o mais breve possível.
        </span>
      </h2>

      <div className="grid grid-cols-1 gap-4 mb-8 md:grid-cols-2">
        <div>
          <label className="block mb-1 text-sm font-varela text-background flex gap-2">
            <FolderPenIcon className="text-brand" />
            Nome
          </label>
          <input
            {...register("name", {
              required: "Informe seu nome",
              minLength: { value: 2, message: "Nome muito curto" },
            })}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-brand ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.name && (
            <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 text-sm font-varela text-black flex gap-2">
            <Phone className="text-brand" />
            Telefone
          </label>
          <input
            {...register("phone", {
              required: "Telefone é obrigatório",
              minLength: { value: 10, message: "Telefone inválido" },
            })}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-brand ${
              errors.phone ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.phone && (
            <p className="text-sm text-red-500 mt-1">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 text-sm font-varela text-black flex gap-2">
            <MailCheckIcon className="text-brand" />
            Email
          </label>
          <input
            type="email"
            {...register("email", {
              required: "Email é obrigatório",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Email inválido",
              },
            })}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-brand ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.email && (
            <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 text-sm font-varela text-black flex gap-2">
            <ListCheckIcon className="text-brand" />
            Assunto
          </label>
          <select
            {...register("subject", {
              required: "Selecione um assunto",
            })}
            className={`w-full px-3 py-2 border rounded-lg bg-foreground focus:outline-none focus:ring-1 focus:ring-brand ${
              errors.subject ? "border-red-500" : "border-gray-300"
            }`}
          >
            <option value="">Solicitar Diagnóstico</option>
            <option value="planos-de-servico">Dúvida sobre os planos</option>
            <option value="servicos-avulsos">Serviços avulsos</option>
            <option value="suporte-tecnico">Suporte técnico</option>
            <option value="outros">Outros</option>
          </select>
          {errors.subject && (
            <p className="text-sm text-red-500 mt-1">
              {errors.subject.message}
            </p>
          )}
        </div>
      </div>

      {/* MENSAGEM */}
      <div className="mb-6">
        <label className="block mb-1 text-sm font-varela text-black flex gap-2">
          <MessageSquareCodeIcon className="text-brand" />
          Mensagem
        </label>
        <textarea
          rows={4}
          {...register("message", {
            required: "Mensagem obrigatória",
            minLength: { value: 10, message: "Mensagem muito curta" },
          })}
          className={`w-full px-3 py-2 border rounded-lg resize-none focus:outline-none focus:ring-1 focus:ring-brand ${
            errors.message ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.message && (
          <p className="text-sm text-red-500 mt-1">{errors.message.message}</p>
        )}
      </div>

      <Button type="submit" customClass="!bg-brand text-foreground w-full">
        ENVIAR MENSAGEM
      </Button>
    </form>
  );
}
