import { ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Stagger, Item } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { trustHighlights } from "@/lib/data/testimonials";

export function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32" id="trust">
      <div className="pointer-events-none absolute -left-32 top-24 h-96 w-96 rounded-full bg-accent-500/10 blur-[120px]" />
      <Container className="relative">
        <SectionHeading
          eyebrow="How Layzox builds trust"
          title={
            <>
              A clear, structured{" "}
              <span className="text-gradient">procurement process</span>
            </>
          }
          subtitle="Trust comes from process, not promises. Here is how Layzox sources, quotes and verifies work for every requirement."
        />

        <Stagger className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3" gap={0.07}>
          {trustHighlights.map((t, i) => (
            <Item key={t.title}>
              <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-ink-200/70 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/30 hover:shadow-[0_24px_56px_-24px_rgb(37_99_235/0.35)] dark:border-ink-800 dark:bg-ink-900/50 dark:hover:border-brand-500/25">
                <span className="absolute right-6 top-6 font-display text-4xl font-bold text-ink-100 transition-colors dark:text-ink-800 dark:group-hover:text-accent-500/15">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-600/10 text-brand-600 dark:bg-brand-500/15 dark:text-accent-400">
                  <ShieldCheck className="h-5 w-5" />
                </span>
                <span className="mt-4 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-brand-600 dark:text-accent-400">
                  {t.label}
                </span>
                <h3 className="mt-2 font-display text-lg font-semibold tracking-tight text-ink-900 dark:text-white">
                  {t.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500 dark:text-ink-400">
                  {t.body}
                </p>
              </div>
            </Item>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
