import PlanCard from "../components/cards/plans";
import { planscards, service } from "../data/framer-motion-variants";
import { motion } from "framer-motion";
import { planCards } from "../data/plans";
import MotionDiv from "../components/ui/MotionDiv";

const Plans: React.FC = () => {
  return (
    <section
      id="planos"
      className="relative flex flex-col lg:flex-row justify-evenly space-y-6 sm:space-y-0 px-6 py-6 sm:px-4 sm:py-20 xl:px-8 2xl:px-24 bg-surface"
    >
      {planCards.map((plan, index) => (
        <MotionDiv key={index} variants={planscards} className="flex-1">
          <PlanCard {...plan} />
        </MotionDiv>
      ))}
    </section>
  );
};

export default Plans;
