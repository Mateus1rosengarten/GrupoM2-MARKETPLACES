import { ContactItemProps } from "../../data/types";

function ContactItem({ icon, title, description }: ContactItemProps) {
  return (
    <div className="flex gap-4 sm:gap-5">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl shadow-light bg-brand text-foreground flex-shrink-0">
        {icon}
      </div>

      <div>
        <h4 className="font-semibold font-varela text-md sm:text-lg">
          {title}
        </h4>
        <p className="font-inter text-sm sm:text-md text-muted leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

export default ContactItem;
