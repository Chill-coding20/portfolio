import { useCallback, useEffect, useRef, type RefObject } from "react";
import { motionValue, type MotionValue } from "motion/react";

import { cursorPosition, subscribeFrame } from "@/hooks/use-cursor-position";
import { motionConfig } from "@/motion/motion.config";
import { useMotionContext } from "@/motion/motion-context";

export interface CursorFieldValues {
  dx: MotionValue<number>;
  dy: MotionValue<number>;
  distance: MotionValue<number>;
  normalizedDistance: MotionValue<number>;
  directionX: MotionValue<number>;
  directionY: MotionValue<number>;
  angle: MotionValue<number>;
  influence: MotionValue<number>;
  proximity: MotionValue<number>;
  hovered: MotionValue<number>;
  nx: MotionValue<number>;
  ny: MotionValue<number>;
}

export const cursorVelocity = motionValue(0);

export function magneticRadius(rect: DOMRect) {
  return Math.max(rect.width, rect.height) * motionConfig.magnetic.maxDistanceFactor;
}

const defaultRadius = () => motionConfig.cursor.radius;

interface FieldEntry {
  getEl: () => HTMLElement | null;
  getRadius: (rect: DOMRect) => number;
  values: CursorFieldValues;
  onFrame: (() => void) | null;
}

const entries = new Set<FieldEntry>();

let lastX = 0;
let lastY = 0;
let lastT = 0;
let smoothedVelocity = 0;

function smoothstep(t: number) {
  const clamped = Math.max(0, Math.min(1, t));
  return clamped * clamped * (3 - 2 * clamped);
}

function tieredInfluence(normalizedDistance: number) {
  if (normalizedDistance >= motionConfig.influence.farStart) return motionConfig.influence.far;
  if (normalizedDistance >= motionConfig.influence.adjacentStart) {
    return motionConfig.influence.adjacent;
  }
  return motionConfig.influence.hover;
}

function computeFrame() {
  const now = cursorPosition.t;
  const dt = (now - lastT) / 1000;
  if (dt > 0) {
    const speed = Math.hypot(cursorPosition.x - lastX, cursorPosition.y - lastY) / dt;
    smoothedVelocity += (speed - smoothedVelocity) * motionConfig.velocity.smoothing;
    lastX = cursorPosition.x;
    lastY = cursorPosition.y;
    lastT = now;
  }
  cursorVelocity.set(Math.min(smoothedVelocity, motionConfig.velocity.max));

  for (const entry of entries) {
    const el = entry.getEl();
    if (!el || !el.isConnected) continue;

    const rect = el.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const dx = cursorPosition.x - centerX;
    const dy = cursorPosition.y - centerY;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const radius = Math.max(1, entry.getRadius(rect));
    const normalizedDistance = Math.min(1, distance / radius);
    const directionX = dx / (distance || 1);
    const directionY = dy / (distance || 1);

    const { values } = entry;
    values.dx.set(dx);
    values.dy.set(dy);
    values.distance.set(distance);
    values.normalizedDistance.set(normalizedDistance);
    values.directionX.set(directionX);
    values.directionY.set(directionY);
    values.angle.set(Math.atan2(dy, dx));
    values.influence.set(tieredInfluence(normalizedDistance));
    values.proximity.set(smoothstep(1 - normalizedDistance));
    values.hovered.set(
      cursorPosition.x >= rect.left &&
        cursorPosition.x <= rect.right &&
        cursorPosition.y >= rect.top &&
        cursorPosition.y <= rect.bottom
        ? 1
        : 0,
    );
    values.nx.set((cursorPosition.x - rect.left) / rect.width);
    values.ny.set((cursorPosition.y - rect.top) / rect.height);

    entry.onFrame?.();
  }
}

let frameUnsubscribe: (() => void) | null = null;

function registerEntry(entry: FieldEntry) {
  entries.add(entry);
  if (entries.size === 1 && frameUnsubscribe === null) {
    frameUnsubscribe = subscribeFrame(computeFrame);
  }
  return entry;
}

function unregisterEntry(entry: FieldEntry) {
  entries.delete(entry);
  if (entries.size === 0 && frameUnsubscribe !== null) {
    frameUnsubscribe();
    frameUnsubscribe = null;
  }
}

function createFieldValues(): CursorFieldValues {
  return {
    dx: motionValue(0),
    dy: motionValue(0),
    distance: motionValue(0),
    normalizedDistance: motionValue(0),
    directionX: motionValue(0),
    directionY: motionValue(0),
    angle: motionValue(0),
    influence: motionValue(0),
    proximity: motionValue(0),
    hovered: motionValue(0),
    nx: motionValue(0),
    ny: motionValue(0),
  };
}

export interface CursorFieldHandle {
  values: CursorFieldValues;
  velocity: MotionValue<number>;
  enabled: boolean;
  subscribe: (onFrame: (() => void) | null) => void;
}

export function useCursorField<T extends HTMLElement>(
  ref: RefObject<T | null>,
  getRadius: (rect: DOMRect) => number = defaultRadius,
): CursorFieldHandle {
  const { enabled, velocity } = useMotionContext();

  const valuesRef = useRef<CursorFieldValues | null>(null);
  if (valuesRef.current === null) valuesRef.current = createFieldValues();
  const values = valuesRef.current;

  const entryRef = useRef<FieldEntry | null>(null);

  const subscribe = useCallback((onFrame: (() => void) | null) => {
    if (entryRef.current !== null) entryRef.current.onFrame = onFrame;
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const entry = registerEntry({ getEl: () => ref.current, getRadius, values, onFrame: null });
    entryRef.current = entry;
    return () => {
      entryRef.current = null;
      unregisterEntry(entry);
    };
  }, [enabled, ref, getRadius, values]);

  return { values, velocity, enabled, subscribe };
}
