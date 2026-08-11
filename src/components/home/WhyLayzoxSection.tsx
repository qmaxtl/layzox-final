import {
  ClipboardCheck,
  FileCheck,
  FileText,
  Search,
  ShieldCheck,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Stagger, Item } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const pillars = [
  {
    label: "01",
    title: "One Requirement",
    body: "Submit once. Layzox coordinates the rest through a single point of contact.",
    icon: FileText,
  },
  {
    label: "02",
    title: "Structured Sourcing",
    body: "Partners are identified by service, area, capability, availability, experience and track record.",
    icon: Search,
  },
  {
    label: "03",
    title: "Quotation Coordination",
    body: "Quotations are gathered, structured and shared for your review before work begins.",
    icon: FileCheck,
  },
  {
    label: "04",
    title: "One Accountable Process",
    body: "A Layzox team coordinates scheduling, follow-up and issue resolution throughout.",
    icon: ShieldCheck,
  },
  {
    label: "05",
    title: "Quality & Documentation",
    body: "Completed work is checked against the agreed scope and documented before payment is released.",
    icon: ClipboardCheck,
  },
];

export function WhyLayzoxSection() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32" id="why-layzox">
      <div className="pointer-events-none absolute -right-32 top-1/4 h-80 w-80 rounded-full bg-accent-500/10 blur-[100px]" />
      <Container className="relative">
        <SectionHeading
          eyebrow="Why Layzox"
          title={
            <>
              Built around{" "}
              <span className="text-gradient">five working principles</span>
            </>
          }
          subtitle="No hype, no inflated promises. Layzox is structured around a simple, accountable operating model."
        />

        <Stagger className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3" gap={0.07}>
          {pillars.map((p, i) => (
            <Item key={p.title} className={i === 4 ? "md:col-span-2 lg:col-span-1" : ""}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-ink-200/70 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/30 hover:shadow-[0_20px_48px_-20px_rgb(37_99_235/0.3)] dark:border-ink-800 dark:bg-ink-900/50 dark:hover:border-brand-500/25">
                <span className="absolute right-6 top-6 font-display text-4xl font-bold text-ink-100 transition-colors dark:text-ink-800 dark:group-hover:text-accent-500/20">
                  {p.label}
                </span>
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-600/10 text-brand-600 dark:bg-brand-500/15 dark:text-accent-400">
                  <p.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold tracking-tight text-ink-900 dark:text-white">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-400">
                  {p.body}
                </p>
              </div>
            </Item>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
