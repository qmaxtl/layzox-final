import { LegalPage } from "@/components/pages/LegalPage";

export function Terms() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Service"
      updated="1 August 2026"
      sections={[
        {
          heading: "Agreement",
          body: "These Terms of Service govern your use of the Layzox platform and services. By accessing our website or submitting a requirement, you agree to these terms. If you do not agree, please do not use our services.",
        },
        {
          heading: "About Layzox",
          body: "Layzox is a managed B2B services procurement platform. Customers submit their service requirements to Layzox. Layzox reviews each requirement and internally assigns a suitable verified partner. Customers do not browse, select, compare or directly contact service partners.",
        },
        {
          heading: "The managed procurement model",
          body: "Layzox coordinates partner assignment, quotations, quality checks, scheduling, execution, payments and customer support. Layzox is the point of contact between customers and service providers. Quotations are prepared by Layzox and must be approved by the customer before work begins.",
        },
        {
          heading: "Customer responsibilities",
          body: "Customers agree to provide accurate information about their requirements, approve quotations in a timely manner, grant reasonable site access for scheduled services, and pay for completed and verified work in accordance with the approved quotation.",
        },
        {
          heading: "Vendor responsibilities",
          body: "Vendor partners agree to maintain valid licences, insurance and compliance as required for their service category, perform services to the agreed scope and quality standards, cooperate with quality checks, and adhere to Layzox's vendor code of conduct.",
        },
        {
          heading: "Pricing and payment",
          body: "All pricing is communicated through official Layzox quotations. Prices are locked upon customer approval. Payments are released after quality verification of completed work. GST invoices are issued for all services in accordance with applicable law.",
        },
        {
          heading: "Quality correction",
          body: "If completed work does not meet the agreed standard, Layzox will work with you and the service partner to arrange correction or re-performance. This commitment is subject to the customer reporting the issue within a reasonable period after completion.",
        },
        {
          heading: "Limitation of liability",
          body: "To the maximum extent permitted by law, Layzox's aggregate liability arising out of or in connection with the services shall not exceed the amounts paid by the customer for the specific service giving rise to the claim. Layzox is not liable for indirect or consequential losses.",
        },
        {
          heading: "Intellectual property",
          body: "All content on this website, including text, graphics, logos, illustrations and software, is the property of Layzox or its licensors and is protected by applicable intellectual property laws.",
        },
        {
          heading: "Governing law",
          body: "These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts of Ranchi, Jharkhand.",
        },
        {
          heading: "Contact",
          body: "For any questions regarding these Terms of Service, contact us at hello@layzox.com.",
        },
      ]}
    />
  );
}
