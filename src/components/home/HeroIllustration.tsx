import { motion } from "framer-motion";
import {
  BadgeCheck,
  Building2,
  FileText,
  LayoutDashboard,
  Search,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { EASE } from "@/components/ui/Reveal";

export function HeroIllustration() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
      }}
      className="relative mx-auto w-full max-w-md"
    >
      <div className="relative overflow-hidden rounded-2xl border border-ink-200/70 bg-white shadow-[0_32px_80px_-32px_rgb(15_23_42/0.3)] dark:border-ink-800 dark:bg-ink-900/70">
        {/* Top bar */}
        <div className="flex items-center justify-between border-b border-ink-100 px-5 py-3.5 dark:border-ink-800">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-brand-600 to-accent-500 text-white">
              <LayoutDashboard className="h-3.5 w-3.5" />
            </span>
            <div>
              <p className="font-display text-sm font-semibold leading-none text-ink-900 dark:text-white">
                Layzox
              </p>
              <p className="mt-0.5 font-mono text-[0.55rem] uppercase tracking-widest text-ink-400 dark:text-ink-500">
                Requirement coordination
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <span className="font-mono text-[0.58rem] uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              In progress
            </span>
          </div>
        </div>

        {/* Search row */}
        <div className="border-b border-ink-100 px-5 py-3 dark:border-ink-800">
          <div className="flex items-center gap-2 rounded-lg bg-ink-50 px-3 py-2 dark:bg-ink-800/60">
            <Search className="h-3.5 w-3.5 text-ink-400" />
            <span className="text-xs text-ink-400 dark:text-ink-500">
              Requirement · Facility management
            </span>
          </div>
        </div>

        <div className="grid grid-cols-[1fr_0.85fr] gap-4 p-5">
          {/* Left column */}
          <div className="flex flex-col gap-4">
            {/* Requirement card */}
            <div className="rounded-xl border border-ink-200/70 p-4 dark:border-ink-800">
              <div className="flex items-center gap-2.5">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-600/10 text-brand-600 dark:bg-brand-500/15 dark:text-accent-400">
                  <FileText className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-display text-[0.8rem] font-semibold text-ink-900 dark:text-white">
                    Facility Management
                  </p>
                  <p className="text-[0.62rem] text-ink-400 dark:text-ink-500">
                    Multi-site · Quarterly
                  </p>
                </div>
              </div>

              {/* Progress */}
              <div className="mt-4">
                <div className="flex items-center justify-between text-[0.6rem] text-ink-400 dark:text-ink-500">
                  <span>Coordinated through</span>
                  <span className="font-mono">3/4</span>
                </div>
                <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-ink-100 dark:bg-ink-800">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-brand-600 to-accent-500"
                    initial={{ width: 0 }}
                    animate={{ width: "75%" }}
                    transition={{ duration: 1.2, ease: EASE, delay: 0.6 }}
                  />
                </div>
              </div>
            </div>

            {/* Steps */}
            <div className="flex flex-col gap-2.5">
              {[
                { icon: FileText, label: "Requirement submitted", state: "done" },
                { icon: Search, label: "Quotation shared", state: "done" },
                { icon: Wrench, label: "Service executed", state: "current" },
                { icon: ShieldCheck, label: "Quality checked", state: "pending" },
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-2.5">
                  <span
                    className={
                      s.state === "done"
                        ? "inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-500"
                        : s.state === "current"
                          ? "inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand-600 text-white"
                          : "inline-flex h-5 w-5 items-center justify-center rounded-full bg-ink-100 text-ink-300 dark:bg-ink-800 dark:text-ink-600"
                    }
                  >
                    <s.icon className="h-3 w-3" />
                  </span>
                  <span
                    className={
                      s.state === "pending"
                        ? "text-[0.7rem] text-ink-400 dark:text-ink-500"
                        : "text-[0.7rem] font-medium text-ink-700 dark:text-ink-200"
                    }
                  >
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-3">
            {/* Partner card */}
            <div className="rounded-xl border border-brand-500/20 bg-gradient-to-br from-brand-600/10 to-accent-500/10 p-4">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand-600 to-accent-500 text-white">
                  <Building2 className="h-3.5 w-3.5" />
                </span>
                <div>
                  <p className="font-display text-[0.75rem] font-semibold text-ink-900 dark:text-white">
                    Service partner
                  </p>
                  <p className="flex items-center gap-1 text-[0.6rem] text-ink-400 dark:text-ink-500">
                    <BadgeCheck className="h-3 w-3 text-emerald-500" />
                    Matched to requirement
                  </p>
                </div>
              </div>
            </div>

            {/* Quote card */}
            <div className="rounded-xl border border-ink-200/70 p-4 dark:border-ink-800">
              <p className="font-mono text-[0.55rem] uppercase tracking-widest text-ink-400 dark:text-ink-500">
                Quotation
              </p>
              <p className="mt-1.5 font-display text-lg font-semibold text-ink-900 dark:text-white">
                Shared for approval
              </p>
              <p className="font-mono text-[0.55rem] uppercase tracking-wider text-emerald-500">
                GST invoice included
              </p>
            </div>

            {/* Documentation */}
            <div className="flex items-center justify-between rounded-xl border border-ink-200/70 px-4 py-3 dark:border-ink-800">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-brand-600 dark:text-accent-400" />
                <span className="text-[0.68rem] font-medium text-ink-700 dark:text-ink-200">
                  Documentation
                </span>
              </div>
              <span className="font-mono text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                On track
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
