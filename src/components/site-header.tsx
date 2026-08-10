import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { Menu, X } from "lucide-react";

import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/", hash: "projects" },
  { label: "Resume", to: "/resume" },
  { label: "Contact", to: "/contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 24));
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-3 sm:pt-4">
      <motion.nav
        aria-label="Primary"
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "w-full max-w-4xl rounded-2xl border border-transparent px-3 py-2 transition-all duration-500 sm:px-4",
          scrolled ? "glass-panel shadow-[var(--shadow-soft)]" : "bg-transparent",
        )}
      >
        <div className="flex items-center justify-between gap-3">
          <Link to="/" className="group flex items-center gap-2.5 rounded-lg px-1 py-1">
            <span className="grid size-8 place-items-center rounded-lg bg-gradient-to-br from-primary to-primary-glow text-sm font-bold text-primary-foreground">
              PS
            </span>
            <span className="text-sm font-semibold tracking-tight">Siranjeevi</span>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const active = item.hash ? false : pathname === item.to;
              return (
                <Link
                  key={item.label}
                  to={item.to}
                  {...(item.hash ? { hash: item.hash } : {})}
                  aria-current={active ? "page" : undefined}
                  className="relative rounded-lg px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {active ? (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-lg bg-surface-elevated/80 ring-1 ring-hairline"
                      transition={{ type: "spring", stiffness: 400, damping: 34 }}
                    />
                  ) : null}
                  <span className={cn("relative", active && "text-foreground")}>{item.label}</span>
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link
              to="/contact"
              className="hidden rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-transform duration-300 hover:scale-[1.03] active:scale-95 sm:inline-flex"
            >
              Get in touch
            </Link>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
              suppressHydrationWarning
              className="inline-flex size-9 items-center justify-center rounded-full border border-hairline bg-surface/60 md:hidden"
            >
              {open ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </div>

        {open ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden md:hidden"
          >
            <div id="mobile-menu" className="mt-3 grid gap-1 border-t border-hairline pt-3">
              {navItems.map((item) => {
                const active = item.hash ? false : pathname === item.to;
                return (
                  <Link
                    key={item.label}
                    to={item.to}
                    {...(item.hash ? { hash: item.hash } : {})}
                    aria-current={active ? "page" : undefined}
                    className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        ) : null}
      </motion.nav>
    </header>
  );
}
