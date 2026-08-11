import type { LucideIcon } from "lucide-react";
import {
  Search,
  Scale,
  Handshake,
  MousePointerClick,
  ShieldOff,
  MousePointerClick as Submit,
  Layers,
  Bot,
  BadgeDollarSign,
  Eye,
  ShieldCheck,
  BadgeCheck,
  MapPin,
  Gauge,
  Clock,
  ClipboardCheck,
} from "lucide-react";

export interface CompareRow {
  label: string;
  marketplace: string;
  layzox: string;
}

export const comparison: CompareRow[] = [
  { label: "Finding vendors", marketplace: "Customer searches vendors", layzox: "Customer submits one request" },
  { label: "Management", marketplace: "Customer compares vendors", layzox: "Layzox coordinates everything" },
  { label: "Selection", marketplace: "Customer negotiates & chooses", layzox: "Layzox selects the partner" },
  { label: "Pricing", marketplace: "Uncontrolled, variable pricing", layzox: "Layzox structures pricing" },
  { label: "Execution", marketplace: "Customer monitors execution", layzox: "Layzox coordinates execution" },
  { label: "Quality", marketplace: "Quality is on the customer", layzox: "Layzox checks quality" },
  { label: "Accountability", marketplace: "No single accountable party", layzox: "One accountable process" },
];

export const marketplacePain: { title: string; description: string; icon: LucideIcon }[] = [
  { title: "Endless searching", description: "Hunting vendors across directories, calls and referrals.", icon: Search },
  { title: "Bewildering comparisons", description: "Comparing apples to oranges across dozens of quotes.", icon: Scale },
  { title: "Weak negotiation", description: "You negotiate alone, with limited leverage and time.", icon: Handshake },
  { title: "You choose", description: "One wrong pick costs you money, time and trust.", icon: MousePointerClick },
  { title: "No accountability", description: "When it goes wrong, nobody answers.", icon: ShieldOff },
];

export const layzoxAdvantage: { title: string; description: string; icon: LucideIcon }[] = [
  { title: "One request", description: "Submit once. We coordinate the rest.", icon: Submit },
  { title: "Structured process", description: "Sourcing, scheduling, coordination and follow-up.", icon: Layers },
  { title: "We select the partner", description: "Matching to the most suitable service partner.", icon: Bot },
  { title: "Structured pricing", description: "Clear, approved quotations. No surprises.", icon: BadgeDollarSign },
  { title: "We coordinate progress", description: "Status updates and follow-up at every step.", icon: Eye },
  { title: "We check quality", description: "Completed work checked against the agreed scope.", icon: ShieldCheck },
];

export const partnerCriteria: { title: string; description: string; icon: LucideIcon }[] = [
  { title: "Area", description: "Local partners who can serve your area.", icon: MapPin },
  { title: "Capability", description: "Proven ability to deliver the service required.", icon: Gauge },
  { title: "Availability", description: "Capacity and responsiveness to take on new work.", icon: Clock },
  { title: "Experience", description: "Demonstrated experience in their trade.", icon: BadgeCheck },
  { title: "Track record", description: "Documented quality from completed work.", icon: ShieldCheck },
  { title: "Compliance", description: "Verification varies by service category.", icon: ClipboardCheck },
];

export const businessRules = [
  "Customers cannot browse vendors",
  "Customers cannot compare quotations",
  "Customers cannot contact vendors directly",
  "Customers cannot choose vendors",
  "Only Layzox assigns vendors",
  "Only Layzox controls pricing",
  "Only Layzox manages service quality",
  "Only Layzox communicates with customers",
];

export const historyItems: { title: string; description: string }[] = [
  { title: "One request", description: "You submit a single requirement." },
  { title: "Internal matching", description: "Layzox matches a suitable verified partner." },
  { title: "Managed execution", description: "Layzox schedules, coordinates and tracks." },
  { title: "Verified delivery", description: "Quality checked before payment is released." },
  { title: "Single relationship", description: "Layzox remains your only point of contact." },
];
