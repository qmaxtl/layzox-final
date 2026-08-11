import type { LucideIcon } from "lucide-react";
import {
  ServerOff,
  CircleAlert,
  Wallet,
  SlidersHorizontal,
  Clock,
  ShieldCheck,
  BadgeCheck,
  MapPin,
  Gauge,
  Bot,
  FileText,
  LayoutDashboard,
  BarChart3,
  Database,
  Bell,
  CreditCard,
  Headphones,
  KeyRound,
  Users2,
  ClipboardCheck,
} from "lucide-react";

export interface Problem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Solution {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const problems: Problem[] = [
  {
    title: "Too many vendors",
    description: "Searching, vetting and managing dozens of unverified vendors for every service category.",
    icon: ServerOff,
  },
  {
    title: "No accountability",
    description: "Vendors vanish after payment. Nobody owns the outcome or answers for failures.",
    icon: CircleAlert,
  },
  {
    title: "Price confusion",
    description: "Quotes differ wildly, hidden charges appear later, and invoices rarely match the work.",
    icon: Wallet,
  },
  {
    title: "Quality inconsistency",
    description: "Work quality varies job to job with no standards, no checks and no one to enforce them.",
    icon: SlidersHorizontal,
  },
  {
    title: "Slow process",
    description: "Procurement cycles take weeks of calls, follow-ups and coordination across departments.",
    icon: Clock,
  },
];

export interface SolutionItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const solutions: SolutionItem[] = [
  {
    title: "One accountable process",
    description: "Layzox is the single coordination point for the business services your operations depend on.",
    icon: ShieldCheck,
  },
  {
    title: "Structured accountability",
    description: "We coordinate the process and stay answerable for it from requirement to completion.",
    icon: ClipboardCheck,
  },
  {
    title: "Transparent pricing",
    description: "Quotations are structured, shared for your review and locked on approval.",
    icon: FileText,
  },
  {
    title: "Quality & documentation",
    description: "Completed work is checked and documented against the agreed scope before payment.",
    icon: BadgeCheck,
  },
  {
    title: "Coordinated delivery",
    description: "A Layzox team coordinates sourcing, scheduling and follow-up for you.",
    icon: Gauge,
  },
];

export interface PlatformFeature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const platformFeatures: PlatformFeature[] = [
  { title: "Managed Sourcing", description: "Layzox coordinates sourcing for every requirement.", icon: Bot },
  { title: "Partner Verification", description: "Verification requirements vary by service category.", icon: BadgeCheck },
  { title: "Area-wise Allocation", description: "Local, area-based allocation for better fit and response.", icon: MapPin },
  { title: "Quality Tracking", description: "Completed work is checked against the agreed scope.", icon: Gauge },
  { title: "Structured Matching", description: "Matching by location, capability, availability and history.", icon: Bot },
  { title: "Official Quotation", description: "Professionally structured quotations that you review and approve.", icon: FileText },
  { title: "Requirement Tracking", description: "Visibility into every active requirement and job.", icon: LayoutDashboard },
  { title: "Customer Records", description: "A private record of your requirements, jobs and invoices.", icon: LayoutDashboard },
  { title: "Vendor Records", description: "Partners manage schedules, jobs and compliance in one place.", icon: Users2 },
  { title: "Enterprise Coordination", description: "Multi-site procurement coordination for large organisations.", icon: LayoutDashboard },
  { title: "Admin Control", description: "Control over assignments, pricing and approvals.", icon: KeyRound },
  { title: "Analytics", description: "Service spend and quality analytics that inform decisions.", icon: BarChart3 },
  { title: "Reports", description: "Downloadable reports for management and audit purposes.", icon: BarChart3 },
  { title: "CRM", description: "Complete customer and requirement relationship management.", icon: Database },
  { title: "Notifications", description: "Status updates at every step — submitted to completed.", icon: Bell },
  { title: "GST Invoice", description: "Compliant GST invoices generated for every order.", icon: FileText },
  { title: "Payment Management", description: "Payments coordinated and released after quality verification.", icon: CreditCard },
  { title: "Support Center", description: "Dedicated Layzox support for every customer and vendor query.", icon: Headphones },
  { title: "Role Based Access", description: "Granular access control for customers, vendors and admins.", icon: KeyRound },
];

export interface EnterpriseFeature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const enterpriseFeatures: EnterpriseFeature[] = [
  { title: "Vendor Approval", description: "Centralised approval workflow for every vendor on the platform.", icon: ClipboardCheck },
  { title: "Vendor Verification", description: "Verification tailored to the service category with audit trails.", icon: BadgeCheck },
  { title: "Area Management", description: "Manage service areas, zones and coverage with ease.", icon: MapPin },
  { title: "Service Zone Mapping", description: "Map services to zones for structured local execution.", icon: MapPin },
  { title: "Vendor Ranking", description: "Rank partners by quality, performance and compliance.", icon: Gauge },
  { title: "Lead Assignment", description: "Route every incoming requirement to the right internal queue.", icon: Bot },
  { title: "Order Management", description: "Full lifecycle control of orders from quote to completion.", icon: LayoutDashboard },
  { title: "Pricing Management", description: "Control pricing rules, approvals and margin policies centrally.", icon: Wallet },
  { title: "Quotation Generator", description: "Create official, professional quotations for review.", icon: FileText },
  { title: "Customer Management", description: "A 360° view of every customer, site and requirement.", icon: Users2 },
  { title: "Vendor Management", description: "Onboard, rank and manage your vendor network centrally.", icon: ServerOff },
  { title: "Employee Management", description: "Manage internal staff, roles, zones and permissions.", icon: KeyRound },
  { title: "Reports", description: "Custom reports for operations, finance and leadership.", icon: BarChart3 },
  { title: "Analytics", description: "Real-time dashboards across every business metric.", icon: BarChart3 },
  { title: "Support Tickets", description: "Track every customer and vendor query to resolution.", icon: Headphones },
  { title: "Audit Logs", description: "Immutable logs of every action across the platform.", icon: Database },
];
