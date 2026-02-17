import { motion } from "framer-motion";
import { marketplaces } from "../data/data";
import ImagePartners from "../components/ui/AboutSection/ImagePartners";

export default function AboutHero() {
  return (
    <section className="p-8 sm:p-0 relative w-full bg-background text-foreground overflow-hidden">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        <motion.div
          className="w-full flex flex-col lg:w-1/2 space-y-6 sm:space-y-8"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl font-varela lg:text-6xl font-bold order-1 sm:order-none ">
            Escalamos vendas com estratégia e
            <span className="text-brand"> performance</span>
          </h1>

          <p className="font-inter text-lg text-gray-300 leading-relaxed order-2 sm:order-none">
            O Grupo M2 nasceu da necessidade de transformar presença em
            resultado. Não basta estar nos marketplaces, é preciso estratégia,
            gestão e performance para construir crescimento real e sustentável.
          </p>
          <ImagePartners className="sm:hidden order-3" />

          <div className="flex gap-4 order-5 sm:order-none">
            <button className="font-inter bg-brand sm:bg-background sm:bg-none sm:hover:bg-brand transition px-6 py-3 rounded-full font-medium">
              Fale Conosco
            </button>

            <button className="border font-inter border-brand/80 hover:border-primary hover:text-primary transition px-6 py-3 rounded-full font-medium">
              Conhecer Serviços
            </button>
          </div>

          <div className="flex flex-wrap justify-center pt-2 items-center gap-x-14 gap-y-8 sm:gap-8 order-4 sm:order-none">
            {marketplaces.map((item, index) => (
              <div
                key={index}
                className="flex justify-center py-3 w-20 border border-brand/80 rounded-xl bg-foreground/90 cursor-pointer hover:bg-foreground/20 transition-all duration-300"
              >
                <img
                  src={item.src}
                  alt={item.name}
                  className="h-8 md:h-10 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </motion.div>

        <ImagePartners className="hidden sm:block" />
      </div>
    </section>
  );
}
