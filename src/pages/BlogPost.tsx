import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { CtaBanner } from "@/components/home/CtaBanner";
import { getPost, posts } from "@/lib/data/blog";
import { cn } from "@/lib/cn";

export function BlogPost() {
  const { slug } = useParams();
  const post = slug ? getPost(slug) : undefined;

  if (!post) return <Navigate to="/resources" replace />;

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <article className="pb-20 pt-32 sm:pt-40">
        {/* Cover */}
        <div className="relative mx-auto mb-12 h-56 max-w-5xl overflow-hidden rounded-3xl px-5 sm:h-72">
          <div className={cn("absolute inset-0 bg-gradient-to-br", post.gradient)} />
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="absolute inset-0 flex items-end px-8 pb-8 sm:px-12 sm:pb-10">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-white/20 px-3.5 py-1.5 font-mono text-[0.65rem] uppercase tracking-wider text-white backdrop-blur-sm">
                {post.category}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3.5 py-1.5 font-mono text-[0.65rem] uppercase tracking-wider text-white backdrop-blur-sm">
                <Clock className="h-3 w-3" />
                {post.readTime}
              </span>
            </div>
          </div>
        </div>

        <Container size="sm">
          <Reveal>
            <Link
              to="/resources"
              className="group inline-flex items-center gap-2 text-sm font-medium text-ink-500 transition-colors hover:text-brand-600 dark:text-ink-400 dark:hover:text-accent-400"
            >
              <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
              All resources
            </Link>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-6 text-3xl font-semibold leading-tight tracking-tight text-ink-900 sm:text-5xl dark:text-white">
              {post.title}
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-6 flex items-center gap-4 border-b border-ink-200/70 pb-8 dark:border-ink-800">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-brand-600 to-accent-500 font-display text-sm font-semibold text-white">
                {post.author[0]}
              </span>
              <div>
                <p className="font-display text-sm font-semibold text-ink-900 dark:text-white">
                  {post.author}
                </p>
                <p className="text-xs text-ink-500 dark:text-ink-400">
                  {post.authorRole} ·{" "}
                  {new Date(post.date).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-8 font-display text-lg font-medium leading-relaxed text-ink-700 sm:text-xl dark:text-ink-200">
              {post.excerpt}
            </p>
          </Reveal>

          <div className="mt-8 flex flex-col gap-10">
            {post.content.map((section, i) => (
              <Reveal key={i} delay={0.05}>
                <div>
                  <h2 className="font-display text-2xl font-semibold tracking-tight text-ink-900 dark:text-white">
                    {section.heading}
                  </h2>
                  <p className="mt-4 text-base leading-[1.8] text-ink-600 dark:text-ink-300">
                    {section.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-14">
            <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-ink-200/70 bg-surface-soft px-6 py-5 dark:border-ink-800 dark:bg-ink-900/40">
              <div>
                <p className="font-display text-sm font-semibold text-ink-900 dark:text-white">
                  Need a managed partner for this?
                </p>
                <p className="text-xs text-ink-500 dark:text-ink-400">
                  Post a requirement and let Layzox handle the rest.
                </p>
              </div>
              <Link
                to="/post-requirement"
                className="group inline-flex items-center gap-2 rounded-xl bg-ink-900 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-ink-800 dark:bg-brand-600 dark:hover:bg-brand-500"
              >
                Post requirement
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </Container>
      </article>

      <section className="border-t border-ink-200/70 bg-surface-soft py-20 dark:border-ink-800 dark:bg-ink-900/30">
        <Container>
          <div className="mb-10 flex items-end justify-between">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-ink-900 sm:text-3xl dark:text-white">
              Keep reading
            </h2>
            <Link
              to="/resources"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-brand-600 dark:text-accent-400"
            >
              View all
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {related.map((p) => (
              <Link
                key={p.slug}
                to={`/blog/${p.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink-200/70 bg-white transition-all hover:-translate-y-1 hover:border-brand-500/30 hover:shadow-lift dark:border-ink-800 dark:bg-ink-900/50"
              >
                <div className="relative h-32 overflow-hidden">
                  <div className={cn("absolute inset-0 bg-gradient-to-br transition-transform duration-500 group-hover:scale-105", p.gradient)} />
                  <div className="absolute inset-0 bg-grid opacity-30" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <span className="font-mono text-[0.6rem] uppercase tracking-wider text-brand-600 dark:text-accent-400">
                    {p.category}
                  </span>
                  <h3 className="mt-2 flex-1 font-display text-base font-semibold leading-snug text-ink-900 transition-colors group-hover:text-brand-600 dark:text-white dark:group-hover:text-accent-400">
                    {p.title}
                  </h3>
                  <span className="mt-3 text-xs text-ink-400 dark:text-ink-500">
                    {p.readTime}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
