import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "@/components/ui/Container";
import { Stagger, Item } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { industries } from "@/lib/data/industries";

export function IndustriesSection() {
  return (
    <section className="relative overflow-hidden bg-surface-soft py-24 sm:py-32 dark:bg-ink-900/30" id="industries">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40 dark:opacity-20" />
      <Container className="relative">
        <SectionHeading
          eyebrow="Industries"
          title={
            <>
              Built for the way{" "}
              <span className="text-gradient">your business works</span>
            </>
          }
          subtitle="Whatever your industry, Layzox delivers managed services coordinated around your operations."
        />

        <Stagger className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" gap={0.06}>
          {industries.map((ind) => {
            const Icon = ind.icon;
            return (
              <Item key={ind.slug}>
                <Link
                  to={`/industries#${ind.slug}`}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-ink-200/70 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/30 hover:shadow-[0_20px_48px_-20px_rgb(37_99_235/0.3)] dark:border-ink-800 dark:bg-ink-900/60 dark:hover:border-brand-500/25"
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-brand-600/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-ink-900 text-white transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-brand-600 group-hover:to-accent-500 dark:bg-ink-800 dark:text-white">
                      <Icon className="h-5.5 w-5.5" />
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-ink-300 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-600 dark:text-ink-600 dark:group-hover:text-accent-400" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-ink-900 dark:text-white">
                    {ind.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500 dark:text-ink-400">
                    {ind.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {ind.services.slice(0, 3).map((s) => (
                      <span
                        key={s}
                        className="rounded-md bg-ink-100 px-2 py-1 font-mono text-[0.6rem] uppercase tracking-wider text-ink-500 transition-colors group-hover:bg-brand-600/10 group-hover:text-brand-700 dark:bg-ink-800 dark:text-ink-400 dark:group-hover:bg-brand-500/10 dark:group-hover:text-accent-300"
                      >
                        {s}
                      </span>
                    ))}
                    {ind.services.length > 3 && (
                      <span className="rounded-md px-2 py-1 font-mono text-[0.6rem] uppercase tracking-wider text-ink-400 dark:text-ink-500">
                        +{ind.services.length - 3} more
                      </span>
                    )}
                  </div>
                </Link>
              </Item>
            );
          })}
        </Stagger>
      </Container>
    </section>
  );
}
