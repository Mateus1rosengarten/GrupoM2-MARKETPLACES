import { motion } from "framer-motion";

import { Contact, Phone, Mail, MessageCircle } from "lucide-react";
import { FloatingBadge } from "../components/ui/FloatingBadge";
import ContactItem from "../components/ui/ContactSection/ContactItem";
import ContactFormCard from "../components/ui/ContactSection/ContactForm";
import ContactFormMobile from "../components/ui/ContactSection/ContactFormMobile";

export default function ContactSection() {
  return (
    <section
      id="contato"
      className="relative bg-background text-foreground py-24 px-6 lg:px-20 2xl:px-36"
    >
      <div className="mx-auto flex flex-col gap-20">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="px-2 md:px-6 lg:px-0"
        >
          <FloatingBadge
            icon={Contact}
            text="Entre em contato"
            className="!py-3"
          />

          <h2 className="mt-14 sm:mt-16 text-3xl md:text-4xl xl:text-5xl font-varela leading-tight">
            Tem alguma dúvida?
            <br />
            Entre em contato!
          </h2>

          <div className="flex flex-col w-full justify-between 2xl:justify-evenly md:flex-row mt-12 lg:mt-20 xl:mt-10 space-y-10 md:space-y-0">
            <ContactItem
              icon={<MessageCircle size={22} />}
              title="Pronto para ir ao proximo nivel?"
              description="Vamos conversar sobre o potencial de seu negocio."
            />

            <ContactItem
              icon={<Phone size={22} />}
              title="Marque um diagnostico gratuito!"
              description="(11) 98850-4105"
            />

            <ContactItem
              icon={<Mail size={22} />}
              title="Como podemos te ajudar?"
              description="contato@grupom2.com"
            />
          </div>
        </motion.div>
        <div className="md:px-6 lg:px-0">
          {/* ===== MOBILE (form com imagem atrás) ===== */}
          <ContactFormMobile />

          {/* ===== DESKTOP (layout 50/50) ===== */}
          <div className="hidden lg:block">
            <ContactFormCard />
          </div>
        </div>
      </div>
    </section>
  );
}
