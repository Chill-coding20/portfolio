import { useEffect, useMemo, useState, type ReactNode } from "react";

import { useCursorPosition } from "@/hooks/use-cursor-position";
import { cursorVelocity } from "@/hooks/use-cursor-field";
import { MotionContext, type MotionContextValue } from "@/motion/motion-context";

export function MotionProvider({ children }: { children: ReactNode }) {
  const position = useCursorPosition();
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    setEnabled(position.enabled);
  }, [position]);

  const value = useMemo<MotionContextValue>(
    () => ({ position, velocity: cursorVelocity, enabled }),
    [position, enabled],
  );

  return <MotionContext.Provider value={value}>{children}</MotionContext.Provider>;
}
