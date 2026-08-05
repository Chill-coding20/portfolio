import { animate, motion, useMotionTemplate, useMotionValue, useTransform } from "motion/react";
import { forwardRef, useCallback, useEffect, useMemo, useRef, type ReactNode } from "react";

import { magneticRadius, useCursorField } from "@/hooks/use-cursor-field";
import { motionConfig } from "@/motion/motion.config";
import { MagneticLayersContext, type MagneticLayers } from "@/motion/magnetic-layers";
import { springFor } from "@/motion/springs";

interface MagneticCardProps {
  children: ReactNode;
  className?: string;
  magnetic?: number;
  tilt?: number;
  perspective?: number;
  glow?: boolean;
  glowColor?: string;
  glowSize?: number;
  hoverScale?: number;
  as?: "div" | "article" | "li" | "span";
}

export const MagneticCard = forwardRef<HTMLDivElement, MagneticCardProps>(function MagneticCard(
  {
    children,
    className,
    magnetic = 0,
    tilt = 0,
    perspective = motionConfig.perspective.default,
    glow = false,
    glowColor = motionConfig.glow.defaultColor,
    glowSize = motionConfig.glow.defaultSize,
    hoverScale = 0,
    as: Tag = "div",
  },
  forwardedRef,
) {
  const innerRef = useRef<HTMLDivElement>(null);
  const { values, enabled, subscribe, velocity } = useCursorField(innerRef, magneticRadius);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const scale = useMotionValue(1);
  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);
  const glowOpacity = useMotionValue(0);

  const overlayX = useTransform(x, (v) => v * motionConfig.layers.overlay);
  const overlayY = useTransform(y, (v) => v * motionConfig.layers.overlay);
  const overlayScale = useTransform(scale, (v) => 1 + (v - 1) * motionConfig.layers.overlay);
  const contentX = useTransform(x, (v) => v * motionConfig.layers.content);
  const contentY = useTransform(y, (v) => v * motionConfig.layers.content);
  const contentScale = useTransform(scale, (v) => 1 + (v - 1) * motionConfig.layers.content);
  const iconX = useTransform(x, (v) => v * motionConfig.layers.icon);
  const iconY = useTransform(y, (v) => v * motionConfig.layers.icon);
  const iconScale = useTransform(scale, (v) => 1 + (v - 1) * motionConfig.layers.icon);
  const textX = useTransform(x, (v) => v * motionConfig.layers.text);
  const textY = useTransform(y, (v) => v * motionConfig.layers.text);
  const textScale = useTransform(scale, (v) => 1 + (v - 1) * motionConfig.layers.text);

  const layers = useMemo<MagneticLayers>(
    () => ({
      container: { x, y, rotateX, rotateY, scale },
      glow: { x: glowX, y: glowY, opacity: glowOpacity },
      overlay: { x: overlayX, y: overlayY, scale: overlayScale },
      content: { x: contentX, y: contentY, scale: contentScale },
      icon: { x: iconX, y: iconY, scale: iconScale },
      text: { x: textX, y: textY, scale: textScale },
    }),
    [
      x,
      y,
      rotateX,
      rotateY,
      scale,
      glowX,
      glowY,
      glowOpacity,
      overlayX,
      overlayY,
      overlayScale,
      contentX,
      contentY,
      contentScale,
      iconX,
      iconY,
      iconScale,
      textX,
      textY,
      textScale,
    ],
  );

  const transform = useMotionTemplate`perspective(${perspective}px) translate3d(${x}px, ${y}px, 0px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
  const glowBackground = useMotionTemplate`radial-gradient(${glowSize}px circle at ${glowX}% ${glowY}%, ${glowColor}, transparent 70%)`;

  const setRefs = useCallback(
    (node: HTMLDivElement | null) => {
      innerRef.current = node;
      if (typeof forwardedRef === "function") forwardedRef(node);
      else if (forwardedRef) forwardedRef.current = node;
    },
    [forwardedRef],
  );

  useEffect(() => {
    const el = innerRef.current;
    if (!el) return;
    if (!enabled) return;

    const isIdle = magnetic === 0 && tilt === 0 && !glow && hoverScale === 0;
    if (isIdle) return;

    const apply = () => {
      if (values.hovered.get() !== 1) return;

      if (magnetic > 0) {
        const boost =
          motionConfig.magnetic.velocityBoost *
          Math.min(1, velocity.get() / motionConfig.velocity.max);
        x.set(values.directionX.get() * (values.proximity.get() * magnetic + boost));
        y.set(values.directionY.get() * (values.proximity.get() * magnetic + boost));
      }

      if (tilt > 0) {
        rotateX.set((0.5 - values.ny.get()) * tilt * motionConfig.tilt.multiplier);
        rotateY.set((values.nx.get() - 0.5) * tilt * motionConfig.tilt.multiplier);
      }

      if (glow) {
        glowX.set(values.nx.get() * 100);
        glowY.set(values.ny.get() * 100);
        const edgeX = Math.min(values.nx.get(), 1 - values.nx.get());
        const edgeY = Math.min(values.ny.get(), 1 - values.ny.get());
        glowOpacity.set(Math.min(1, Math.min(edgeX, edgeY) * motionConfig.glow.edgeFalloff));
      }
    };

    const handleEnter = () => {
      if (hoverScale > 0) scale.set(hoverScale);
    };

    const handleLeave = () => {
      const leave = motionConfig.springs.leave;
      const spring = springFor(
        values.normalizedDistance.get() >= leave.farThreshold ? leave.far : leave.near,
      );
      animate(x, 0, spring);
      animate(y, 0, spring);
      animate(rotateX, 0, spring);
      animate(rotateY, 0, spring);
      animate(glowOpacity, 0, { duration: motionConfig.glow.fadeDuration, ease: "easeOut" });
      if (hoverScale > 0) animate(scale, 1, spring);
    };

    subscribe(apply);
    el.addEventListener("pointerenter", handleEnter);
    el.addEventListener("pointerleave", handleLeave);

    return () => {
      subscribe(null);
      el.removeEventListener("pointerenter", handleEnter);
      el.removeEventListener("pointerleave", handleLeave);
    };
  }, [
    enabled,
    magnetic,
    tilt,
    glow,
    hoverScale,
    subscribe,
    values,
    velocity,
    x,
    y,
    rotateX,
    rotateY,
    scale,
    glowX,
    glowY,
    glowOpacity,
  ]);

  const MotionTag = motion[Tag] as typeof motion.div;

  return (
    <MagneticLayersContext.Provider value={layers}>
      <MotionTag
        ref={setRefs}
        className={className}
        style={{
          transform,
          transformStyle: "preserve-3d",
          willChange: "transform",
          position: "relative",
        }}
      >
        {children}
        {glow ? (
          <motion.div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "inherit",
              pointerEvents: "none",
              zIndex: 10,
              opacity: glowOpacity,
              background: glowBackground,
            }}
          />
        ) : null}
      </MotionTag>
    </MagneticLayersContext.Provider>
  );
});

MagneticCard.displayName = "MagneticCard";
