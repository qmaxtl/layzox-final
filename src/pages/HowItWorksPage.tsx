import { ArrowRight, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { CtaBanner } from "@/components/home/CtaBanner";
import { HowItWorks } from "@/components/home/HowItWorks";

const managed = [
  "Vendor sourcing & verification",
  "Quotation preparation",
  "Scheduling & coordination",
  "Quality inspection",
  "Payment & GST invoicing",
  "Support & issue resolution",
];

const approvals = [
  "Approving the scope",
  "Approving the official quotation",
  "Granting site access as scheduled",
  "Approving completed work",
];

export function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="How It Works"
        title={
          <>
            Six transparent steps.{" "}
            <span className="text-gradient">Zero vendor management.</span>
          </>
        }
        subtitle="You submit one requirement and approve the quotation. Layzox coordinates everything in between."
      />

      <HowItWorks />

      <section className="relative bg-surface-soft py-24 sm:py-28 dark:bg-ink-900/30">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-3xl border border-ink-200/70 bg-white p-8 sm:p-10 dark:border-ink-800 dark:bg-ink-900/60">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-accent-500 text-white">
                  <ShieldCheck className="h-5 w-5" />
                </span>
                <h2 className="mt-5 font-display text-2xl font-semibold tracking-tight text-ink-900 dark:text-white">
                  Layzox manages everything
                </h2>
                <ul className="mt-6 flex flex-col gap-3">
                  {managed.map((m) => (
                    <li
                      key={m}
                      className="flex items-center gap-3 rounded-xl border border-ink-200/70 bg-surface-soft px-4 py-3 text-sm font-medium text-ink-800 dark:border-ink-800 dark:bg-ink-900/70 dark:text-ink-200"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-600 dark:bg-accent-400" />
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="h-full rounded-3xl border border-ink-200/70 bg-white p-8 sm:p-10 dark:border-ink-800 dark:bg-ink-900/60">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600">
                  <ShieldCheck className="h-5 w-5" />
                </span>
                <h2 className="mt-5 font-display text-2xl font-semibold tracking-tight text-ink-900 dark:text-white">
                  All you do is approve
                </h2>
                <ul className="mt-6 flex flex-col gap-3">
                  {approvals.map((a) => (
                    <li
                      key={a}
                      className="flex items-center gap-3 rounded-xl border border-ink-200/70 bg-surface-soft px-4 py-3 text-sm font-medium text-ink-800 dark:border-ink-800 dark:bg-ink-900/70 dark:text-ink-200"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      {a}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 rounded-2xl bg-gradient-to-br from-brand-600/10 to-accent-500/10 p-6">
                  <p className="font-display text-base font-semibold text-ink-900 dark:text-white">
                    You stay in control
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-400">
                    You approve the scope and the official quotation before any work begins.
                    Completed work is checked against the agreed scope and documented before payment.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal className="mt-12 text-center">
            <Link
              to="/post-requirement"
              className="group inline-flex items-center gap-2.5 rounded-2xl bg-ink-900 px-7 py-3.5 text-base font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-ink-800 dark:bg-brand-600 dark:hover:bg-brand-500"
            >
              Start with one requirement
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
