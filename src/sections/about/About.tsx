import ImagePartners from "./ImagePartners";
import { sendWhatsApp, WHATSAPP_MESSAGES } from "../../utils/whatsapp";
import { marketplaces } from "../../data/about";
import { about } from "../../data/framer-motion-variants";
import MotionDiv from "../../components/ui/MotionDiv";

export default function AboutHero() {
  return (
    <section
      id="sobre"
      className="px-4 py-16 sm:px-8 relative w-full bg-surface text-foreground overflow-hidden"
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        <MotionDiv
          variants={about}
          className="w-full flex flex-col gap-5 sm:gap-0 lg:w-1/2 space-y-6 sm:space-y-8"
        >
          <h1 className="text-4xl font-varela lg:text-6xl font-bold order-1 sm:order-none ">
            Escalamos vendas com estratégia e
            <span className="text-brand"> performance</span>
          </h1>

          <p className="font-inter text-lg text-muted leading-relaxed order-2 sm:order-none">
            O Grupo M2 nasceu da necessidade de transformar presença em
            resultado. Não basta estar nos marketplaces, é preciso estratégia,
            gestão e performance para construir crescimento real e sustentável.
          </p>
          <ImagePartners className="sm:hidden order-3" />

          <div className="flex flex-col sm:flex-row w-full items-center justify-center sm:justify-start space-y-4 md:space-y-0 gap-4 order-5 sm:order-none">
            <button
              onClick={() =>
                sendWhatsApp(WHATSAPP_MESSAGES.diagnosticoGratuito)
              }
              className="font-inter bg-brand sm:bg-background sm:bg-none sm:hover:bg-brand shadow-light transition px-6 py-3 rounded-full font-medium"
            >
              Fale Conosco
            </button>

            <button
              onClick={() => sendWhatsApp(WHATSAPP_MESSAGES.servicos)}
              className="border font-inter border-foreground hover:border-brand hover:text-primary shadow-light transition px-6 py-3 rounded-full font-medium"
            >
              Conhecer Serviços
            </button>
          </div>

          <div className="flex flex-wrap justify-center pt-2 items-center gap-x-10 gap-y-8 sm:gap-8 order-4 sm:order-none">
            {marketplaces.map((item, index) => (
              <div
                key={index}
                className="flex justify-center py-3 w-20 bg-white border border-brand/80 rounded-xl shadow-light bg-foreground/90 cursor-pointer hover:bg-foreground/20 transition-all duration-300"
              >
                <img
                  src={item.src}
                  alt={item.name}
                  className="h-8 md:h-10 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </MotionDiv>

        <ImagePartners className="hidden sm:block" />
      </div>
    </section>
  );
}
