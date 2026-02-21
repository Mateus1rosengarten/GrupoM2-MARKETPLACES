import React from "react";
import StarsBackground from "../components/ui/StarsBackground";
import Button from "../components/ui/Button";
import { FloatingBadge } from "../components/ui/FloatingBadge";
import { Blocks } from "lucide-react";
import { sendWhatsApp, WHATSAPP_MESSAGES } from "../utils/whatsapp";
import { fadeRight, fadeUp } from "../data/framer-motion-variants";
import MotionDiv from "../components/ui/MotionDiv";
import { useTheme } from "../context/ThemeContext";
import LightTexture from "../components/ui/lightTexture";

const Hero: React.FC = () => {
  const { lightMode } = useTheme();

  return (
    <section
      id="home"
      className="relative overflow-hidden flex py-20 sm:py-40 md:px-8 xl:px-32 bg-background"
    >
      {lightMode && <LightTexture />}
      <MotionDiv className="container flex flex-col sm:gap-y-8 lg:flex-row mt-20 items-center z-10">
        <MotionDiv
          variants={fadeUp}
          className="flex flex-col gap-8 sm:gap-4 2xl:gap-10 max-w-[92vw] xl:max-w-[50vw]"
        >
          <h1 className="text-foreground sm:mb-4 text-4xl sm:text-6xl font-varela font-bold ">
            Gestão Estratégica de Marketplaces com foco
            <br />
            <span>em </span>
            <span className="text-brand">rentabilidade</span>
          </h1>

          <span className="font-inter text-lg text-muted leading-relaxed mb-2">
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
              <Button customClass="bg-foreground !text-surface">PLANOS</Button>
            </a>
          </div>
        </MotionDiv>
        <MotionDiv
          variants={fadeRight}
          className="relative w-full xl:w-1/2 flex flex-col justify-center"
        >
          <FloatingBadge
            text="Marketplace & Financeiro"
            icon={Blocks}
            className="absolute -bottom-1 sm:bottom-0 left-4 sm:left-5"
          />
          <div className="absolute bottom-0 right-9 sm:right-0 w-[85%] lg:w-[83%] h-[80%] sm:h-[100%] bg-white shadow-2xl border-light rounded-tl-2xl rounded-br-2xl"></div>

          <img
            src="/images/section/hero-pic.png"
            alt="Gestão de vendas"
            className="relative z-10 w-full max-w-[600px] h-auto object-contain"
          />
        </MotionDiv>
      </MotionDiv>
      {!lightMode && <StarsBackground />}
    </section>
  );
};

export default Hero;
