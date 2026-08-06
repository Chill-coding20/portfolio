import {
  Bot,
  Database,
  Github,
  Layout,
  Server,
  ShieldCheck,
  Wrench,
  Workflow,
  ArrowUpRight,
} from "lucide-react";

import { githubActivity, profile, skillGroups, techStack } from "@/lib/portfolio";
import { Reveal, SectionHeading } from "@/components/motion-primitives";
import { MagneticCard } from "@/components/magnetic-card";
import { MotionLayer } from "@/motion/magnetic-layers";
import { MotionSection } from "@/motion/motion-section";

const icons = { Layout, Server, Database, Bot, ShieldCheck, Workflow, Wrench } as const;

export function SkillsSection() {
  return (
    <MotionSection id="skills" className="scroll-mt-24 py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Skills"
          title="The toolkit, organised the way I actually use it."
          description="From API design to the automation that verifies it."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {skillGroups.map((group, i) => {
            const Icon = icons[group.icon as keyof typeof icons];
            return (
              <Reveal key={group.title} delay={i * 0.05} className={group.span}>
                <MagneticCard
                  magnetic={6}
                  tilt={3}
                  glow
                  glowColor="rgba(99,102,241,0.12)"
                  glowSize={250}
                  className="h-full overflow-hidden rounded-2xl border border-hairline bg-surface/50 p-6"
                >
                  <MotionLayer
                    as="span"
                    layer="icon"
                    className="grid size-10 place-items-center rounded-xl bg-accent text-accent-foreground"
                  >
                    <Icon className="size-5" aria-hidden />
                  </MotionLayer>
                  <MotionLayer layer="text">
                    <h3 className="mt-4 text-base font-semibold">{group.title}</h3>
                    <ul className="mt-3 flex flex-wrap gap-1.5">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="rounded-full border border-hairline bg-background/60 px-2.5 py-1 text-xs text-muted-foreground"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </MotionLayer>
                </MagneticCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </MotionSection>
  );
}

export function TechStackSection() {
  return (
    <MotionSection id="tech-stack" className="scroll-mt-24 py-24">
      <div className="container-page">
        <SectionHeading eyebrow="Tech Stack" title="Technologies I reach for every day." />
        <div className="mt-12 flex flex-wrap gap-2.5">
          {techStack.map((tech, i) => (
            <Reveal key={tech} delay={i * 0.03} y={12}>
              <span className="inline-flex items-center rounded-xl border border-hairline bg-surface/60 px-4 py-2.5 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40">
                {tech}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}

export function GithubSection() {
  return (
    <MotionSection id="github" className="scroll-mt-24 py-24">
      <div className="container-page">
        <Reveal>
          <MagneticCard
            magnetic={8}
            tilt={2}
            glow
            glowColor="rgba(99,102,241,0.1)"
            glowSize={400}
            className="relative overflow-hidden rounded-3xl border border-hairline bg-surface/50 p-8 sm:p-12"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -top-32 right-0 size-96 rounded-full bg-primary/15 blur-3xl"
            />
            <div className="flex flex-wrap items-start justify-between gap-6">
              <div className="max-w-lg">
                <span className="inline-flex items-center gap-2 rounded-full border border-hairline bg-background/60 px-3 py-1 text-xs text-muted-foreground uppercase">
                  <Github className="size-3.5" aria-hidden /> GitHub
                </span>
                <h2 className="mt-5 text-3xl font-semibold text-balance sm:text-4xl">
                  Code, commits and continuous practice.
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Most of what I learn ends up as a repository — frameworks, experiments and full
                  applications.
                </p>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group mt-7 inline-flex items-center gap-2 rounded-full border border-hairline bg-background/70 px-5 py-2.5 text-sm font-medium transition-all duration-300 hover:border-primary/40"
                >
                  Visit my GitHub
                  <ArrowUpRight
                    className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden
                  />
                </a>
              </div>

              <dl className="grid w-full max-w-sm grid-cols-2 gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline">
                {githubActivity.map((item) => (
                  <div key={item.label} className="bg-background/70 px-4 py-5">
                    <dt className="text-xs text-muted-foreground">{item.label}</dt>
                    <dd className="mt-1 text-lg font-semibold tracking-tight">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </MagneticCard>
        </Reveal>
      </div>
    </MotionSection>
  );
}
