import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

function applyTheme(theme: "dark" | "light") {
  document.documentElement.classList.toggle("dark", theme === "dark");
  document.documentElement.style.colorScheme = theme;
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("light");

  useEffect(() => {
    const stored = window.localStorage.getItem("theme");
    const next = stored === "light" || stored === "dark" ? stored : "light";
    setTheme(next);
    applyTheme(next);
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    applyTheme(next);
    window.localStorage.setItem("theme", next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      suppressHydrationWarning
      className="relative inline-flex size-9 items-center justify-center rounded-full border border-hairline bg-surface/60 text-muted-foreground transition-all duration-300 hover:text-foreground hover:border-primary/40"
    >
      <Sun className="size-4 rotate-0 scale-100 transition-transform duration-500 dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute size-4 rotate-90 scale-0 transition-transform duration-500 dark:rotate-0 dark:scale-100" />
    </button>
  );
}
