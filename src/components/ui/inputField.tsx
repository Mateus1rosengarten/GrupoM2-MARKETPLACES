import React from "react";

type InputFieldProps = {
  icon: React.ReactNode;
  placeholder: string;
  register: any;
  dark?: boolean;
};

function InputField({ icon, placeholder, register, dark }: InputFieldProps) {
  return (
    <div className="relative mt-5">
      <div
        className={`absolute left-4 top-1/2 -translate-y-1/2  ${
          dark ? "text-white/60" : "text-gray-400"
        }`}
      >
        {icon}
      </div>

      <input
        {...register}
        placeholder={placeholder}
        className={`w-full rounded-xl pl-12 pr-4 py-3 focus:outline-none transition ${
          dark
            ? "bg-white/10 border border-white/20 text-white placeholder-white/60 focus:border-brand backdrop-blur-sm"
            : "border border-gray-200 focus:border-brand"
        }`}
      />
    </div>
  );
}

export default InputField;
