import { Container } from "@/components/ui/Container";
import { Stagger, Item, Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { enterpriseFeatures } from "@/lib/data/features";
import { cn } from "@/lib/cn";

export function EnterpriseSection() {
  return (
    <section className="relative overflow-hidden bg-surface-soft py-24 sm:py-32 dark:bg-ink-900/30" id="enterprise">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40 dark:opacity-20" />
      <Container className="relative">
        <SectionHeading
          eyebrow="Enterprise Admin"
          title={
            <>
              Complete control,{" "}
              <span className="text-gradient">on one dashboard</span>
            </>
          }
          subtitle="For large organisations and Layzox's own operations — managing vendors, areas, pricing, orders and compliance from a single admin console."
        />

        <Stagger className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" gap={0.05}>
          {enterpriseFeatures.map((f) => {
            const Icon = f.icon;
            return (
              <Item key={f.title}>
                <div
                  className={cn(
                    "group relative h-full overflow-hidden rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1",
                    "border-ink-200/70 bg-white hover:border-brand-500/30 hover:shadow-[0_20px_48px_-20px_rgb(37_99_235/0.3)] dark:border-ink-800 dark:bg-ink-900/50 dark:hover:border-brand-500/25",
                  )}
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-gradient-to-br from-brand-600 to-accent-500 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-15"
                  />
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-600/10 text-brand-600 transition-transform duration-300 group-hover:scale-110 dark:bg-brand-500/15 dark:text-accent-400">
                    <Icon className="h-4.5 w-4.5" />
                  </span>
                  <h3 className="mt-3.5 font-display text-[0.95rem] font-semibold tracking-tight text-ink-900 dark:text-white">
                    {f.title}
                  </h3>
                  <p className="mt-1 text-[0.8rem] leading-relaxed text-ink-500 dark:text-ink-400">
                    {f.description}
                  </p>
                </div>
              </Item>
            );
          })}
        </Stagger>

        <Reveal className="mt-14">
          <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-brand-500/25 bg-gradient-to-br from-brand-600/10 to-accent-500/10 px-8 py-6 text-center sm:flex-row sm:text-left">
            <div>
              <p className="font-display text-lg font-semibold text-ink-900 dark:text-white">
                Managing multi-site procurement at scale?
              </p>
              <p className="mt-1 text-sm text-ink-500 dark:text-ink-400">
                Talk to our team about managed programs, structured coordination and reporting for
                multi-site operations.
              </p>
            </div>
            <a
              href="/talk-to-expert"
              className="shrink-0 rounded-xl bg-ink-900 px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-ink-800 dark:bg-brand-600 dark:hover:bg-brand-500"
            >
              Book an enterprise call
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
