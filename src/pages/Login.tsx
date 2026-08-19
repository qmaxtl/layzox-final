import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Eye, EyeOff, Lock, Mail } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Logo } from "@/components/ui/Logo";
import { useAuth } from "@/lib/auth";
import { EASE } from "@/components/ui/Reveal";

export function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as { from?: { pathname?: string } } | null)?.from?.pathname ?? "/crm";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    if (!email.trim() || !password) {
      setError("Please enter your email and password.");
      return;
    }
    setLoading(true);
    try {
      await login(email.trim(), password);
      navigate(from, { replace: true });
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: EASE, delay: i * 0.08 },
    }),
  };

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-ink-950 px-5 py-10">
      {/* Background */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid bg-grid-fade opacity-25" />
        <div className="absolute -top-32 left-1/2 h-[30rem] w-[54rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-brand-600/25 via-accent-500/12 to-transparent blur-[110px]" />
        <div className="absolute -bottom-32 -right-24 h-96 w-96 rounded-full bg-accent-500/15 blur-[110px]" />
      </div>

      {/* Back to site */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0}
        className="relative mb-8 w-full max-w-md"
      >
        <Link
          to="/"
          className="group inline-flex items-center gap-1.5 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-slate-400 transition-colors hover:text-white"
        >
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          Back to layzox.com
        </Link>
      </motion.div>

      {/* Card */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.1}
        className="relative w-full max-w-md"
      >
        <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-8 shadow-[0_40px_100px_-40px_rgb(6_182_212/0.35)] backdrop-blur-xl sm:p-10">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-brand-600/20 blur-[80px]"
          />

          <div className="relative">
            <Logo size={44} dark className="[&>span]:text-2xl" />

            <h1 className="mt-8 font-display text-3xl font-semibold tracking-tight text-white">
              Welcome back
            </h1>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              Sign in to the Layzox operations console.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4">
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block font-mono text-[0.62rem] uppercase tracking-[0.18em] text-slate-400"
                >
                  Email
                </label>
                <div className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 px-3.5 transition-colors focus-within:border-brand-500/50">
                  <Mail className="h-4 w-4 shrink-0 text-slate-500" />
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="w-full bg-transparent py-3 text-sm text-white outline-none placeholder:text-slate-500"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="mb-1.5 block font-mono text-[0.62rem] uppercase tracking-[0.18em] text-slate-400"
                >
                  Password
                </label>
                <div className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 px-3.5 transition-colors focus-within:border-brand-500/50">
                  <Lock className="h-4 w-4 shrink-0 text-slate-500" />
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢"
                    className="w-full bg-transparent py-3 text-sm text-white outline-none placeholder:text-slate-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((s) => !s)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    className="cursor-pointer text-slate-500 transition-colors hover:text-white"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {error && (
                <p className="rounded-xl border border-red-500/20 bg-red-500/10 px-3.5 py-2.5 text-xs text-red-300">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="group mt-2 inline-flex cursor-pointer items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-brand-600 via-brand-500 to-accent-500 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_36px_-10px_rgb(6_182_212/0.7)] transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_48px_-10px_rgb(6_182_212/0.85)] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Signing inâ€¦" : "Sign in"}
                {!loading && (
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                )}
              </button>
            </form>


          </div>
        </div>
      </motion.div>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.2}
        className="relative mt-8 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-slate-600"
      >
        Layzox Â· Operations Console
      </motion.p>
    </div>
  );
}
