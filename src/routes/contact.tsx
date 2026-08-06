import { createFileRoute } from "@tanstack/react-router";

import { ContactPanel } from "@/components/contact-panel";
import { SectionHeading } from "@/components/motion-primitives";
import { MotionSection } from "@/motion/motion-section";

const title = "Contact — P. Siranjeevi";
const description =
  "Get in touch with P. Siranjeevi for full stack development and QA automation roles, freelance work or collaboration.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <MotionSection className="pt-32 pb-24 sm:pt-40">
      <div className="container-page">
        <SectionHeading
          eyebrow="Contact"
          title="Let's talk about your next build."
          description="Roles, freelance projects or a quick engineering question — all welcome."
          className="mb-14"
        />
        <ContactPanel />
      </div>
    </MotionSection>
  );
}
