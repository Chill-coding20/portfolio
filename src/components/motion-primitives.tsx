import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { MotionHeading } from "@/motion/motion-heading";

export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "section" | "li" | "span";
}) {
  const reduced = useReducedMotion();
  const Comp = motion[as];

  return (
    <Comp
      initial={reduced ? { opacity: 0 } : { opacity: 0, y, filter: "blur(8px)" }}
      whileInView={reduced ? { opacity: 1 } : { opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </Comp>
  );
}

export const staggerParent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

export const staggerChild: Variants = {
  hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  },
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", className)}>
      <Reveal>
        <span className="inline-flex items-center gap-2 rounded-full border border-hairline bg-surface/70 px-3 py-1 text-xs font-medium tracking-wide text-muted-foreground uppercase">
          <span className="size-1.5 rounded-full bg-primary" />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.06}>
        <MotionHeading className="mt-5 text-3xl font-semibold text-balance sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
          {title}
        </MotionHeading>
      </Reveal>
      {description ? (
        <Reveal delay={0.12}>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">{description}</p>
        </Reveal>
      ) : null}
    </div>
  );
}
