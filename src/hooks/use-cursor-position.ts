import { useEffect } from "react";

export interface CursorPosition {
  x: number;
  y: number;
  t: number;
  enabled: boolean;
}

export const cursorPosition: CursorPosition = { x: 0, y: 0, t: 0, enabled: false };

type FrameListener = () => void;

let detectionDone = false;
let pointerCount = 0;
let rafId = 0;
const frameListeners = new Set<FrameListener>();

function onPointerMove(event: PointerEvent) {
  cursorPosition.x = event.clientX;
  cursorPosition.y = event.clientY;
  cursorPosition.t = performance.now();
}

function detectPointerSupport() {
  if (detectionDone) return;
  detectionDone = true;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const touchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
  cursorPosition.enabled = !reducedMotion && !touchDevice;
}

function tick() {
  if (pointerCount === 0 && frameListeners.size === 0) {
    rafId = 0;
    return;
  }
  for (const listener of frameListeners) listener();
  rafId = requestAnimationFrame(tick);
}

function ensureLoop() {
  if (rafId === 0) rafId = requestAnimationFrame(tick);
}

export function subscribeFrame(listener: FrameListener) {
  frameListeners.add(listener);
  ensureLoop();
  return () => {
    frameListeners.delete(listener);
  };
}

export function useCursorPosition() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    detectPointerSupport();
    if (!cursorPosition.enabled) return;

    if (pointerCount === 0) {
      window.addEventListener("pointermove", onPointerMove, { passive: true });
      ensureLoop();
    }
    pointerCount += 1;

    return () => {
      pointerCount -= 1;
      if (pointerCount === 0) {
        window.removeEventListener("pointermove", onPointerMove);
        if (frameListeners.size === 0 && rafId !== 0) {
          cancelAnimationFrame(rafId);
          rafId = 0;
        }
      }
    };
  }, []);

  return cursorPosition;
}
