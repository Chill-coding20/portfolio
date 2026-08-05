import { motion, useTransform, type HTMLMotionProps, type MotionStyle } from "motion/react";
import { useRef } from "react";

import { useCursorField } from "@/hooks/use-cursor-field";
import { motionConfig } from "@/motion/motion.config";

type MotionImageProps = Omit<HTMLMotionProps<"img">, "src" | "alt" | "className" | "style"> & {
  src: string;
  alt: string;
  className?: string | undefined;
  depth?: number;
  style?: MotionStyle;
};

export function MotionImage({
  src,
  alt,
  className,
  depth = 1,
  style,
  ...imgProps
}: MotionImageProps) {
  const ref = useRef<HTMLImageElement>(null);
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

  return (
    <motion.img
      ref={ref}
      src={src}
      alt={alt}
      className={className}
      style={{ ...style, x, y, willChange: "transform" }}
      {...imgProps}
    />
  );
}
