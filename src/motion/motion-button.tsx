import { motion } from "motion/react";
import type { MouseEventHandler, ReactNode } from "react";

import { MagneticCard } from "@/components/magnetic-card";
import { useMagneticLayers } from "@/motion/magnetic-layers";
import { motionConfig } from "@/motion/motion.config";

interface MotionButtonProps {
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
  title?: string;
  type?: "button" | "submit" | "reset";
  href?: string;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLElement>;
  magnetic?: number;
}

function MotionButtonInner({ children, icon, ...rest }: MotionButtonProps) {
  const { icon: iconLayer, text: textLayer } = useMagneticLayers();

  const iconSpan = icon ? (
    <motion.span style={{ x: iconLayer.x, y: iconLayer.y }} aria-hidden>
      {icon}
    </motion.span>
  ) : null;
  const textSpan = <motion.span style={{ x: textLayer.x, y: textLayer.y }}>{children}</motion.span>;

  if (rest.href !== undefined) {
    return (
      <a {...rest}>
        {iconSpan}
        {textSpan}
      </a>
    );
  }

  return (
    <button type={rest.type ?? "button"} disabled={rest.disabled ?? false} {...rest}>
      {iconSpan}
      {textSpan}
    </button>
  );
}

export function MotionButton({ magnetic, children, icon, ...rest }: MotionButtonProps) {
  return (
    <MagneticCard
      magnetic={magnetic ?? motionConfig.motionButton.magnetic}
      glow={motionConfig.motionButton.glow}
      glowColor={motionConfig.motionButton.glowColor}
      glowSize={motionConfig.motionButton.glowSize}
      className="inline-flex rounded-full"
    >
      <MotionButtonInner icon={icon} {...rest}>
        {children}
      </MotionButtonInner>
    </MagneticCard>
  );
}
