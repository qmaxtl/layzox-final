import { ArrowRight, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { Stagger, Item, Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { partnerCriteria } from "@/lib/data/whyDifferent";

export function PartnerSection() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32" id="become-a-partner">
      <div className="absolute inset-0 bg-ink-950" />
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid bg-grid-fade opacity-25" />
        <div className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-brand-600/25 blur-[120px]" />
        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-accent-500/20 blur-[120px]" />
      </div>

      <Container className="relative">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div>
            <SectionHeading
              align="left"
              light
              eyebrow="Become a Partner"
              title={
                <>
                  Join the{" "}
                  <span className="text-gradient-blue">Layzox partner network</span>
                </>
              }
              subtitle="Verification requirements vary by service category. Once verified, you don't compete for customer leads   Layzox assigns work based on fit, availability and performance."
            />
            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="h-5 w-5 shrink-0 text-emerald-400" />
                  <p className="text-sm text-slate-300">
                    <span className="font-semibold text-white">No lead competition.</span>{" "}
                    Layzox internally assigns work based on documented criteria.
                  </p>
                </div>
                <Link
                  to="/become-a-partner"
                  className="group mt-2 inline-flex w-fit items-center gap-2.5 rounded-xl bg-gradient-to-r from-brand-600 to-accent-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_rgb(6_182_212/0.6)] transition-all hover:-translate-y-0.5"
                >
                  Apply to become a partner
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </Reveal>
          </div>

          <Stagger className="grid gap-3 sm:grid-cols-2" gap={0.07}>
            {partnerCriteria.map((c, i) => {
              const Icon = c.icon;
              return (
                <Item key={c.title}>
                  <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors duration-300 hover:border-brand-500/40 hover:bg-white/[0.08]">
                    <span className="absolute right-5 top-5 font-display text-3xl font-bold text-white/10 transition-colors duration-300 group-hover:text-brand-500/20">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-accent-500 text-white shadow-[0_8px_20px_-8px_rgb(37_99_235/0.6)]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 font-display text-base font-semibold text-white">
                      {c.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{c.description}</p>
                  </div>
                </Item>
              );
            })}
            <Item>
              <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-dashed border-white/15 p-6 text-center">
                <Badge tone="accent" className="mb-3">
                  Applications reviewed on a rolling basis
                </Badge>
                <p className="text-sm text-slate-400">
                  Partner categories are reviewed and expanded as requirements demand.
                </p>
              </div>
            </Item>
          </Stagger>
        </div>
      </Container>
    </section>
  );
}
