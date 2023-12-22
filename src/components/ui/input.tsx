import { InputHTMLAttributes } from "react";

export default function Input({
  className,
  name,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="relative">
      <label
        className="text-[#BABABA] text-[12px] absolute left-3.5 top-0 -translate-y-[50%] bg-white px-1"
        htmlFor={name}
      >
        {name}
      </label>
      <input
        {...props}
        className="rounded-md border-[1px] border-[#E2E2E2] px-4 py-3 !outline-none text-sm"
        id={name}
        name={name}
        type="text"
      />
    </div>
  );
}
