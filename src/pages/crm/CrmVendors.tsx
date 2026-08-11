import { Star } from "lucide-react";
import { CrmPageHeader, CrmTable, StatusBadge } from "@/components/crm/CrmUi";
import { vendors } from "@/lib/data/crm";

export function CrmVendors() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-6">
      <CrmPageHeader
        eyebrow="CRM"
        title="Vendors"
        subtitle="Verified service partners assigned internally by Layzox — never chosen by customers."
      />

      <CrmTable
        headers={["Vendor", "Category", "City", "Quality Score", "Jobs Completed", "Status"]}
      >
        {vendors.map((v) => (
          <tr key={v.id} className="transition-colors hover:bg-surface-soft/60 dark:hover:bg-ink-900/40">
            <td className="px-4 py-3.5">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink-900 font-display text-xs font-semibold text-white dark:bg-ink-800">
                  {v.name
                    .split(" ")
                    .slice(0, 2)
                    .map((n) => n[0])
                    .join("")}
                </span>
                <div>
                  <p className="text-sm font-medium text-ink-800 dark:text-ink-100">{v.name}</p>
                  <p className="font-mono text-[0.62rem] uppercase tracking-wider text-ink-400 dark:text-ink-500">
                    {v.id}
                  </p>
                </div>
              </div>
            </td>
            <td className="px-4 py-3.5 text-sm text-ink-600 dark:text-ink-300">{v.category}</td>
            <td className="px-4 py-3.5 text-sm text-ink-600 dark:text-ink-300">{v.city}</td>
            <td className="px-4 py-3.5">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 font-mono text-sm font-semibold text-ink-800 dark:text-ink-100">
                  {v.quality}
                </span>
                <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
              </div>
            </td>
            <td className="px-4 py-3.5 font-mono text-sm text-ink-700 dark:text-ink-200">{v.jobs}</td>
            <td className="px-4 py-3.5">
              <StatusBadge status={v.status} />
            </td>
          </tr>
        ))}
      </CrmTable>
    </div>
  );
}
