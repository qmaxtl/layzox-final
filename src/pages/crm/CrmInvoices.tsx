import { CrmPageHeader, CrmTable, StatusBadge } from "@/components/crm/CrmUi";
import { invoices } from "@/lib/data/crm";

export function CrmInvoices() {
  const total = invoices.reduce((sum, i) => sum + i.amount, 0);
  const pending = invoices
    .filter((i) => i.status === "Pending")
    .reduce((sum, i) => sum + i.amount, 0);

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-6">
      <CrmPageHeader
        eyebrow="CRM"
        title="Invoices"
        subtitle="Compliant GST invoices generated automatically for every completed order."
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-ink-200/70 bg-white p-6 dark:border-ink-800 dark:bg-ink-900/50">
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-ink-400 dark:text-ink-500">
            Total invoiced
          </p>
          <p className="mt-2 font-display text-3xl font-semibold tracking-tight text-ink-900 dark:text-white">
            ₹{total.toLocaleString("en-IN")}
          </p>
        </div>
        <div className="rounded-2xl border border-ink-200/70 bg-white p-6 dark:border-ink-800 dark:bg-ink-900/50">
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-ink-400 dark:text-ink-500">
            Pending collection
          </p>
          <p className="mt-2 font-display text-3xl font-semibold tracking-tight text-amber-600 dark:text-amber-400">
            ₹{pending.toLocaleString("en-IN")}
          </p>
        </div>
      </div>

      <CrmTable headers={["Invoice", "Customer", "Amount", "Status", "Due date"]}>
        {invoices.map((i) => (
          <tr key={i.number} className="transition-colors hover:bg-surface-soft/60 dark:hover:bg-ink-900/40">
            <td className="px-4 py-3.5 font-mono text-xs text-brand-600 dark:text-accent-400">
              {i.number}
            </td>
            <td className="px-4 py-3.5 text-sm font-medium text-ink-800 dark:text-ink-100">
              {i.customer}
            </td>
            <td className="px-4 py-3.5 font-mono text-sm text-ink-700 dark:text-ink-200">
              ₹{i.amount.toLocaleString("en-IN")}
            </td>
            <td className="px-4 py-3.5">
              <StatusBadge status={i.status} />
            </td>
            <td className="px-4 py-3.5 font-mono text-xs text-ink-400 dark:text-ink-500">{i.due}</td>
          </tr>
        ))}
      </CrmTable>
    </div>
  );
}
