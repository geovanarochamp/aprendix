import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "softDanger" | "yellow";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
};

const variants: Record<ButtonVariant, string> = {
  primary: "bg-green text-navy shadow-[0_5px_0_#3E9F42] hover:bg-[#79DD76]",
  secondary:
    "border-4 border-blue bg-cream text-navy shadow-[0_5px_0_#2E76B8] hover:bg-[#E8F5FF]",
  softDanger: "bg-pink text-white shadow-[0_5px_0_#C94A83] hover:bg-[#FF82BB]",
  yellow: "bg-yellow text-navy shadow-[0_5px_0_#D39F18] hover:bg-[#FFE064]",
};

export function Button({
  children,
  variant = "primary",
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={[
        "min-h-16 rounded-[20px] px-7 py-4 text-lg font-bold",
        "transition-transform duration-100 ease-out",
        "active:translate-y-[5px] active:shadow-none",
        "focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-yellow",
        "disabled:pointer-events-none disabled:translate-y-[5px] disabled:opacity-60 disabled:shadow-none",
        variants[variant],
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </button>
  );
}
