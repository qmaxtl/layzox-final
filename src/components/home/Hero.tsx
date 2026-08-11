import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { EASE } from "@/components/ui/Reveal";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-ink-950">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid bg-grid-fade opacity-40" />
        <div className="absolute -top-32 left-1/2 h-[30rem] w-[50rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-brand-600/15 via-accent-500/8 to-transparent blur-[100px]" />
      </div>

      <div className="relative mx-auto w-full max-w-[90rem] px-5 pb-16 pt-32 sm:px-8 lg:px-12 lg:pb-24 lg:pt-40">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-600/20 bg-brand-600/5 px-4 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-brand-700 dark:border-brand-500/25 dark:bg-brand-500/10 dark:text-accent-300">
              Business Services, Managed.
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 text-[2.6rem] font-semibold leading-[1.04] tracking-[-0.03em] text-ink-900 sm:text-6xl lg:text-[4.1rem] dark:text-white"
          >
            One requirement.{" "}
            <span className="text-gradient">We handle the rest.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-500 dark:text-ink-400"
          >
            Layzox is a managed B2B services procurement platform. Tell us what your business needs  
            facility management, pest control, housekeeping, security and more   and we coordinate
            sourcing, quotations, delivery and documentation from start to finish.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/post-requirement"
              className="group inline-flex items-center gap-2.5 rounded-2xl bg-ink-900 px-7 py-3.5 text-base font-semibold text-white shadow-[0_10px_36px_-10px_rgb(15_23_42/0.6)] transition-all hover:-translate-y-0.5 hover:bg-ink-800 dark:bg-brand-600 dark:hover:bg-brand-500"
            >
              Post a Requirement
              <ArrowRight className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/how-it-works"
              className="inline-flex items-center gap-2.5 rounded-2xl border border-ink-300 px-7 py-3.5 text-base font-semibold text-ink-900 transition-all hover:-translate-y-0.5 hover:border-ink-900 hover:bg-ink-900/5 dark:border-ink-700 dark:text-white dark:hover:border-ink-300"
            >
              How It Works
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
