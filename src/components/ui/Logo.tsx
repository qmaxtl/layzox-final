import { cn } from "@/lib/cn";

interface LogoProps {
  className?: string;
  markOnly?: boolean;
  dark?: boolean;
  size?: number;
}

export function Logo({ className, markOnly = false, dark = false, size = 34 }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5 select-none", className)}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="lz-grad" x1="4" y1="4" x2="36" y2="36" gradientUnits="userSpaceOnUse">
            <stop stopColor="#2563EB" />
            <stop offset="0.55" stopColor="#3B82F6" />
            <stop offset="1" stopColor="#06B6D4" />
          </linearGradient>
        </defs>
        <rect
          x="1"
          y="1"
          width="38"
          height="38"
          rx="11"
          fill="url(#lz-grad)"
          fillOpacity="0.12"
          stroke="url(#lz-grad)"
          strokeWidth="1.5"
        />
        <path
          d="M10 12a2.5 2.5 0 0 1 2.5-2.5h15A2.5 2.5 0 0 1 30 12v16a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 10 28V12Z"
          stroke="url(#lz-grad)"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <circle cx="20" cy="20" r="4.2" fill="url(#lz-grad)" />
        <circle cx="20" cy="20" r="1.6" fill="#fff" />
        <circle cx="13.5" cy="26.5" r="2.4" fill="#fff" stroke="url(#lz-grad)" strokeWidth="1.6" />
        <circle cx="26.5" cy="13.5" r="2.4" fill="#fff" stroke="url(#lz-grad)" strokeWidth="1.6" />
        <path
          d="M15 24.5 20 20l6.5-6.5"
          stroke="url(#lz-grad)"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
      {!markOnly && (
        <span
          className={cn(
            "font-display text-xl font-bold tracking-[0.08em]",
            dark ? "text-white" : "text-ink-900 dark:text-white",
          )}
        >
          LAYZ<span className="text-gradient">OX</span>
        </span>
      )}
    </span>
  );
}
