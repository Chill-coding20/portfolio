import { motion, useTransform } from "motion/react";
import { useRef, type ReactNode } from "react";

import { useCursorField } from "@/hooks/use-cursor-field";
import { motionConfig } from "@/motion/motion.config";

export function CursorParallax({
  children,
  className,
  id,
  depth = 1,
  as = "div",
}: {
  children: ReactNode;
  className?: string | undefined;
  id?: string | undefined;
  depth?: number;
  as?: "div" | "section" | "article" | "li" | "figure";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { values } = useCursorField(ref);

  const max = motionConfig.parallax.max * depth;
  const x = useTransform(() => {
    const offset = values.directionX.get() * values.proximity.get() * max;
    return motionConfig.parallax.enabled ? offset : 0;
  });
  const y = useTransform(() => {
    const offset = values.directionY.get() * values.proximity.get() * max;
    return motionConfig.parallax.enabled ? offset : 0;
  });

  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag ref={ref} id={id} className={className} style={{ x, y, willChange: "transform" }}>
      {children}
    </MotionTag>
  );
}
