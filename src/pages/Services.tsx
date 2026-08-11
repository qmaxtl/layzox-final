import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal, Stagger, Item } from "@/components/ui/Reveal";
import { CtaBanner } from "@/components/home/CtaBanner";
import { services, serviceCategories } from "@/lib/data/services";
import { cn } from "@/lib/cn";

const gradients = [
  "from-brand-600 to-accent-500",
  "from-violet-600 to-fuchsia-500",
  "from-emerald-500 to-teal-500",
  "from-amber-500 to-orange-500",
  "from-rose-500 to-pink-500",
  "from-indigo-600 to-violet-500",
  "from-cyan-500 to-blue-500",
  "from-lime-500 to-emerald-500",
];

export function Services() {
  return (
    <>
      <PageHero
        eyebrow="All Services"
        title={
          <>
            35 business services,{" "}
            <span className="text-gradient">one accountable partner</span>
          </>
        }
        subtitle="Every service is managed by Layzox   verified partners, official quotations, quality checks and GST invoices."
      />

      <Container className="pb-24">
        <div className="mt-4 grid gap-10">
          {serviceCategories.map((cat, ci) => {
            const items = services.filter((s) => s.category === cat.name);
            return (
              <div key={cat.slug} id={cat.slug} className="scroll-mt-28">
                <Reveal>
                  <div className="flex flex-col justify-between gap-2 border-b border-ink-200/70 pb-4 sm:flex-row sm:items-end dark:border-ink-800">
                    <div>
                      <span className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-brand-600 dark:text-accent-400">
                        {String(ci + 1).padStart(2, "0")}   {cat.name}
                      </span>
                      <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight text-ink-900 sm:text-3xl dark:text-white">
                        {cat.name}
                      </h2>
                    </div>
                    <p className="max-w-sm text-sm text-ink-500 dark:text-ink-400">{cat.description}</p>
                  </div>
                </Reveal>

                <Stagger className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" gap={0.05}>
                  {items.map((s, i) => {
                    const Icon = s.icon;
                    return (
                      <Item key={s.slug}>
                        <div
                          id={s.slug}
                          className="group relative flex h-full scroll-mt-28 flex-col rounded-2xl border border-ink-200/70 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/30 hover:shadow-[0_20px_48px_-20px_rgb(37_99_235/0.3)] dark:border-ink-800 dark:bg-ink-900/50 dark:hover:border-brand-500/25"
                        >
                          <div className="flex items-start justify-between">
                            <span
                              className={cn(
                                "inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-[0_8px_20px_-8px_rgb(37_99_235/0.5)] transition-transform duration-300 group-hover:scale-110",
                                gradients[(ci * 3 + i) % gradients.length],
                              )}
                            >
                              <Icon className="h-5 w-5" />
                            </span>
                            <ArrowUpRight className="h-4 w-4 text-ink-300 opacity-0 transition-all duration-300 group-hover:opacity-100 dark:text-ink-600" />
                          </div>
                          <h3 className="mt-4 font-display text-[1.05rem] font-semibold tracking-tight text-ink-900 dark:text-white">
                            {s.name}
                          </h3>
                          <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500 dark:text-ink-400">
                            {s.description}
                          </p>
                          <div className="mt-4 flex flex-wrap gap-1.5">
                            {s.points.map((p) => (
                              <span
                                key={p}
                                className="rounded-md bg-ink-100 px-2 py-1 font-mono text-[0.58rem] uppercase tracking-wider text-ink-500 dark:bg-ink-800 dark:text-ink-400"
                              >
                                {p}
                              </span>
                            ))}
                          </div>
                        </div>
                      </Item>
                    );
                  })}
                </Stagger>
              </div>
            );
          })}
        </div>

        <Reveal className="mt-16">
          <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-brand-500/25 bg-gradient-to-br from-brand-600/10 to-accent-500/10 px-8 py-7 text-center sm:flex-row sm:text-left">
            <div>
              <p className="font-display text-lg font-semibold text-ink-900 dark:text-white">
                Don't see the service you need?
              </p>
              <p className="mt-1 text-sm text-ink-500 dark:text-ink-400">
                Layzox sources and manages any legitimate business service on request.
              </p>
            </div>
            <Link
              to="/post-requirement"
              className="shrink-0 rounded-xl bg-ink-900 px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-ink-800 dark:bg-brand-600 dark:hover:bg-brand-500"
            >
              Post a custom requirement
            </Link>
          </div>
        </Reveal>
      </Container>

      <CtaBanner />
    </>
  );
}
