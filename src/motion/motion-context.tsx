import { createContext, useContext } from "react";
import type { MotionValue } from "motion/react";

import type { CursorPosition } from "@/hooks/use-cursor-position";

export interface MotionContextValue {
  position: CursorPosition;
  velocity: MotionValue<number>;
  enabled: boolean;
}

export const MotionContext = createContext<MotionContextValue | null>(null);

export function useMotionContext() {
  const value = useContext(MotionContext);
  if (value === null) {
    throw new Error("useMotionContext must be used within a MotionProvider");
  }
  return value;
}
