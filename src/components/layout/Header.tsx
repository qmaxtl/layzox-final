import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronDown, Menu, Phone, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Logo } from "@/components/ui/Logo";
import { nav, site } from "@/lib/site";
import { cn } from "@/lib/cn";
import { ThemeToggle } from "@/components/layout/ThemeToggle";

const inlineLinks = ["/services", "/how-it-works", "/industries", "/why-layzox", "/about"];

const moreLinks = [
  { label: "For Businesses", to: "/for-businesses" },
  { label: "Become a Partner", to: "/become-a-partner" },
  { label: "Resources", to: "/resources" },
  { label: "Contact", to: "/contact" },
  { label: "Login / CRM", to: "/login" },
];

function isActive(path: string, to: string) {
  if (to === "/") return path === "/";
  return path === to || path.startsWith(`${to}/`);
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMoreOpen(false);
  }, [path]);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setMoreOpen(false);
      }
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "transition-all duration-500",
          scrolled || mobileOpen
            ? "glass border-b border-ink-200/60 shadow-[0_8px_30px_-16px_rgb(15_23_42/0.15)] dark:border-ink-800/60"
            : "border-b border-transparent",
        )}
      >
        <div className="mx-auto flex h-[4.5rem] w-full max-w-[90rem] items-center justify-between gap-4 px-5 sm:px-8">
          <Link to="/" aria-label="Layzox — Home" className="shrink-0">
            <Logo size={42} className="[&>span]:text-2xl" />
          </Link>

          <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
            {inlineLinks.map((to) => {
              const item = nav.primary.find((n) => n.to === to);
              if (!item) return null;
              const active = isActive(path, to);
              return (
                <Link
                  key={to}
                  to={to}
                  className={cn(
                    "relative rounded-lg px-3 py-2 text-[0.92rem] font-medium tracking-tight transition-colors",
                    active
                      ? "text-brand-600 dark:text-accent-400"
                      : "text-ink-700 hover:text-ink-950 dark:text-ink-300 dark:hover:text-white",
                  )}
                >
                  {item.label}
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-brand-600 to-accent-500"
                    />
                  )}
                </Link>
              );
            })}

            <div className="relative" ref={moreRef}>
              <button
                type="button"
                onClick={() => setMoreOpen((o) => !o)}
                aria-expanded={moreOpen}
                className={cn(
                  "inline-flex cursor-pointer items-center gap-1 rounded-lg px-3 py-2 text-[0.92rem] font-medium tracking-tight transition-colors",
                  moreLinks.some((l) => isActive(path, l.to))
                    ? "text-brand-600 dark:text-accent-400"
                    : "text-ink-700 hover:text-ink-950 dark:text-ink-300 dark:hover:text-white",
                )}
              >
                More
                <ChevronDown
                  className={cn("h-4 w-4 transition-transform duration-300", moreOpen && "rotate-180")}
                />
              </button>
              <AnimatePresence>
                {moreOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute left-0 top-full mt-2 w-56 overflow-hidden rounded-2xl border border-ink-200 bg-white p-2 shadow-[0_24px_60px_-20px_rgb(15_23_42/0.3)] dark:border-ink-700 dark:bg-ink-900"
                  >
                    {moreLinks.map((l) => {
                      const active = isActive(path, l.to);
                      return (
                        <Link
                          key={l.to}
                          to={l.to}
                          className={cn(
                            "flex items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-medium transition-colors",
                            active
                              ? "bg-brand-600/10 text-brand-600 dark:bg-brand-500/10 dark:text-accent-400"
                              : "text-ink-700 hover:bg-ink-50 dark:text-ink-200 dark:hover:bg-ink-800",
                          )}
                        >
                          {l.label}
                          <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                        </Link>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a
              href="/talk-to-expert"
              className="hidden items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium text-ink-700 transition-colors hover:bg-ink-900/5 md:inline-flex dark:text-ink-200 dark:hover:bg-white/5"
            >
              <Phone className="h-4 w-4 text-brand-600 dark:text-accent-400" />
              Talk to Expert
            </a>
            <Link
              to="/post-requirement"
              className="hidden items-center gap-2 rounded-xl bg-ink-900 px-4 py-2 text-sm font-semibold text-white shadow-[0_6px_20px_-6px_rgb(15_23_42/0.5)] transition-all hover:-translate-y-0.5 hover:bg-ink-800 sm:inline-flex dark:bg-brand-600 dark:hover:bg-brand-500"
            >
              Post Requirement
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-ink-200 text-ink-700 transition-colors hover:border-ink-400 lg:hidden dark:border-ink-700 dark:text-ink-200"
            >
              {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-[4.5rem] z-40 overflow-y-auto bg-white/95 backdrop-blur-xl lg:hidden dark:bg-ink-950/95"
          >
            <div className="flex flex-col gap-1 px-5 pb-10 pt-4">
              {[...nav.primary, ...moreLinks].map((item, i) => {
                const active = isActive(path, item.to);
                return (
                  <motion.div
                    key={item.to}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      to={item.to}
                      className={cn(
                        "flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-medium transition-colors",
                        active
                          ? "bg-brand-600/10 text-brand-600 dark:bg-brand-500/10 dark:text-accent-400"
                          : "text-ink-800 hover:bg-ink-50 dark:text-ink-100 dark:hover:bg-ink-900",
                      )}
                    >
                      {item.label}
                      <ArrowUpRight className="h-4 w-4 opacity-40" />
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: [...nav.primary, ...moreLinks].length * 0.04, duration: 0.35 }}
                className="mt-4 flex flex-col gap-3 px-4"
              >
                <Link
                  to="/post-requirement"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-ink-900 px-5 py-3.5 text-sm font-semibold text-white dark:bg-brand-600"
                >
                  Post Requirement
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/talk-to-expert"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-ink-300 px-5 py-3.5 text-sm font-semibold text-ink-900 dark:border-ink-600 dark:text-white"
                >
                  <Phone className="h-4 w-4" />
                  Talk to Expert
                </Link>
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="pt-2 text-center font-mono text-xs text-ink-400 dark:text-ink-500"
                >
                  {site.phone}
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
