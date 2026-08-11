import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, BadgeCheck, CheckCircle2, Loader2, ShieldCheck } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal, Stagger, Item } from "@/components/ui/Reveal";
import { CtaBanner } from "@/components/home/CtaBanner";
import { partnerCriteria } from "@/lib/data/whyDifferent";
import { services } from "@/lib/data/services";

const inputClass =
  "w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-400 transition-colors focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 dark:border-ink-700 dark:bg-ink-900 dark:text-white dark:placeholder:text-ink-500";

const vendorPerks = [
  { title: "No lead competition", body: "Work is assigned internally. You don't bid against other vendors or buy leads." },
  { title: "Assignments on merit", body: "Work matched to your capacity, area, expertise and track record." },
  { title: "On-time payments", body: "Clear payment cycles after quality verification. No chasing." },
  { title: "Documented process", body: "Work is assigned using clear, documented criteria." },
  { title: "No lead buying", body: "You don't pay to compete for work on the platform." },
  { title: "Growth support", body: "Guidance, compliance help and category expansion opportunities." },
];

export function BecomeAPartner() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (status !== "idle") return;
    setStatus("submitting");
    window.setTimeout(() => setStatus("success"), 1400);
  }

  return (
    <>
      <PageHero
        eyebrow="Become a Partner"
        title={
          <>
            Work with Layzox.{" "}
            <span className="text-gradient">Never chase a lead again.</span>
          </>
        }
        subtitle="Verification requirements vary by service category. Approved partners receive work internally, matched to their area, expertise and performance."
      />

      {/* Perks */}
      <Container className="pb-24">
        <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" gap={0.06}>
          {vendorPerks.map((p) => (
            <Item key={p.title}>
              <div className="flex h-full items-start gap-4 rounded-2xl border border-ink-200/70 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/30 hover:shadow-lift dark:border-ink-800 dark:bg-ink-900/50">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-600 to-accent-500 text-white">
                  <BadgeCheck className="h-4 w-4" />
                </span>
                <div>
                  <h2 className="font-display text-base font-semibold text-ink-900 dark:text-white">
                    {p.title}
                  </h2>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-500 dark:text-ink-400">
                    {p.body}
                  </p>
                </div>
              </div>
            </Item>
          ))}
        </Stagger>

        {/* Criteria + form */}
        <div className="mt-20 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-start">
          <div>
            <Reveal>
              <span className="font-mono text-xs uppercase tracking-[0.22em] text-brand-600 dark:text-accent-400">
                How we assign work
              </span>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink-900 dark:text-white">
                Assigned on fit, not marketing
              </h2>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-ink-500 dark:text-ink-400">
                Layzox matches customer requirements to suitable partners using documented criteria  
                area, capability, availability, experience and track record.
              </p>
            </Reveal>
            <Stagger className="mt-8 grid gap-3 sm:grid-cols-2" gap={0.06}>
              {partnerCriteria.map((c) => {
                const Icon = c.icon;
                return (
                  <Item key={c.title}>
                    <div className="group flex h-full items-start gap-3.5 rounded-2xl border border-ink-200/70 bg-white p-5 transition-all hover:border-brand-500/40 dark:border-ink-800 dark:bg-ink-900/50">
                      <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-600/10 text-brand-600 dark:bg-brand-500/15 dark:text-accent-400">
                        <Icon className="h-4 w-4" />
                      </span>
                      <div>
                        <h3 className="font-display text-sm font-semibold text-ink-900 dark:text-white">
                          {c.title}
                        </h3>
                        <p className="mt-1 text-xs leading-relaxed text-ink-500 dark:text-ink-400">
                          {c.description}
                        </p>
                      </div>
                    </div>
                  </Item>
                );
              })}
            </Stagger>
            <Reveal className="mt-8">
              <div className="flex items-start gap-3 rounded-2xl border border-emerald-500/25 bg-emerald-500/5 p-5">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                <p className="text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                  Verification requirements vary by service category and may include business
                  identity, GST details, applicable licences, certifications, capability and
                  experience.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.08}>
            <div className="rounded-3xl border border-ink-200/70 bg-white p-7 shadow-[0_32px_80px_-32px_rgb(15_23_42/0.2)] sm:p-8 dark:border-ink-800 dark:bg-ink-900/60">
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="ok"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex min-h-[28rem] flex-col items-center justify-center text-center"
                  >
                    <span className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500 text-white">
                      <CheckCircle2 className="h-8 w-8" />
                    </span>
                    <h3 className="mt-6 font-display text-2xl font-semibold text-ink-900 dark:text-white">
                      Application received
                    </h3>
                    <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-500 dark:text-ink-400">
                      Our onboarding team will review your application and contact you with the next
                      steps.
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
                    <h3 className="font-display text-xl font-semibold text-ink-900 dark:text-white">
                      Apply to join the network
                    </h3>
                    <p className="mt-2 text-sm text-ink-500 dark:text-ink-400">
                      Takes about 2 minutes. No fees to apply.
                    </p>
                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                      <Field label="Business name" required>
                        <input required className={inputClass} placeholder="Your company" />
                      </Field>
                      <Field label="Contact person" required>
                        <input required className={inputClass} placeholder="Full name" />
                      </Field>
                      <Field label="Email" required>
                        <input required type="email" className={inputClass} placeholder="you@company.com" />
                      </Field>
                      <Field label="Phone" required>
                        <input required type="tel" className={inputClass} placeholder="+91 98765 43210" />
                      </Field>
                      <Field label="Primary service" className="sm:col-span-2">
                        <select className={inputClass} defaultValue="">
                          <option value="" disabled>Select primary service</option>
                          {services.map((s) => (
                            <option key={s.slug} value={s.slug}>{s.name}</option>
                          ))}
                        </select>
                      </Field>
                      <Field label="City / service area" required className="sm:col-span-2">
                        <input required className={inputClass} placeholder="Ranchi" />
                      </Field>
                      <Field label="Tell us about your team" className="sm:col-span-2">
                        <textarea
                          rows={3}
                          className={`${inputClass} resize-none`}
                          placeholder="Experience, certifications, current capacity…"
                        />
                      </Field>
                    </div>
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="group mt-6 inline-flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-brand-600 via-brand-500 to-accent-500 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_rgb(6_182_212/0.6)] transition-all hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {status === "submitting" ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Submitting…
                        </>
                      ) : (
                        <>
                          Submit application
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
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

      <CtaBanner
        title={
          <>
            Looking for services,{" "}
            <span className="text-gradient-blue">not partners?</span>
          </>
        }
        subtitle="Post your business requirement and let Layzox manage it end to end."
      />
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
