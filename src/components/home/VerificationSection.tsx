import {
  BadgeCheck,
  BookOpenCheck,
  Building2,
  FileCheck,
  FileText,
  ShieldCheck,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const checks = [
  {
    title: "Business identity",
    body: "Registered business details are checked where the service category requires it.",
    icon: Building2,
  },
  {
    title: "GST details",
    body: "GST information is collected and matched for compliant invoicing.",
    icon: FileText,
  },
  {
    title: "Licences & certifications",
    body: "Applicable licences and certifications are reviewed for the service category.",
    icon: BadgeCheck,
  },
  {
    title: "Capability & experience",
    body: "Capacity, equipment and demonstrated experience are assessed for the work.",
    icon: ShieldCheck,
  },
  {
    title: "Documentation",
    body: "Relevant documents are collected, reviewed and maintained per category.",
    icon: BookOpenCheck,
  },
  {
    title: "Category-specific checks",
    body: "Additional checks apply only where the service category requires them.",
    icon: FileCheck,
  },
];

export function VerificationSection() {
  return (
    <section className="relative overflow-hidden bg-surface-soft py-24 sm:py-32 dark:bg-ink-900/30" id="verification">
      <Container>
        <SectionHeading
          eyebrow="Verification"
          title={
            <>
              Verification requirements{" "}
              <span className="text-gradient">vary by service category</span>
            </>
          }
          subtitle="We don't claim uniform checks we can't perform. Depending on the service you need, partner verification may include a combination of the following."
        />

        <Reveal className="mt-14">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {checks.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-ink-200/70 bg-white p-6 dark:border-ink-800 dark:bg-ink-900/50"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-600/10 text-brand-600 dark:bg-brand-500/15 dark:text-accent-400">
                  <c.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-base font-semibold tracking-tight text-ink-900 dark:text-white">
                  {c.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-500 dark:text-ink-400">
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
