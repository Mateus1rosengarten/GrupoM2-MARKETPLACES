import PlanCard from "../components/cards/plans";
import { planCards, serviceCardVariants } from "../data/data";
import { motion } from "framer-motion";

const Plans: React.FC = () => {
  return (
    <section
      id="planos"
      className="relative flex flex-col justify-evenly space-y-6 bg-surface px-6 py-6 lg:flex-row sm:space-y-0 sm:px-4 sm:py-20 xl:px-8 2xl:px-24"
    >
      {planCards.map((plan, index) => (
        <motion.div
          key={index}
          variants={serviceCardVariants}
          className="flex-1"
        >
          <PlanCard {...plan} />
        </motion.div>
      ))}
    </section>
  );
};

export default Plans;
