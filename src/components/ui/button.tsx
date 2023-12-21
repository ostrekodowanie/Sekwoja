import { ButtonHTMLAttributes } from "react";

type Props = {
  variant?: "primary" | "secondary";
};

export default function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & Props) {
  return (
    <button
      {...props}
      className={`transition-colors rounded-md px-5 py-2.5 flex items-center gap-2 text-sm ${
        variant === "primary"
          ? "bg-primary"
          : "bg-white border-[#E2E2E2] border-[1px]"
      } ${className}`}
    >
      {children}
    </button>
  );
}
