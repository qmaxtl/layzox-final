export interface TrustHighlight {
  title: string;
  body: string;
  label: string;
}

export const trustHighlights: TrustHighlight[] = [
  {
    title: "One accountable process",
    body: "You submit one requirement. Layzox coordinates sourcing, quotations, scheduling and follow-up through a single point of contact.",
    label: "How we work",
  },
  {
    title: "Structured sourcing",
    body: "Partners are identified against your service, area, capability, availability, experience and track record.",
    label: "How we source",
  },
  {
    title: "Quotation coordination",
    body: "Relevant quotations are gathered, structured and shared with you for review before any work begins.",
    label: "How we quote",
  },
  {
    title: "Quality & documentation",
    body: "Completed work is checked against the agreed scope and documented before payment is released.",
    label: "How we verify",
  },
  {
    title: "GST invoicing",
    body: "Every managed order is invoiced with proper documentation for your accounts and audit teams.",
    label: "How we bill",
  },
  {
    title: "Verification by category",
    body: "Verification requirements vary by service category — business identity, GST details, licences, certifications, capability and experience where applicable.",
    label: "How we verify partners",
  },
];
