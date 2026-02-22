import ServiceCard from "../components/cards/services";
import { serviceCards } from "../data/services";
import { slideUpFade } from "../data/framer-motion-variants";
import MotionDiv from "../components/ui/MotionDiv";

const Services: React.FC = () => {
  return (
    <>
      <section
        id="servicos"
        className="relative bg-surface items-stretch grid grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-4 sm:gap-x-8 sm:gap-y-12 2xl:gap-y-20 px-2 py-20 sm:px-16 xl:px-8 2xl:px-22"
      >
        {serviceCards.map((card, index) => (
          <MotionDiv variants={slideUpFade}>
            <ServiceCard {...card} />
          </MotionDiv>
        ))}
      </section>
    </>
  );
};

export default Services;
