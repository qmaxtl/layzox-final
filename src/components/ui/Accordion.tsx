import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/cn";

interface AccordionItemProps {
  index: number;
  question: string;
  answer: string;
  open: boolean;
  onToggle: () => void;
}

function AccordionItem({ question, answer, open, onToggle, index }: AccordionItemProps) {
  return (
    <div
      className={cn(
        "group rounded-2xl border transition-all duration-300",
        open
          ? "border-brand-600/30 bg-white shadow-[0_8px_32px_-12px_rgb(37_99_235/0.25)] dark:border-brand-500/30 dark:bg-ink-900"
          : "border-ink-200 bg-white hover:border-ink-300 dark:border-ink-800 dark:bg-ink-900/40 dark:hover:border-ink-700",
      )}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="flex items-start gap-4">
          <span className="mt-0.5 font-mono text-xs font-medium text-brand-600 dark:text-accent-400">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="font-display text-base font-semibold tracking-tight text-ink-900 dark:text-ink-50">
            {question}
          </span>
        </span>
        <span
          className={cn(
            "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300",
            open
              ? "rotate-45 border-brand-600 bg-brand-600 text-white"
              : "border-ink-300 text-ink-500 group-hover:border-brand-500 group-hover:text-brand-600 dark:border-ink-600 dark:text-ink-400",
          )}
        >
          <Plus className="h-4 w-4" />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="px-6 pb-6 pl-[3.4rem] text-[0.95rem] leading-relaxed text-ink-500 dark:text-ink-400">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface AccordionProps {
  items: { question: string; answer: string }[];
  className?: string;
}

export function Accordion({ items, className }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <div className={cn("flex flex-col gap-3", className)}>
      {items.map((item, i) => (
        <AccordionItem
          key={item.question}
          index={i}
          question={item.question}
          answer={item.answer}
          open={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
        />
      ))}
    </div>
  );
}
