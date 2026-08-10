import { BadgeCheck, CalendarDays, ExternalLink, FileText, ShieldCheck } from "lucide-react";

import { credentials } from "@/lib/portfolio";
import { cn } from "@/lib/utils";
import { Reveal, SectionHeading } from "@/components/motion-primitives";
import { MagneticCard } from "@/components/magnetic-card";
import { MotionLayer } from "@/motion/magnetic-layers";
import { MotionSection } from "@/motion/motion-section";

export function CertificationsSection() {
  return (
    <MotionSection id="certifications" className="scroll-mt-24 py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Certifications & Credentials"
          title="Credentials that back the work."
          description="Formal learning alongside the code — verified at the source where available."
          className="mb-14"
        />

        <ol
          aria-label="Certifications timeline"
          className="relative border-l border-hairline pl-8 sm:pl-12"
        >
          {credentials.map((credential, i) => {
            const verifiable = Boolean(credential.verifyUrl);
            const hasProof = Boolean(credential.certificateUrl);
            return (
              <Reveal
                as="li"
                key={credential.id}
                delay={i * 0.1}
                className="relative pb-10 last:pb-0"
              >
                <span
                  aria-hidden
                  className="absolute -left-[calc(2rem+1px)] top-7 grid size-10 -translate-x-1/2 place-items-center rounded-full border border-hairline bg-background sm:-left-[calc(3rem+1px)] sm:size-12"
                >
                  <span
                    className={cn(
                      "grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br text-[10px] font-bold text-white shadow-[var(--shadow-soft)] sm:h-8 sm:w-8 sm:text-[11px]",
                      credential.accent,
                    )}
                  >
                    {credential.logo}
                  </span>
                </span>

                <MagneticCard
                  magnetic={4}
                  glow
                  glowColor="rgba(99,102,241,0.08)"
                  glowSize={300}
                  className="overflow-hidden rounded-2xl border border-hairline bg-surface/50"
                >
                  <span
                    aria-hidden
                    className={cn(
                      "absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r opacity-80",
                      credential.accent,
                    )}
                  />
                  <div className="p-6 transition-colors duration-300 hover:bg-surface/80 sm:p-7">
                    <div className="flex items-start gap-4">
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
                      <div className="min-w-0">
                        <h3 className="text-lg font-semibold text-balance sm:text-xl">
                          {credential.name}
                        </h3>
                        <p className="mt-1 text-sm font-medium text-muted-foreground">
                          {credential.organization}
                        </p>
                      </div>
                    </div>

                    <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2">
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                        <CalendarDays className="size-3.5" aria-hidden />
                        Issued {credential.issueDate}
                      </span>
                      {credential.credentialId ? (
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-hairline bg-background/60 px-2.5 py-1 text-[11px] font-medium text-muted-foreground">
                          Credential ID {credential.credentialId}
                        </span>
                      ) : null}

                      {verifiable ? (
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                          <ShieldCheck className="size-3.5" aria-hidden /> Verifiable
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-hairline bg-background/60 px-3 py-1 text-xs font-medium text-muted-foreground">
                          <BadgeCheck className="size-3.5 text-emerald-500" aria-hidden />
                          Certificate Available
                        </span>
                      )}
                    </div>

                    {credential.skills?.length ? (
                      <ul
                        aria-label={`Skills covered by ${credential.name}`}
                        className="mt-4 flex flex-wrap gap-1.5"
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

                    <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-hairline pt-5">
                      {credential.verifyUrl ? (
                        <a
                          href={credential.verifyUrl}
                          target="_blank"
                          rel="noreferrer noopener"
                          aria-label={`Verify on ${credential.organization} — opens in a new tab`}
                          className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-glow px-4 py-2 text-xs font-medium text-primary-foreground shadow-[var(--shadow-glow)] outline-none transition-transform duration-300 hover:scale-[1.03] focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-95"
                        >
                          <ShieldCheck className="size-3.5" aria-hidden />
                          Verify on {credential.organization}
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
                          aria-label="View Certificate — opens in a new tab"
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
                      {!credential.verifyUrl && !credential.certificateUrl ? (
                        <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                          <FileText className="size-3.5" aria-hidden />
                          Certificate PDF available on request
                        </span>
                      ) : null}
                    </div>
                  </div>
                </MagneticCard>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </MotionSection>
  );
}
