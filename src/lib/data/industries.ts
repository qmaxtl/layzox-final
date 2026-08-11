import type { LucideIcon } from "lucide-react";
import {
  Factory,
  HeartPulse,
  GraduationCap,
  Hotel,
  Building,
  Store,
  Warehouse,
  Construction,
  Landmark,
  Landmark as Gov,
  Users,
  LineChart,
} from "lucide-react";

export interface Industry {
  slug: string;
  name: string;
  icon: LucideIcon;
  description: string;
  services: string[];
}

export const industries: Industry[] = [
  {
    slug: "manufacturing",
    name: "Manufacturing",
    icon: Factory,
    description: "Keep production floors safe, clean and running with industrial-grade maintenance and compliance.",
    services: ["Facility Management", "Security Guards", "Fire Safety", "Industrial Painting", "Logistics"],
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    icon: HeartPulse,
    description: "Hospitals and clinics demand clinical-grade hygiene, compliance and zero downtime. Layzox delivers.",
    services: ["Housekeeping", "Deep Cleaning", "Pest Control", "Security Guards"],
  },
  {
    slug: "education",
    name: "Schools & Colleges",
    icon: GraduationCap,
    description: "Safe, hygienic and well-maintained campuses for students, staff and visitors.",
    services: ["Housekeeping", "Security Guards", "CCTV Installation", "Painting", "Facility Management"],
  },
  {
    slug: "hospitality",
    name: "Hotels & Restaurants",
    icon: Hotel,
    description: "Five-star standards for housekeeping, kitchen hygiene and guest-facing service excellence.",
    services: ["Housekeeping", "Pest Control", "Deep Cleaning", "Interior Design", "Event Management"],
  },
  {
    slug: "corporate",
    name: "Corporate Offices",
    icon: Building,
    description: "Premium workspaces with managed housekeeping, IT, interiors and employee-facing services.",
    services: ["Office Shifting", "Housekeeping", "IT Support", "Interior Design"],
  },
  {
    slug: "retail",
    name: "Retail Chains",
    icon: Store,
    description: "Consistent brand experience across every store with standardised maintenance and security.",
    services: ["Housekeeping", "Security Guards", "CCTV Installation", "Digital Marketing", "Branding"],
  },
  {
    slug: "warehousing",
    name: "Warehouses",
    icon: Warehouse,
    description: "24/7 operations with security, pest control, maintenance and logistics working in sync.",
    services: ["Security Guards", "Pest Control", "Logistics", "Fire Safety", "Civil Work"],
  },
  {
    slug: "construction",
    name: "Construction Companies",
    icon: Construction,
    description: "Site security, labour safety, equipment and temporary services for active project sites.",
    services: ["Security Guards", "Equipment Rental", "Civil Work", "Fire Safety", "Logistics"],
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    icon: Landmark,
    description: "Pre-possession cleaning, security, landscaping and handover support for every property.",
    services: ["Deep Cleaning", "Security Guards", "Painting", "Interior Design", "Facility Management"],
  },
  {
    slug: "government-contractors",
    name: "Government Contractors",
    icon: Gov,
    description: "Compliance-first service delivery with documentation, audits and statutory adherence.",
    services: ["Security Guards", "Housekeeping", "Civil Work", "Fire Safety"],
  },
  {
    slug: "msmes",
    name: "MSMEs",
    icon: Users,
    description: "Affordable, dependable services that let small businesses focus on growth, not operations.",
    services: ["Accounting", "GST Consulting", "Website Development", "IT Support", "Digital Marketing"],
  },
  {
    slug: "large-enterprises",
    name: "Large Enterprises",
    icon: LineChart,
    description: "Multi-site, multi-service programs with structured coordination and a single accountable partner.",
    services: ["Facility Management", "Security Guards", "IT Support", "Office Shifting", "Software Development"],
  },
];
