import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CalendarCheck, CheckCircle2, Loader2, Phone, PhoneCall, ShieldCheck } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/site";

const inputClass =
  "w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-400 transition-colors focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 dark:border-ink-700 dark:bg-ink-900 dark:text-white dark:placeholder:text-ink-500";

const whatToExpect = [
  { title: "A real specialist", body: "Talk to a Layzox procurement specialist — not a sales robot." },
  { title: "Scope guidance", body: "We help you define the scope, frequency and budget for your needs." },
  { title: "Clear next steps", body: "Leave the call with a clear plan and defined next steps." },
  { title: "Zero obligation", body: "Free consultation. No pressure, no lock-in." },
];

export function TalkToExpert() {
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
        eyebrow="Talk to Expert"
        title={
          <>
            A 20-minute call.{" "}
            <span className="text-gradient">A clear procurement plan.</span>
          </>
        }
        subtitle="Tell us about your business and services. A Layzox specialist will walk you through how the managed model works and what it can save you."
      />

      <Container className="pb-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          {/* Left */}
          <div>
            <div className="grid gap-4 sm:grid-cols-2">
              {whatToExpect.map((w, i) => (
                <Reveal key={w.title} delay={i * 0.05}>
                  <div className="flex h-full flex-col rounded-2xl border border-ink-200/70 bg-white p-6 transition-all hover:-translate-y-1 hover:border-brand-500/30 hover:shadow-lift dark:border-ink-800 dark:bg-ink-900/50">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-600/10 text-brand-600 dark:bg-brand-500/15 dark:text-accent-400">
                      <CalendarCheck className="h-4.5 w-4.5" />
                    </span>
                    <h2 className="mt-4 font-display text-base font-semibold text-ink-900 dark:text-white">
                      {w.title}
                    </h2>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-500 dark:text-ink-400">
                      {w.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.15}>
              <div className="mt-4 rounded-2xl border border-brand-500/25 bg-gradient-to-br from-brand-600/10 to-accent-500/10 p-6">
                <p className="flex items-center gap-2 font-display text-base font-semibold text-ink-900 dark:text-white">
                  <Phone className="h-4 w-4 text-brand-600 dark:text-accent-400" />
                  Prefer to talk right now?
                </p>
                <p className="mt-2 text-sm text-ink-500 dark:text-ink-400">
                  Call our team during business hours.
                </p>
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="group mt-4 inline-flex items-center gap-2.5 rounded-xl bg-ink-900 px-5 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-ink-800 dark:bg-brand-600 dark:hover:bg-brand-500"
                >
                  <PhoneCall className="h-4 w-4" />
                  {site.phone}
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-4 flex items-start gap-3 rounded-2xl border border-emerald-500/25 bg-emerald-500/5 p-5">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                <p className="text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                  Every consultation is confidential and obligation-free. We'll never share your
                  details with any vendor.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Booking form */}
          <Reveal delay={0.08}>
            <div className="rounded-3xl border border-ink-200/70 bg-white p-7 shadow-[0_32px_80px_-32px_rgb(15_23_42/0.2)] sm:p-9 dark:border-ink-800 dark:bg-ink-900/60">
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="ok"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="flex min-h-[30rem] flex-col items-center justify-center text-center"
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
                      Call scheduled
                    </h2>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-500 dark:text-ink-400">
                      We've received your request. A Layzox specialist will confirm the slot and dial
                      you at the scheduled time.
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
                      Book a consultation
                    </h2>
                    <p className="mt-2 text-sm text-ink-500 dark:text-ink-400">
                      Choose a time and we'll confirm by phone or email.
                    </p>
                    <div className="mt-7 grid gap-5 sm:grid-cols-2">
                      <Field label="Full name" required>
                        <input required className={inputClass} placeholder="Your name" />
                      </Field>
                      <Field label="Business / company">
                        <input className={inputClass} placeholder="Company name" />
                      </Field>
                      <Field label="Work email" required>
                        <input required type="email" className={inputClass} placeholder="you@company.com" />
                      </Field>
                      <Field label="Phone" required>
                        <input required type="tel" className={inputClass} placeholder="+91 98765 43210" />
                      </Field>
                      <Field label="Preferred day" required className="sm:col-span-2">
                        <div className="grid grid-cols-3 gap-2">
                          {["Today", "Tomorrow", "This week", "Next week", "Flexible", "Any weekday"].map((d) => (
                            <label key={d} className="cursor-pointer">
                              <input type="radio" name="day" value={d} className="peer sr-only" defaultChecked={d === "Flexible"} />
                              <span className="flex items-center justify-center rounded-lg border border-ink-200 px-2 py-2.5 text-xs font-medium text-ink-600 transition-all peer-checked:border-brand-600 peer-checked:bg-brand-600 peer-checked:text-white dark:border-ink-700 dark:text-ink-300">
                                {d}
                              </span>
                            </label>
                          ))}
                        </div>
                      </Field>
                      <Field label="Preferred time" required className="sm:col-span-2">
                        <select className={inputClass} defaultValue="Morning (9 AM – 12 PM)">
                          <option>Morning (9 AM – 12 PM)</option>
                          <option>Afternoon (12 PM – 4 PM)</option>
                          <option>Evening (4 PM – 8 PM)</option>
                        </select>
                      </Field>
                      <Field label="What should we discuss?" className="sm:col-span-2">
                        <textarea
                          rows={4}
                          className={`${inputClass} resize-none`}
                          placeholder="Services you're exploring, sites, timelines, budgets…"
                        />
                      </Field>
                    </div>
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="group mt-7 inline-flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-brand-600 via-brand-500 to-accent-500 px-6 py-4 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_rgb(6_182_212/0.6)] transition-all hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {status === "submitting" ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Booking…
                        </>
                      ) : (
                        <>
                          Request a call
                          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </>
                      )}
                    </button>
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
