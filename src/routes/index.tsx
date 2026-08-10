import { createFileRoute } from "@tanstack/react-router";

import { site } from "@/lib/site";
import { Hero } from "@/components/home/hero";
import { AboutSection, ExperienceSection } from "@/components/home/about-experience";
import { CertificationsSection } from "@/components/home/certifications";
import { GithubSection, SkillsSection, TechStackSection } from "@/components/home/skills-tech";
import { ProjectsSection } from "@/components/home/projects";
import { ContactPanel } from "@/components/contact-panel";
import { SectionHeading } from "@/components/motion-primitives";
import { MotionSection } from "@/motion/motion-section";

const title = "P. Siranjeevi — Java Full Stack & QA Automation Engineer";
const description =
  "Portfolio of P. Siranjeevi: Spring Boot APIs, React interfaces and Playwright automation frameworks, documented as real case studies.";

export const Route = createFileRoute("/")({
  head: ({ match }) => {
    const canonical = `${site.url}${match.pathname === "/" ? "/" : match.pathname}`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: canonical },
      ],
      links: [{ rel: "canonical", href: canonical }],
    };
  },
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ExperienceSection />
      <CertificationsSection />
      <SkillsSection />
      <ProjectsSection />
      <TechStackSection />
      <GithubSection />
      <MotionSection id="contact" className="scroll-mt-24 py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Contact"
            title="Let's build something dependable."
            description="Tell me about the role or the product — I'll get back to you quickly."
            className="mb-14"
          />
          <ContactPanel />
        </div>
      </MotionSection>
    </>
  );
}
