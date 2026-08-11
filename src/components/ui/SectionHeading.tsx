import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Reveal } from "@/components/ui/Reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  className?: string;
  light?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow && (
        <Reveal>
          <span
            className={cn(
              "mb-4 inline-flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.22em]",
              light ? "text-accent-400" : "text-brand-600 dark:text-accent-400",
            )}
          >
            <span className="h-px w-6 bg-current opacity-60" />
            {eyebrow}
            <span className="h-px w-6 bg-current opacity-60" />
          </span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2
          className={cn(
            "max-w-3xl text-3xl font-semibold leading-[1.08] tracking-tight sm:text-4xl lg:text-[2.75rem]",
            light ? "text-white" : "text-ink-900 dark:text-white",
          )}
        >
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.12}>
          <p
            className={cn(
              "mt-5 max-w-2xl text-base leading-relaxed sm:text-lg",
              light ? "text-slate-300" : "text-ink-500 dark:text-ink-400",
            )}
          >
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
