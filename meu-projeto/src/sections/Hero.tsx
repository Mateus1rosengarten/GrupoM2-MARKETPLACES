import React from "react";
import StarsBackground from "../components/ui/StarsBackground";
import Button from "../components/ui/Button";
import { sendWhatsApp } from "../utils/whatsapp";
import { WHATSAPP_MESSAGES } from "../data/data";

const Hero: React.FC = () => {
  return (
    <section id="home" className="flex py-20 sm:py-40 md:px-8 xl:px-32">
      <div className="z-10 flex flex-col gap-y-8 xl:flex-row mt-20 items-center">
        <div className="flex flex-col gap-6 sm:gap-2 2xl:gap-8 max-w-[85vw] xl:max-w-[50vw]">
          <h1 className="text-foreground text-4xl sm:text-6xl font-varela font-bold leading-tight">
            Gestão de marketplaces focada em crescimento
            <br />
            <span>e </span>
            <span className="text-brand">rentabilidade</span>
          </h1>

          <span className="text-white/90 text-lg sm:text-xl font-inter">
            Gestão completa de marketplaces com inteligência financeira e
            estratégia de capital, unindo operação, controle e tomada de decisão
            para escalar o negócio com{" "}
            <span className="font-bold font-varela text-foreground text-xl sm:text-2xl">
              segurança e rentabilidade.
            </span>
          </span>
          <div className="flex gap-2 sm:gap-6 sm:mt-4">
            <Button
              onClick={() =>
                sendWhatsApp(WHATSAPP_MESSAGES.diagnosticoGratuito)
              }
            >
              <span>DIAGNÓSTICO GRATUITO</span>
            </Button>
            <a href="#planos">
              <Button customClass="bg-white !text-background opacity-90 hover:opacity-100">
                PLANOS
              </Button>
            </a>
          </div>
        </div>

        <div className="relative w-full xl:w-1/2 flex justify-center">
          <div className="absolute bottom-0 right-0 w-[85%] lg:w-[75%] h-[78%] bg-foreground rounded-l-2xl"></div>

          <img
            src="/images/sectionsImages/hero-pic.png"
            alt="Gestão de vendas"
            className="relative z-10 w-full max-w-[600px] h-auto object-contain"
          />
        </div>
      </div>

      <StarsBackground />
    </section>
  );
};

export default Hero;
