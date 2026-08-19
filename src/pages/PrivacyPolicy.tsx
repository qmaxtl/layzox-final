import { LegalPage } from "@/components/pages/LegalPage";

export function PrivacyPolicy() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      updated="1 August 2026"
      sections={[
        {
          heading: "Introduction",
          body: "Layzox India Pvt. Ltd. ('Layzox', 'we', 'us') respects your privacy and is committed to protecting the personal information you share with us. This policy explains what we collect, why we collect it, and how we use and protect it when you use our website and services.",
        },
        {
          heading: "Information we collect",
          body: "We collect information you provide directly, such as your name, business name, email address, phone number, service requirements and location. We also collect technical information automatically, including browser type, device information, pages visited and usage patterns, to improve our platform.",
        },
        {
          heading: "How we use your information",
          body: "We use your information to review and fulfil your service requirements, prepare quotations, coordinate suitable service partners, schedule and manage services, issue GST invoices, provide customer support, improve our services, and comply with legal obligations.",
        },
        {
          heading: "The Layzox managed model",
          body: "Layzox operates as a managed B2B services procurement platform. We do not share your information with vendors for marketing, lead generation or direct contact. Vendors receive only the information necessary to execute the specific service assigned to them by Layzox.",
        },
        {
          heading: "Data security",
          body: "We implement appropriate technical and organisational measures to protect your information against unauthorised access, alteration, disclosure or destruction. Access to your data is restricted to authorised personnel on a need-to-know basis.",
        },
        {
          heading: "Data retention",
          body: "We retain your information only for as long as necessary to provide our services, fulfil the purposes described in this policy, or comply with applicable legal, accounting and regulatory requirements.",
        },
        {
          heading: "Your rights",
          body: "You may request access to, correction of, or deletion of your personal information, subject to legal and contractual restrictions. To exercise these rights, contact us at contact@layzox.com. We will respond within a reasonable timeframe.",
        },
        {
          heading: "Changes to this policy",
          body: "We may update this Privacy Policy from time to time. We will notify you of material changes by posting the updated policy on this page and updating the 'Last updated' date. Continued use of our services constitutes acceptance of the updated policy.",
        },
        {
          heading: "Contact us",
          body: "For any questions about this Privacy Policy or our data practices, contact us at contact@layzox.com or write to Layzox India Pvt. Ltd., Ranchi, Jharkhand, India.",
        },
      ]}
    />
  );
}
