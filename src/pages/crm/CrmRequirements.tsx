import { Plus } from "lucide-react";
import { useState } from "react";
import { CrmPageHeader, CrmTable, StatusBadge } from "@/components/crm/CrmUi";
import { requirements } from "@/lib/data/crm";
import { cn } from "@/lib/cn";

const filters = ["All", "New", "Quoted", "In Progress", "Completed"] as const;

export function CrmRequirements() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const filtered =
    active === "All" ? requirements : requirements.filter((r) => r.status === active);

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-6">
      <CrmPageHeader
        eyebrow="CRM"
        title="Requirements"
        subtitle="Every business requirement submitted through Layzox, tracked from submission to completion."
        actions={
          <span className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-brand-600 to-accent-500 px-4 py-2 text-sm font-semibold text-white shadow-[0_8px_28px_-8px_rgb(6_182_212/0.6)]">
            <Plus className="h-4 w-4" />
            New requirement
          </span>
        }
      />

      <div className="flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setActive(f)}
            className={cn(
              "cursor-pointer rounded-full px-4 py-1.5 text-sm font-medium transition-all",
              active === f
                ? "bg-ink-900 text-white dark:bg-brand-600"
                : "border border-ink-200 bg-white text-ink-600 hover:border-ink-900 dark:border-ink-700 dark:bg-ink-900/50 dark:text-ink-300",
            )}
          >
            {f}
          </button>
        ))}
      </div>

      <CrmTable headers={["ID", "Company", "Service", "City", "Value", "Date", "Status"]}>
        {filtered.map((r) => (
          <tr key={r.id} className="transition-colors hover:bg-surface-soft/60 dark:hover:bg-ink-900/40">
            <td className="px-4 py-3.5 font-mono text-xs text-brand-600 dark:text-accent-400">{r.id}</td>
            <td className="px-4 py-3.5">
              <p className="text-sm font-medium text-ink-800 dark:text-ink-100">{r.company}</p>
              <p className="text-xs text-ink-400 dark:text-ink-500">{r.customer}</p>
            </td>
            <td className="px-4 py-3.5 text-sm text-ink-600 dark:text-ink-300">{r.service}</td>
            <td className="px-4 py-3.5 text-sm text-ink-600 dark:text-ink-300">{r.city}</td>
            <td className="px-4 py-3.5 font-mono text-sm text-ink-700 dark:text-ink-200">
              ₹{r.value.toLocaleString("en-IN")}
            </td>
            <td className="px-4 py-3.5 font-mono text-xs text-ink-400 dark:text-ink-500">{r.date}</td>
            <td className="px-4 py-3.5">
              <StatusBadge status={r.status} />
            </td>
          </tr>
        ))}
      </CrmTable>
    </div>
  );
}
