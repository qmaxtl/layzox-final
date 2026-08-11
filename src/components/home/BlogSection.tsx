import { ArrowRight, ArrowUpRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "@/components/ui/Container";
import { Stagger, Item, Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { posts } from "@/lib/data/blog";
import { cn } from "@/lib/cn";

export function BlogSection() {
  const featured = posts.slice(0, 3);

  return (
    <section className="relative overflow-hidden py-24 sm:py-32" id="resources">
      <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-brand-600/[0.07] blur-[120px]" />
      <Container className="relative">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            align="left"
            eyebrow="Resources"
            title={
              <>
                Insights for smarter{" "}
                <span className="text-gradient">procurement</span>
              </>
            }
            subtitle="Practical playbooks on procurement, operations and vendor management — written for business leaders."
          />
          <Reveal delay={0.1}>
            <Link
              to="/resources"
              className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-brand-600 dark:text-accent-400"
            >
              View all insights
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        <Stagger className="mt-14 grid gap-5 md:grid-cols-3" gap={0.08}>
          {featured.map((post) => (
            <Item key={post.slug}>
              <Link
                to={`/blog/${post.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink-200/70 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/30 hover:shadow-[0_24px_56px_-24px_rgb(37_99_235/0.35)] dark:border-ink-800 dark:bg-ink-900/50 dark:hover:border-brand-500/25"
              >
                <div className="relative h-40 overflow-hidden">
                  <div
                    className={cn(
                      "absolute inset-0 bg-gradient-to-br transition-transform duration-500 group-hover:scale-105",
                      post.gradient,
                    )}
                  />
                  <div className="absolute inset-0 bg-grid bg-grid-fade opacity-30" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-white/15 px-3 py-1 font-mono text-[0.6rem] uppercase tracking-wider text-white backdrop-blur-sm">
                    {post.category}
                  </span>
                  <ArrowUpRight className="absolute right-4 top-4 h-5 w-5 text-white opacity-0 transition-all duration-300 group-hover:opacity-100" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-lg font-semibold leading-snug tracking-tight text-ink-900 transition-colors group-hover:text-brand-600 dark:text-white dark:group-hover:text-accent-400">
                    {post.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500 dark:text-ink-400">
                    {post.excerpt}
                  </p>
                  <div className="mt-5 flex items-center gap-3 text-xs text-ink-400 dark:text-ink-500">
                    <span>{new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</span>
                    <span className="h-1 w-1 rounded-full bg-ink-300 dark:bg-ink-600" />
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </Link>
            </Item>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
