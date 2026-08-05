import { motion, useTransform } from "motion/react";
import { useRef, type ReactNode } from "react";

import { useCursorField } from "@/hooks/use-cursor-field";
import { motionConfig } from "@/motion/motion.config";

export function MotionHeading({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLHeadingElement>(null);
  const { values } = useCursorField(ref);

  const y = useTransform(() => {
    const offset =
      values.directionY.get() *
      values.proximity.get() *
      motionConfig.parallax.max *
      motionConfig.parallax.heading;
    return motionConfig.parallax.enabled ? offset : 0;
  });

  return (
    <motion.h2 ref={ref} className={className} style={{ y, willChange: "transform" }}>
      {children}
    </motion.h2>
  );
}
