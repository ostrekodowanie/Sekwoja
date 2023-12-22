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
      className={`font-medium transition-colors disabled:opacity-60 rounded-md px-5 py-2.5 flex items-center gap-2 text-sm ${
        variant === "primary"
          ? "bg-primary hover:bg-[#FFD125]/80 transition-colors"
          : "bg-white border-[#E2E2E2] border-[1px]"
      } ${className}`}
    >
      {children}
    </button>
  );
}
