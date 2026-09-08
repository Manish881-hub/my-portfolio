"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  House,
  FlaskConical,
  Pen,
  ScrollText,
  Library,
  Camera,
  Terminal,
  Search,
  Sun,
  Moon,
} from "lucide-react";
import { useEffect, useState } from "react";
import CloneSearchDialog from "./CloneSearchDialog";

const ITEMS = [
  { href: "/", label: "Home", Icon: House, kbd: "Alt+1" },
  { href: "/projects", label: "Projects", Icon: FlaskConical, kbd: "Alt+2" },
  { href: "/blog", label: "Writing", Icon: Pen, kbd: "Alt+3" },
  { href: "/resume", label: "Resume", Icon: ScrollText, kbd: "Alt+4" },
  { href: "/shelf", label: "Shelf", Icon: Library, kbd: "Alt+5" },
  { href: "/photography", label: "Photography", Icon: Camera, kbd: "Alt+6" },
  { href: "/cmd", label: "Terminal", Icon: Terminal, kbd: "Alt+7" },
];

function useTheme() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    const stored = window.localStorage.getItem("theme");
    if (stored === "dark" || stored === "light") setTheme(stored);
    else if (window.matchMedia("(prefers-color-scheme: dark)").matches) setTheme("dark");
  }, []);
  useEffect(() => {
    if (!mounted) return;
    document.documentElement.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem("theme", theme);
  }, [theme, mounted]);
  return { theme, toggle: () => setTheme((t) => (t === "dark" ? "light" : "dark")), mounted };
}

export default function CloneDock() {
  const pathname = usePathname();
  const { theme, toggle } = useTheme();
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen((v) => !v);
        return;
      }
      if (!e.altKey) return;
      const idx = ["1", "2", "3", "4", "5", "6", "7"].indexOf(e.key);
      if (idx >= 0) {
        e.preventDefault();
        window.location.href = ITEMS[idx].href;
      }
      if (e.key.toLowerCase() === "t") {
        e.preventDefault();
        toggle();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [toggle]);

  return (
    <>
      <nav
        aria-label="Primary navigation"
        className="fixed inset-x-4 bottom-[calc(env(safe-area-inset-bottom)+14px)] md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:bottom-6 z-50 animate-in fade-in slide-in-from-bottom-8 duration-300 delay-200"
      >
      <div className="mx-auto w-fit max-w-[calc(100vw-2rem)] md:max-w-none flex flex-row items-center justify-center gap-0 sm:gap-0.5 md:gap-1 bg-white/90 dark:bg-[#0a0a0a]/90 backdrop-blur-xl border border-neutral-200/60 dark:border-neutral-800/60 rounded-[1.75rem] px-2 py-1.5 sm:px-2.5 md:px-4 md:py-2 shadow-lg hover:shadow-xl hover:scale-[1.01] md:hover:scale-[1.02] transition-[transform,background-color,border-color,box-shadow] duration-[240ms] ease-out">
        {ITEMS.map(({ href, label, Icon, kbd }) => {
          const active = pathname === href;
          if (active) {
            return (
              <Link
                key={href}
                href={href}
                aria-label={`${label} (${kbd})`}
                title={`${label} (${kbd})`}
                aria-current="page"
                className="relative rounded-full inline-flex items-center justify-center z-10 will-change-transform active:scale-[0.96] transition-transform duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/30 dark:focus-visible:ring-white/30 text-white dark:text-black px-2 sm:px-2.5 md:px-3 h-9 md:h-10 hover:md:scale-105"
              >
                <span
                  className="absolute inset-0 rounded-full bg-neutral-900 dark:bg-white shadow-[0_2px_8px_rgba(0,0,0,0.12)]"
                  aria-hidden="true"
                />
                <Icon className="h-5 w-5 shrink-0 relative z-10" />
                <span className="relative z-10 ml-1.5 text-sm font-medium whitespace-nowrap animate-in fade-in duration-200">
                  {label}
                </span>
              </Link>
            );
          }
          return (
            <Link
              key={href}
              href={href}
              aria-label={`${label} (${kbd})`}
              title={`${label} (${kbd})`}
              className="relative rounded-full inline-flex items-center justify-center active:scale-[0.96] transition-transform duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/30 dark:focus-visible:ring-white/30 p-1.5 sm:p-2 w-8 sm:w-9 md:w-10 h-9 md:h-10 hover:bg-neutral-900/10 dark:hover:bg-white/10 md:hover:scale-105"
            >
              <Icon className="h-5 w-5 shrink-0 opacity-90 hover:opacity-100 transition-opacity" />
            </Link>
          );
        })}
        <div className="hidden sm:block w-px h-5 md:h-6 bg-neutral-200 dark:bg-neutral-800 mx-1" />
        <button
          type="button"
          onClick={() => setSearchOpen(true)}
          aria-label="Search (⌘K)"
          title="Search (⌘K)"
          className="rounded-full p-1.5 sm:p-2 h-9 w-8 sm:w-9 md:h-10 md:w-10 hover:bg-neutral-900/10 dark:hover:bg-white/10 active:scale-[0.96] md:hover:scale-105 transition-all duration-200 inline-flex items-center justify-center"
        >
          <Search className="h-5 w-5 opacity-90" />
        </button>
        <button
          type="button"
          onClick={toggle}
          aria-label="Choose theme (Alt+T toggles)"
          title="Choose theme (Alt+T toggles)"
          className="rounded-full p-1.5 sm:p-2 h-9 w-8 sm:w-9 md:h-10 md:w-10 hover:bg-neutral-900/10 dark:hover:bg-white/10 active:scale-[0.96] md:hover:scale-105 transition-all duration-200 inline-flex items-center justify-center relative"
        >
          <Sun className="h-5 w-5 rotate-0 scale-100 dark:-rotate-90 dark:scale-0 transition-all duration-150" />
          <Moon className="h-5 w-5 absolute rotate-90 scale-0 dark:rotate-0 dark:scale-100 transition-all duration-150" />
          <span className="sr-only">Current: {theme}</span>
        </button>
        </div>
      </nav>
      <CloneSearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} onToggleTheme={toggle} />
    </>
  );
}
