import { ChevronDown, ChevronUp, BadgeQuestionMark } from "lucide-react";
import { useState } from "react";
import { FaqItemProps } from "../../data/types";

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`lg:w-1/2" mb-2 pb-2 sm:mb-6 sm:pb-4 xl:px-2  ${
        question !== "O que é SEO? ( Search Optimizer Enginne )"
          ? "border-b border-muted-dark"
          : ""
      }`}
    >
      <button
        className="flex items-center justify-between w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center justify-center flex-shrink-0 w-6 h-6 mr-3">
          <BadgeQuestionMark className="w-5 h-5 text-brand sm:h-6 sm:w-6" />
        </div>

        <span className="flex-1 text-sm font-inter text-foreground sm:text-xl xl:text-xl">
          {question}
        </span>

        <div className="flex items-center justify-center flex-shrink-0 w-6 h-6 ml-3">
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-brand" />
          ) : (
            <ChevronDown className="w-5 h-5 text-foreground" />
          )}
        </div>
      </button>

      {isOpen && (
        <p className="max-w-md mt-2 text-sm transition-all font-link text-muted-dark duration-default sm:text-base 2xl:mt-6 2xl:max-w-xl 2xl:text-lg">
          {answer}
        </p>
      )}
    </div>
  );
};

export default FaqItem;
