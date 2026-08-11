import { cn } from "@/lib/cn";
import { platformFeatures, type PlatformFeature } from "@/lib/data/features";

export function PlatformFeatures() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {platformFeatures.map((f, i) => (
        <PlatformFeatureCard key={f.title} feature={f} index={i} />
      ))}
    </div>
  );
}

function PlatformFeatureCard({ feature, index }: { feature: PlatformFeature; index: number }) {
  const Icon = feature.icon;
  const featured = index === 0;
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1",
        featured
          ? "border-brand-500/30 bg-gradient-to-br from-brand-600/10 to-accent-500/10 dark:border-brand-500/25"
          : "border-ink-200/70 bg-white hover:border-brand-500/30 hover:shadow-[0_20px_48px_-20px_rgb(37_99_235/0.3)] dark:border-ink-800 dark:bg-ink-900/50",
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-brand-600 to-accent-500 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-15"
      />
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-600/10 text-brand-600 transition-transform duration-300 group-hover:scale-110 dark:bg-brand-500/15 dark:text-accent-400">
        <Icon className="h-5 w-5" />
      </span>
      <h3 className="mt-4 font-display text-base font-semibold tracking-tight text-ink-900 dark:text-white">
        {feature.title}
      </h3>
      <p className="mt-1.5 text-sm leading-relaxed text-ink-500 dark:text-ink-400">
        {feature.description}
      </p>
    </div>
  );
}
