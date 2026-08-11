import { Check, ShieldCheck, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal, Stagger, Item } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { comparison, businessRules, marketplacePain, layzoxAdvantage } from "@/lib/data/whyDifferent";

function PainCard({ item }: { item: (typeof marketplacePain)[number] }) {
  const Icon = item.icon;
  return (
    <div className="flex h-full items-start gap-3.5 rounded-2xl border border-ink-200/70 bg-white/70 p-5 dark:border-ink-800 dark:bg-ink-900/50">
      <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red-500/10 text-red-500">
        <Icon className="h-4 w-4" />
      </span>
      <div>
        <h4 className="font-display text-sm font-semibold text-ink-900 dark:text-white">
          {item.title}
        </h4>
        <p className="mt-1 text-xs leading-relaxed text-ink-500 dark:text-ink-400">
          {item.description}
        </p>
      </div>
    </div>
  );
}

function AdvantageCard({ item }: { item: (typeof layzoxAdvantage)[number] }) {
  const Icon = item.icon;
  return (
    <div className="flex h-full items-start gap-3.5 rounded-2xl border border-brand-500/20 bg-gradient-to-br from-brand-600/10 to-accent-500/10 p-5 transition-colors duration-300 hover:border-brand-500/40">
      <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-brand-600 to-accent-500 text-white">
        <Icon className="h-4 w-4" />
      </span>
      <div>
        <h4 className="font-display text-sm font-semibold text-ink-900 dark:text-white">
          {item.title}
        </h4>
        <p className="mt-1 text-xs leading-relaxed text-ink-500 dark:text-ink-400">
          {item.description}
        </p>
      </div>
    </div>
  );
}

export function WhyDifferent() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32" id="why-different">
      <div className="pointer-events-none absolute -right-40 top-24 h-96 w-96 rounded-full bg-brand-600/10 blur-[120px]" />
      <Container className="relative">
        <SectionHeading
          eyebrow="Why We Are Different"
          title={
            <>
              Not a marketplace.{" "}
              <span className="text-gradient">A managed partner.</span>
            </>
          }
          subtitle="Marketplaces push the work onto you. Layzox coordinates sourcing, management, verification and delivery through one accountable process."
        />

        {/* Comparison */}
        <Reveal className="mt-16">
          <div className="overflow-hidden rounded-3xl border border-ink-200/70 shadow-[0_32px_80px_-32px_rgb(15_23_42/0.2)] dark:border-ink-800">
            <div className="grid grid-cols-2">
              <div className="border-r border-ink-200/70 bg-red-500/[0.04] px-5 py-5 sm:px-8 dark:border-ink-800">
                <span className="inline-flex items-center gap-2 font-display text-sm font-semibold text-ink-500 sm:text-base dark:text-ink-300">
                  <X className="h-4 w-4 text-red-500" />
                  Traditional Marketplace
                </span>
              </div>
              <div className="bg-gradient-to-br from-brand-600/10 to-accent-500/10 px-5 py-5 sm:px-8">
                <span className="inline-flex items-center gap-2 font-display text-sm font-semibold text-ink-900 sm:text-base dark:text-white">
                  <Check className="h-4 w-4 text-brand-600 dark:text-accent-400" />
                  Layzox
                </span>
              </div>
            </div>

            <Stagger className="divide-y divide-ink-200/70 border-t border-ink-200/70 dark:divide-ink-800 dark:border-ink-800" gap={0}>
              {comparison.map((row) => (
                <Item key={row.label} className="grid grid-cols-2">
                  <div className="flex flex-col gap-0.5 border-r border-ink-200/70 bg-red-500/[0.02] px-5 py-4 sm:px-8 dark:border-ink-800">
                    <span className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-ink-400 dark:text-ink-500">
                      {row.label}
                    </span>
                    <span className="text-sm text-ink-600 dark:text-ink-300">{row.marketplace}</span>
                  </div>
                  <div className="flex flex-col gap-0.5 bg-gradient-to-br from-brand-600/[0.06] to-accent-500/[0.06] px-5 py-4 sm:px-8">
                    <span className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-brand-600 dark:text-accent-400">
                      {row.label}
                    </span>
                    <span className="flex items-center gap-2 text-sm font-medium text-ink-900 dark:text-white">
                      <ShieldCheck className="h-4 w-4 shrink-0 text-emerald-500" />
                      {row.layzox}
                    </span>
                  </div>
                </Item>
              ))}
            </Stagger>
          </div>
        </Reveal>

        {/* Two-col pain vs advantage */}
        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <div>
            <Reveal>
              <h3 className="font-display text-xl font-semibold tracking-tight text-ink-900 dark:text-white">
                What a marketplace puts on your plate
              </h3>
            </Reveal>
            <Stagger className="mt-6 grid gap-3 sm:grid-cols-2" gap={0.06}>
              {marketplacePain.map((p) => (
                <Item key={p.title}>
                  <PainCard item={p} />
                </Item>
              ))}
            </Stagger>
          </div>
          <div>
            <Reveal>
              <h3 className="font-display text-xl font-semibold tracking-tight text-ink-900 dark:text-white">
                What Layzox takes off your plate
              </h3>
            </Reveal>
            <Stagger className="mt-6 grid gap-3 sm:grid-cols-2" gap={0.06}>
              {layzoxAdvantage.map((a) => (
                <Item key={a.title}>
                  <AdvantageCard item={a} />
                </Item>
              ))}
            </Stagger>
          </div>
        </div>

        {/* Business rules */}
        <Reveal className="mt-16">
          <div className="rounded-3xl border border-ink-200/70 bg-white p-8 sm:p-10 dark:border-ink-800 dark:bg-ink-900/40">
            <div className="grid gap-8 lg:grid-cols-[1fr_1.6fr] lg:items-start">
              <div>
                <h3 className="font-display text-2xl font-semibold tracking-tight text-ink-900 dark:text-white">
                  The Layzox operating rules
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-500 dark:text-ink-400">
                  These principles create the structure, accountability and quality that open
                  marketplaces cannot provide.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {businessRules.map((rule) => (
                  <div
                    key={rule}
                    className="flex items-center gap-3 rounded-xl border border-ink-200/70 bg-surface-soft px-4 py-3 dark:border-ink-800 dark:bg-ink-900/60"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-600 to-accent-500 text-white">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-sm font-medium text-ink-800 dark:text-ink-200">{rule}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
