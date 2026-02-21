import { FloatingBadge } from "../../components/ui/FloatingBadge";
import { Target, TrendingUp } from "lucide-react";
import MotionDiv from "../../components/ui/MotionDiv";
import { fadeLeft } from "../../data/framer-motion-variants";
import { ImagePartnersProps } from "../../data/types";

const ImagePartners = ({ className }: ImagePartnersProps) => {
  return (
    <>
      <MotionDiv
        variants={fadeLeft}
        className={`relative w-full lg:w-1/2 flex items-start  ${className}`}
      >
        <div className="absolute bottom-1 right-0 w-[80%] lg:w-[75%] h-full bg-white shadow-light  rounded-r-2xl order-2"></div>

        <FloatingBadge
          icon={TrendingUp}
          text="Crescimento Sustentável "
          className="-top-2 -left-2 sm:left-4"
        />

        <FloatingBadge
          icon={Target}
          text="Performance & Dados"
          className="-bottom-2  -right-2 sm:-right-4"
        />

        <img
          src="/images/section/partners.png"
          alt="Equipe Grupo M2"
          className="relative max-w-[500px] w-full z-1 block h-auto"
        />
      </MotionDiv>
    </>
  );
};

export default ImagePartners;
