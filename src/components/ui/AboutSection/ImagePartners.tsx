import { motion } from "framer-motion";
import { FloatingBadge } from "../FloatingBadge";
import { Target, TrendingUp } from "lucide-react";

type ImagePartnersProps = {
  className?: string;
};

const ImagePartners = ({ className }: ImagePartnersProps) => {
  return (
    <>
      <motion.div
        className={`relative w-full lg:w-1/2 flex items-start  ${className}`}
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="absolute bottom-1 right-0 w-[80%] lg:w-[75%] h-full bg-foreground rounded-r-2xl order-2"></div>

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
          src="/images/sectionsImages/partners.png"
          alt="Equipe Grupo M2"
          className="relative max-w-[500px] w-full z-1 block h-auto"
        />
      </motion.div>
    </>
  );
};

export default ImagePartners;
