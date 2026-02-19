import React from "react";
import StarsBackground from "../components/ui/StarsBackground";
import Button from "../components/ui/Button";
import { sendWhatsApp } from "../utils/whatsapp";
import { WHATSAPP_MESSAGES } from "../data/data";
import { FloatingBadge } from "../components/ui/FloatingBadge";
import { Blocks } from "lucide-react";
import { motion, Variants } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section id="home" className="flex py-20 sm:py-40 md:px-8 xl:px-32">
      <motion.div
        initial="hidden"
        animate="visible"
        className="container flex flex-col sm:gap-y-8 lg:flex-row mt-20 items-center z-10"
      >
        <motion.div
          variants={fadeUp}
          className="flex flex-col gap-8 sm:gap-4 2xl:gap-10 max-w-[92vw] xl:max-w-[50vw]"
        >
          <h1 className="text-foreground sm:mb-4 text-4xl sm:text-6xl font-varela font-bold ">
            Gestão Estratégica de Marketplaces com foco
            <br />
            <span>em </span>
            <span className="text-brand">rentabilidade</span>
          </h1>

          <span className="font-inter text-lg text-gray-300 leading-relaxed mb-2">
            Gestão para marketplaces com inteligência financeira unindo operação
            e controle para escalar vendas com{" "}
            <span className="font-bold font-varela text-foreground text-xl sm:text-2xl">
              previsibilidade e crescimento sustentável.
            </span>
          </span>
          <div className="flex gap-5 sm:gap-6 sm:mt-4 mx-auto sm:mx-0">
            <Button
              onClick={() =>
                sendWhatsApp(WHATSAPP_MESSAGES.diagnosticoGratuito)
              }
            >
              <span>DIAGNÓSTICO GRATUITO</span>
            </Button>
            <a href="#planos">
              <Button customClass="bg-foreground !text-background opacity-90 hover:opacity-100">
                PLANOS
              </Button>
            </a>
          </div>
        </motion.div>
        <motion.div
          variants={fadeRight}
          className="relative w-full xl:w-1/2 flex flex-col justify-center"
        >
          <FloatingBadge
            text="Marketplace & Financeiro"
            icon={Blocks}
            className="absolute -bottom-1 sm:bottom-0 left-4 sm:left-5"
          />
          <div className="absolute bottom-0 right-9 sm:right-0 w-[85%] lg:w-[85%] h-[80%] sm:h-[100%] bg-foreground rounded-tl-2xl rounded-br-2xl"></div>

          <img
            src="/images/sectionsImages/hero-pic.png"
            alt="Gestão de vendas"
            className="relative z-10 w-full max-w-[600px] h-auto object-contain"
          />
        </motion.div>
      </motion.div>
      <StarsBackground />
    </section>
  );
};

export default Hero;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1 },
  },
};
