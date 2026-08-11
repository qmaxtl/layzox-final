import { ArrowRight, PhoneCall } from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { MagneticButton } from "@/components/ui/MagneticButton";

interface CtaBannerProps {
  title?: React.ReactNode;
  subtitle?: string;
}

export function CtaBanner({
  title = (
    <>
      Ready to simplify your <span className="text-gradient-blue">business services</span>?
    </>
  ),
  subtitle = "Post one requirement and Layzox coordinates the rest   sourcing, quotations and delivery through one accountable process.",
}: CtaBannerProps) {
  return (
    <section className="relative py-24 sm:py-28">
      <Container size="lg">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-ink-950 px-8 py-16 text-center sm:px-16 sm:py-20">
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <div className="absolute inset-0 bg-grid bg-grid-fade opacity-20" />
              <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-brand-600/30 blur-[100px]" />
            </div>
            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-3xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl">
                {title}
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
                {subtitle}
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <MagneticButton>
                  <Link
                    to="/post-requirement"
                    className="group inline-flex items-center gap-2.5 rounded-2xl bg-gradient-to-r from-brand-600 via-brand-500 to-accent-500 px-7 py-3.5 text-base font-semibold text-white shadow-[0_10px_40px_-10px_rgb(6_182_212/0.7)] transition-all hover:shadow-[0_14px_52px_-10px_rgb(6_182_212/0.85)]"
                  >
                    Post Requirement
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </MagneticButton>
                <MagneticButton>
                  <Link
                    to="/talk-to-expert"
                    className="inline-flex items-center gap-2.5 rounded-2xl border border-white/20 px-7 py-3.5 text-base font-semibold text-white transition-all hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/5"
                  >
                    <PhoneCall className="h-4 w-4" />
                    Talk to Expert
                  </Link>
                </MagneticButton>
              </div>
              <p className="mt-8 font-mono text-[0.65rem] uppercase tracking-[0.22em] text-slate-500">
                One requirement · We handle the rest
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
