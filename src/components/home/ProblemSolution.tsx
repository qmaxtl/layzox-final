import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { Reveal, Stagger, Item } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { problems, solutions } from "@/lib/data/features";

export function ProblemSolution() {
  return (
    <section className="relative py-24 sm:py-32" id="the-problem">
      <div className="pointer-events-none absolute inset-0 bg-surface-soft dark:bg-transparent" />
      <Container className="relative">
        <SectionHeading
          eyebrow="The Problem"
          title={
            <>
              Traditional procurement is{" "}
              <span className="text-gradient">broken</span>.
            </>
          }
          subtitle="Businesses waste weeks juggling vendors, chasing quality and absorbing hidden costs. Layzox replaces that with a single accountable process."
        />

        {/* Problems */}
        <Stagger className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-5" gap={0.07}>
          {problems.map((p) => (
            <Item key={p.title}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-ink-200/70 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-[0_16px_40px_-16px_rgb(239_68_68/0.25)] dark:border-ink-800 dark:bg-ink-900/50 dark:hover:border-red-500/30">
                <span className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-red-500/5 transition-transform duration-500 group-hover:scale-150" />
                <span className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-red-500/10 text-red-500 transition-transform duration-300 group-hover:scale-110">
                  <p.icon className="h-5 w-5" />
                </span>
                <h3 className="font-display text-lg font-semibold text-ink-900 dark:text-white">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-400">
                  {p.description}
                </p>
              </div>
            </Item>
          ))}
        </Stagger>

        {/* Solution panel */}
        <Reveal className="mt-16">
          <div className="relative overflow-hidden rounded-[2rem] bg-ink-950 p-8 shadow-[0_32px_80px_-32px_rgb(15_23_42/0.6)] sm:p-12 lg:p-14">
            <div aria-hidden className="absolute inset-0">
              <div className="absolute inset-0 bg-grid bg-grid-fade opacity-30" />
              <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-600/30 blur-[90px]" />
              <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-accent-500/25 blur-[90px]" />
            </div>
            <div className="relative grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-center">
              <div>
                <Badge tone="accent" className="mb-5">The Layzox Model</Badge>
                <h3 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
                  One requirement.
                  <br />
                  <span className="text-gradient-blue">One accountable partner.</span>
                </h3>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-400 sm:text-base">
                  Layzox is the point of contact between your business and service providers. We
                  coordinate sourcing, quotations, scheduling, execution, payments and support
                  through a single accountable process.
                </p>
                <Link
                  to="/how-it-works"
                  className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white"
                >
                  See how it works
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
              <Stagger className="grid gap-3 sm:grid-cols-2" gap={0.06}>
                {solutions.map((s) => (
                  <Item key={s.title}>
                    <div className="flex h-full items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-colors duration-300 hover:border-brand-500/40 hover:bg-white/[0.08]">
                      <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-accent-500 text-white">
                        <s.icon className="h-4.5 w-4.5" />
                      </span>
                      <div>
                        <h4 className="font-display text-base font-semibold text-white">
                          {s.title}
                        </h4>
                        <p className="mt-1 text-sm leading-relaxed text-slate-400">
                          {s.description}
                        </p>
                      </div>
                    </div>
                  </Item>
                ))}
              </Stagger>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
