export interface Requirement {
  id: string;
  customer: string;
  company: string;
  service: string;
  city: string;
  value: number;
  status: "New" | "Quoted" | "In Progress" | "Completed";
  date: string;
}

export interface Customer {
  id: string;
  name: string;
  company: string;
  industry: string;
  city: string;
  orders: number;
  value: number;
  since: string;
}

export interface Vendor {
  id: string;
  name: string;
  category: string;
  city: string;
  quality: number;
  jobs: number;
  status: "Active" | "Onboarding" | "Paused";
}

export interface Order {
  id: string;
  requirement: string;
  customer: string;
  vendor: string;
  service: string;
  value: number;
  status: "In Progress" | "Completed" | "Invoiced";
  date: string;
}

export interface Invoice {
  number: string;
  customer: string;
  amount: number;
  status: "Paid" | "Pending";
  due: string;
}

export const crmStats = [
  { label: "Open Requirements", value: 24, delta: "+6 this week", icon: "FileText" },
  { label: "Active Vendors", value: 32, delta: "+3 this month", icon: "ShieldCheck" },
  { label: "Monthly Revenue", value: 1480000, delta: "+18% vs last month", icon: "IndianRupee", currency: true },
  { label: "Avg Quality Score", value: 4.6, delta: "+0.2 this quarter", icon: "Star", decimals: 1 },
];

export const revenueByMonth = [
  { month: "Jan", value: 6.2 },
  { month: "Feb", value: 7.1 },
  { month: "Mar", value: 8.0 },
  { month: "Apr", value: 7.6 },
  { month: "May", value: 9.4 },
  { month: "Jun", value: 10.2 },
  { month: "Jul", value: 11.5 },
];

export const recentActivity = [
  { time: "2h ago", text: "Requirement #LZX-2481 approved   Facility Management", tone: "brand" },
  { time: "5h ago", text: "Vendor assigned to #LZX-2478   Pest Control, Ranchi", tone: "accent" },
  { time: "Yesterday", text: "Invoice INV-1042 marked paid   ₹48,500", tone: "success" },
  { time: "Yesterday", text: "New requirement #LZX-2485   Housekeeping, 12 sites", tone: "brand" },
  { time: "2 days ago", text: "Vendor onboarding complete   Sunrise Facility Services", tone: "accent" },
];

export const requirements: Requirement[] = [
  { id: "LZX-2485", customer: "Rohit Verma", company: "Nexa Industries", service: "Housekeeping", city: "Ranchi", value: 124000, status: "New", date: "2026-08-03" },
  { id: "LZX-2484", customer: "Anita Sinha", company: "City Hospital", service: "Security Guards", city: "Bokaro", value: 186000, status: "Quoted", date: "2026-08-02" },
  { id: "LZX-2483", customer: "Karan Mehta", company: "Sunrise Retail", service: "Facility Management", city: "Ranchi", value: 342000, status: "In Progress", date: "2026-07-30" },
  { id: "LZX-2482", customer: "Priya Sharma", company: "GreenLeaf Hotels", service: "Deep Cleaning", city: "Jamshedpur", value: 96500, status: "Quoted", date: "2026-07-29" },
  { id: "LZX-2481", customer: "Vikram Rao", company: "Sparta Logistics", service: "Facility Management", city: "Ranchi", value: 48500, status: "Completed", date: "2026-07-26" },
  { id: "LZX-2480", customer: "Neha Gupta", company: "BlueBird School", service: "Pest Control", city: "Ranchi", value: 28400, status: "In Progress", date: "2026-07-24" },
  { id: "LZX-2479", customer: "Arjun Patel", company: "Titan Fabrics", service: "Electrician", city: "Dhanbad", value: 62000, status: "New", date: "2026-07-22" },
  { id: "LZX-2478", customer: "Sneha Kaur", company: "Urban Nest", service: "Pest Control", city: "Ranchi", value: 31500, status: "Completed", date: "2026-07-20" },
];

export const customers: Customer[] = [
  { id: "C-001", name: "Rohit Verma", company: "Nexa Industries", industry: "Manufacturing", city: "Ranchi", orders: 6, value: 412000, since: "Jan 2026" },
  { id: "C-002", name: "Anita Sinha", company: "City Hospital", industry: "Healthcare", city: "Bokaro", orders: 4, value: 338000, since: "Feb 2026" },
  { id: "C-003", name: "Karan Mehta", company: "Sunrise Retail", industry: "Retail", city: "Ranchi", orders: 3, value: 296000, since: "Feb 2026" },
  { id: "C-004", name: "Priya Sharma", company: "GreenLeaf Hotels", industry: "Hospitality", city: "Jamshedpur", orders: 2, value: 185000, since: "Mar 2026" },
  { id: "C-005", name: "Vikram Rao", company: "Sparta Logistics", industry: "Logistics", city: "Ranchi", orders: 5, value: 273000, since: "Apr 2026" },
  { id: "C-006", name: "Neha Gupta", company: "BlueBird School", industry: "Education", city: "Ranchi", orders: 3, value: 98400, since: "May 2026" },
];

export const vendors: Vendor[] = [
  { id: "V-021", name: "Sunrise Facility Services", category: "Facility & Maintenance", city: "Ranchi", quality: 4.8, jobs: 42, status: "Active" },
  { id: "V-022", name: "SteelGuard Security", category: "Safety & Security", city: "Bokaro", quality: 4.6, jobs: 28, status: "Active" },
  { id: "V-023", name: "CleanEdge Solutions", category: "Facility & Maintenance", city: "Ranchi", quality: 4.5, jobs: 35, status: "Active" },
  { id: "V-024", name: "PestNoMore", category: "Facility & Maintenance", city: "Ranchi", quality: 4.7, jobs: 19, status: "Active" },
  { id: "V-025", name: "PowerFix Electricals", category: "Electrical, Plumbing & HVAC", city: "Dhanbad", quality: 4.4, jobs: 15, status: "Active" },
  { id: "V-026", name: "Reliable FM Group", category: "Facility & Maintenance", city: "Jamshedpur", quality: 4.3, jobs: 8, status: "Onboarding" },
  { id: "V-027", name: "GreenLine Pest Control", category: "Facility & Maintenance", city: "Ranchi", quality: 4.1, jobs: 6, status: "Paused" },
];

export const orders: Order[] = [
  { id: "ORD-1102", requirement: "LZX-2483", customer: "Sunrise Retail", vendor: "Sunrise Facility Services", service: "Facility Management", value: 342000, status: "In Progress", date: "2026-07-30" },
  { id: "ORD-1101", requirement: "LZX-2480", customer: "BlueBird School", vendor: "PestNoMore", service: "Pest Control", value: 28400, status: "In Progress", date: "2026-07-24" },
  { id: "ORD-1100", requirement: "LZX-2481", customer: "Sparta Logistics", vendor: "CleanEdge Solutions", service: "Facility Management", value: 48500, status: "Invoiced", date: "2026-07-26" },
  { id: "ORD-1099", requirement: "LZX-2478", customer: "Urban Nest", vendor: "PestNoMore", service: "Pest Control", value: 31500, status: "Invoiced", date: "2026-07-20" },
  { id: "ORD-1098", requirement: "LZX-2475", customer: "City Hospital", vendor: "SteelGuard Security", service: "Security Guards", value: 152000, status: "Completed", date: "2026-07-15" },
  { id: "ORD-1097", requirement: "LZX-2472", customer: "GreenLeaf Hotels", vendor: "CleanEdge Solutions", service: "Deep Cleaning", value: 88000, status: "Completed", date: "2026-07-10" },
];

export const invoices: Invoice[] = [
  { number: "INV-1042", customer: "Sparta Logistics", amount: 48500, status: "Paid", due: "2026-07-28" },
  { number: "INV-1041", customer: "Urban Nest", amount: 31500, status: "Paid", due: "2026-07-25" },
  { number: "INV-1040", customer: "City Hospital", amount: 152000, status: "Pending", due: "2026-08-10" },
  { number: "INV-1039", customer: "Sunrise Retail", amount: 96000, status: "Pending", due: "2026-08-15" },
  { number: "INV-1038", customer: "BlueBird School", amount: 28400, status: "Pending", due: "2026-08-12" },
  { number: "INV-1037", customer: "GreenLeaf Hotels", amount: 88000, status: "Paid", due: "2026-07-20" },
];
