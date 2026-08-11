import {
  ArrowUpRight,
  FileText,
  Handshake,
  IndianRupee,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";
import { CrmCard, CrmPageHeader, StatusBadge } from "@/components/crm/CrmUi";
import {
  crmStats,
  recentActivity,
  requirements,
  revenueByMonth,
} from "@/lib/data/crm";

const statIcons: Record<string, typeof FileText> = {
  FileText,
  ShieldCheck: Handshake,
  IndianRupee,
  Star,
};

export function CrmOverview() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
      <CrmPageHeader
        eyebrow="Dashboard"
        title="Good morning, Admin"
        subtitle="Here's what's happening across your managed services today."
      />

      {/* Stat cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {crmStats.map((s) => {
          const Icon = statIcons[s.icon] ?? FileText;
          return (
            <div
              key={s.label}
              className="group relative overflow-hidden rounded-2xl border border-ink-200/70 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-500/30 hover:shadow-[0_20px_48px_-20px_rgb(37_99_235/0.3)] dark:border-ink-800 dark:bg-ink-900/50"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-gradient-to-br from-brand-600 to-accent-500 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-15"
              />
              <div className="flex items-center justify-between">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-600/10 text-brand-600 dark:bg-brand-500/15 dark:text-accent-400">
                  <Icon className="h-4.5 w-4.5" />
                </span>
                <ArrowUpRight className="h-4 w-4 text-ink-300 opacity-0 transition-opacity group-hover:opacity-100 dark:text-ink-600" />
              </div>
              <p className="mt-4 font-display text-2xl font-semibold tracking-tight text-ink-900 dark:text-white">
                {s.currency
                  ? `₹${(s.value / 100000).toFixed(1)}L`
                  : s.decimals
                    ? s.value.toFixed(s.decimals)
                    : s.value.toLocaleString("en-IN")}
              </p>
              <p className="mt-0.5 text-xs text-ink-500 dark:text-ink-400">{s.label}</p>
              <p className="mt-2 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-emerald-600 dark:text-emerald-400">
                {s.delta}
              </p>
            </div>
          );
        })}
      </div>

      {/* Revenue chart + activity */}
      <div className="grid gap-5 lg:grid-cols-[1.5fr_1fr]">
        <CrmCard title="Revenue" subtitle="Monthly recurring value (₹ lakhs)" className="h-full">
          <div className="flex h-52 items-end justify-between gap-3">
            {revenueByMonth.map((r, i) => (
              <div key={r.month} className="flex h-full flex-1 flex-col items-center justify-end gap-2">
                <span className="font-mono text-[0.6rem] text-ink-400 dark:text-ink-500">
                  {r.value}
                </span>
                <div
                  className="w-full max-w-[2.5rem] rounded-t-lg bg-gradient-to-t from-brand-600 to-accent-500 transition-all duration-500"
                  style={{ height: `${(r.value / 12) * 100}%`, opacity: 0.5 + (i / revenueByMonth.length) * 0.5 }}
                />
                <span className="font-mono text-[0.58rem] uppercase text-ink-400 dark:text-ink-500">
                  {r.month}
                </span>
              </div>
            ))}
          </div>
        </CrmCard>

        <CrmCard title="Recent activity" className="h-full">
          <div className="flex flex-col gap-3.5">
            {recentActivity.map((a) => (
              <div key={a.text} className="flex items-start gap-3">
                <span
                  className={
                    a.tone === "brand"
                      ? "mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-600"
                      : a.tone === "accent"
                        ? "mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-500"
                        : "mt-1.5 h-2 w-2 shrink-0 rounded-full bg-emerald-500"
                  }
                />
                <div>
                  <p className="text-sm leading-snug text-ink-700 dark:text-ink-200">{a.text}</p>
                  <p className="mt-0.5 font-mono text-[0.6rem] uppercase tracking-wider text-ink-400 dark:text-ink-500">
                    {a.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CrmCard>
      </div>

      {/* Recent requirements */}
      <div>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-display text-lg font-semibold tracking-tight text-ink-900 dark:text-white">
            Recent requirements
          </h2>
          <Link
            to="/crm/requirements"
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 dark:text-accent-400"
          >
            View all
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
        <div className="overflow-hidden rounded-2xl border border-ink-200/70 bg-white dark:border-ink-800 dark:bg-ink-900/50">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead className="border-b border-ink-100 bg-surface-soft/70 dark:border-ink-800 dark:bg-ink-900/40">
                <tr>
                  <th className="px-4 py-3 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-ink-400 dark:text-ink-500">ID</th>
                  <th className="px-4 py-3 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-ink-400 dark:text-ink-500">Company</th>
                  <th className="px-4 py-3 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-ink-400 dark:text-ink-500">Service</th>
                  <th className="px-4 py-3 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-ink-400 dark:text-ink-500">City</th>
                  <th className="px-4 py-3 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-ink-400 dark:text-ink-500">Value</th>
                  <th className="px-4 py-3 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-ink-400 dark:text-ink-500">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink-100 dark:divide-ink-800">
                {requirements.slice(0, 5).map((r) => (
                  <tr key={r.id} className="transition-colors hover:bg-surface-soft/60 dark:hover:bg-ink-900/40">
                    <td className="px-4 py-3.5 font-mono text-xs text-brand-600 dark:text-accent-400">{r.id}</td>
                    <td className="px-4 py-3.5 text-sm font-medium text-ink-800 dark:text-ink-100">{r.company}</td>
                    <td className="px-4 py-3.5 text-sm text-ink-600 dark:text-ink-300">{r.service}</td>
                    <td className="px-4 py-3.5 text-sm text-ink-600 dark:text-ink-300">{r.city}</td>
                    <td className="px-4 py-3.5 font-mono text-sm text-ink-700 dark:text-ink-200">
                      ₹{r.value.toLocaleString("en-IN")}
                    </td>
                    <td className="px-4 py-3.5">
                      <StatusBadge status={r.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
