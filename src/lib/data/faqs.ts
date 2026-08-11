export interface Faq {
  question: string;
  answer: string;
  category: "basics" | "procurement" | "vendors" | "billing";
}

export const faqs: Faq[] = [
  {
    category: "basics",
    question: "What exactly does Layzox do?",
    answer:
      "Layzox is a managed B2B services procurement platform. You submit a single requirement and Layzox coordinates the suitable service partner, prepares a quotation, schedules and supervises the work, checks quality, processes payment and issues your GST invoice. You deal only with Layzox — not with individual partners.",
  },
  {
    category: "basics",
    question: "Is Layzox a vendor listing or lead generation platform?",
    answer:
      "No. Layzox is not a marketplace, directory or lead generation platform. Customers do not browse partners, compare quotations or choose a partner. Layzox coordinates the process from requirement submission through to completed and documented service delivery.",
  },
  {
    category: "basics",
    question: "Which businesses does Layzox serve?",
    answer:
      "MSMEs, enterprises, manufacturing plants, hospitals, schools, hotels, restaurants, warehouses, retail chains, corporate offices, construction and real estate companies, and startups across the regions we serve.",
  },
  {
    category: "procurement",
    question: "How do I submit a requirement?",
    answer:
      "Fill in the Post Requirement form with the service you need, location, scope and frequency. A Layzox procurement specialist reviews your requirement and responds with next steps and a timeline.",
  },
  {
    category: "procurement",
    question: "Do I get to choose my partner?",
    answer:
      "No — by design. Layzox selects the most suitable service partner based on location, capability, availability, experience and track record. This keeps the process consistent, accountable and coordinated through a single point of contact.",
  },
  {
    category: "procurement",
    question: "How is pricing decided?",
    answer:
      "Layzox structures pricing for every requirement. A quotation is prepared and shared for your approval. Once you approve, the price is locked. There are no hidden charges.",
  },
  {
    category: "procurement",
    question: "What if the service quality is not up to the mark?",
    answer:
      "Completed work is checked and documented by Layzox before payment is released. If the work does not meet the agreed standard, we work with you and the partner to get it corrected.",
  },
  {
    category: "vendors",
    question: "How are partners verified?",
    answer:
      "Verification requirements vary by service category. Depending on the category, checks may include business identity, GST details, applicable licences, relevant certifications, capability, experience and documentation.",
  },
  {
    category: "vendors",
    question: "Do partners contact me directly?",
    answer:
      "No. Layzox is the point of contact between your business and service providers. All communication, scheduling and issue resolution happens through Layzox.",
  },
  {
    category: "vendors",
    question: "How do I become a Layzox partner?",
    answer:
      "Apply through the Become a Partner page. Your business is reviewed against our verification standards. Approved partners receive work through Layzox — they do not compete for customer leads.",
  },
  {
    category: "billing",
    question: "Do you provide GST invoices?",
    answer:
      "Yes. Every order generates a compliant GST invoice automatically, with complete documentation for your accounts and audit teams.",
  },
  {
    category: "billing",
    question: "How do payments work?",
    answer:
      "Payments are made securely and are released only after quality verification of the completed work. You approve the quotation before work starts and the invoice after completion.",
  },
];
