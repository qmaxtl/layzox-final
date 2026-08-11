import { CrmPageHeader, CrmTable } from "@/components/crm/CrmUi";
import { customers } from "@/lib/data/crm";

export function CrmCustomers() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-6">
      <CrmPageHeader
        eyebrow="CRM"
        title="Customers"
        subtitle="Businesses served by Layzox — orders, spend and engagement at a glance."
      />

      <CrmTable headers={["Customer", "Company", "Industry", "City", "Orders", "Total Spend", "Since"]}>
        {customers.map((c) => (
          <tr key={c.id} className="transition-colors hover:bg-surface-soft/60 dark:hover:bg-ink-900/40">
            <td className="px-4 py-3.5">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-600 to-accent-500 font-display text-xs font-semibold text-white">
                  {c.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
                <div>
                  <p className="text-sm font-medium text-ink-800 dark:text-ink-100">{c.name}</p>
                  <p className="font-mono text-[0.62rem] uppercase tracking-wider text-ink-400 dark:text-ink-500">
                    {c.id}
                  </p>
                </div>
              </div>
            </td>
            <td className="px-4 py-3.5 text-sm text-ink-600 dark:text-ink-300">{c.company}</td>
            <td className="px-4 py-3.5 text-sm text-ink-600 dark:text-ink-300">{c.industry}</td>
            <td className="px-4 py-3.5 text-sm text-ink-600 dark:text-ink-300">{c.city}</td>
            <td className="px-4 py-3.5 font-mono text-sm text-ink-700 dark:text-ink-200">{c.orders}</td>
            <td className="px-4 py-3.5 font-mono text-sm font-medium text-ink-800 dark:text-ink-100">
              ₹{c.value.toLocaleString("en-IN")}
            </td>
            <td className="px-4 py-3.5 font-mono text-xs text-ink-400 dark:text-ink-500">{c.since}</td>
          </tr>
        ))}
      </CrmTable>
    </div>
  );
}
