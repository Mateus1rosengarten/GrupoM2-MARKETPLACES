import { Mail } from "lucide-react";
import { ContactFormHeaderProps } from "../../../data/types";

const ContactFormHeader = ({
  className = "text-foreground",
}: ContactFormHeaderProps) => {
  return (
    <>
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-brand/5 rounded-full blur-3xl" />
      <div className="relative mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand">
          <Mail size={18} />
        </div>
        <span className="text-xs font-inter font-medium uppercase tracking-widest text-brand">
          Tire suas duvidas
        </span>
      </div>

      <h3
        className={`relative text-xl sm:text-2xl font-varela font-semibold ${className}`}
      >
        FALE COM NOSSA <span className="text-brand">EQUIPE</span>
      </h3>
      <div className="w-20 h-px bg-brand my-4" />
    </>
  );
};

export default ContactFormHeader;
