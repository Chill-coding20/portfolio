import { createContext, useContext } from "react";
import { motion, type MotionStyle, type MotionValue } from "motion/react";
import type { ReactNode } from "react";

export interface MagneticLayerValues {
  x: MotionValue<number>;
  y: MotionValue<number>;
  scale: MotionValue<number>;
}

export interface MagneticContainerLayer extends MagneticLayerValues {
  rotateX: MotionValue<number>;
  rotateY: MotionValue<number>;
}

export interface MagneticLayers {
  container: MagneticContainerLayer;
  glow: {
    x: MotionValue<number>;
    y: MotionValue<number>;
    opacity: MotionValue<number>;
  };
  overlay: MagneticLayerValues;
  content: MagneticLayerValues;
  icon: MagneticLayerValues;
  text: MagneticLayerValues;
}

export const MagneticLayersContext = createContext<MagneticLayers | null>(null);

export function useMagneticLayers() {
  const layers = useContext(MagneticLayersContext);
  if (layers === null) {
    throw new Error("useMagneticLayers must be used within a MagneticCard");
  }
  return layers;
}

type MotionLayerName = "overlay" | "content" | "icon" | "text";

export function MotionLayer({
  layer,
  children,
  className,
  as = "div",
  style,
}: {
  layer: MotionLayerName;
  children: ReactNode;
  className?: string | undefined;
  as?: "div" | "span" | "figure" | "li";
  style?: MotionStyle;
}) {
  const layers = useMagneticLayers();
  const values = layers[layer];
  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      className={className}
      style={{ ...style, x: values.x, y: values.y, scale: values.scale, willChange: "transform" }}
    >
      {children}
    </MotionTag>
  );
}
