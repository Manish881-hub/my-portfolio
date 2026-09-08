"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  House,
  Pen,
  FolderOpen,
  Camera,
  ScrollText,
  Library,
  Terminal,
  Copy,
  Check,
  Moon,
  Search,
  X,
  Keyboard,
} from "lucide-react";
import { CLONE_PROFILE } from "@/data/cloneData";

export type SearchAction =
  | { kind: "page"; id: string; title: string; desc: string; href: string; Icon: typeof House }
  | { kind: "action"; id: string; title: string; desc: string; Icon: typeof Copy };

const ITEMS: SearchAction[] = [
  { kind: "page", id: "page:/", title: "Home", desc: "Go to the home page", href: "/", Icon: House },
  { kind: "page", id: "page:/blog", title: "Blog", desc: "Thoughts and ideas", href: "/blog", Icon: Pen },
  { kind: "page", id: "page:/projects", title: "Projects", desc: "Things I've built", href: "/projects", Icon: FolderOpen },
  { kind: "page", id: "page:/photography", title: "Photography", desc: "Moments captured through my lens", href: "/photography", Icon: Camera },
  { kind: "page", id: "page:/resume", title: "Resume", desc: "Career, skills and education", href: "/resume", Icon: ScrollText },
  { kind: "page", id: "page:/shelf", title: "Shelf", desc: "Books, quotes, links and films", href: "/shelf", Icon: Library },
  { kind: "page", id: "page:/cmd", title: "Terminal", desc: "Interactive terminal", href: "/cmd", Icon: Terminal },
  { kind: "action", id: "action:copy-email", title: "Copy Email", desc: CLONE_PROFILE.email, Icon: Copy },
  { kind: "action", id: "action:toggle-theme", title: "Toggle Theme", desc: "Switch light / dark", Icon: Moon },
];

export default function CloneSearchDialog({
  open,
  onClose,
  onToggleTheme,
}: {
  open: boolean;
  onClose: () => void;
  onToggleTheme: () => void;
}) {
  const [query, setQuery] = useState("");
  const [index, setIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return ITEMS;
    return ITEMS.filter(
      (it) =>
        it.title.toLowerCase().includes(q) ||
        it.desc.toLowerCase().includes(q) ||
        it.id.toLowerCase().includes(q)
    );
  }, [query]);

  useEffect(() => {
    setIndex(0);
  }, [query]);

  useEffect(() => {
    if (open) {
      setQuery("");
      setIndex(0);
      setCopied(false);
      requestAnimationFrame(() => inputRef.current?.focus());
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open ]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setIndex((i) => (filtered.length ? (i + 1) % filtered.length : 0));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setIndex((i) => (filtered.length ? (i - 1 + filtered.length) % filtered.length : 0));
      } else if (e.key === "Enter") {
        e.preventDefault();
        const it = filtered[index];
        if (it) run(it);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, filtered, index]);

  if (!open) return null;

  async function run(it: SearchAction) {
    if (it.kind === "page") {
      onClose();
      window.location.href = it.href;
    } else if (it.id === "action:copy-email") {
      try {
        await navigator.clipboard.writeText(CLONE_PROFILE.email);
        setCopied(true);
        setTimeout(() => {
          onClose();
        }, 600);
      } catch {
        onClose();
      }
    } else if (it.id === "action:toggle-theme") {
      onToggleTheme();
      onClose();
    }
  }

  const active = filtered[index];

  return (
    <div
      className="fixed inset-0 z-[80] flex items-start justify-center p-4 pt-[12vh]"
      role="presentation"
      onClick={onClose}
    >
      <div className="fixed inset-0 bg-black/40 backdrop-blur-[2px]" aria-hidden="true" />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Search"
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white dark:bg-neutral-950 grid gap-0 rounded-lg border border-neutral-200 dark:border-neutral-800 shadow-lg w-full max-w-[720px] max-md:max-w-[calc(100vw-2rem)] overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        style={{ maxHeight: "560px" }}
      >
        <div className="flex flex-col gap-2 text-center sm:text-left sr-only">
          <h2 className="text-lg leading-none font-semibold">Search and navigate</h2>
          <p className="text-neutral-500 text-sm">Search Manish&apos;s writing, projects, photography, pages, and actions.</p>
        </div>
        <p role="status" aria-live="polite" aria-atomic="true" className="sr-only">
          {filtered.length === 0 ? "No results" : `${filtered.length} results`}
        </p>
        <div className="flex h-full w-full flex-col overflow-hidden rounded-md">
          <div className="flex h-12 items-center gap-2 border-b border-neutral-200 dark:border-neutral-800 px-3">
            <Search className="size-4 shrink-0 opacity-50" aria-hidden="true" />
            <input
              ref={inputRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Type a command or search..."
              role="combobox"
              aria-expanded="true"
              aria-controls="clone-search-list"
              aria-label="Search"
              autoComplete="off"
              autoCorrect="off"
              spellCheck={false}
              className="flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-neutral-500"
            />
          </div>

          <div className="grid min-h-0 lg:grid-cols-[minmax(0,1fr)_18rem]">
            <div
              id="clone-search-list"
              role="listbox"
              aria-label="Suggestions"
              className="overflow-x-hidden overflow-y-auto max-h-[min(35rem,calc(100vh-8rem))]"
            >
              <div className="overflow-hidden p-1">
                <div className="px-2 py-1.5 text-xs font-medium text-neutral-500" aria-hidden="true">
                  Common actions
                </div>
                <div role="group" aria-label="Common actions">
                  {filtered.length === 0 && (
                    <div className="px-2 py-6 text-sm text-neutral-500 text-center">No results found.</div>
                  )}
                  {filtered.map((it, i) => (
                    <button
                      key={it.id}
                      role="option"
                      aria-selected={i === index}
                      onMouseEnter={() => setIndex(i)}
                      onClick={() => run(it)}
                      className={`relative flex w-full cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none select-none ${
                        i === index
                          ? "bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
                          : "text-neutral-700 dark:text-neutral-300"
                      }`}
                    >
                      <it.Icon className="mr-2 h-4 w-4 shrink-0 text-neutral-500" aria-hidden="true" />
                      <span className="flex flex-col items-start">
                        <span>{it.title}</span>
                      </span>
                      {it.id === "action:copy-email" && copied && (
                        <Check className="ml-auto h-4 w-4 text-green-500" aria-hidden="true" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
              <footer className="border-t border-neutral-200 dark:border-neutral-800 px-3 py-2 text-xs text-neutral-500">
                <Keyboard className="mr-1 inline h-3 w-3" aria-hidden="true" />
                Command/Control-K to open · Arrow keys to navigate · Enter to select · Escape to close.
              </footer>
            </div>

            <aside className="hidden border-l border-neutral-200 dark:border-neutral-800 lg:block" aria-live="polite">
              <div className="space-y-3 p-4">
                <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">
                  {active?.kind === "page" ? "Page" : "Action"}
                </p>
                <h3 className="text-base font-medium leading-tight">{active?.title ?? "—"}</h3>
                <p className="text-sm leading-relaxed text-neutral-500">{active?.desc ?? ""}</p>
                {active?.id === "action:copy-email" && copied && (
                  <p className="text-xs text-green-500 font-mono">Copied to clipboard!</p>
                )}
              </div>
            </aside>
          </div>
        </div>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 rounded opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:outline-none"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>
      </div>
    </div>
  );
}
