import { createFileRoute } from "@tanstack/react-router";
import { Download, ExternalLink } from "lucide-react";

import { profile } from "@/lib/portfolio";
import { Reveal, SectionHeading } from "@/components/motion-primitives";

const title = "Resume — P. Siranjeevi";
const description =
  "View and download the resume of P. Siranjeevi, Java full stack developer and QA automation engineer.";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ResumePage,
});

function ResumePage() {
  return (
    <section className="pt-32 pb-24 sm:pt-40">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Resume"
            title="Experience, skills and education in one page."
            description="Read it inline or take a copy with you."
          />
          <Reveal delay={0.1} className="flex flex-wrap gap-3">
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-glow px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition-transform duration-300 hover:scale-[1.03] active:scale-95"
            >
              <Download className="size-4" aria-hidden /> Download Resume
            </a>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-full border border-hairline bg-surface/60 px-5 py-2.5 text-sm font-medium transition-colors duration-300 hover:border-primary/40"
            >
              <ExternalLink className="size-4" aria-hidden /> Open in New Tab
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="mt-12 overflow-hidden rounded-3xl border border-hairline bg-surface/50 p-2 shadow-[var(--shadow-soft)] sm:p-3">
            <object
              data={profile.resumeUrl}
              type="application/pdf"
              className="h-[70vh] min-h-[520px] w-full rounded-2xl bg-background"
              aria-label="Resume PDF preview"
            >
              <div className="flex h-[70vh] min-h-[520px] flex-col items-center justify-center gap-4 rounded-2xl bg-background px-6 text-center">
                <p className="text-sm text-muted-foreground">
                  Your browser can&rsquo;t display the embedded PDF.
                </p>
                <a
                  href={profile.resumeUrl}
                  className="inline-flex items-center gap-2 rounded-full border border-hairline px-5 py-2.5 text-sm font-medium"
                >
                  <Download className="size-4" aria-hidden /> Download instead
                </a>
              </div>
            </object>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
