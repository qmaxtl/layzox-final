import { ArrowUpRight, Clock } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { AnimatePresence, motion } from "framer-motion";
import { EASE } from "@/components/ui/Reveal";
import { CtaBanner } from "@/components/home/CtaBanner";
import { posts, categories } from "@/lib/data/blog";
import { cn } from "@/lib/cn";

export function Resources() {
  const [params, setParams] = useSearchParams();
  const active = params.get("category") ?? "All";

  const filtered = active === "All" ? posts : posts.filter((p) => p.category === active);

  function setCategory(cat: string) {
    if (cat === "All") setParams({});
    else setParams({ category: cat });
  }

  return (
    <>
      <PageHero
        eyebrow="Resources"
        title={
          <>
            Insights that make your{" "}
            <span className="text-gradient">business smarter</span>
          </>
        }
        subtitle="Practical playbooks on procurement, operations and vendor management   written by the Layzox team for business leaders."
      />

      <Container className="pb-24">
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
          {["All", ...categories].map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCategory(c)}
              className={cn(
                "cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition-all duration-300",
                active === c
                  ? "bg-ink-900 text-white dark:bg-brand-600"
                  : "border border-ink-200 bg-white text-ink-600 hover:border-ink-900 hover:text-ink-900 dark:border-ink-700 dark:bg-ink-900/50 dark:text-ink-300 dark:hover:border-ink-400 dark:hover:text-white",
              )}
            >
              {c}
            </button>
          ))}
        </div>

        <AnimatePresence mode="popLayout">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
          >
            {filtered.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink-200/70 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/30 hover:shadow-[0_24px_56px_-24px_rgb(37_99_235/0.35)] dark:border-ink-800 dark:bg-ink-900/50 dark:hover:border-brand-500/25"
              >
                <div className="relative h-44 overflow-hidden">
                  <div className={cn("absolute inset-0 bg-gradient-to-br transition-transform duration-500 group-hover:scale-105", post.gradient)} />
                  <div className="absolute inset-0 bg-grid opacity-30" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-white/15 px-3 py-1 font-mono text-[0.6rem] uppercase tracking-wider text-white backdrop-blur-sm">
                    {post.category}
                  </span>
                  <ArrowUpRight className="absolute right-4 top-4 h-5 w-5 text-white opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="font-display text-lg font-semibold leading-snug tracking-tight text-ink-900 transition-colors group-hover:text-brand-600 dark:text-white dark:group-hover:text-accent-400">
                    {post.title}
                  </h2>
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
            ))}
          </motion.div>
        </AnimatePresence>
      </Container>

      <CtaBanner />
    </>
  );
}
