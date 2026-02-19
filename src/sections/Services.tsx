import ServiceCard from "../components/cards/services";
import { motion } from "framer-motion";
import { serviceCards, serviceCardVariants } from "../data/data";

const Services: React.FC = () => {
  return (
    <>
      <section
        id="servicos"
        className="relative bg-surface items-stretch grid grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-4 sm:gap-x-8 sm:gap-y-12 2xl:gap-y-20 px-2 py-20 sm:px-16 xl:px-8 2xl:px-22"
      >
        {serviceCards.map((card, index) => (
          <motion.div
            key={index}
            variants={serviceCardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <ServiceCard {...card} />
          </motion.div>
        ))}
      </section>
    </>
  );
};

export default Services;
