import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { CtaBanner } from "@/components/home/CtaBanner";
import { ProblemSolution } from "@/components/home/ProblemSolution";
import { WhyDifferent } from "@/components/home/WhyDifferent";

const pillars = [
  {
    title: "Mission",
    body: "Make managed B2B services procurement simple — where businesses never have to worry about sourcing, managing or chasing providers.",
  },
  {
    title: "Model",
    body: "A managed model. Layzox is the point of contact between businesses and service providers, coordinating the journey from requirement to completion.",
  },
  {
    title: "Accountability",
    body: "Work is checked against the agreed scope and documented before payment. If the work isn't right, we work with you and the partner to get it corrected.",
  },
];

export function WhyLayzoxPage() {
  return (
    <>
      <PageHero
        eyebrow="Why Layzox"
        title={
          <>
            The accountable partner for{" "}
            <span className="text-gradient">every business service</span>
          </>
        }
        subtitle="Layzox was built on a simple belief: businesses shouldn't have to be procurement experts. Our managed model coordinates sourcing, quotations, delivery and documentation — permanently."
      />

      <Container className="pb-10">
        <Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {pillars.map((p, i) => (
              <div
                key={p.title}
                className="relative overflow-hidden rounded-2xl border border-ink-200/70 bg-white p-8 dark:border-ink-800 dark:bg-ink-900/50"
              >
                <span className="font-display text-4xl font-bold text-brand-600/15 dark:text-accent-500/15">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-3 font-display text-xl font-semibold tracking-tight text-ink-900 dark:text-white">
                  {p.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-500 dark:text-ink-400">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>

      <ProblemSolution />
      <WhyDifferent />

      <Container className="pb-10">
        <Reveal className="text-center">
          <Link
            to="/about"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-brand-600 dark:text-accent-400"
          >
            Learn more about Layzox
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </Container>

      <CtaBanner />
    </>
  );
}
