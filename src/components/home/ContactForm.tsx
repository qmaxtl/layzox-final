import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { services } from "@/lib/data/services";

const inputClass =
  "w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-400 transition-colors focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 dark:border-ink-700 dark:bg-ink-900 dark:text-white dark:placeholder:text-ink-500";

export function ContactForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (status !== "idle") return;
    setStatus("submitting");
    window.setTimeout(() => setStatus("success"), 1400);
  }

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex min-h-[28rem] flex-col items-center justify-center rounded-3xl border border-emerald-500/25 bg-emerald-500/5 p-10 text-center"
          >
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 16, delay: 0.15 }}
              className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500 text-white"
            >
              <CheckCircle2 className="h-8 w-8" />
            </motion.span>
            <h3 className="mt-6 font-display text-2xl font-semibold text-ink-900 dark:text-white">
              Requirement received
            </h3>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-500 dark:text-ink-400">
              Thank you. Our team will review your requirement and contact you shortly.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="rounded-3xl border border-ink-200/70 bg-white p-7 shadow-[0_32px_80px_-32px_rgb(15_23_42/0.2)] sm:p-8 dark:border-ink-800 dark:bg-ink-900/60"
          >
            <div className={compact ? "grid gap-4" : "grid gap-4 sm:grid-cols-2"}>
              <Field label="Full name" required>
                <input required className={inputClass} placeholder="Priya Sharma" autoComplete="name" />
              </Field>
              <Field label="Business / company" required>
                <input required className={inputClass} placeholder="Company name" autoComplete="organization" />
              </Field>
              <Field label="Work email" required>
                <input required type="email" className={inputClass} placeholder="you@company.com" autoComplete="email" />
              </Field>
              <Field label="Phone" required>
                <input required type="tel" className={inputClass} placeholder="9810958069" autoComplete="tel" />
              </Field>
              <Field label="Service required" className={compact ? "" : "sm:col-span-2"}>
                <select className={inputClass} defaultValue="">
                  <option value="" disabled>
                    Select a service
                  </option>
                  <optgroup label="Facility & Maintenance">
                    {services.filter((s) => s.category === "Facility & Maintenance").map((s) => (
                      <option key={s.slug} value={s.slug}>{s.name}</option>
                    ))}
                  </optgroup>
                  <option value="other">Something else / Multiple services</option>
                </select>
              </Field>
              <Field label="How can we help?" className={compact ? "" : "sm:col-span-2"}>
                <textarea
                  rows={compact ? 3 : 4}
                  className={`${inputClass} resize-none`}
                  placeholder="Tell us about the service, location and scope of work…"
                />
              </Field>
            </div>
            <button
              type="submit"
              disabled={status === "submitting"}
              className="mt-6 inline-flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-brand-600 via-brand-500 to-accent-500 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_rgb(6_182_212/0.6)] transition-all hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "submitting" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Submitting…
                </>
              ) : (
                <>
                  Send message
                  <Send className="h-4 w-4" />
                </>
              )}
            </button>
            <p className="mt-4 text-center text-xs text-ink-400 dark:text-ink-500">
              By submitting, you agree to be contacted by Layzox. We never share your details with
              service providers.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

function Field({
  label,
  required,
  className,
  children,
}: {
  label: string;
  required?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <label className={`block ${className ?? ""}`}>
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-ink-600 dark:text-ink-300">
        {label} {required && <span className="text-brand-600">*</span>}
      </span>
      {children}
    </label>
  );
}
