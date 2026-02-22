import { CheckCircle, Info } from "lucide-react";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../ui/Button";
import { PlanCardProps } from "../../data/types";
import MotionDiv from "../ui/MotionDiv";
import { staggerContainer } from "../../data/framer-motion-variants";

const PlanCard: React.FC<PlanCardProps> = ({
  title,
  description,
  oldPrice,
  newPrice,
  featuresIncluded,
  handleOnClick,
}) => {
  const [tooltipIndex, setTooltipIndex] = useState<number | null>(null);

  return (
    <MotionDiv
      variants={staggerContainer}
      className={`group relative mx-auto h-full w-full max-w-sm transform cursor-pointer hover:!scale-105 rounded-2xl border bg-white p-4 sm:p-6 text-left text-gray-800 shadow-xl shadow-light transition-all duration-default ease-in-out md:mb-8 lg:mb-0 md:max-w-[600px] lg:max-w-[320px] xl:max-w-sm 2xl:max-w-md
        ${title === "M2 TURBO" && "sm:!scale-105 border-2 border-brand shadow-3xl"}`}
    >
      {title === "M2 TURBO" && (
        <div className="absolute left-0 top-0 overflow-hidden rounded-tl-2xl">
          <div className="relative h-24 w-24">
            <div className="absolute -left-10 top-6 w-40 -rotate-45 bg-brand py-1 text-center text-xs font-bold tracking-wide text-gray-900 shadow-md">
              RECOMENDADO
            </div>
          </div>
        </div>
      )}

      <h3 className="mb-2 text-center font-varela text-2xl font-bold text-brand">
        {title}
      </h3>

      <div className="mb-4 text-center">
        <span className="sm:text-md block font-varela text-sm">
          A partir de:
        </span>
        {oldPrice && (
          <span className="sm:text-md block font-varela text-sm text-muted-light line-through">
            {`R$${oldPrice}/mês`}
          </span>
        )}

        <span className="text-md font-varela font-extrabold transition-colors duration-default group-hover:text-brand sm:text-xl">
          R$
        </span>
        <span className="font-varela text-5xl font-extrabold text-brand sm:text-gray-800 transition-colors duration-default group-hover:text-brand lg:text-6xl">
          {`${newPrice}`}
        </span>
        <span className="font-varela text-muted-light">/mês</span>
      </div>

      <p className="mb-6 font-inter text-sm text-muted">{description}</p>

      <ul className="mb-6 space-y-3 font-inter">
        {featuresIncluded.map((feature, index) => (
          <li key={feature.title} className="relative flex items-start gap-2">
            <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-brand" />

            <p className="m-0 text-sm leading-snug">
              <span className="whitespace-normal">{feature.title}</span>

              {feature.description && (
                <span
                  className="ml-1 cursor-pointer whitespace-nowrap"
                  onMouseEnter={() => setTooltipIndex(index)}
                  onMouseLeave={() => setTooltipIndex(null)}
                >
                  <Info className="inline-block h-3 w-3 text-muted-light" />

                  <AnimatePresence>
                    {tooltipIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="absolute left-1/2 top-full z-20 max-w-xs -translate-x-1/2 whitespace-normal break-words rounded-md bg-background p-2 text-xs text-foreground shadow-lg"
                      >
                        {feature.description}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </span>
              )}
            </p>
          </li>
        ))}
      </ul>

      <Button
        onClick={handleOnClick}
        customClass="!w-full hover:scale-zoom mx-auto"
      >
        <span className="mx-auto text-center">
          SOLICITE DIAGNÓSTICO INICIAL
        </span>
      </Button>

      <ul className="mt-4 space-y-4 p-2 font-inter text-xs text-muted">
        <li>
          *Nossos planos são modelos flexíveis e podem ser personalizados após
          um diagnóstico gratuito, conforme as necessidades reais do seu
          negócio.
        </li>
        <li>
          *Você pode encerrar o contrato a qualquer momento, sem aplicação de
          taxa rescisória.
        </li>
      </ul>
    </MotionDiv>
  );
};

export default PlanCard;
