"use client";

import { useEffect, useRef, useState } from "react";
import { PROFILE } from "@/data/portfolioData";

type Line = { text: string; kind: "in" | "out" | "sys" };

const BANNER = [
  " __  __    _    _   _ ___ ____  _   _ ",
  "|  \\/  |  / \\  | \\ | |_ _/ ___|| | | |",
  "| |\\/| | / _ \\ |  \\| || |\\___ \\| |_| |",
  "| |  | |/ ___ \\| |\\  || | ___) |  _  |",
  "|_|  |_/_/   \\_\\_| \\_|___|____/|_| |_|",
  "                                       ",
].join("\n");

const HELP = `available commands:
  help — this list
  about — whoami
  projects — featured builds
  blog — writing index
  contact — email + socials
  quote — inspiration
  clear — wipe screen
  exit — back home`;

const QUOTES = [
  "Ship small, measure, iterate.",
  "Go after the hardest thing.",
  "The model is the brain, the harness is the body.",
];

export default function CloneTerminal() {
  const [lines, setLines] = useState<Line[]>([
    { text: "Builder · Shipper · Learner", kind: "sys" },
    { text: "Type 'help' to see available commands · Type 'quote' for inspiration", kind: "sys" },
  ]);
  const [input, setInput] = useState("");
  const [hist, setHist] = useState<string[]>([]);
  const [hi, setHi] = useState(-1);
  const endRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [lines]);

  const focusInput = () => document.getElementById("clone-cmd-input")?.focus();

  const run = (raw: string) => {
    const cmd = raw.trim().toLowerCase();
    const out: Line[] = [{ text: `manish:~$ ${raw}`, kind: "in" }];
    if (!cmd) setLines((l) => [...l, ...out]);
    else if (cmd === "clear") {
      setLines([]);
      return;
    } else if (cmd === "exit") {
      window.location.href = "/";
      return;
    } else if (cmd === "help") out.push({ text: HELP, kind: "out" });
    else if (cmd === "about") out.push({ text: `${PROFILE.name} — ${PROFILE.role}. ${PROFILE.location}.`, kind: "out" });
    else if (cmd === "projects") out.push({ text: "adtext.org · dimewise · rag-eval · voice-receptionist → /projects", kind: "out" });
    else if (cmd === "blog") out.push({ text: "adtext infra · MCP · voice agents → /blog", kind: "out" });
    else if (cmd === "contact") out.push({ text: `${PROFILE.email} · ${PROFILE.socials.github}`, kind: "out" });
    else if (cmd === "quote") out.push({ text: QUOTES[Math.floor(Math.random() * QUOTES.length)], kind: "out" });
    else out.push({ text: `command not found: ${raw} — try 'help'`, kind: "sys" });
    setLines((l) => [...l, ...out]);
  };

  return (
    <div className="fixed inset-0 bg-white dark:bg-[#0a0a0a] text-neutral-900 dark:text-neutral-100 font-mono z-[60]">
      <div className="h-full max-w-5xl mx-auto p-4 md:p-8 flex flex-col">
        <div className="border-2 border-neutral-200/50 dark:border-neutral-800/50 rounded-lg overflow-hidden shadow-2xl flex-1 flex flex-col min-h-0">
          <div className="bg-neutral-100/50 dark:bg-neutral-900/50 border-b border-neutral-200/50 dark:border-neutral-800/50 px-4 py-2 flex items-center gap-2 shrink-0">
            <div className="flex gap-1.5">
              <button
                type="button"
                onClick={() => (window.location.href = "/")}
                title="Exit terminal"
                aria-label="Exit terminal"
                className="w-3 h-3 rounded-full bg-red-500/70 hover:bg-red-500 transition-colors cursor-pointer"
              />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
            </div>
            <div className="text-neutral-500 text-sm ml-2">manish:~$</div>
          </div>

          <div
            ref={scrollRef}
            onClick={focusInput}
            className="p-6 md:p-8 space-y-1 text-sm md:text-base flex-1 overflow-y-auto cursor-text"
          >
            <div className="text-neutral-500 whitespace-pre" aria-hidden="true">{BANNER}</div>
            {lines.map((l, i) => (
              <div
                key={i}
                className={`whitespace-pre-wrap ${
                  l.kind === "in"
                    ? "text-neutral-900 dark:text-neutral-100"
                    : l.kind === "sys"
                      ? "text-neutral-500"
                      : "text-neutral-700 dark:text-neutral-300"
                }`}
              >
                {l.text}
              </div>
            ))}
            <form
              className="flex items-center gap-2 relative"
              onSubmit={(e) => {
                e.preventDefault();
                if (input.trim()) setHist((h) => [input, ...h]);
                setHi(-1);
                run(input);
                setInput("");
              }}
            >
              <span className="text-neutral-900 dark:text-neutral-100">manish:~$</span>
              <div className="flex-1 relative">
                <input
                  id="clone-cmd-input"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "ArrowUp") {
                      e.preventDefault();
                      const n = Math.min(hi + 1, hist.length - 1);
                      if (hist[n]) {
                        setHi(n);
                        setInput(hist[n]);
                      }
                    } else if (e.key === "ArrowDown") {
                      e.preventDefault();
                      const n = hi - 1;
                      setHi(n);
                      setInput(n >= 0 ? hist[n] : "");
                    } else if (e.key === "Tab") {
                      e.preventDefault();
                      const cands = ["help", "about", "projects", "blog", "contact", "quote", "clear", "exit"];
                      const m = cands.find((c) => c.startsWith(input.trim().toLowerCase()));
                      if (m) setInput(m);
                    }
                  }}
                  className="w-full bg-transparent outline-none border-none text-neutral-900 dark:text-neutral-100 relative z-10"
                  autoComplete="off"
                  autoCorrect="off"
                  autoCapitalize="off"
                  spellCheck={false}
                  autoFocus
                  aria-label="terminal input"
                />
              </div>
              <span className="inline-block w-2 h-4 bg-neutral-900 dark:bg-neutral-100 animate-pulse" aria-hidden="true" />
            </form>
            <div ref={endRef} />
          </div>
        </div>
        <div className="mt-4 text-center text-neutral-500/60 dark:text-neutral-500/40 text-xs shrink-0">
          Tip: Tab for autocomplete · ↑/↓ for history · &apos;help&apos; for commands · &apos;exit&apos; to leave
        </div>
      </div>
    </div>
  );
}
