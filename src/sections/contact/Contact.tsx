import { Contact, Phone, Mail, MessageCircle } from "lucide-react";
import { useState } from "react";
import { FloatingBadge } from "../../components/ui/FloatingBadge";
import ContactItem from "../../components/ui/ContactItem";
import ContactFormCard from "./form/ContactFormDesktop";
import ContactFormMobile from "./form/ContactFormMobile";
import SuccessModal from "./SucessModal";
import { contact } from "../../data/framer-motion-variants";
import MotionDiv from "../../components/ui/MotionDiv";

export default function ContactSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      id="contato"
      className="relative bg-surface text-foreground py-24 px-2 md:px-6 lg:px-20 2xl:px-36"
    >
      <div className="mx-auto flex flex-col gap-20">
        <MotionDiv variants={contact} className="px-2 md:px-6 lg:px-0">
          <FloatingBadge
            icon={Contact}
            text="Fale Conosco"
            className="sm:!py-3"
          />

          <h2 className="mt-16 sm:mt-14 sm:mt-16 text-3xl md:text-4xl xl:text-5xl font-varela leading-tight">
            Tem alguma dúvida?
            <br />
            Entre em contato!
          </h2>

          <div className="flex flex-col w-full justify-between 2xl:justify-evenly md:flex-row mt-12 lg:mt-20 xl:mt-10 space-y-12 md:space-y-0">
            <ContactItem
              icon={<MessageCircle size={22} />}
              title="Pronto para escalar suas vendas?"
              description="Vamos conversar sobre o potencial de seu negocio."
            />

            <ContactItem
              icon={<Phone size={22} />}
              title="Agende um diagnostico gratuito!"
              description="(11) 98850-4105"
            />

            <ContactItem
              icon={<Mail size={22} />}
              title="Como podemos te ajudar?"
              description="contato@grupom2.com"
            />
          </div>
        </MotionDiv>
        <div id="form">
          <div className="md:px-6 lg:px-0">
            <ContactFormMobile onSucess={() => setIsModalOpen(true)} />

            <div className="hidden lg:block">
              <ContactFormCard onSucess={() => setIsModalOpen(true)} />
            </div>
          </div>
        </div>
      </div>
      <SuccessModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
