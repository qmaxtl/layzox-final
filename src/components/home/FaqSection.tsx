import { MessageCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Accordion } from "@/components/ui/Accordion";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqs } from "@/lib/data/faqs";
import { site } from "@/lib/site";

export function FaqSection() {
  const primary = faqs.slice(0, 8);
  const rest = faqs.slice(8);

  return (
    <section className="relative bg-surface-soft py-24 sm:py-32 dark:bg-ink-900/30" id="faq">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              align="left"
              eyebrow="FAQ"
              title={
                <>
                  Questions?{" "}
                  <span className="text-gradient">Answered.</span>
                </>
              }
              subtitle="Everything businesses ask before choosing a managed procurement partner."
            />
            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-col gap-3">
                <Link
                  to="/contact"
                  className="group flex items-center gap-3 rounded-2xl border border-ink-200/70 bg-white p-5 transition-all hover:border-brand-500/40 hover:shadow-lift dark:border-ink-800 dark:bg-ink-900/50"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-600/10 text-brand-600 dark:bg-brand-500/15 dark:text-accent-400">
                    <MessageCircle className="h-4.5 w-4.5" />
                  </span>
                  <div>
                    <p className="font-display text-sm font-semibold text-ink-900 dark:text-white">
                      Chat with our team
                    </p>
                    <p className="text-xs text-ink-500 dark:text-ink-400">
                      Share your requirement and our team will respond with next steps.
                    </p>
                  </div>
                </Link>
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="group flex items-center gap-3 rounded-2xl border border-ink-200/70 bg-white p-5 transition-all hover:border-brand-500/40 hover:shadow-lift dark:border-ink-800 dark:bg-ink-900/50"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-600/10 text-brand-600 dark:bg-brand-500/15 dark:text-accent-400">
                    <Phone className="h-4.5 w-4.5" />
                  </span>
                  <div>
                    <p className="font-display text-sm font-semibold text-ink-900 dark:text-white">
                      {site.phone}
                    </p>
                    <p className="text-xs text-ink-500 dark:text-ink-400">{site.hours}</p>
                  </div>
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <Accordion items={primary} />
            <div className="mt-3">
              <Accordion items={rest} />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
