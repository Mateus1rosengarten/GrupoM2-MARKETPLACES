function ContactItem({ icon, title, description, info }: any) {
  return (
    <div className="flex gap-4 sm:gap-5">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand text-white flex-shrink-0">
        {icon}
      </div>

      <div>
        <h4 className="font-semibold font-varela text-md sm:text-lg">
          {title}
        </h4>
        <p className="font-inter text-sm sm:text-md text-gray-300 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

export default ContactItem;
