import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

interface BadgeProps extends ComponentProps<"span"> {
  tone?: "brand" | "accent" | "neutral" | "success" | "outline";
}

const tones = {
  brand: "bg-brand-600/10 text-brand-700 dark:bg-brand-500/15 dark:text-brand-300",
  accent: "bg-accent-500/10 text-accent-700 dark:bg-accent-500/15 dark:text-accent-300",
  neutral: "bg-ink-100 text-ink-700 dark:bg-ink-800 dark:text-ink-300",
  success: "bg-emerald-500/10 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300",
  outline:
    "border border-ink-200 text-ink-600 dark:border-ink-700 dark:text-ink-300",
};

export function Badge({ tone = "brand", className, children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium tracking-tight",
        tones[tone],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
