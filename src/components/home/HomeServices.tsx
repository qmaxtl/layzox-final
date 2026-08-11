import {
  ArrowUpRight,
  Building2,
  Hammer,
  LayoutDashboard,
  Scale,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "@/components/ui/Container";
import { Reveal, Stagger, Item } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { serviceCategories, services } from "@/lib/data/services";

const categoryIcons = {
  "facility-maintenance": Building2,
  "safety-security": ShieldCheck,
  "electrical-hvac": LayoutDashboard,
  "construction-interiors": Hammer,
  "logistics-moving": Truck,
  "professional-services": Scale,
} as const;

const homepageSlugs = [
  "facility-maintenance",
  "safety-security",
  "electrical-hvac",
  "construction-interiors",
  "logistics-moving",
  "professional-services",
];

export function HomeServices() {
  const categories = homepageSlugs
    .map((slug) => serviceCategories.find((c) => c.slug === slug))
    .filter(Boolean);

  return (
    <section className="relative overflow-hidden bg-surface-soft py-20 sm:py-24 dark:bg-ink-900/30" id="services">
      <Container className="relative">
        <SectionHeading
          eyebrow="Services"
          title={
            <>
              Business services,{" "}
              <span className="text-gradient">fully managed</span>
            </>
          }
          subtitle="From pest control to facility management   every service coordinated and documented by Layzox."
        />

        <Stagger className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3" gap={0.05}>
          {categories.map((cat) => {
            const Icon = categoryIcons[cat!.slug as keyof typeof categoryIcons] ?? Building2;
            const count = services.filter((s) => s.category === cat!.name).length;
            return (
              <Item key={cat!.slug}>
                <Link
                  to={`/services#${cat!.slug}`}
                  className="group relative flex h-full items-center gap-4 overflow-hidden rounded-2xl border border-ink-200/70 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-500/30 hover:shadow-[0_16px_40px_-16px_rgb(37_99_235/0.3)] dark:border-ink-800 dark:bg-ink-900/60 dark:hover:border-brand-500/25"
                >
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-accent-500 text-white shadow-[0_8px_20px_-8px_rgb(37_99_235/0.5)] transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate font-display text-sm font-semibold text-ink-900 dark:text-white">
                      {cat!.name}
                    </span>
                    <span className="block font-mono text-[0.62rem] uppercase tracking-[0.16em] text-ink-400 dark:text-ink-500">
                      {count} services
                    </span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-ink-300 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-600 dark:text-ink-600 dark:group-hover:text-accent-400" />
                </Link>
              </Item>
            );
          })}
        </Stagger>

        <Reveal className="mt-10 text-center">
          <Link
            to="/services"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-brand-600 dark:text-accent-400"
          >
            Explore all services
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
