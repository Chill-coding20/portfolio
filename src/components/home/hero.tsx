import { Link } from "@tanstack/react-router";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import profileImage from "@/assets/profile.jpg";
import { profile, stats } from "@/lib/portfolio";
import { staggerChild, staggerParent } from "@/components/motion-primitives";
import { MagneticCard } from "@/components/magnetic-card";
import { MotionLayer } from "@/motion/magnetic-layers";

function useTypewriter(roles: string[]) {
  const reduced = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [text, setText] = useState<string>(roles[0] ?? "");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduced) return;
    const current = roles[index % roles.length] ?? roles[0] ?? "";
    let timeout: number | undefined;

    if (!deleting && text === current) {
      timeout = window.setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && text === "") {
      timeout = window.setTimeout(() => {
        setDeleting(false);
        setIndex((i) => (i + 1) % roles.length);
      }, 300);
    } else {
      timeout = window.setTimeout(
        () => {
          setText(current.slice(0, text.length + (deleting ? -1 : 1)));
        },
        deleting ? 35 : 70,
      );
    }

    return () => window.clearTimeout(timeout);
  }, [text, deleting, index, roles, reduced]);

  return text;
}

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const typedRole = useTypewriter(profile.roles);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", reduced ? "0%" : "12%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", reduced ? "0%" : "-6%"]);
  const fade = useTransform(scrollYProgress, [0, 0.9], [1, reduced ? 1 : 0.25]);

  return (
    <section ref={ref} className="relative overflow-hidden pt-32 pb-20 sm:pt-40 md:pb-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 grid-backdrop opacity-60"
      />

      <motion.div style={{ y: contentY, opacity: fade }} className="container-page">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div variants={staggerParent} initial="hidden" animate="show">
            <motion.div variants={staggerChild}>
              <span className="inline-flex items-center gap-2 rounded-full border border-hairline bg-surface/70 px-3 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
                <Sparkles className="size-3.5 text-primary" aria-hidden />
                Hello, I&rsquo;m
              </span>
            </motion.div>

            <motion.h1
              variants={staggerChild}
              className="mt-6 text-5xl leading-[1.02] font-semibold text-balance sm:text-6xl lg:text-7xl"
            >
              {profile.name}
            </motion.h1>

            <motion.div
              variants={staggerChild}
              className="animate-fade-up opacity-0 delay-200 min-h-10 mb-6"
            >
              <p className="whitespace-nowrap text-xl font-medium text-muted-foreground md:text-2xl">
                <span className="sr-only">{profile.roles.join(" / ")}</span>
                <span aria-hidden>{typedRole}</span>
                <span className="animate-pulse text-primary" aria-hidden>
                  |
                </span>
              </p>
            </motion.div>

            <motion.p
              variants={staggerChild}
              className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              {profile.tagline}
            </motion.p>

            <motion.div variants={staggerChild} className="mt-9 flex flex-wrap items-center gap-3">
              <MagneticCard
                magnetic={6}
                glow
                glowColor="rgba(255,255,255,0.16)"
                glowSize={200}
                as="span"
                className="inline-flex rounded-full"
              >
                <Link
                  to="/"
                  hash="projects"
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-glow px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition-transform duration-300 hover:scale-[1.03] active:scale-95"
                >
                  <MotionLayer layer="text">View Projects</MotionLayer>
                  <ArrowRight
                    className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden
                  />
                </Link>
              </MagneticCard>
              <MagneticCard
                magnetic={6}
                glow
                glowColor="rgba(99,102,241,0.14)"
                glowSize={200}
                as="span"
                className="inline-flex rounded-full"
              >
                <a
                  href={profile.resumeUrl}
                  download
                  className="inline-flex items-center gap-2 rounded-full border border-hairline bg-surface/60 px-6 py-3 text-sm font-medium backdrop-blur transition-all duration-300 hover:border-primary/40 hover:bg-surface"
                >
                  <Download className="size-4" aria-hidden />
                  <MotionLayer layer="text">Download Resume</MotionLayer>
                </a>
              </MagneticCard>
            </motion.div>

            <motion.dl
              variants={staggerChild}
              className="mt-12 grid max-w-xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline sm:grid-cols-4"
            >
              {stats.map((s) => (
                <div key={s.label} className="bg-background/70 px-4 py-4 backdrop-blur">
                  <dt className="text-xs text-muted-foreground">{s.label}</dt>
                  <dd className="mt-1 text-lg font-semibold tracking-tight">{s.value}</dd>
                </div>
              ))}
            </motion.dl>
          </motion.div>

          <motion.div
            style={{ y: imageY }}
            initial={{ opacity: 0, scale: 0.94, filter: "blur(14px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto w-full max-w-sm lg:max-w-none"
          >
            <div
              aria-hidden
              className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-tr from-primary/40 via-primary-glow/30 to-transparent blur-3xl"
            />
            <MagneticCard
              magnetic={8}
              tilt={4}
              glow
              glowColor="rgba(99,102,241,0.18)"
              glowSize={300}
              className="relative overflow-hidden rounded-[2rem] border border-hairline bg-surface shadow-[var(--shadow-soft)]"
            >
              <img
                src={profileImage}
                alt={`Portrait of ${profile.name}`}
                width={1024}
                height={1280}
                fetchPriority="high"
                className="aspect-[4/5] w-full object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent"
              />
            </MagneticCard>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="glass-panel absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full px-4 py-2 text-xs font-medium whitespace-nowrap shadow-[var(--shadow-soft)]"
            >
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500/70" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
              {profile.availability}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
