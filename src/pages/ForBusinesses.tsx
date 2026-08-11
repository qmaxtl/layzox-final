import { ArrowUpRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal, Stagger, Item } from "@/components/ui/Reveal";
import { CtaBanner } from "@/components/home/CtaBanner";
import { PlatformFeatures } from "@/components/home/PlatformFeatures";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { industries } from "@/lib/data/industries";

const benefits = [
  { title: "No vendor management", body: "No sourcing, vetting, negotiating or chasing. Layzox coordinates it all." },
  { title: "Official quotations", body: "Transparent, itemised quotations you approve before any work starts." },
  { title: "Checked quality", body: "Completed work is checked against the agreed scope before payment." },
  { title: "Single GST invoice", body: "Clean, compliant invoicing from one accountable partner." },
  { title: "Complete visibility", body: "Track every requirement, job and invoice from a private dashboard." },
  { title: "One support line", body: "A dedicated Layzox team for scheduling, issues and escalations." },
];

export function ForBusinesses() {
  return (
    <>
      <PageHero
        eyebrow="For Businesses"
        title={
          <>
            Procurement that{" "}
            <span className="text-gradient">handles itself</span>
          </>
        }
        subtitle="Submit one requirement. Approve the quotation. Receive checked and documented service with a GST invoice. That's the entire procurement workflow your team will need."
      />

      {/* Benefits */}
      <Container className="pb-24">
        <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" gap={0.06}>
          {benefits.map((b) => (
            <Item key={b.title}>
              <div className="group flex h-full items-start gap-4 rounded-2xl border border-ink-200/70 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/30 hover:shadow-lift dark:border-ink-800 dark:bg-ink-900/50">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-600 to-accent-500 text-white">
                  <Check className="h-4 w-4" />
                </span>
                <div>
                  <h2 className="font-display text-base font-semibold text-ink-900 dark:text-white">
                    {b.title}
                  </h2>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-500 dark:text-ink-400">
                    {b.body}
                  </p>
                </div>
              </div>
            </Item>
          ))}
        </Stagger>

        {/* Who it's for */}
        <Reveal className="mt-20">
          <div className="rounded-3xl border border-ink-200/70 bg-white p-8 sm:p-12 dark:border-ink-800 dark:bg-ink-900/40">
            <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:items-start">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.22em] text-brand-600 dark:text-accent-400">
                  Who it's for
                </span>
                <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink-900 dark:text-white">
                  Every business that relies on services
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-ink-500 dark:text-ink-400">
                  From a five-person startup to a large enterprise, Layzox adapts its managed model
                  to your scale, sites and compliance needs.
                </p>
                <Link
                  to="/post-requirement"
                  className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 dark:text-accent-400"
                >
                  Post your first requirement
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                </Link>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {industries.map((ind) => {
                  const Icon = ind.icon;
                  return (
                    <Link
                      key={ind.slug}
                      to={`/industries#${ind.slug}`}
                      className="group flex items-center gap-3 rounded-xl border border-ink-200/70 bg-surface-soft px-4 py-3 transition-all hover:border-brand-500/40 hover:bg-brand-600/5 dark:border-ink-800 dark:bg-ink-900/60 dark:hover:border-brand-500/30"
                    >
                      <Icon className="h-4 w-4 shrink-0 text-brand-600 dark:text-accent-400" />
                      <span className="text-sm font-medium text-ink-800 dark:text-ink-200">
                        {ind.name}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>

      {/* Platform */}
      <section className="relative bg-surface-soft py-24 sm:py-28 dark:bg-ink-900/30">
        <Container>
          <div className="mb-12 text-center">
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-brand-600 dark:text-accent-400">
              Customer Platform
            </span>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl dark:text-white">
              Everything managed,{" "}
              <span className="text-gradient">everything visible</span>
            </h2>
          </div>
          <PlatformFeatures />
        </Container>
      </section>

      <TestimonialsSection />

      <CtaBanner />
    </>
  );
}
