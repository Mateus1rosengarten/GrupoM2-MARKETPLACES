import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <section
      id="sobre"
      className="relative z-10 flex flex-col w-full px-6 py-8 bg-background sm:gap-10 sm:px-10 sm:py-20 md:px-12 xl:px-12 2xl:px-28"
    >
      <h2 className="text-foreground text-center sm:text-left text-3xl sm:text-6xl font-varela font-bold">
        SOBRE O GRUPO M2
      </h2>

      <div className="flex flex-col gap-y-24 lg:flex-row">
        <motion.div
          className="flex flex-col w-full space-y-4 sm:space-y-8 lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="text-justify font-inter text-foreground sm:text-xl xl:text-2xl leading-relaxed 2xl:leading-loose">
            <span className="block mt-4 2xl:mt-0">
              O Grupo M2 nasceu da necessidade de enxergar e operar os
              marketplaces de forma completa e estratégica. Estar presente nas
              plataformas não é suficiente quando não há uma gestão capaz de
              transformar operações em crescimento real e consistente. Da mesma
              forma, resultados sem gestão não se sustentam.
            </span>
            <span className="block">
              Foi a partir dessa visão que o Grupo M2 surgiu,da união de duas
              frentes que funcionam em perfeita harmonia:
              <span className="font-bold text-white">
                Vendas em escala e gestão estratégica do capital
              </span>
              , conectando estratégia, e performance para construir operações
              sustentáveis dentro dos marketplaces.
            </span>
          </div>
        </motion.div>

        <motion.div
          className="w-full lg:w-1/2 flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="relative w-full xl:w-1/2 flex justify-center">
            <div className="absolute bottom-0 right-0 w-[85%] lg:w-[75%] h-[78%] bg-foreground rounded-l-2xl"></div>

            <img
              src="/images/sectionsImages/partners.png"
              alt="Equipe Grupo M2"
              className="relative z-10 w-full max-w-[600px] h-auto object-contain"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
