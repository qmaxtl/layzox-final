import { ArrowUpRight, Briefcase, Handshake, HeartPulse, Rocket, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal, Stagger, Item } from "@/components/ui/Reveal";
import { CtaBanner } from "@/components/home/CtaBanner";

const perks = [
  { icon: Rocket, title: "Impact at scale", body: "Build the platform that makes B2B services procurement simple." },
  { icon: Handshake, title: "Ownership culture", body: "Small, senior teams where your work directly shapes the product." },
  { icon: Sparkles, title: "Craft obsession", body: "We sweat the details — from UI polish to partner documentation." },
  { icon: HeartPulse, title: "Wellbeing", body: "Flexible hours, remote-friendly, health cover and real leave." },
];

const roles = [
  { title: "Procurement Operations Manager", dept: "Operations", location: "Ranchi · Hybrid", type: "Full-time" },
  { title: "Enterprise Sales Lead", dept: "Growth", location: "Ranchi · Remote", type: "Full-time" },
  { title: "Senior Product Engineer", dept: "Engineering", location: "Ranchi · Hybrid", type: "Full-time" },
  { title: "Vendor Onboarding Specialist", dept: "Vendor Success", location: "Remote (India)", type: "Full-time" },
  { title: "Customer Success Manager", dept: "Customer", location: "Ranchi · Hybrid", type: "Full-time" },
  { title: "Brand & Content Designer", dept: "Marketing", location: "Remote (India)", type: "Full-time" },
];

export function Careers() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title={
          <>
            Build the future of{" "}
            <span className="text-gradient">managed services</span>
          </>
        }
        subtitle="We're a small, senior team on a clear mission — making business services procurement simple for every business. Join us."
      />

      <Container className="pb-24">
        <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4" gap={0.06}>
          {perks.map((p) => {
            const Icon = p.icon;
            return (
              <Item key={p.title}>
                <div className="h-full rounded-2xl border border-ink-200/70 bg-white p-6 transition-all hover:-translate-y-1 hover:border-brand-500/30 hover:shadow-lift dark:border-ink-800 dark:bg-ink-900/50">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-accent-500 text-white">
                    <Icon className="h-4.5 w-4.5" />
                  </span>
                  <h2 className="mt-4 font-display text-base font-semibold text-ink-900 dark:text-white">
                    {p.title}
                  </h2>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-500 dark:text-ink-400">
                    {p.body}
                  </p>
                </div>
              </Item>
            );
          })}
        </Stagger>

        <Reveal className="mt-20">
          <div className="mb-8 flex items-center gap-3">
            <Briefcase className="h-5 w-5 text-brand-600 dark:text-accent-400" />
            <h2 className="font-display text-2xl font-semibold tracking-tight text-ink-900 dark:text-white">
              Open roles
            </h2>
            <span className="rounded-full bg-brand-600/10 px-3 py-1 font-mono text-xs text-brand-700 dark:bg-brand-500/10 dark:text-accent-300">
              {roles.length}
            </span>
          </div>
          <div className="flex flex-col gap-3">
            {roles.map((r) => (
              <Link
                key={r.title}
                to="/contact"
                className="group flex flex-col gap-3 rounded-2xl border border-ink-200/70 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-brand-500/30 hover:shadow-lift sm:flex-row sm:items-center sm:justify-between dark:border-ink-800 dark:bg-ink-900/50"
              >
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink-900 transition-colors group-hover:text-brand-600 dark:text-white dark:group-hover:text-accent-400">
                    {r.title}
                  </h3>
                  <p className="mt-1 font-mono text-xs uppercase tracking-wider text-ink-400 dark:text-ink-500">
                    {r.dept} · {r.location}
                  </p>
                </div>
                <span className="inline-flex shrink-0 items-center gap-2 rounded-full border border-ink-200 px-4 py-1.5 font-mono text-[0.62rem] uppercase tracking-wider text-ink-600 dark:border-ink-700 dark:text-ink-300">
                  {r.type}
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            ))}
          </div>
          <p className="mt-6 text-sm text-ink-500 dark:text-ink-400">
            Don't see your role? Email us at{" "}
            <a href="mailto:careers@layzox.com" className="font-semibold text-brand-600 dark:text-accent-400">
              careers@layzox.com
            </a>
          </p>
        </Reveal>
      </Container>

      <CtaBanner
        title={
          <>
            Let's build something{" "}
            <span className="text-gradient-blue">worth working on</span>
          </>
        }
        subtitle="The right people make all the difference — for businesses and for teams."
      />
    </>
  );
}
