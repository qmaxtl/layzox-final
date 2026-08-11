import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "@/components/ui/Container";
import { Reveal, Stagger, Item } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { steps } from "@/lib/data/howItWorks";

const condensed = [
  { index: 0, label: "Submit your requirement", copy: "Tell us what you need   it takes minutes." },
  { index: 3, label: "Approve the quotation", copy: "An official quotation, structured and shared for your review." },
  { index: 4, label: "The partner executes", copy: "The selected service partner delivers to the agreed scope." },
  { index: 5, label: "Coordinated to completion", copy: "We help coordinate follow-up, documentation and completion." },
];

export function HomeSteps() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24" id="how-it-works">
      <Container className="relative">
        <SectionHeading
          eyebrow="How It Works"
          title={
            <>
              From requirement to completion,{" "}
              <span className="text-gradient">handled for you</span>
            </>
          }
          subtitle="Six transparent steps, one accountable partner. Here's the short version."
        />

        <Stagger className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4" gap={0.06}>
          {condensed.map((s) => {
            const step = steps[s.index];
            const Icon = step.icon;
            return (
              <Item key={s.index} className="h-full">
                <div className="group relative h-full overflow-hidden rounded-2xl border border-ink-200/70 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/30 hover:shadow-[0_20px_48px_-20px_rgb(37_99_235/0.3)] dark:border-ink-800 dark:bg-ink-900/60 dark:hover:border-brand-500/25">
                  <span className="absolute right-5 top-5 font-display text-3xl font-bold text-ink-100 transition-colors duration-300 group-hover:text-brand-600/20 dark:text-ink-800 dark:group-hover:text-accent-500/20">
                    {step.number}
                  </span>
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-accent-500 text-white shadow-[0_8px_20px_-8px_rgb(37_99_235/0.6)] transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-base font-semibold tracking-tight text-ink-900 dark:text-white">
                    {s.label}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-500 dark:text-ink-400">
                    {s.copy}
                  </p>
                </div>
              </Item>
            );
          })}
        </Stagger>

        <Reveal className="mt-10 text-center">
          <Link
            to="/how-it-works"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-brand-600 dark:text-accent-400"
          >
            See all 6 steps in detail
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
