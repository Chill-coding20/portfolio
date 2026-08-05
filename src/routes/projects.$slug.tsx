import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  BadgeCheck,
  BarChart3,
  Bell,
  BellRing,
  Boxes,
  CheckCircle2,
  ClipboardCheck,
  Database,
  ExternalLink,
  Factory,
  FileText,
  Gauge,
  Github,
  Info,
  LayoutDashboard,
  Layers,
  Lightbulb,
  Lock,
  Rocket,
  Route as RouteIcon,
  ShieldQuestion,
  Timer,
  TrendingDown,
  TrendingUp,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { projects, type Project, type ProjectDetails } from "@/lib/portfolio";
import { Reveal } from "@/components/motion-primitives";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Project not found — P. Siranjeevi" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const t = `${loaderData.project.title} — Case Study`;
    return {
      meta: [
        { title: t },
        { name: "description", content: loaderData.project.summary },
        { property: "og:title", content: t },
        { property: "og:description", content: loaderData.project.summary },
        { property: "og:type", content: "article" },
      ],
    };
  },
  component: ProjectDetail,
});

function ProjectDetail() {
  const { project } = Route.useLoaderData() as { project: Project };
  if (project.details) {
    return <EnterpriseCaseStudy project={project} details={project.details} />;
  }
  return <StandardCaseStudy project={project} />;
}

function StandardCaseStudy({ project }: { project: Project }) {
  return (
    <article className="pb-24">
      <header className="relative overflow-hidden pt-32 pb-16 sm:pt-40">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{ background: "var(--gradient-hero)" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 grid-backdrop opacity-50"
        />
        <div className="container-page">
          <Reveal>
            <Link
              to="/"
              hash="projects"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="size-4" aria-hidden /> All projects
            </Link>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="mt-8 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
              <span className="rounded-full border border-hairline px-2.5 py-1">
                {project.year}
              </span>
              <span>{project.role}</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-5 max-w-3xl text-4xl font-semibold text-balance sm:text-5xl lg:text-6xl">
              {project.title}
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {project.description}
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap gap-3">
              {project.demo ? (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-glow px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition-transform duration-300 hover:scale-[1.03]"
                >
                  <ExternalLink className="size-4" aria-hidden /> Live Demo
                </a>
              ) : null}
              {project.repo ? (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 rounded-full border border-hairline bg-surface/60 px-5 py-2.5 text-sm font-medium transition-colors duration-300 hover:border-primary/40"
                >
                  <Github className="size-4" aria-hidden /> Source Code
                </a>
              ) : null}
            </div>
          </Reveal>
        </div>
      </header>

      <section className="container-page" aria-label="Screenshots">
        <Reveal>
          <figure className="relative">
            <div
              aria-hidden
              className={`pointer-events-none absolute inset-8 -z-10 rounded-3xl bg-gradient-to-br ${project.accent} opacity-30 blur-3xl`}
            />
            <div className="grid">
              <img
                src={project.image}
                alt={`${project.title} dashboard screenshot`}
                width={1600}
                height={1008}
                className="col-start-1 row-start-1 w-full rounded-3xl border border-hairline shadow-[var(--shadow-soft)] dark:hidden"
              />
              {project.imageDark ? (
                <img
                  src={project.imageDark}
                  alt={`${project.title} dashboard screenshot in dark mode`}
                  width={1600}
                  height={1008}
                  className="col-start-1 row-start-1 hidden w-full rounded-3xl border border-hairline shadow-[var(--shadow-soft)] dark:block"
                />
              ) : null}
            </div>
            <figcaption className="mt-3 text-center text-xs text-muted-foreground">
              Primary interface of {project.title}
            </figcaption>
          </figure>
        </Reveal>
      </section>

      <section className="container-page pt-24" aria-labelledby="features">
        <Reveal>
          <h2 id="features" className="text-3xl font-semibold sm:text-4xl">
            Features
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {project.features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.05}>
              <div className="h-full rounded-2xl border border-hairline bg-surface/50 p-6 transition-colors duration-300 hover:border-primary/30">
                <h3 className="text-base font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {project.architecture && project.architecture.length > 0 ? (
        <section className="container-page pt-24" aria-labelledby="architecture">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal>
              <h2
                id="architecture"
                className="inline-flex items-center gap-3 text-3xl font-semibold sm:text-4xl"
              >
                <Layers className="size-7 text-primary" aria-hidden /> Architecture
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <ol className="space-y-3">
                {project.architecture.map((line, i) => (
                  <li
                    key={line}
                    className="flex gap-4 rounded-2xl border border-hairline bg-surface/40 px-5 py-4"
                  >
                    <span className="font-mono text-xs text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm leading-relaxed text-muted-foreground">{line}</span>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </section>
      ) : null}

      <section className="container-page pt-24" aria-labelledby="tech">
        <Reveal>
          <h2 id="tech" className="text-3xl font-semibold sm:text-4xl">
            Tech Stack
          </h2>
        </Reveal>
        <div className="mt-8 flex flex-wrap gap-2.5">
          {project.tech.map((t, i) => (
            <Reveal key={t} delay={i * 0.03} y={12}>
              <span className="inline-flex rounded-xl border border-hairline bg-surface/60 px-4 py-2.5 text-sm font-medium">
                {t}
              </span>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-page pt-24" aria-labelledby="challenges">
        <Reveal>
          <h2
            id="challenges"
            className="inline-flex items-center gap-3 text-3xl font-semibold sm:text-4xl"
          >
            <ShieldQuestion className="size-7 text-primary" aria-hidden /> Challenges &amp;
            Solutions
          </h2>
        </Reveal>
        <div className="mt-10 space-y-4">
          {project.challenges.map((c, i) => (
            <Reveal key={c.problem} delay={i * 0.06}>
              <div className="grid gap-6 rounded-2xl border border-hairline bg-surface/50 p-6 sm:grid-cols-2 sm:p-8">
                <div>
                  <span className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                    Challenge
                  </span>
                  <p className="mt-2 text-sm leading-relaxed">{c.problem}</p>
                </div>
                <div className="sm:border-l sm:border-hairline sm:pl-6">
                  <span className="text-xs font-medium tracking-wide text-primary uppercase">
                    Solution
                  </span>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.solution}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-page pt-24">
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-hairline bg-surface/50 p-7 sm:p-9">
              <h2 className="inline-flex items-center gap-3 text-2xl font-semibold">
                <Lightbulb className="size-6 text-primary" aria-hidden /> Lessons Learned
              </h2>
              <ul className="mt-6 space-y-3">
                {project.lessons.map((l) => (
                  <li key={l} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-primary" aria-hidden />
                    {l}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="h-full rounded-3xl border border-hairline bg-surface/50 p-7 sm:p-9">
              <h2 className="inline-flex items-center gap-3 text-2xl font-semibold">
                <Rocket className="size-6 text-primary" aria-hidden /> Future Improvements
              </h2>
              <ul className="mt-6 space-y-3">
                {project.future.map((l) => (
                  <li key={l} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-primary" aria-hidden />
                    {l}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-page pt-24">
        <Reveal>
          <div className="flex flex-wrap items-center justify-between gap-6 rounded-3xl border border-hairline bg-surface/50 p-8 sm:p-10">
            <div>
              <h2 className="text-2xl font-semibold">Interested in the details?</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Happy to walk through the code and decisions.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform duration-300 hover:scale-[1.03]"
            >
              Get in touch
            </Link>
          </div>
        </Reveal>
      </section>
    </article>
  );
}

const MODULE_ICONS: Record<string, LucideIcon> = {
  "Digital Factory": Factory,
  "Data Logger": Database,
  "OEE Dashboard": Gauge,
  "Andon Dashboard": BellRing,
  "Cycle Time Log": Timer,
  "Production Losses": TrendingDown,
  Traceability: RouteIcon,
  "Route Card": FileText,
  "DWM Dashboard": LayoutDashboard,
  "Defect Analytics": BarChart3,
  "Master Data & Access": Users,
  Notifications: Bell,
};

function EnterpriseCaseStudy({ project, details }: { project: Project; details: ProjectDetails }) {
  return (
    <article className="pb-24">
      <header className="relative overflow-hidden pt-32 pb-16 sm:pt-40">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{ background: "var(--gradient-hero)" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 grid-backdrop opacity-50"
        />
        <div className="container-page">
          <Reveal>
            <Link
              to="/"
              hash="projects"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="size-4" aria-hidden /> All projects
            </Link>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="mt-8 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 font-medium text-primary">
                <Lock className="size-3" aria-hidden /> Confidential Enterprise Project
              </span>
              <span className="rounded-full border border-hairline px-2.5 py-1">
                {project.year}
              </span>
              <span>{details.duration}</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-5 max-w-3xl text-4xl font-semibold text-balance sm:text-5xl lg:text-6xl">
              {project.title}
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {project.description}
            </p>
          </Reveal>
        </div>
      </header>

      <section className="container-page pt-16 sm:pt-20" aria-labelledby="overview">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <h2
              id="overview"
              className="inline-flex items-center gap-3 text-3xl font-semibold sm:text-4xl"
            >
              <Info className="size-7 text-primary" aria-hidden /> Platform Overview
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="space-y-4">
              {details.overview.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-sm leading-relaxed text-muted-foreground sm:text-base"
                >
                  {paragraph}
                </p>
              ))}
            </div>
            <dl className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline sm:grid-cols-2">
              {[
                ["Category", details.category],
                ["Industry", details.industry],
                ["Role", project.role],
                ["Duration", details.duration],
              ].map(([label, value]) => (
                <div key={label} className="bg-background/70 px-5 py-4">
                  <dt className="text-xs text-muted-foreground">{label}</dt>
                  <dd className="mt-1 text-sm font-medium">{value}</dd>
                </div>
              ))}
              <div className="bg-background/70 px-5 py-4 sm:col-span-2">
                <dt className="text-xs text-muted-foreground">Primary Users</dt>
                <dd className="mt-1.5 flex flex-wrap gap-1.5">
                  {details.users.map((user) => (
                    <span
                      key={user}
                      className="rounded-full border border-hairline px-2.5 py-0.5 text-xs"
                    >
                      {user}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </section>

      <section className="container-page pt-16 sm:pt-20" aria-labelledby="modules">
        <Reveal>
          <h2
            id="modules"
            className="inline-flex items-center gap-3 text-3xl font-semibold sm:text-4xl"
          >
            <Boxes className="size-7 text-primary" aria-hidden /> Platform Modules
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {details.modules.map((module, i) => {
            const Icon = MODULE_ICONS[module.name] ?? Boxes;
            return (
              <Reveal key={module.name} delay={i * 0.04}>
                <div className="h-full rounded-2xl border border-hairline bg-surface/50 p-6 transition-colors duration-300 hover:border-primary/30">
                  <span className="grid size-10 place-items-center rounded-xl bg-accent text-accent-foreground">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <h3 className="mt-4 text-base font-semibold">{module.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {module.detail}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="container-page pt-16 sm:pt-20" aria-labelledby="responsibilities">
        <Reveal>
          <h2
            id="responsibilities"
            className="inline-flex items-center gap-3 text-3xl font-semibold sm:text-4xl"
          >
            <ClipboardCheck className="size-7 text-primary" aria-hidden /> My Responsibilities
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {details.responsibilities.map((responsibility, i) => (
            <Reveal key={responsibility} delay={i * 0.04}>
              <div className="flex h-full items-start gap-4 rounded-2xl border border-hairline bg-surface/50 p-6 transition-colors duration-300 hover:border-primary/30">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
                <p className="text-sm leading-relaxed">{responsibility}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-page pt-16 sm:pt-20" aria-labelledby="skills">
        <Reveal>
          <h2
            id="skills"
            className="inline-flex items-center gap-3 text-3xl font-semibold sm:text-4xl"
          >
            <BadgeCheck className="size-7 text-primary" aria-hidden /> Technical Skills
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {details.skillGroups.map((group, i) => (
            <Reveal key={group.group} delay={i * 0.05}>
              <div className="h-full rounded-2xl border border-hairline bg-surface/50 p-6">
                <h3 className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                  {group.group}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-hairline bg-background/60 px-2.5 py-1 text-xs text-muted-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-page pt-16 sm:pt-20" aria-labelledby="value">
        <Reveal>
          <h2
            id="value"
            className="inline-flex items-center gap-3 text-3xl font-semibold sm:text-4xl"
          >
            <TrendingUp className="size-7 text-primary" aria-hidden /> Business Value
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {details.businessValue.map((value, i) => (
            <Reveal key={value.title} delay={i * 0.05}>
              <div className="h-full rounded-2xl border border-hairline bg-surface/50 p-6 transition-colors duration-300 hover:border-primary/30">
                <h3 className="text-base font-semibold">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{value.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-page pt-16 sm:pt-20" aria-labelledby="confidentiality">
        <Reveal>
          <div
            id="confidentiality"
            className="relative overflow-hidden rounded-3xl border border-primary/25 bg-primary/5 p-8 sm:p-10"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -top-24 -right-24 size-72 rounded-full bg-primary/15 blur-3xl"
            />
            <div className="relative flex flex-col gap-6 sm:flex-row sm:items-start">
              <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-primary/15 text-primary">
                <Lock className="size-6" aria-hidden />
              </span>
              <div>
                <h3 className="text-xl font-semibold">Confidential Enterprise Project</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{details.note}</p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="container-page pt-16 sm:pt-20">
        <Reveal>
          <div className="flex flex-wrap items-center justify-between gap-6 rounded-3xl border border-hairline bg-surface/50 p-8 sm:p-10">
            <div>
              <h2 className="text-2xl font-semibold">Interested in the work?</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Happy to discuss the platform, the process and the outcomes in a conversation.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform duration-300 hover:scale-[1.03]"
            >
              Get in touch
            </Link>
          </div>
        </Reveal>
      </section>
    </article>
  );
}
