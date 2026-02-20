import { motion, AnimatePresence } from "framer-motion";
import { ModalTextProps } from "../../data/types";

export default function SuccessModal({ isOpen, onClose }: ModalTextProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="relative bg-background border border-white/10 rounded-2xl p-8 max-w-md w-full text-center shadow-2xl z-10"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white/60 hover:text-white transition"
            >
              ✕
            </button>

            <h2 className="text-2xl font-semibold mb-4 text-white">
              Mensagem enviada 🚀
            </h2>

            <p className="text-white/70">
              Recebemos sua mensagem e entraremos em contato o mais breve
              possível.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
