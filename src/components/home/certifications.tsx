import { CalendarDays, ExternalLink, FileText, ShieldCheck } from "lucide-react";

import { credentials } from "@/lib/portfolio";
import { cn } from "@/lib/utils";
import { Reveal, SectionHeading } from "@/components/motion-primitives";
import { MagneticCard } from "@/components/magnetic-card";
import { MotionLayer } from "@/motion/magnetic-layers";
import { MotionSection } from "@/motion/motion-section";

const credentialGroups = [
  {
    title: "Professional Certifications",
    description: "Industry-recognized certification programs.",
    category: "Professional Certification" as const,
  },
  {
    title: "Technical Credentials",
    description: "Course completion certificates from structured technical learning.",
    category: "Technical Credential" as const,
  },
];

export function CertificationsSection() {
  const groups = credentialGroups
    .map((group) => ({
      ...group,
      credentials: credentials.filter((credential) => credential.category === group.category),
    }))
    .filter((group) => group.credentials.length > 0);

  return (
    <MotionSection id="certifications" className="scroll-mt-24 py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Certifications & Credentials"
          title="Credentials that back the work."
          description="Verified learning, professional certifications and technical credentials."
          className="mb-14"
        />

        <div className="space-y-12">
          {groups.map((group, groupIndex) => (
            <div key={group.title}>
              <Reveal>
                <p className="inline-flex items-center gap-2 text-xs font-medium tracking-wide text-muted-foreground uppercase">
                  <span className="size-1.5 rounded-full bg-primary" aria-hidden />
                  {group.title}
                </p>
              </Reveal>
              <Reveal delay={0.05}>
                <p className="mt-2 max-w-xl text-sm text-muted-foreground">{group.description}</p>
              </Reveal>

              <ul aria-label={group.title} className="mt-6 grid gap-5 md:grid-cols-2">
                {group.credentials.map((credential, i) => (
                  <Reveal
                    as="li"
                    key={credential.id}
                    delay={groupIndex * 0.05 + i * 0.08}
                    className="h-full"
                  >
                    <MagneticCard
                      magnetic={4}
                      glow
                      glowColor="rgba(99,102,241,0.08)"
                      glowSize={300}
                      className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-hairline bg-surface/50 transition-colors duration-300 hover:border-primary/40 hover:bg-surface/80"
                    >
                      <span
                        aria-hidden
                        className={cn(
                          "absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r opacity-80",
                          credential.accent,
                        )}
                      />
                      <div className="flex flex-1 flex-col p-6 sm:p-7">
                        <MotionLayer
                          as="span"
                          layer="icon"
                          className={cn(
                            "grid size-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br text-xs font-bold text-white shadow-[var(--shadow-soft)] ring-1 ring-white/10 sm:size-14 sm:text-sm",
                            credential.accent,
                          )}
                        >
                          {credential.logo}
                        </MotionLayer>

                        <h3 className="mt-5 text-lg font-semibold text-balance sm:text-xl">
                          {credential.name}
                        </h3>
                        <p className="mt-1 text-sm font-medium text-muted-foreground">
                          {credential.organization}
                        </p>
                        {credential.type ? (
                          <p className="mt-0.5 text-xs text-muted-foreground">{credential.type}</p>
                        ) : null}

                        <p className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                          <CalendarDays className="size-3.5" aria-hidden />
                          Issued {credential.issueDate}
                        </p>
                        {credential.credentialId ? (
                          <p className="mt-1.5 text-[11px] text-muted-foreground/80">
                            Credential ID {credential.credentialId}
                          </p>
                        ) : null}

                        {credential.skills?.length ? (
                          <ul
                            aria-label={`Skills covered by ${credential.name}`}
                            className="mt-4 mb-6 flex flex-wrap gap-1.5"
                          >
                            {credential.skills.map((skill) => (
                              <li key={skill}>
                                <span className="inline-flex items-center rounded-full border border-hairline bg-background/60 px-2.5 py-1 text-[11px] font-medium text-muted-foreground transition-[transform,border-color,color] duration-300 hover:scale-105 hover:border-primary/30 hover:text-foreground">
                                  {skill}
                                </span>
                              </li>
                            ))}
                          </ul>
                        ) : null}

                        <div className="mt-auto flex flex-wrap items-center gap-3 border-t border-hairline pt-5">
                          {credential.verifyUrl ? (
                            <a
                              href={credential.verifyUrl}
                              target="_blank"
                              rel="noreferrer noopener"
                              aria-label={`Verify ${credential.name} certificate — opens in a new tab`}
                              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-glow px-4 py-2 text-xs font-medium text-primary-foreground shadow-[var(--shadow-glow)] outline-none transition-transform duration-300 hover:scale-[1.03] focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-95"
                            >
                              <ShieldCheck className="size-3.5" aria-hidden />
                              Verify
                              <ExternalLink
                                className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                aria-hidden
                              />
                            </a>
                          ) : null}
                          {credential.certificateUrl ? (
                            <a
                              href={credential.certificateUrl}
                              target="_blank"
                              rel="noreferrer noopener"
                              aria-label={`View ${credential.name} certificate — opens in a new tab`}
                              className="group inline-flex items-center gap-2 rounded-full border border-hairline bg-background/70 px-4 py-2 text-xs font-medium outline-none transition-colors duration-300 hover:border-primary/40 focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                            >
                              <FileText className="size-3.5 text-muted-foreground" aria-hidden />
                              View Certificate
                              <ExternalLink
                                className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                aria-hidden
                              />
                            </a>
                          ) : null}
                        </div>
                      </div>
                    </MagneticCard>
                  </Reveal>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
