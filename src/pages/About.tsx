import { ArrowRight, Compass, Eye, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal, Stagger, Item } from "@/components/ui/Reveal";
import { CtaBanner } from "@/components/home/CtaBanner";

const values = [
  { title: "Accountability", body: "We stay accountable for the work we coordinate and resolve issues when they arise." },
  { title: "Transparency", body: "Clear quotations, clear scope and clear documentation at every step." },
  { title: "Quality", body: "Completed work is checked against the agreed scope before payment is released." },
  { title: "Consistency", body: "A structured process that works the same way for every requirement." },
  { title: "Improvement", body: "We continuously improve how sourcing, coordination and documentation work." },
  { title: "Integrity", body: "No hidden charges, no surprises. Just honest, managed service." },
];

const model = [
  {
    title: "One requirement",
    body: "You submit a single requirement describing the service, location and scope.",
  },
  {
    title: "Structured sourcing",
    body: "Layzox identifies partners by service, area, capability, availability, experience and track record.",
  },
  {
    title: "Quotation coordination",
    body: "Quotations are gathered, structured and shared for your review before work begins.",
  },
  {
    title: "Coordinated delivery",
    body: "A Layzox team coordinates scheduling, follow-up and issue resolution to completion.",
  },
  {
    title: "Quality & documentation",
    body: "Completed work is checked against the agreed scope and documented before payment.",
  },
];

export function About() {
  return (
    <>
      <PageHero
        eyebrow="About Layzox"
        title={
          <>
            A managed model for{" "}
            <span className="text-gradient">business services</span>
          </>
        }
        subtitle="Layzox exists to make business services procurement simple. You submit one requirement and one accountable process carries it through to completion."
      />

      {/* Mission block */}
      <Container className="pb-20">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-ink-950 p-8 sm:p-12 lg:p-16">
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <div className="absolute inset-0 bg-grid bg-grid-fade opacity-25" />
              <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-600/30 blur-[100px]" />
              <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-accent-500/25 blur-[100px]" />
            </div>
            <div className="relative grid gap-8 lg:grid-cols-3">
              {[
                { icon: Target, title: "Mission", body: "Make managed business services procurement simple for every business." },
                { icon: Eye, title: "Vision", body: "Every business runs on services without worrying about sourcing, managing or chasing providers." },
                { icon: Compass, title: "Approach", body: "One requirement. One accountable process. Work checked and documented before payment." },
              ].map((m) => {
                const Icon = m.icon;
                return (
                  <div key={m.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-accent-500 text-white">
                      <Icon className="h-4.5 w-4.5" />
                    </span>
                    <h2 className="mt-4 font-display text-lg font-semibold text-white">{m.title}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">{m.body}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </Container>

      {/* Values */}
      <section className="bg-surface-soft py-20 sm:py-24 dark:bg-ink-900/30">
        <Container>
          <div className="mb-12 text-center">
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-brand-600 dark:text-accent-400">
              Values
            </span>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl dark:text-white">
              What we <span className="text-gradient">stand for</span>
            </h2>
          </div>
          <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" gap={0.05}>
            {values.map((v, i) => (
              <Item key={v.title}>
                <div className="group h-full rounded-2xl border border-ink-200/70 bg-white p-7 transition-all hover:-translate-y-1 hover:border-brand-500/30 hover:shadow-lift dark:border-ink-800 dark:bg-ink-900/50">
                  <span className="font-display text-3xl font-bold text-brand-600/15 dark:text-accent-500/15">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-semibold text-ink-900 dark:text-white">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-400">{v.body}</p>
                </div>
              </Item>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* The model */}
      <Container className="py-20 sm:py-24">
        <div className="mb-12 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.22em] text-brand-600 dark:text-accent-400">
            The Layzox model
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl dark:text-white">
            How we <span className="text-gradient">operate</span>
          </h2>
        </div>
        <Stagger className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
          {model.map((m, i) => (
            <Item key={m.title}>
              <div className="flex h-full items-start gap-4 rounded-2xl border border-ink-200/70 bg-white p-6 dark:border-ink-800 dark:bg-ink-900/50">
                <span className="mt-0.5 font-mono text-sm font-semibold text-brand-600 dark:text-accent-400">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-base font-semibold text-ink-900 dark:text-white">
                    {m.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-500 dark:text-ink-400">
                    {m.body}
                  </p>
                </div>
              </div>
            </Item>
          ))}
        </Stagger>

        <Reveal className="mt-16 text-center">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2.5 rounded-2xl bg-ink-900 px-7 py-3.5 text-base font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-ink-800 dark:bg-brand-600 dark:hover:bg-brand-500"
          >
            Get in touch
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </Container>

      <CtaBanner />
    </>
  );
}
