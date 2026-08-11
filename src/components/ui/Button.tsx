import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "accent" | "ghost" | "white" | "outline" | "dark";
type Size = "sm" | "md" | "lg" | "xl";

interface ButtonProps extends ComponentProps<"a"> {
  variant?: Variant;
  size?: Size;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  children: ReactNode;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-ink-900 text-white hover:bg-ink-800 shadow-[0_8px_24px_-8px_rgb(15_23_42/0.5)] hover:shadow-[0_12px_32px_-8px_rgb(15_23_42/0.55)]",
  secondary:
    "bg-brand-600 text-white hover:bg-brand-500 shadow-[0_8px_24px_-8px_rgb(37_99_235/0.6)] hover:shadow-[0_12px_36px_-8px_rgb(37_99_235/0.7)]",
  accent:
    "bg-gradient-to-r from-brand-600 via-brand-500 to-accent-500 text-white shadow-[0_8px_28px_-8px_rgb(6_182_212/0.6)] hover:shadow-[0_12px_40px_-8px_rgb(6_182_212/0.75)]",
  outline:
    "border border-ink-300 text-ink-900 hover:border-ink-900 hover:bg-ink-900/5 dark:border-ink-700 dark:text-ink-100 dark:hover:border-ink-300",
  ghost:
    "text-ink-800 hover:bg-ink-900/5 dark:text-ink-200 dark:hover:bg-white/5",
  white:
    "bg-white text-ink-900 hover:bg-ink-100 shadow-[0_8px_24px_-8px_rgb(15_23_42/0.35)]",
  dark: "bg-ink-950 text-white hover:bg-ink-900 shadow-[0_8px_28px_-8px_rgb(15_23_42/0.5)]",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm gap-2 rounded-lg",
  md: "px-5 py-2.5 text-sm gap-2 rounded-xl",
  lg: "px-6 py-3 text-base gap-2.5 rounded-xl",
  xl: "px-7 py-3.5 text-base gap-3 rounded-2xl",
};

export function Button({
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "right",
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <a
      className={cn(
        "group/btn relative inline-flex cursor-pointer items-center justify-center font-medium tracking-tight transition-all duration-300 will-change-transform hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] select-none",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      {icon && iconPosition === "left" && (
        <span className="[&>svg]:h-4 [&>svg]:w-4">{icon}</span>
      )}
      <span>{children}</span>
      {icon && iconPosition === "right" && (
        <span className="[&>svg]:h-4 [&>svg]:w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5">
          {icon}
        </span>
      )}
    </a>
  );
}
