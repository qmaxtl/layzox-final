import { ArrowUpRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal, Stagger, Item } from "@/components/ui/Reveal";
import { CtaBanner } from "@/components/home/CtaBanner";
import { industries } from "@/lib/data/industries";

export function Industries() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title={
          <>
            Purpose-built for every{" "}
            <span className="text-gradient">industry</span>
          </>
        }
        subtitle="From factory floors to hospital wards, Layzox delivers managed services coordinated around the needs of each industry."
      />

      <Container className="pb-24">
        <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" gap={0.05}>
          {industries.map((ind) => {
            const Icon = ind.icon;
            return (
              <Item key={ind.slug}>
                <div
                  id={ind.slug}
                  className="group relative flex h-full scroll-mt-28 flex-col rounded-2xl border border-ink-200/70 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/30 hover:shadow-[0_20px_48px_-20px_rgb(37_99_235/0.3)] dark:border-ink-800 dark:bg-ink-900/50 dark:hover:border-brand-500/25"
                >
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-ink-900 text-white transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-brand-600 group-hover:to-accent-500 dark:bg-ink-800">
                      <Icon className="h-5.5 w-5.5" />
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-ink-300 opacity-0 transition-all duration-300 group-hover:opacity-100 dark:text-ink-600" />
                  </div>
                  <h2 className="mt-5 font-display text-xl font-semibold tracking-tight text-ink-900 dark:text-white">
                    {ind.name}
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500 dark:text-ink-400">
                    {ind.description}
                  </p>
                  <ul className="mt-5 flex flex-col gap-2 border-t border-ink-100 pt-4 dark:border-ink-800">
                    {ind.services.map((s) => (
                      <li key={s} className="flex items-center gap-2 text-xs text-ink-600 dark:text-ink-300">
                        <Check className="h-3.5 w-3.5 shrink-0 text-emerald-500" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </Item>
            );
          })}
        </Stagger>

        <Reveal className="mt-16 text-center">
          <p className="text-sm text-ink-500 dark:text-ink-400">
            Your industry isn't listed?{" "}
            <Link
              to="/post-requirement"
              className="font-semibold text-brand-600 underline-offset-4 hover:underline dark:text-accent-400"
            >
              Talk to us
            </Link>{" "}
              Layzox customises programs for any vertical.
          </p>
        </Reveal>
      </Container>

      <CtaBanner />
    </>
  );
}
