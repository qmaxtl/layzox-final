import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";

interface LegalPageProps {
  eyebrow: string;
  title: string;
  updated: string;
  sections: { heading: string; body: string }[];
}

export function LegalPage({ eyebrow, title, updated, sections }: LegalPageProps) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} subtitle={`Last updated: ${updated}`} compact />
      <Container size="sm" className="pb-24">
        <div className="flex flex-col gap-10">
          {sections.map((s, i) => (
            <Reveal key={i} delay={0.03 * (i % 4)}>
              <h2 className="font-display text-xl font-semibold tracking-tight text-ink-900 dark:text-white">
                {i + 1}. {s.heading}
              </h2>
              <p className="mt-3 text-[0.95rem] leading-[1.8] text-ink-600 dark:text-ink-300">
                {s.body}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </>
  );
}
