import { motion } from "framer-motion";
import { MotionDivProps } from "../../data/types";

function MotionDiv({ children, ...rest }: MotionDivProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export default MotionDiv;
