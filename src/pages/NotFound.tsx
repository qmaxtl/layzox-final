import { ArrowLeft, Compass } from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function NotFound() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-white pt-24 dark:bg-ink-950">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid bg-grid-fade opacity-70" />
        <div className="absolute -top-32 left-1/2 h-96 w-[50rem] -translate-x-1/2 rounded-full bg-brand-600/10 blur-[110px]" />
      </div>
      <Container className="relative pb-16">
        <Reveal className="flex flex-col items-center text-center">
          <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600 to-accent-500 text-white shadow-glow">
            <Compass className="h-8 w-8" />
          </span>
          <p className="mt-8 font-mono text-xs uppercase tracking-[0.3em] text-brand-600 dark:text-accent-400">
            Error 404
          </p>
          <h1 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight text-ink-900 sm:text-6xl dark:text-white">
            This page got lost in procurement
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-ink-500 dark:text-ink-400">
            The page you're looking for doesn't exist. But your next service requirement does —
            let's get that sorted.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/"
              className="group inline-flex items-center gap-2.5 rounded-2xl bg-ink-900 px-7 py-3.5 text-base font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-ink-800 dark:bg-brand-600 dark:hover:bg-brand-500"
            >
              <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
              Back to home
            </Link>
            <Link
              to="/post-requirement"
              className="inline-flex items-center gap-2.5 rounded-2xl border border-ink-300 px-7 py-3.5 text-base font-semibold text-ink-900 transition-all hover:-translate-y-0.5 hover:border-ink-900 dark:border-ink-600 dark:text-white dark:hover:border-ink-300"
            >
              Post a requirement
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
