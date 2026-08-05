import type { SpringName } from "@/motion/springs";

export const motionConfig = {
  cursor: {
    radius: 250,
  },
  perspective: {
    default: 1200,
  },
  magnetic: {
    maxDistanceFactor: 1.4,
    velocityBoost: 5,
  },
  tilt: {
    multiplier: 2,
  },
  glow: {
    defaultColor: "rgba(99,102,241,0.15)",
    defaultSize: 400,
    edgeFalloff: 6,
    fadeDuration: 0.3,
  },
  velocity: {
    smoothing: 0.15,
    max: 2400,
  },
  influence: {
    hover: 1,
    adjacent: 0.3,
    far: 0.1,
    adjacentStart: 0.5,
    farStart: 0.85,
  },
  layers: {
    container: 1,
    glow: 1,
    overlay: 1.1,
    content: 1.3,
    icon: 2,
    text: 1.5,
  },
  springs: {
    leave: {
      near: "card" satisfies SpringName,
      far: "strong" satisfies SpringName,
      farThreshold: 0.8,
    },
  },
  parallax: {
    enabled: true,
    max: 12,
    heading: 1,
    image: 1,
    section: 1,
  },
  motionButton: {
    magnetic: 6,
    glow: true,
    glowColor: "rgba(255,255,255,0.16)",
    glowSize: 200,
    spring: "button" satisfies SpringName,
  },
} as const;
