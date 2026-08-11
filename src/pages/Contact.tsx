import { PageHero } from "@/components/ui/PageHero";
import { ContactSection } from "@/components/home/ContactSection";

export function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Talk to the team that{" "}
            <span className="text-gradient">owns the outcome</span>
          </>
        }
        subtitle="Whether it's one service or a nationwide program, start the conversation and we'll take it from there."
      />
      <div className="pb-8">
        <ContactSection />
      </div>
    </>
  );
}
