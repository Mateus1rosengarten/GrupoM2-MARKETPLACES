import { ButtonProps } from "../../data/types";

const Button: React.FC<ButtonProps> = ({
  children,
  customClass,
  type = "button",
  onClick,
}) => {
  return (
    <button
      className={`flex items-center justify-center text-center bg-brand text-foreground font-inter text-sm font-extrabold rounded-3xl whitespace-nowrap sm:w-auto sm:max-w-sm px-4 sm:px-8 py-4  transition-all duration-default ease-in-out 
                  hover:scale-zoom hover:shadow-lg
 ${customClass}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
