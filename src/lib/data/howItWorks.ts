import type { LucideIcon } from "lucide-react";
import { FileText, ClipboardCheck, Search, FileCheck, Wrench, ShieldCheck } from "lucide-react";

export interface Step {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const steps: Step[] = [
  {
    number: "01",
    title: "Tell us what you need",
    description: "Submit a single requirement with the service, location and scope of work.",
    icon: FileText,
  },
  {
    number: "02",
    title: "We understand the requirement",
    description: "A Layzox specialist reviews the scope and clarifies what your business needs.",
    icon: ClipboardCheck,
  },
  {
    number: "03",
    title: "Suitable service partners are sourced",
    description: "We identify partners who match the service, area and requirements.",
    icon: Search,
  },
  {
    number: "04",
    title: "Relevant quotations are coordinated",
    description: "Quotations are gathered, structured and shared with you for review.",
    icon: FileCheck,
  },
  {
    number: "05",
    title: "The selected partner handles execution",
    description: "The chosen partner delivers the service to the agreed scope and schedule.",
    icon: Wrench,
  },
  {
    number: "06",
    title: "Layzox helps coordinate through completion",
    description: "We help coordinate follow-up, documentation and resolution until the work is complete.",
    icon: ShieldCheck,
  },
];
