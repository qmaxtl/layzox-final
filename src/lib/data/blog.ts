export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: "Business Insights" | "Procurement" | "Operations" | "Vendor Management";
  date: string;
  readTime: string;
  author: string;
  authorRole: string;
  gradient: string;
  content: { heading: string; body: string }[];
}

export const posts: BlogPost[] = [
  {
    slug: "why-managed-procurement-beats-vendor-marketplaces",
    title: "Why Managed Procurement Beats Vendor Marketplaces",
    excerpt:
      "Marketplaces give you choice   and a headache. Here's why businesses are moving to a fully managed model.",
    category: "Procurement",
    date: "2026-07-18",
    readTime: "6 min read",
    author: "Layzox Insights",
    authorRole: "Strategy Team",
    gradient: "from-blue-600 to-cyan-500",
    content: [
      {
        heading: "The choice paradox",
        body: "More vendors should mean better outcomes. In practice, it means more time spent comparing, negotiating and chasing. Every additional option adds cognitive load and risk of a bad pick. For procurement teams running 20 services across multiple sites, the market is not an asset   it is the problem.",
      },
      {
        heading: "What managed procurement changes",
        body: "In a managed model you submit one requirement. A platform that is accountable for the outcome handles sourcing, selection, scheduling, quality and payment. You exchange infinite choice for accountable outcomes   a trade that operations leaders increasingly make willingly.",
      },
      {
        heading: "The accountability gap",
        body: "In a marketplace, when a vendor underperforms, you have no recourse beyond a rating that changes nothing. In managed procurement, the platform is the one you hold accountable for a fix. That single shift in accountability transforms how businesses plan services.",
      },
    ],
  },
  {
    slug: "gst-invoicing-every-b2b-service-order",
    title: "GST Invoicing on Every B2B Service Order",
    excerpt:
      "Scattered invoices from dozens of vendors are an audit nightmare. Centralised, compliant invoicing is the quiet superpower of managed services.",
    category: "Operations",
    date: "2026-07-02",
    readTime: "5 min read",
    author: "Layzox Insights",
    authorRole: "Strategy Team",
    gradient: "from-cyan-500 to-violet-500",
    content: [
      {
        heading: "The invoice mess",
        body: "A typical business juggles 15+ service vendors. Each has its own invoicing cycle, format and compliance posture. Reconciling these into a single GST ledger is slow, error-prone and expensive.",
      },
      {
        heading: "One platform, one invoice",
        body: "With Layzox, every service order produces a compliant GST invoice automatically. Your finance team gets clean, consistent documentation for every transaction   from a single counterparty.",
      },
      {
        heading: "Better for audits",
        body: "Centralised documentation means audit readiness. Every service, every payment and every invoice is traceable through one system, giving finance leaders confidence during statutory reviews.",
      },
    ],
  },
  {
    slug: "the-hidden-cost-of-rogue-vendors",
    title: "The Hidden Cost of Rogue Vendors",
    excerpt:
      "One unverified vendor can cost your business far more than the invoice. Here's what verification really protects.",
    category: "Vendor Management",
    date: "2026-06-15",
    readTime: "7 min read",
    author: "Layzox Insights",
    authorRole: "Risk & Compliance",
    gradient: "from-violet-500 to-fuchsia-500",
    content: [
      {
        heading: "Beyond the visible cost",
        body: "The direct cost of a bad vendor is the invoice you paid. The hidden cost is operational downtime, safety incidents, compliance violations, reputational damage and management hours spent firefighting.",
      },
      {
        heading: "Verification is a process, not a check",
        body: "Real vendor verification is continuous   document checks, police and reference checks, licence validation, insurance, training and a live quality score updated with every completed job.",
      },
      {
        heading: "Why it matters to you",
        body: "When a platform verifies its vendors, you inherit that diligence. Every vendor working for you is audited against standards you could never apply to a marketplace of thousands.",
      },
    ],
  },
  {
    slug: "facility-management-checklist-for-growing-companies",
    title: "The Facility Management Checklist for Growing Companies",
    excerpt:
      "Facilities quietly scale with your company   until something breaks. Use this checklist before your next growth phase.",
    category: "Operations",
    date: "2026-05-28",
    readTime: "5 min read",
    author: "Layzox Insights",
    authorRole: "Operations Team",
    gradient: "from-emerald-500 to-cyan-500",
    content: [
      {
        heading: "Service register",
        body: "Maintain a register of every service your facility consumes   frequency, scope, cost and the current responsible party. Most companies discover duplicate or missing services at this step.",
      },
      {
        heading: "Escalation and response",
        body: "Every critical service should have a documented escalation path and clear response expectations. Define response times for emergencies such as security, power and safety systems.",
      },
      {
        heading: "Consolidation",
        body: "Consolidating services under one accountable provider reduces coordination overhead, improves pricing leverage and makes quality tracking possible at scale.",
      },
    ],
  },
  {
    slug: "security-guard-outsourcing-guide",
    title: "Security Guard Outsourcing: A Complete Guide",
    excerpt:
      "From PSARA compliance to supervision ratios   everything a business should demand from its security partner.",
    category: "Operations",
    date: "2026-05-05",
    readTime: "8 min read",
    author: "Layzox Insights",
    authorRole: "Safety & Security",
    gradient: "from-amber-500 to-orange-500",
    content: [
      {
        heading: "Start with compliance",
        body: "In India, security agencies must hold a PSARA licence. Before any discussion of cost, verify that your provider is licensed and that guards are insured and properly trained.",
      },
      {
        heading: "Supervision is everything",
        body: "The quality of a guard post is determined by supervision. Demand on-site supervisors, random checks and structured reporting from day one.",
      },
      {
        heading: "Rotation and retention",
        body: "Frequent staff rotation undermines security. Ask about retention, background verification of every deployed guard and how absences are covered.",
      },
    ],
  },
  {
    slug: "solar-installation-roi-for-factories",
    title: "Solar Installation ROI: The Numbers for Factories",
    excerpt:
      "Rooftop solar has crossed the point where it is not just green   it is financially obvious. Here's how to model the return.",
    category: "Business Insights",
    date: "2026-04-20",
    readTime: "6 min read",
    author: "Layzox Insights",
    authorRole: "Strategy Team",
    gradient: "from-yellow-400 to-orange-500",
    content: [
      {
        heading: "The economics have flipped",
        body: "With falling panel prices and rising grid tariffs, rooftop solar now typically pays back in 3–4 years for industrial consumers, with 20+ years of near-free power after that.",
      },
      {
        heading: "Model your savings",
        body: "Estimate your tariff, plant load factor and available roof area. A 100 kWp system on a 400 unit/month roof can cut energy bills by 25–35% from the first year.",
      },
      {
        heading: "Execution matters",
        body: "Net-metering approvals, structural safety and maintenance contracts decide the real-world ROI. Choose a partner that manages the full cycle, including approvals.",
      },
    ],
  },
  {
    slug: "measuring-vendor-quality-scores",
    title: "Measuring Vendor Quality Scores That Actually Work",
    excerpt:
      "Star ratings lie. A structured quality score built from completion data predicts outcomes better than any review page.",
    category: "Vendor Management",
    date: "2026-03-30",
    readTime: "6 min read",
    author: "Layzox Insights",
    authorRole: "Risk & Compliance",
    gradient: "from-blue-500 to-indigo-500",
    content: [
      {
        heading: "Rates lie, data doesn't",
        body: "Rating systems reward volume and recency, not reliability. A quality score computed from completion rates, rework incidents, response times and audit results is a far stronger predictor.",
      },
      {
        heading: "The components",
        body: "A robust score weighs on-time delivery, defect rate, safety compliance, communication and customer verification outcomes   updated after every single job.",
      },
      {
        heading: "Why it matters for your services",
        body: "When a platform routes work by quality score, better vendors receive more work and quality compounds across the entire network. Your business is the beneficiary.",
      },
    ],
  },
  {
    slug: "office-shifting-playbook",
    title: "The Office Shifting Playbook: Zero Downtime Moves",
    excerpt:
      "A move can stall your business for a week. With the right playbook, it is a weekend.",
    category: "Business Insights",
    date: "2026-03-10",
    readTime: "5 min read",
    author: "Layzox Insights",
    authorRole: "Operations Team",
    gradient: "from-pink-500 to-rose-500",
    content: [
      {
        heading: "Plan in phases",
        body: "Break the move into planning, packing, transport, IT re-installation and post-move support. Assign an owner and a deadline for each phase before anything is boxed.",
      },
      {
        heading: "IT is the critical path",
        body: "Network, servers and phones determine whether your team can work on day one. Pre-wire the new site, stage the servers and schedule re-installation before furniture arrives.",
      },
      {
        heading: "Measure by downtime",
        body: "The real metric of a successful move is business downtime, not the moving bill. A managed partner that coordinates all trades keeps your people productive through the transition.",
      },
    ],
  },
];

export const categories = ["Business Insights", "Procurement", "Operations", "Vendor Management"] as const;

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
