import { lazy, Suspense, type ReactNode } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Home } from "@/pages/Home";
import { AuthProvider, useAuth } from "@/lib/auth";
import { usePageMeta } from "@/lib/seo";
import { ScrollToTop } from "@/components/layout/ScrollToTop";

const Services = lazy(() => import("@/pages/Services").then((m) => ({ default: m.Services })));
const Industries = lazy(() => import("@/pages/Industries").then((m) => ({ default: m.Industries })));
const HowItWorksPage = lazy(() =>
  import("@/pages/HowItWorksPage").then((m) => ({ default: m.HowItWorksPage })),
);
const WhyLayzoxPage = lazy(() =>
  import("@/pages/WhyLayzox").then((m) => ({ default: m.WhyLayzoxPage })),
);
const ForBusinesses = lazy(() =>
  import("@/pages/ForBusinesses").then((m) => ({ default: m.ForBusinesses })),
);
const BecomeAPartner = lazy(() =>
  import("@/pages/BecomeAPartner").then((m) => ({ default: m.BecomeAPartner })),
);
const About = lazy(() => import("@/pages/About").then((m) => ({ default: m.About })));
const Resources = lazy(() => import("@/pages/Resources").then((m) => ({ default: m.Resources })));
const BlogPost = lazy(() => import("@/pages/BlogPost").then((m) => ({ default: m.BlogPost })));
const Contact = lazy(() => import("@/pages/Contact").then((m) => ({ default: m.Contact })));
const PostRequirement = lazy(() =>
  import("@/pages/PostRequirement").then((m) => ({ default: m.PostRequirement })),
);
const TalkToExpert = lazy(() =>
  import("@/pages/TalkToExpert").then((m) => ({ default: m.TalkToExpert })),
);
const Careers = lazy(() => import("@/pages/Careers").then((m) => ({ default: m.Careers })));
const PrivacyPolicy = lazy(() =>
  import("@/pages/PrivacyPolicy").then((m) => ({ default: m.PrivacyPolicy })),
);
const Terms = lazy(() => import("@/pages/Terms").then((m) => ({ default: m.Terms })));
const NotFound = lazy(() => import("@/pages/NotFound").then((m) => ({ default: m.NotFound })));
const Login = lazy(() => import("@/pages/Login").then((m) => ({ default: m.Login })));
const CrmLayout = lazy(() =>
  import("@/components/crm/CrmLayout").then((m) => ({ default: m.CrmLayout })),
);
const CrmOverview = lazy(() =>
  import("@/pages/crm/CrmOverview").then((m) => ({ default: m.CrmOverview })),
);
const CrmRequirements = lazy(() =>
  import("@/pages/crm/CrmRequirements").then((m) => ({ default: m.CrmRequirements })),
);
const CrmCustomers = lazy(() =>
  import("@/pages/crm/CrmCustomers").then((m) => ({ default: m.CrmCustomers })),
);
const CrmVendors = lazy(() =>
  import("@/pages/crm/CrmVendors").then((m) => ({ default: m.CrmVendors })),
);
const CrmOrders = lazy(() =>
  import("@/pages/crm/CrmOrders").then((m) => ({ default: m.CrmOrders })),
);
const CrmInvoices = lazy(() =>
  import("@/pages/crm/CrmInvoices").then((m) => ({ default: m.CrmInvoices })),
);

function Protected({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const location = useLocation();
  if (!user) return <Navigate to="/login" state={{ from: location }} replace />;
  return <>{children}</>;
}

function Meta({ title, description }: { title: string; description?: string }) {
  usePageMeta({ title, description });
  return null;
}

export default function App() {
  return (
    <AuthProvider>
      <ScrollToTop />
      <Suspense
        fallback={
          <div className="flex min-h-screen items-center justify-center bg-white dark:bg-ink-950">
            <span className="h-2 w-2 animate-pulse rounded-full bg-brand-600" />
          </div>
        }
      >
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/crm"
            element={
              <Protected>
                <CrmLayout />
              </Protected>
            }
          >
            <Route index element={<CrmOverview />} />
            <Route path="requirements" element={<CrmRequirements />} />
            <Route path="customers" element={<CrmCustomers />} />
            <Route path="vendors" element={<CrmVendors />} />
            <Route path="orders" element={<CrmOrders />} />
            <Route path="invoices" element={<CrmInvoices />} />
          </Route>
          <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route
            path="/services"
            element={
              <>
                <Meta
                  title="Services   Layzox | Managed B2B Services Procurement"
                  description="Managed business services across 8 categories   pest control, security, facility management, IT, logistics and more."
                />
                <Services />
              </>
            }
          />
          <Route
            path="/industries"
            element={
              <>
                <Meta
                  title="Industries   Layzox | Managed B2B Services"
                  description="Managed services for manufacturing, healthcare, education, hospitality, retail, construction, real estate and more."
                />
                <Industries />
              </>
            }
          />
          <Route
            path="/how-it-works"
            element={
              <>
                <Meta
                  title="How It Works   Layzox | Managed B2B Services Procurement"
                  description="Submit a requirement. Layzox coordinates sourcing, quotations and delivery through one accountable process."
                />
                <HowItWorksPage />
              </>
            }
          />
          <Route
            path="/why-layzox"
            element={
              <>
                <Meta
                  title="Why Layzox   Managed B2B Services Procurement"
                  description="Why businesses choose Layzox's managed procurement over vendor marketplaces   one accountable process, structured sourcing and transparent quotations."
                />
                <WhyLayzoxPage />
              </>
            }
          />
          <Route
            path="/for-businesses"
            element={
              <>
                <Meta
                  title="For Businesses   Layzox | Managed B2B Services"
                  description="Submit one requirement and Layzox coordinates the rest   sourcing, quotations, delivery and GST invoicing."
                />
                <ForBusinesses />
              </>
            }
          />
          <Route
            path="/become-a-partner"
            element={
              <>
                <Meta
                  title="Become a Partner   Layzox | Partner Network"
                  description="Verification requirements vary by service category. Approved partners receive work internally, matched to their area and expertise."
                />
                <BecomeAPartner />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <Meta
                  title="About   Layzox | Managed B2B Services Procurement"
                  description="Layzox is a managed B2B services procurement company. One requirement, one accountable process."
                />
                <About />
              </>
            }
          />
          <Route
            path="/resources"
            element={
              <>
                <Meta
                  title="Resources   Layzox | Procurement & Operations Insights"
                  description="Practical playbooks on procurement, operations and vendor management from the Layzox team."
                />
                <Resources />
              </>
            }
          />
          <Route
            path="/blog/:slug"
            element={
              <>
                <Meta title="Insights   Layzox" />
                <BlogPost />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <Meta
                  title="Contact   Layzox | Talk to a Procurement Specialist"
                  description="Contact Layzox for managed B2B services procurement. Head office in Ranchi, Jharkhand."
                />
                <Contact />
              </>
            }
          />
          <Route
            path="/post-requirement"
            element={
              <>
                <Meta
                  title="Post Requirement   Layzox | Managed B2B Services"
                  description="Submit your business service requirement once. Layzox coordinates sourcing, quotations and delivery to completion."
                />
                <PostRequirement />
              </>
            }
          />
          <Route
            path="/talk-to-expert"
            element={
              <>
                <Meta
                  title="Talk to Expert   Layzox | Free Procurement Consultation"
                  description="Book a free 20-minute consultation with a Layzox procurement specialist."
                />
                <TalkToExpert />
              </>
            }
          />
          <Route
            path="/careers"
            element={
              <>
                <Meta title="Careers   Layzox" description="Join the Layzox team and help build a managed B2B services procurement platform." />
                <Careers />
              </>
            }
          />
          <Route
            path="/legal/privacy-policy"
            element={
              <>
                <Meta title="Privacy Policy   Layzox" />
                <PrivacyPolicy />
              </>
            }
          />
          <Route
            path="/legal/terms"
            element={
              <>
                <Meta title="Terms of Service   Layzox" />
                <Terms />
              </>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
        </Routes>
      </Suspense>
    </AuthProvider>
  );
}
