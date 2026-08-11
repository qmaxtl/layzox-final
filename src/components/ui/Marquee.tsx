import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface MarqueeProps {
  children: ReactNode[];
  className?: string;
  itemClassName?: string;
  reverse?: boolean;
}

export function Marquee({ children, className, itemClassName, reverse = false }: MarqueeProps) {
  const items = [...children, ...children];
  return (
    <div className={cn("group relative flex overflow-hidden", className)}>
      <div
        className="animate-marquee flex shrink-0 items-center gap-3 pr-3"
        style={reverse ? { animationDirection: "reverse" } : undefined}
      >
        {items.map((child, i) => (
          <div key={i} className={cn("shrink-0", itemClassName)} aria-hidden={i >= children.length}>
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}
