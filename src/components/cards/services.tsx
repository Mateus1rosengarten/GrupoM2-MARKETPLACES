import Button from "../ui/Button";
import { ServiceCardProps } from "../../data/types";

const ServiceCard: React.FC<ServiceCardProps> = ({
  image,
  title,
  description,
  handleOnClick,
}) => {
  return (
    <div className="flex flex-col justify-between h-full bg-foreground rounded-2xl shadow-4xl text-center max-w-sm mx-auto p-4 sm:p-6 xl:py-8">
      <img
        src={image}
        alt={title}
        className="rounded-full object-cover w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-2 sm:mb-4"
      />
      <h3 className="text-md sm:text-lg font-varela font-bold mb-2 sm:mb-4">
        {title}
      </h3>
      <p className="font-inter text-xs text-left sm:text-sm mb-4 sm:mb-6">
        {description}
      </p>
      <Button onClick={handleOnClick} customClass="w-full">
        <span>SABER MAIS</span>
      </Button>
    </div>
  );
};

export default ServiceCard;
