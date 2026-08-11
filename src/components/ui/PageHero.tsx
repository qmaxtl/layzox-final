import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { EASE } from "@/components/ui/Reveal";

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
  align?: "left" | "center";
  compact?: boolean;
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
  align = "center",
  compact = false,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-white pb-12 pt-32 sm:pt-40 dark:bg-ink-950">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid bg-grid-fade opacity-70" />
        <motion.div
          className="absolute -top-40 left-1/2 h-[30rem] w-[60rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-brand-600/15 via-accent-500/10 to-transparent blur-[110px]"
          animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      <Container className={`relative ${compact ? "max-w-4xl" : ""}`}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          className={`flex flex-col ${align === "center" ? "items-center text-center" : "items-start text-left"}`}
        >
          {eyebrow && (
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-600/20 bg-brand-600/5 px-4 py-1.5 font-mono text-[0.68rem] font-medium uppercase tracking-[0.2em] text-brand-700 dark:border-brand-500/25 dark:bg-brand-500/10 dark:text-accent-300">
              {eyebrow}
            </span>
          )}
          <h1 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-ink-900 sm:text-5xl lg:text-6xl dark:text-white">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-500 sm:text-lg dark:text-ink-400">
              {subtitle}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </motion.div>
      </Container>
    </section>
  );
}
