import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/home/ContactForm";
import { site } from "@/lib/site";

const cards = [
  { icon: Mail, title: "Email us", value: site.email, sub: "For enquiries and quotations", href: `mailto:${site.email}` },
  { icon: Phone, title: "Call us", value: site.phone, sub: site.hours, href: `tel:${site.phone.replace(/\s/g, "")}` },
  { icon: MapPin, title: "Head office", value: "Ranchi, India", sub: site.address, href: undefined },
  { icon: Clock, title: "Support hours", value: "Mon – Sat", sub: "9:00 AM – 8:00 PM IST", href: undefined },
];

export function ContactSection() {
  return (
    <section className="relative overflow-hidden bg-surface-soft py-24 sm:py-32 dark:bg-ink-900/30" id="contact">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title={
            <>
              Let's talk about your{" "}
              <span className="text-gradient">service needs</span>
            </>
          }
          subtitle="Tell us what your business needs. A Layzox specialist will review it and respond with next steps."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div className="flex flex-col gap-4">
            <Reveal>
              <div className="grid gap-4 sm:grid-cols-2">
                {cards.map((c) => {
                  const Icon = c.icon;
                  const content = (
                    <>
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-accent-500 text-white shadow-[0_8px_20px_-8px_rgb(37_99_235/0.6)]">
                        <Icon className="h-5 w-5" />
                      </span>
                      <p className="mt-4 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-brand-600 dark:text-accent-400">
                        {c.title}
                      </p>
                      <p className="mt-1 break-words font-display text-[0.95rem] font-semibold text-ink-900 dark:text-white">
                        {c.value}
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-ink-500 dark:text-ink-400">
                        {c.sub}
                      </p>
                    </>
                  );
                  return c.href ? (
                    <a
                      key={c.title}
                      href={c.href}
                      className="group rounded-2xl border border-ink-200/70 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/30 hover:shadow-lift dark:border-ink-800 dark:bg-ink-900/50"
                    >
                      {content}
                    </a>
                  ) : (
                    <div
                      key={c.title}
                      className="rounded-2xl border border-ink-200/70 bg-white p-6 dark:border-ink-800 dark:bg-ink-900/50"
                    >
                      {content}
                    </div>
                  );
                })}
              </div>
            </Reveal>

            {/* Map placeholder */}
            <Reveal delay={0.1}>
              <div className="relative overflow-hidden rounded-2xl border border-ink-200/70 bg-white dark:border-ink-800 dark:bg-ink-900/50">
                <div className="absolute inset-0 bg-grid opacity-60 dark:opacity-30" />
                <div className="relative flex aspect-[16/7] flex-col items-center justify-center gap-2">
                  <span className="relative flex h-12 w-12 items-center justify-center">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-600/30" />
                    <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-600 to-accent-500 text-white shadow-glow">
                      <MapPin className="h-5 w-5" />
                    </span>
                  </span>
                  <p className="font-display text-sm font-semibold text-ink-900 dark:text-white">
                    Ranchi, Jharkhand
                  </p>
                  <p className="font-mono text-[0.62rem] uppercase tracking-widest text-ink-400 dark:text-ink-500">
                    Layzox head office
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.08}>
            <ContactForm />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
