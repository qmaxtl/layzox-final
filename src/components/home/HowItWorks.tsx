import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal, Stagger, Item, EASE } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { steps } from "@/lib/data/howItWorks";
import { cn } from "@/lib/cn";

function TimelineItem({ index }: { index: number }) {
  const step = steps[index];
  const Icon = step.icon;
  const leftSide = index % 2 === 0;

  return (
    <Item className="relative">
      <div className="grid lg:grid-cols-2">
        <div
          className={cn(
            "pl-14 lg:pl-0",
            leftSide ? "lg:pr-16" : "lg:order-2 lg:pl-16",
          )}
        >
          <div
            className={cn(
              "group relative rounded-2xl border border-ink-200/70 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/30 hover:shadow-[0_20px_48px_-20px_rgb(37_99_235/0.3)] dark:border-ink-800 dark:bg-ink-900/60 dark:hover:border-brand-500/25",
              leftSide ? "lg:text-right" : "",
            )}
          >
            <div
              className={cn(
                "flex items-center gap-3",
                leftSide ? "lg:flex-row-reverse" : "",
              )}
            >
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-accent-500 text-white shadow-[0_8px_20px_-8px_rgb(37_99_235/0.6)] transition-transform duration-300 group-hover:scale-110">
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-brand-600 dark:text-accent-400">
                  Step {step.number}
                </p>
                <h3 className="font-display text-lg font-semibold tracking-tight text-ink-900 dark:text-white">
                  {step.title}
                </h3>
              </div>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-ink-500 dark:text-ink-400">
              {step.description}
            </p>
            <span className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-brand-600/10 px-2.5 py-1 font-mono text-[0.6rem] uppercase tracking-wider text-brand-700 dark:bg-brand-500/10 dark:text-accent-300">
              <span className="h-1 w-1 rounded-full bg-current" />
              Step {step.number}
            </span>
          </div>
        </div>
      </div>
    </Item>
  );
}

export function HowItWorks() {
  const lineRef = useRef<HTMLDivElement>(null);
  const inView = useInView(lineRef, { once: true, amount: 0.15 });

  return (
    <section className="relative overflow-hidden py-24 sm:py-32" id="how-it-works">
      <div className="pointer-events-none absolute -left-32 top-1/3 h-80 w-80 rounded-full bg-accent-500/10 blur-[100px]" />
      <Container className="relative">
        <SectionHeading
          eyebrow="How It Works"
          title={
            <>
              From requirement to completion,{" "}
              <span className="text-gradient">handled for you</span>
            </>
          }
          subtitle="Six transparent steps. One accountable partner. You approve the quotation before work begins."
        />

        <div className="relative mt-20">
          {/* Line */}
          <div
            ref={lineRef}
            className="absolute left-6 top-0 h-full w-px -translate-x-1/2 lg:left-1/2"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-brand-600/10 via-brand-600/30 to-accent-500/10" />
            <motion.div
              className="absolute inset-0 origin-top bg-gradient-to-b from-brand-600 via-brand-600 to-accent-500"
              initial={{ scaleY: 0 }}
              animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 2.4, ease: EASE, delay: 0.2 }}
            />
          </div>

          {/* Nodes */}
          {steps.map((s, i) => (
            <div
              key={s.number}
              className={cn(
                "absolute left-6 top-7 z-10 -translate-x-1/2 lg:left-1/2",
              )}
            >
              <motion.span
                initial={{ scale: 0, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: EASE, delay: 0.4 + i * 0.16 }}
                className="block h-3.5 w-3.5 rounded-full border-2 border-white bg-gradient-to-br from-brand-600 to-accent-500 shadow-[0_0_0_6px_rgb(37_99_235/0.15)] dark:border-ink-950"
              />
            </div>
          ))}

          <Stagger className="flex flex-col gap-10 lg:gap-14" gap={0.1}>
            {steps.map((s, i) => (
              <TimelineItem key={s.number} index={i} />
            ))}
          </Stagger>
        </div>

        <Reveal className="mt-16 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-400 dark:text-ink-500">
            One requirement. One accountable process.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
