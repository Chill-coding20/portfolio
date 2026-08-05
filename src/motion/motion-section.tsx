import type { ReactNode } from "react";

import { CursorParallax } from "@/motion/cursor-parallax";

export function MotionSection({
  children,
  className,
  id,
  depth = 1,
}: {
  children: ReactNode;
  className?: string | undefined;
  id?: string | undefined;
  depth?: number;
}) {
  return (
    <CursorParallax as="section" id={id} className={className} depth={depth}>
      {children}
    </CursorParallax>
  );
}
