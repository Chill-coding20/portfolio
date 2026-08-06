import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown, GraduationCap, Briefcase, Code2 } from "lucide-react";

import { about } from "@/lib/portfolio";
import { Reveal, SectionHeading } from "@/components/motion-primitives";

const kindIcon = {
  Experience: Briefcase,
  Project: Code2,
  Education: GraduationCap,
} as const;

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 py-24">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading eyebrow="About" title="Engineering with a quality-first mindset." />
          <Reveal delay={0.1} className="lg:pt-16">
            <p className="text-lg leading-relaxed text-muted-foreground">{about.summary}</p>
            <div className="mt-8 hairline-x" />
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div>
                <h3 className="text-sm font-medium">What I focus on</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Clean domain models, predictable APIs, and interfaces that stay fast on real devices.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium">How I work</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Small increments, written tests, reviewed code, and documentation that outlives the sprint.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function ExperienceSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="experience" className="scroll-mt-24 py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Experience"
          title="A timeline of building and breaking things on purpose."
          description="Internships, capstone projects and education — expand any entry for the details."
        />

        <ol className="relative mt-14 border-l border-hairline pl-6 sm:pl-10">
          {about.timeline.map((item, i) => {
            const Icon = kindIcon[item.kind as keyof typeof kindIcon] ?? Briefcase;
            const open = openIndex === i;
            return (
              <Reveal as="li" key={item.title} delay={i * 0.08} className="relative pb-8 last:pb-0">
                <span className="absolute -left-[calc(1.5rem+1px)] top-6 grid size-6 -translate-x-1/2 place-items-center rounded-full border border-hairline bg-background sm:-left-[calc(2.5rem+1px)]">
                  <span className="size-2 rounded-full bg-gradient-to-br from-primary to-primary-glow" />
                </span>

                <div className="overflow-hidden rounded-2xl border border-hairline bg-surface/50 transition-colors duration-300 hover:border-primary/30">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? null : i)}
                    aria-expanded={open}
                    suppressHydrationWarning
                    className="flex w-full items-start gap-4 px-5 py-5 text-left sm:px-6"
                  >
                    <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-xl bg-accent text-accent-foreground">
                      <Icon className="size-4" aria-hidden />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <span className="text-xs font-medium tracking-wide text-primary uppercase">{item.period}</span>
                        <span className="rounded-full border border-hairline px-2 py-0.5 text-[11px] text-muted-foreground">
                          {item.kind}
                        </span>
                      </span>
                      <span className="mt-1.5 block text-base font-semibold sm:text-lg">{item.title}</span>
                      <span className="mt-0.5 block text-sm text-muted-foreground">{item.org}</span>
                    </span>
                    <ChevronDown
                      className={`mt-1 size-4 shrink-0 text-muted-foreground transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                      aria-hidden
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {open ? (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-hairline px-5 py-5 sm:px-6">
                          <p className="text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
                          <ul className="mt-4 space-y-2">
                            {item.bullets.map((b) => (
                              <li key={b} className="flex gap-3 text-sm text-muted-foreground">
                                <span className="mt-2 size-1 shrink-0 rounded-full bg-primary" aria-hidden />
                                {b}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
