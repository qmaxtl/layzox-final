import { CrmPageHeader, CrmTable, StatusBadge } from "@/components/crm/CrmUi";
import { orders } from "@/lib/data/crm";

export function CrmOrders() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-6">
      <CrmPageHeader
        eyebrow="CRM"
        title="Orders"
        subtitle="Approved quotations in execution — from assigned vendor to quality-verified completion."
      />

      <CrmTable headers={["Order", "Requirement", "Customer", "Vendor", "Service", "Value", "Status"]}>
        {orders.map((o) => (
          <tr key={o.id} className="transition-colors hover:bg-surface-soft/60 dark:hover:bg-ink-900/40">
            <td className="px-4 py-3.5 font-mono text-xs text-brand-600 dark:text-accent-400">{o.id}</td>
            <td className="px-4 py-3.5 font-mono text-xs text-ink-400 dark:text-ink-500">{o.requirement}</td>
            <td className="px-4 py-3.5 text-sm font-medium text-ink-800 dark:text-ink-100">{o.customer}</td>
            <td className="px-4 py-3.5 text-sm text-ink-600 dark:text-ink-300">{o.vendor}</td>
            <td className="px-4 py-3.5 text-sm text-ink-600 dark:text-ink-300">{o.service}</td>
            <td className="px-4 py-3.5 font-mono text-sm font-medium text-ink-800 dark:text-ink-100">
              ₹{o.value.toLocaleString("en-IN")}
            </td>
            <td className="px-4 py-3.5">
              <StatusBadge status={o.status} />
            </td>
          </tr>
        ))}
      </CrmTable>
    </div>
  );
}
