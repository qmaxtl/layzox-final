import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
} from "@/components/ui/SocialIcons";
import { nav, site } from "@/lib/site";

const socialIcons = {
  LinkedIn: LinkedinIcon,
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
  YouTube: YoutubeIcon,
};

function FooterLink({ to, children }: { to: string; children: React.ReactNode }) {
  const external = to.startsWith("http");
  if (external) {
    return (
      <a
        href={to}
        target="_blank"
        rel="noreferrer"
        className="group inline-flex items-center gap-1 text-sm text-slate-400 transition-colors hover:text-white"
      >
        {children}
        <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
      </a>
    );
  }
  return (
    <Link
      to={to}
      className="group inline-flex items-center gap-1 text-sm text-slate-400 transition-colors hover:text-white"
    >
      {children}
      <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
    </Link>
  );
}

function Column({ title, links }: { title: string; links: { label: string; to: string }[] }) {
  return (
    <div className="flex flex-col gap-3.5">
      <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
        {title}
      </p>
      {links.map((l) => (
        <FooterLink key={l.label} to={l.to}>
          {l.label}
        </FooterLink>
      ))}
    </div>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink-950 text-slate-300">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid bg-grid-fade opacity-40"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[60rem] -translate-x-1/2 rounded-full bg-brand-600/20 blur-[120px]"
      />

      <Container size="xl" className="relative pt-16 lg:pt-24">
        <div className="flex flex-col gap-4 pb-12 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-md">
            <Logo dark />
            <p className="mt-5 text-sm leading-relaxed text-slate-400">
              One requirement. We handle the rest. Layzox is a managed B2B services procurement
              platform   you submit a requirement once, and we coordinate sourcing, quotations and
              delivery through a single accountable process.
            </p>
            <div className="mt-6 flex items-center gap-2.5">
              {Object.entries(socialIcons).map(([label, Icon]) => (
                <a
                  key={label}
                  href={socialUrl(label)}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Layzox on ${label}`}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-800 text-slate-400 transition-all hover:-translate-y-0.5 hover:border-brand-500 hover:text-brand-400"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-10 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
            <Column title="Company" links={nav.footer.company} />
            <Column title="Services" links={nav.footer.services} />
            <Column title="Industries" links={nav.footer.industries} />
            <div className="flex flex-col gap-3.5">
              <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Contact
              </p>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white"
              >
                <Mail className="h-3.5 w-3.5 text-brand-400" />
                {site.email}
              </a>
              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white"
              >
                <Phone className="h-3.5 w-3.5 text-brand-400" />
                {site.phone}
              </a>
              <span className="inline-flex items-start gap-2 text-sm leading-snug text-slate-400">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-400" />
                {site.address}
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-slate-800/70 py-8 sm:flex-row sm:items-center">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Layzox Technologies Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {nav.footer.legal.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-xs text-slate-500 transition-colors hover:text-slate-200"
              >
                {l.label}
              </Link>
            ))}
            <span className="font-mono text-[0.65rem] uppercase tracking-widest text-slate-600">
              Made in India
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}

function socialUrl(label: string) {
  const map: Record<string, string> = {
    LinkedIn: "https://www.linkedin.com/company/layzox",
    Facebook: "https://www.facebook.com/layzox",
    Instagram: "https://www.instagram.com/layzox",
    YouTube: "https://www.youtube.com/@layzox",
  };
  return map[label] ?? "#";
}
