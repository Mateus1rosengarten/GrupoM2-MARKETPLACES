import { Facebook, Instagram, Linkedin } from "lucide-react";
import React from "react";
import Logo from "../../components/ui/Logo";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  return (
    <motion.footer
      className="bg-background relative bottom-0 text-foreground py-20 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 5, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col space-y-6 md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 font-varela text-xl font-bold ml-1">
          <Logo customClass="opacity-30" />
        </div>

        <nav className="flex space-x-6 text-sm">
          <a
            href="#home"
            className="inline-block hover:text-brand transition-transform duration-default hover:scale-zoom"
          >
            Home
          </a>
          <a
            href="#servicos"
            className="inline-block hover:text-brand transition-transform duration-default hover:scale-zoom"
          >
            Serviços
          </a>
          <a
            href="#sobre"
            className="inline-block hover:text-brand transition-transform duration-default hover:scale-zoom"
          >
            Sobre
          </a>
          <a
            href="#planos"
            className="inline-block hover:text-brand transition-transform duration-default hover:scale-zoom"
          >
            Planos
          </a>
          <a
            href="#contato"
            className="inline-block hover:text-brand transition-transform duration-default hover:scale-zoom"
          >
            Contato
          </a>
        </nav>

        <div className="flex space-x-6 mt-8 md:mt-0 mr-1">
          <a
            href="https://www.facebook.com/seuperfil"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook />
          </a>
          <a
            href="https://www.instagram.com/somosgrupom2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram />
          </a>
          <a
            href="https://www.linkedin.com/in/seuperfil"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin />
          </a>
        </div>
      </div>

      <p className="text-center text-xs text-foreground/50 mt-8">
        © {new Date().getFullYear()} Grupo M2. Todos os direitos reservados.
      </p>
    </motion.footer>
  );
};

export default Footer;
