import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function CrmPageHeader({
  eyebrow,
  title,
  subtitle,
  actions,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  actions?: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        {eyebrow && (
          <span className="mb-2 inline-flex items-center gap-2 font-mono text-[0.68rem] font-medium uppercase tracking-[0.22em] text-brand-600 dark:text-accent-400">
            <span className="h-px w-5 bg-current opacity-60" />
            {eyebrow}
          </span>
        )}
        <h1 className="font-display text-2xl font-semibold tracking-tight text-ink-900 sm:text-3xl dark:text-white">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-500 dark:text-ink-400">
            {subtitle}
          </p>
        )}
      </div>
      {actions && <div className="flex shrink-0 items-center gap-3">{actions}</div>}
    </div>
  );
}

type Tone = "brand" | "accent" | "success" | "warn" | "neutral" | "danger";

const statusTones: Record<string, Tone> = {
  New: "brand",
  Quoted: "accent",
  "In Progress": "warn",
  Completed: "success",
  Active: "success",
  Onboarding: "accent",
  Paused: "neutral",
  Paid: "success",
  Pending: "warn",
  Invoiced: "brand",
};

const toneStyles: Record<Tone, string> = {
  brand: "bg-brand-600/10 text-brand-700 dark:bg-brand-500/15 dark:text-brand-300",
  accent: "bg-accent-500/10 text-accent-700 dark:bg-accent-500/15 dark:text-accent-300",
  success: "bg-emerald-500/10 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300",
  warn: "bg-amber-500/10 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300",
  neutral: "bg-ink-100 text-ink-600 dark:bg-ink-800 dark:text-ink-300",
  danger: "bg-red-500/10 text-red-600 dark:bg-red-500/15 dark:text-red-300",
};

export function StatusBadge({ status }: { status: string }) {
  const tone = statusTones[status] ?? "neutral";
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium tracking-tight",
        toneStyles[tone],
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {status}
    </span>
  );
}

export function CrmCard({
  title,
  subtitle,
  action,
  children,
  className,
}: {
  title?: string;
  subtitle?: string;
  action?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-ink-200/70 bg-white dark:border-ink-800 dark:bg-ink-900/50",
        className,
      )}
    >
      {(title || action) && (
        <div className="flex items-center justify-between gap-4 border-b border-ink-100 px-5 py-4 dark:border-ink-800">
          <div>
            <h3 className="font-display text-[0.95rem] font-semibold tracking-tight text-ink-900 dark:text-white">
              {title}
            </h3>
            {subtitle && <p className="mt-0.5 text-xs text-ink-400 dark:text-ink-500">{subtitle}</p>}
          </div>
          {action}
        </div>
      )}
      <div className="p-5">{children}</div>
    </div>
  );
}

export const thClass =
  "px-4 py-3 text-left font-mono text-[0.62rem] font-medium uppercase tracking-[0.16em] text-ink-400 dark:text-ink-500";
export const tdClass = "px-4 py-3.5 text-sm text-ink-700 dark:text-ink-200";

export function CrmTable({
  headers,
  children,
}: {
  headers: string[];
  children: ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-ink-200/70 bg-white dark:border-ink-800 dark:bg-ink-900/50">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] border-collapse text-left">
          <thead className="border-b border-ink-100 bg-surface-soft/70 dark:border-ink-800 dark:bg-ink-900/40">
            <tr>
              {headers.map((h) => (
                <th key={h} className={thClass}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-ink-100 dark:divide-ink-800">{children}</tbody>
        </table>
      </div>
    </div>
  );
}
