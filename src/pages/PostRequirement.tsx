import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ClipboardCheck, Loader2, ShieldCheck } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { serviceCategories, services } from "@/lib/data/services";
import { steps } from "@/lib/data/howItWorks";

const inputClass =
  "w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-400 transition-colors focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 dark:border-ink-700 dark:bg-ink-900 dark:text-white dark:placeholder:text-ink-500";

export function PostRequirement() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (status !== "idle") return;
    setStatus("submitting");
    window.setTimeout(() => setStatus("success"), 1500);
  }

  return (
    <>
      <PageHero
        eyebrow="Post Requirement"
        title={
          <>
            Tell us what your business{" "}
            <span className="text-gradient">needs</span>
          </>
        }
        subtitle="Submit once. Layzox reviews your requirement, coordinates sourcing and quotations, and manages delivery to completion."
      />

      <Container className="pb-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          {/* What happens next */}
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <div className="rounded-3xl border border-ink-200/70 bg-white p-7 dark:border-ink-800 dark:bg-ink-900/50">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-accent-500 text-white">
                  <ClipboardCheck className="h-5 w-5" />
                </span>
                <h2 className="mt-5 font-display text-xl font-semibold text-ink-900 dark:text-white">
                  What happens next
                </h2>
                <ol className="mt-6 flex flex-col gap-4">
                  {steps.slice(0, 4).map((s) => {
                    return (
                      <li key={s.number} className="flex items-start gap-3.5">
                        <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-600/10 font-mono text-xs font-semibold text-brand-700 dark:bg-brand-500/15 dark:text-accent-300">
                          {s.number}
                        </span>
                        <div>
                          <p className="font-display text-sm font-semibold text-ink-900 dark:text-white">
                            {s.title}
                          </p>
                          <p className="mt-0.5 text-xs leading-relaxed text-ink-500 dark:text-ink-400">
                            {s.description}
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </ol>
                <div className="mt-7 rounded-2xl bg-gradient-to-br from-brand-600/10 to-accent-500/10 p-5">
                  <p className="text-sm font-semibold text-ink-900 dark:text-white">
                    What you can expect
                  </p>
                  <ul className="mt-3 flex flex-col gap-2">
                    {["One point of contact with Layzox", "Quotations shared for your review before work begins", "Work checked and documented before payment"].map((p) => (
                      <li key={p} className="flex items-start gap-2 text-xs leading-relaxed text-ink-600 dark:text-ink-300">
                        <ShieldCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-500" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={0.08}>
            <div className="rounded-3xl border border-ink-200/70 bg-white p-7 shadow-[0_32px_80px_-32px_rgb(15_23_42/0.2)] sm:p-10 dark:border-ink-800 dark:bg-ink-900/60">
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="ok"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="flex min-h-[32rem] flex-col items-center justify-center text-center"
                  >
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 260, damping: 16, delay: 0.15 }}
                      className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500 text-white"
                    >
                      <CheckCircle2 className="h-8 w-8" />
                    </motion.span>
                    <h2 className="mt-6 font-display text-2xl font-semibold text-ink-900 dark:text-white">
                      Requirement received
                    </h2>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-500 dark:text-ink-400">
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
                  >
                    <h2 className="font-display text-2xl font-semibold text-ink-900 dark:text-white">
                      Post your requirement
                    </h2>
                    <p className="mt-2 text-sm text-ink-500 dark:text-ink-400">
                      Fields marked * are required.
                    </p>
                    <div className="mt-7 grid gap-5 sm:grid-cols-2">
                      <Field label="Name" required>
                        <input required className={inputClass} placeholder="Your name" autoComplete="name" />
                      </Field>
                      <Field label="Company" required>
                        <input required className={inputClass} placeholder="Company name" autoComplete="organization" />
                      </Field>
                      <Field label="Work email" required>
                        <input required type="email" className={inputClass} placeholder="you@company.com" autoComplete="email" />
                      </Field>
                      <Field label="Phone" required>
                        <input required type="tel" className={inputClass} placeholder="9810958069" autoComplete="tel" />
                      </Field>
                      <Field label="Service category" className="sm:col-span-2" required>
                        <select required className={inputClass} defaultValue="">
                          <option value="" disabled>Select a service category</option>
                          {serviceCategories.map((cat) => (
                            <optgroup key={cat.slug} label={cat.name}>
                              {services.filter((s) => s.category === cat.name).map((s) => (
                                <option key={s.slug} value={s.slug}>{s.name}</option>
                              ))}
                            </optgroup>
                          ))}
                          <option value="multi">Multiple services / custom requirement</option>
                        </select>
                      </Field>
                      <Field label="Location" required>
                        <input required className={inputClass} placeholder="City / service location" autoComplete="address-level2" />
                      </Field>
                      <Field label="Timeline" required>
                        <select required className={inputClass} defaultValue="">
                          <option value="" disabled>Select a timeline</option>
                          <option>As soon as possible</option>
                          <option>Within a month</option>
                          <option>Within 1–3 months</option>
                          <option>Flexible / ongoing</option>
                        </select>
                      </Field>
                      <Field label="Budget (optional)">
                        <select className={inputClass} defaultValue="">
                          <option value="" disabled>Select an estimate (optional)</option>
                          <option>Not decided yet</option>
                          <option>Under ₹50,000</option>
                          <option>₹50,000 – ₹2,00,000</option>
                          <option>₹2,00,000 – ₹10,00,000</option>
                          <option>₹10,00,000 and above</option>
                        </select>
                      </Field>
                      <Field label="Requirement" className="sm:col-span-2" required>
                        <textarea
                          required
                          rows={4}
                          className={`${inputClass} resize-none`}
                          placeholder="Describe the service you need, scope of work and any site details…"
                        />
                      </Field>
                      <Field label="Additional details (optional)" className="sm:col-span-2">
                        <textarea
                          rows={3}
                          className={`${inputClass} resize-none`}
                          placeholder="Anything else we should know before we prepare your quotation…"
                        />
                      </Field>
                    </div>
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="group mt-7 inline-flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-xl bg-ink-900 px-6 py-4 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_rgb(15_23_42/0.5)] transition-all hover:-translate-y-0.5 hover:bg-ink-800 disabled:cursor-not-allowed disabled:opacity-70 dark:bg-brand-600 dark:hover:bg-brand-500"
                    >
                      {status === "submitting" ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Submitting requirement…
                        </>
                      ) : (
                        <>
                          Submit requirement
                          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </>
                      )}
                    </button>
                    <p className="mt-4 text-center text-xs text-ink-400 dark:text-ink-500">
                      By submitting, you agree to be contacted by Layzox. We never share your details
                      with service providers.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </Container>
    </>
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
