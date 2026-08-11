import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "@/components/ui/Container";
import { Reveal, EASE } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Marquee } from "@/components/ui/Marquee";
import { services, serviceCategories, type Service } from "@/lib/data/services";
import { cn } from "@/lib/cn";

const gradientPairs = [
  "from-brand-600 to-accent-500",
  "from-violet-600 to-fuchsia-500",
  "from-emerald-500 to-teal-500",
  "from-amber-500 to-orange-500",
  "from-rose-500 to-pink-500",
  "from-indigo-600 to-violet-500",
  "from-cyan-500 to-blue-500",
  "from-lime-500 to-emerald-500",
];

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = service.icon;
  const gradient = gradientPairs[index % gradientPairs.length];
  const slug = service.slug;

  return (
    <Link
      to={`/services#${slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-ink-200/70 bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-500/30 hover:shadow-[0_24px_48px_-20px_rgb(37_99_235/0.35)] dark:border-ink-800 dark:bg-ink-900/50 dark:hover:border-brand-500/25"
    >
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-25",
          gradient,
        )}
      />
      <div className="flex items-start justify-between">
        <span
          className={cn(
            "inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-[0_8px_20px_-8px_rgb(37_99_235/0.5)] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3",
            gradient,
          )}
        >
          <Icon className="h-5.5 w-5.5" />
        </span>
        <ArrowUpRight className="h-4 w-4 text-ink-300 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-600 group-hover:opacity-100 dark:text-ink-600 dark:group-hover:text-accent-400" />
      </div>
      <h3 className="mt-5 font-display text-[1.05rem] font-semibold tracking-tight text-ink-900 dark:text-white">
        {service.name}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500 dark:text-ink-400">
        {service.description}
      </p>
      <span className="mt-4 inline-flex items-center gap-1.5 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-brand-600 opacity-0 transition-all duration-300 group-hover:opacity-100 dark:text-accent-400">
        <span className="h-px w-4 bg-current" />
        Managed by Layzox
      </span>
    </Link>
  );
}

export function ServicesSection() {
  const [active, setActive] = useState<string>("all");

  const filtered = useMemo(() => {
    if (active === "all") return services;
    return services.filter((s) => s.category === active);
  }, [active]);

  return (
    <section className="relative overflow-hidden py-24 sm:py-32" id="services">
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[70rem] -translate-x-1/2 rounded-full bg-brand-500/[0.06] blur-[100px]" />
      <Container className="relative">
        <SectionHeading
          eyebrow="Services"
          title={
            <>
              Every business service,{" "}
              <span className="text-gradient">managed end to end</span>
            </>
          }
          subtitle="From pest control to facility management, software to security   services across 8 categories, coordinated through one accountable partner."
        />

        {/* Category filter */}
        <Reveal delay={0.1} className="mt-12">
          <div className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 pb-2 sm:flex-wrap sm:justify-center sm:overflow-visible">
            <FilterPill label="All Services" active={active === "all"} onClick={() => setActive("all")} />
            {serviceCategories.map((c) => (
              <FilterPill
                key={c.slug}
                label={c.name}
                active={active === c.name}
                onClick={() => setActive(c.name)}
              />
            ))}
          </div>
        </Reveal>

        {/* Grid */}
        <motion.div layout className="mt-10">
          <AnimatePresence mode="popLayout">
            <motion.div
              layout
              className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            >
              {filtered.map((s, i) => (
                <motion.div
                  layout
                  key={s.slug}
                  initial={{ opacity: 0, scale: 0.92, y: 12 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.92, y: 12 }}
                  transition={{ duration: 0.4, ease: EASE }}
                >
                  <ServiceCard service={s} index={i} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        <Reveal className="mt-12 text-center">
          <p className="text-sm text-ink-500 dark:text-ink-400">
            Need a service not listed here?{" "}
            <Link
              to="/post-requirement"
              className="font-semibold text-brand-600 underline-offset-4 hover:underline dark:text-accent-400"
            >
              Post your requirement
            </Link>{" "}
              we source and manage it for you.
          </p>
        </Reveal>
      </Container>

      {/* Marquee */}
      <div className="relative mt-16 border-y border-ink-200/60 py-5 dark:border-ink-800/60">
        <Marquee itemClassName="mx-2">
          {services.map((s) => (
            <span
              key={s.slug}
              className="inline-flex items-center gap-3 whitespace-nowrap rounded-full border border-ink-200/80 bg-white px-4 py-2 text-sm font-medium text-ink-600 dark:border-ink-800 dark:bg-ink-900/60 dark:text-ink-300"
            >
              <s.icon className="h-3.5 w-3.5 text-brand-600 dark:text-accent-400" />
              {s.name}
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}

function FilterPill({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "shrink-0 cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition-all duration-300",
        active
          ? "bg-ink-900 text-white shadow-[0_6px_20px_-6px_rgb(15_23_42/0.5)] dark:bg-brand-600 dark:shadow-[0_6px_20px_-6px_rgb(37_99_235/0.5)]"
          : "border border-ink-200 bg-white text-ink-600 hover:border-ink-900 hover:text-ink-900 dark:border-ink-700 dark:bg-ink-900/50 dark:text-ink-300 dark:hover:border-ink-400 dark:hover:text-white",
      )}
    >
      {label}
    </button>
  );
}
