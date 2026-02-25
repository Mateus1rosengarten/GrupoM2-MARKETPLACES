import React from "react";
import { SectionProps } from "../../data/types";

const Section = ({ title, children, highlight = false }: SectionProps) => {
  return (
    <section className="mb-10 leading-relaxed">
      <h2
        className={`font-varela text-xl md:text-2xl mb-2 sm:mb-4 text-foreground font-bold`}
      >
        {title}
      </h2>
      <div className="font-inter text-muted">{children}</div>
    </section>
  );
};

export default Section;
