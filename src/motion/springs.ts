import type { SpringOptions } from "motion/react";

export type SpringName = "hero" | "card" | "button" | "soft" | "magnetic" | "strong";

export const springPresets: Record<SpringName, SpringOptions> = {
  soft: { stiffness: 180, damping: 24, mass: 0.8 },
  card: { stiffness: 320, damping: 28, mass: 0.7 },
  magnetic: { stiffness: 320, damping: 28, mass: 0.7 },
  button: { stiffness: 400, damping: 30, mass: 0.6 },
  strong: { stiffness: 560, damping: 34, mass: 0.5 },
  hero: { stiffness: 260, damping: 26, mass: 0.8 },
};

export function springFor(name: SpringName): SpringOptions {
  return springPresets[name];
}
