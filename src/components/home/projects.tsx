import { Link } from "@tanstack/react-router";
import { ArrowRight, ExternalLink, Factory, Github, Lock } from "lucide-react";

import { projects, type Project } from "@/lib/portfolio";
import { Reveal, SectionHeading } from "@/components/motion-primitives";
import { MagneticCard } from "@/components/magnetic-card";
import { MotionSection } from "@/motion/motion-section";

export function ProjectsSection() {
  return (
    <MotionSection id="projects" className="scroll-mt-24 py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Projects"
          title="Production-minded work, documented end to end."
          description="Each project has a dedicated case study covering architecture, challenges and outcomes."
        />

        <div className="mt-14 space-y-8">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.08}>
              <article className="group relative overflow-hidden rounded-3xl border border-hairline bg-surface/50 transition-all duration-500 hover:border-primary/40 hover:shadow-[var(--shadow-soft)]">
                <div
                  aria-hidden
                  className={`pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r ${project.accent} opacity-70`}
                />
                {project.details ? (
                  <ConfidentialCard project={project} />
                ) : (
                  <StandardCard project={project} />
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}

function StandardCard({ project }: { project: Project }) {
  return (
    <div className="grid gap-0 lg:grid-cols-[1fr_1.15fr]">
      <div className="order-2 flex flex-col justify-center p-7 sm:p-10 lg:order-1">
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span className="rounded-full border border-hairline px-2.5 py-1">{project.year}</span>
          <span>{project.role}</span>
        </div>
        <h3 className="mt-5 text-2xl font-semibold text-balance sm:text-3xl">{project.title}</h3>
        <p className="mt-4 leading-relaxed text-muted-foreground">{project.summary}</p>

        <ul className="mt-6 flex flex-wrap gap-1.5">
          {project.tech.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-hairline bg-background/60 px-2.5 py-1 text-xs text-muted-foreground"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link
            to="/projects/$slug"
            params={{ slug: project.slug }}
            className="group/btn inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-transform duration-300 hover:scale-[1.03] active:scale-95"
          >
            View Details
            <ArrowRight
              className="size-4 transition-transform duration-300 group-hover/btn:translate-x-1"
              aria-hidden
            />
          </Link>
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-full border border-hairline px-5 py-2.5 text-sm font-medium transition-colors duration-300 hover:border-primary/40"
            >
              <ExternalLink className="size-4" aria-hidden /> Live Demo
            </a>
          ) : null}
          {project.repo ? (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${project.title} on GitHub`}
              className="inline-flex size-10 items-center justify-center rounded-full border border-hairline transition-colors duration-300 hover:border-primary/40"
            >
              <Github className="size-4" aria-hidden />
            </a>
          ) : null}
        </div>
      </div>

      <div className="relative order-1 overflow-hidden p-4 sm:p-6 lg:order-2 lg:p-8">
        <div
          aria-hidden
          className={`pointer-events-none absolute inset-6 -z-10 rounded-3xl bg-gradient-to-br ${project.accent} opacity-25 blur-3xl`}
        />
        <MagneticCard
          magnetic={10}
          tilt={3}
          glow
          glowColor="rgba(99,102,241,0.12)"
          glowSize={350}
          hoverScale={1.01}
          className="overflow-hidden rounded-2xl border border-hairline shadow-[var(--shadow-soft)]"
        >
          <div className="grid">
            <img
              src={project.image}
              alt={`${project.title} interface preview`}
              width={1600}
              height={1008}
              loading="lazy"
              decoding="async"
              className="col-start-1 row-start-1 block w-full object-cover dark:hidden"
            />
            {project.imageDark ? (
              <img
                src={project.imageDark}
                alt={`${project.title} interface preview in dark mode`}
                width={1600}
                height={1008}
                loading="lazy"
                decoding="async"
                className="col-start-1 row-start-1 hidden w-full object-cover dark:block"
              />
            ) : null}
          </div>
        </MagneticCard>
      </div>
    </div>
  );
}

function ConfidentialCard({ project }: { project: Project }) {
  const details = project.details;
  if (!details) return null;

  return (
    <div className="grid gap-0 lg:grid-cols-[1fr_1.15fr]">
      <div className="order-2 flex flex-col justify-center p-7 sm:p-10 lg:order-1">
        <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 font-medium text-primary">
            <Lock className="size-3" aria-hidden /> Professional Industry Project
          </span>
          <span className="rounded-full border border-hairline px-2.5 py-1">{project.year}</span>
          <span>{project.role}</span>
        </div>
        <h3 className="mt-5 text-2xl font-semibold text-balance sm:text-3xl">{project.title}</h3>
        <p className="mt-4 leading-relaxed text-muted-foreground">{project.summary}</p>

        <ul className="mt-6 flex flex-wrap gap-1.5">
          {details.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-hairline bg-background/60 px-2.5 py-1 text-xs text-muted-foreground"
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Link
            to="/projects/$slug"
            params={{ slug: project.slug }}
            className="group/btn inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-transform duration-300 hover:scale-[1.03] active:scale-95"
          >
            View Details
            <ArrowRight
              className="size-4 transition-transform duration-300 group-hover/btn:translate-x-1"
              aria-hidden
            />
          </Link>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-hairline px-3 py-1.5 text-xs text-muted-foreground">
            <Lock className="size-3" aria-hidden />
            Source code and internals confidential
          </span>
        </div>
      </div>

      <div className="relative order-1 overflow-hidden p-4 sm:p-6 lg:order-2 lg:p-8">
        <div
          aria-hidden
          className={`pointer-events-none absolute inset-6 -z-10 rounded-3xl bg-gradient-to-br ${project.accent} opacity-25 blur-3xl`}
        />
        <MagneticCard
          magnetic={10}
          tilt={3}
          glow
          glowColor="rgba(99,102,241,0.12)"
          glowSize={350}
          hoverScale={1.01}
          className="relative flex h-full min-h-56 items-center justify-center overflow-hidden rounded-2xl border border-hairline bg-surface shadow-[var(--shadow-soft)] sm:min-h-64"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 grid-backdrop opacity-40"
          />
          <div className="relative p-8 text-center">
            <span className="mx-auto grid size-14 place-items-center rounded-2xl bg-accent text-accent-foreground">
              <Factory className="size-7" aria-hidden />
            </span>
            <p className="mt-5 text-sm font-semibold text-foreground">{details.category}</p>
            <span className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              <Lock className="size-3" aria-hidden /> Confidential
            </span>
          </div>
        </MagneticCard>
      </div>
    </div>
  );
}
