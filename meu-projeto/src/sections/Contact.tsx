import { faqs } from "../data/data";
import FaqItem from "../components/ui/FaqItem";
import ContactForm from "../components/ui/ContactForm";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
  return (
    <section id="contato">
      <motion.div
        className="lg:space-y-18 relative flex flex-col space-y-8 xl:space-y-20 bg-surface p-6 sm:p-12 lg:flex-row lg:space-x-4 xl:justify-between 2xl:px-28 2xl:!pr-28"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col flex-1 space-y-6 sm:space-y-12">
          <h2 className="text-2xl sm:mx-none whitespace-nowrap font-varela text-foreground sm:text-5xl">
            DUVIDAS FREQUENTES
          </h2>
          <ul className="grid gap-6 2xl:grid-cols-2">
            {faqs.map((faq, index) => (
              <FaqItem
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </ul>
        </div>
        <div className="flex items-center flex-1">
          <ContactForm />
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
