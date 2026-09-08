"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

function getInitialTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "light";
  const stored = window.localStorage.getItem("theme");
  if (stored === "dark" || stored === "light") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export default function ThemeToggle() {
  // Lazy initializer reads the stored/OS theme on first client render
  // (server-safe: falls back to "light" when window is undefined).
  const [theme, setTheme] = useState<"light" | "dark">(() => getInitialTheme());
  const [mounted, setMounted] = useState(false);

  // Show the real icon only after mount so server and client render the
  // same placeholder — theme lives in browser-only APIs (localStorage,
  // matchMedia), so it can only be confirmed after mount. Runs once.
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    window.localStorage.setItem("theme", theme);
  }, [theme, mounted]);

  // Every theme-dependent attribute must use the mounted-gated value:
  // the lazy initializer returns the real (dark) theme on first client
  // render while the server rendered "light" — using `theme` directly
  // here causes a hydration mismatch.
  const effectiveTheme = mounted ? theme : "light";
  const isDark = effectiveTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="fixed top-6 right-6 z-50 p-2.5 rounded-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur-lg border border-zinc-200 dark:border-zinc-800 shadow-xl shadow-black/5 text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors"
    >
      {/* Render a placeholder until mounted to avoid hydration mismatch */}
      {!mounted ? (
        <span className="block w-[18px] h-[18px]" aria-hidden="true" />
      ) : isDark ? (
        <Sun size={18} aria-hidden="true" />
      ) : (
        <Moon size={18} aria-hidden="true" />
      )}
    </button>
  );
}
