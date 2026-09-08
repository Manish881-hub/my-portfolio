"use client";

import { useEffect, useMemo, useState } from "react";

// Structural rebuild of target's activity cards — original code + Manish data.
// GitHub heatmap is LIVE (public contributions API for Manish881-hub), with
// deterministic fallback if the network fails. No source data reused.
type Range = "3mo" | "6mo" | "1yr";

const RANGE_WEEKS: Record<Range, number> = { "3mo": 13, "6mo": 26, "1yr": 52 };
const GITHUB_USER = "Manish881-hub";

type DayDatum = { date: Date; count: number; level: number };

// Deterministic fallback when live fetch fails (seeded, stable).
function fallbackLevel(week: number, day: number) {
  const v = (week * 7 + day * 13 + week * week) % 11;
  if (v < 4) return 0;
  if (v < 7) return 1;
  if (v < 9) return 2;
  if (v < 10) return 3;
  return 4;
}

function fallbackCount(level: number, week: number, day: number) {
  if (level === 0) return 0;
  if (level === 1) return 1 + ((week * 3 + day * 5) % 8);
  if (level === 2) return 8 + ((week * 5 + day * 3) % 14);
  if (level === 3) return 22 + ((week * 7 + day) % 18);
  return 45 + ((week * 11 + day * 7) % 30);
}

function levelForCount(count: number) {
  if (count <= 0) return 0;
  if (count < 8) return 1;
  if (count < 20) return 2;
  if (count < 40) return 3;
  return 4;
}

function dateKey(d: Date) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function formatDate(d: Date) {
  return d.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function cellClass(level: number) {
  switch (level) {
    case 0:
      return "bg-neutral-200 dark:bg-neutral-800/40";
    case 1:
      return "bg-green-200 dark:bg-green-900/40";
    case 2:
      return "bg-green-400 dark:bg-green-700/60";
    case 3:
      return "bg-green-600 dark:bg-green-600/80";
    default:
      return "bg-green-800 dark:bg-green-500";
  }
}

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export function GithubActivityCard() {
  const [range, setRange] = useState<Range>("1yr");
  const [tip, setTip] = useState<{ text: string; x: number; y: number } | null>(null);
  const [live, setLive] = useState<Record<string, { count: number; level: number }> | null>(null);
  const weeks = RANGE_WEEKS[range];

  // Live contributions for Manish881-hub; fallback stays deterministic.
  useEffect(() => {
    let cancelled = false;
    fetch(`https://github-contributions-api.jogruber.de/v4/${GITHUB_USER}?y=last`)
      .then((r) => (r.ok ? r.json() : null))
      .then((j) => {
        if (cancelled || !j?.contributions?.length) return;
        const map: Record<string, { count: number; level: number }> = {};
        for (const c of j.contributions) {
          if (typeof c.date === "string" && typeof c.count === "number") {
            map[c.date] = {
              count: c.count,
              level: typeof c.level === "number" ? Math.min(4, Math.max(0, c.level)) : levelForCount(c.count),
            };
          }
        }
        setLive(map);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  const grid: DayDatum[][] = useMemo(() => {
    const today = new Date();
    today.setHours(12, 0, 0, 0);
    return Array.from({ length: weeks }, (_, w) =>
      Array.from({ length: 7 }, (_, d) => {
        const date = new Date(today);
        date.setDate(today.getDate() - ((weeks - 1 - w) * 7 + (6 - d)));
        const hit = live?.[dateKey(date)];
        if (hit) return { date, count: hit.count, level: hit.level };
        const lv = fallbackLevel(w, d);
        return { date, count: fallbackCount(lv, w, d), level: lv };
      })
    );
  }, [weeks, live]);

  const monthLabels = useMemo(
    () =>
      grid.map((col, w) => {
        const m = col[0].date.getMonth();
        if (w === 0) return MONTHS[m];
        return grid[w - 1][0].date.getMonth() === m ? "" : MONTHS[m];
      }),
    [grid]
  );

  const counts = useMemo(() => {
    const flat = grid.flat();
    const total = flat.reduce((s, c) => s + c.count, 0);
    const best = flat.reduce((m, c) => Math.max(m, c.count), 0);
    let streak = 0;
    for (let i = flat.length - 1; i >= 0; i--) {
      // Allow today to still be in progress.
      if (i === flat.length - 1 && flat[i].count === 0) continue;
      if (flat[i].count > 0) streak++;
      else break;
    }
    return { total, streak, best };
  }, [grid]);

  return (
    <div className="group h-full">
      <div className="p-4 sm:p-6 lg:p-8 min-h-[280px] h-full border border-neutral-200/50 dark:border-neutral-800/50 rounded-xl bg-white/50 dark:bg-neutral-950/50 backdrop-blur-sm transition-[background-color,border-color] duration-180 flex flex-col">
        <div className="h-full flex flex-col space-y-4">
          <div className="flex items-start justify-between gap-2">
            <div className="space-y-1">
              <h3 className="text-base font-medium text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
                GitHub Activity
                <span
                  title={live ? "Live from GitHub" : "Connecting…"}
                  className={`relative inline-flex h-1.5 w-1.5 rounded-full ${live ? "bg-green-500" : "bg-neutral-400"}`}
                >
                  {live && (
                    <span className="absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping bg-green-500" />
                  )}
                </span>
              </h3>
              <div className="flex items-center gap-3 text-xs text-neutral-500 dark:text-neutral-400">
                <span className="font-mono">
                  {counts.total.toLocaleString()} contributions{range === "1yr" ? " this year" : ` in last ${range}`}
                </span>
                <span className="font-mono">{counts.streak} day streak</span>
                <span className="font-mono opacity-70">best: {counts.best}</span>
              </div>
            </div>
            <div role="tablist" aria-label="GitHub activity range" className="flex items-center gap-0.5 rounded-md border border-neutral-200/60 dark:border-neutral-800/60 p-0.5 text-[10px] font-mono">
              {(["3mo", "6mo", "1yr"] as Range[]).map((r) => (
                <button
                  key={r}
                  role="tab"
                  aria-selected={range === r}
                  onClick={() => setRange(r)}
                  className={`px-1.5 py-0.5 rounded transition-[background-color,color] duration-200 active:scale-[0.96] ${
                    range === r
                      ? "bg-neutral-900 text-white dark:bg-white dark:text-black"
                      : "text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100"
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-center animate-in fade-in duration-150">
            <div className="space-y-4">
              <div className="flex items-center text-[10px] text-neutral-500/70 w-full mb-1 overflow-hidden justify-center" style={{ gap: "3px" }}>
                {monthLabels.map((m, i) => (
                  <div key={i} className="text-center flex-shrink-0 whitespace-nowrap" style={{ width: "13px" }}>
                    {m}
                  </div>
                ))}
              </div>
              <div className="flex items-start overflow-hidden pb-2 w-full justify-center" style={{ gap: "3px" }}>
                <div className="flex min-w-0 items-start" style={{ gap: "3px" }}>
                  {grid.map((col, w) => (
                    <div key={`${range}-${w}`} className="flex flex-col flex-shrink min-w-0" style={{ gap: "2px" }}>
                      {col.map((cell, d) => {
                        const dateStr = formatDate(cell.date);
                        const label =
                          cell.count === 0
                            ? `No contributions on ${dateStr}`
                            : `${cell.count} contribution${cell.count === 1 ? "" : "s"} on ${dateStr}`;
                        const showTip = (clientX: number, clientY: number) =>
                          setTip({ text: label, x: clientX, y: clientY });
                        return (
                          <button
                            key={d}
                            type="button"
                            aria-label={label}
                            onMouseEnter={(e) => showTip(e.clientX, e.clientY)}
                            onMouseMove={(e) => showTip(e.clientX, e.clientY)}
                            onMouseLeave={() => setTip(null)}
                            onFocus={(e) => {
                              const r = e.currentTarget.getBoundingClientRect();
                              setTip({ text: label, x: r.left + r.width / 2, y: r.top });
                            }}
                            onBlur={() => setTip(null)}
                            onClick={(e) => showTip(e.clientX || window.innerWidth / 2, e.clientY || 200)}
                            className={`appearance-none border-0 p-0 rounded-[1px] sm:rounded-[1.5px] lg:rounded-[2px] transition-[transform,box-shadow] duration-150 ease-out hover:scale-125 hover:ring-1 hover:ring-neutral-900/40 dark:hover:ring-white/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/40 ${cellClass(cell.level)} cursor-pointer`}
                            style={{ width: "13px", height: "13px" }}
                          />
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>
              {tip && <TipBubble tip={tip} />}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 sm:gap-2 text-xs text-neutral-500">
                  <span className="hidden sm:inline">Less</span>
                  <div className="flex gap-0.5 sm:gap-1">
                    {[0, 1, 2, 3, 4].map((lv) => (
                      <div key={lv} className={`w-[6px] h-[6px] sm:w-[8px] sm:h-[8px] lg:w-[10px] lg:h-[10px] rounded-[1px] sm:rounded-[1.5px] lg:rounded-[2px] ${cellClass(lv)}`} />
                    ))}
                  </div>
                  <span className="hidden sm:inline">More</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const CODING_HOURS = [6, 5, 8, 3, 2, 4, 0.5];

// Own typical-hours distribution (minutes per hour slot), not the source's.
const TYPICAL_MINUTES = [5, 2, 0, 0, 0, 0, 8, 22, 35, 48, 52, 40, 30, 25, 33, 55, 62, 70, 58, 44, 36, 28, 18, 10];

function blueForMinutes(m: number) {
  if (m <= 0) return "bg-blue-100 dark:bg-blue-900/30";
  if (m < 15) return "bg-blue-100 dark:bg-blue-900/30";
  if (m < 30) return "bg-blue-300 dark:bg-blue-700/50";
  if (m < 50) return "bg-blue-500 dark:bg-blue-600/70";
  return "bg-blue-700 dark:bg-blue-500";
}

function useTip() {
  return useState<{ text: string; x: number; y: number } | null>(null);
}

function TipBubble({ tip }: { tip: { text: string; x: number; y: number } | null }) {
  if (!tip || typeof window === "undefined") return null;
  return (
    <div
      role="tooltip"
      className="fixed z-[100] pointer-events-none -translate-x-1/2 -translate-y-full px-2.5 py-1.5 rounded-md bg-neutral-900 text-white dark:bg-white dark:text-black text-[11px] font-mono whitespace-nowrap shadow-xl"
      style={{ left: Math.min(Math.max(tip.x, 90), window.innerWidth - 90), top: tip.y - 10 }}
    >
      {tip.text}
      <div className="absolute left-1/2 top-full -translate-x-1/2 border-[5px] border-transparent border-t-neutral-900 dark:border-t-white" />
    </div>
  );
}

export function CodingActivityCard() {
  const [tip, setTip] = useTip();
  const days = useMemo(() => {
    const today = new Date();
    return CODING_HOURS.map((h, i) => {
      const d = new Date(today);
      d.setDate(today.getDate() - (CODING_HOURS.length - 1 - i));
      return {
        h,
        weekday: d.toLocaleDateString("en-US", { weekday: "short" }),
        full: d.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" }),
      };
    });
  }, []);
  const max = Math.max(...CODING_HOURS, 1);
  const total = CODING_HOURS.reduce((s, h) => s + h, 0);
  return (
    <div className="group h-full">
      <div className="p-4 sm:p-6 lg:p-8 min-h-[280px] h-full border border-neutral-200/50 dark:border-neutral-800/50 rounded-xl bg-white/50 dark:bg-neutral-950/50 backdrop-blur-sm transition-[background-color,border-color] duration-180 flex flex-col">
        <div className="space-y-4">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-sm sm:text-base font-medium text-neutral-900 dark:text-neutral-100">Coding Activity</h3>
            <div className="text-[10px] sm:text-xs text-neutral-500 font-mono">{Math.round(total)}h in past 7 days</div>
          </div>
          <div className="space-y-2">
            <div className="flex flex-col gap-2">
              <div className="grid grid-cols-7 gap-2">
                {days.map((d) => {
                  const label = `${d.h} hour${d.h === 1 ? "" : "s"} on ${d.full}`;
                  const show = (x: number, y: number) => setTip({ text: label, x, y });
                  return (
                    <div key={d.full} className="flex flex-col items-center gap-1">
                      <button
                        type="button"
                        aria-label={label}
                        onMouseEnter={(e) => show(e.clientX, e.clientY)}
                        onMouseMove={(e) => show(e.clientX, e.clientY)}
                        onMouseLeave={() => setTip(null)}
                        onFocus={(e) => {
                          const r = e.currentTarget.getBoundingClientRect();
                          setTip({ text: label, x: r.left + r.width / 2, y: r.top });
                        }}
                        onBlur={() => setTip(null)}
                        className="w-full h-24 flex items-end cursor-pointer rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/30 hover:scale-[1.03] transition-transform"
                      >
                        <div
                          className={`w-full bg-blue-500/10 dark:bg-blue-500/20 rounded-t-md transition-[background-color,box-shadow] duration-150 ${d.h === 0.5 ? "ring-1 ring-blue-500/40" : ""}`}
                          style={{ height: `${Math.max(4, (d.h / max) * 94)}%` }}
                        />
                      </button>
                      <div className="text-[10px] text-neutral-500">{d.weekday}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-xs text-neutral-500">Typical Hours</div>
            <div className="flex gap-1">
              {TYPICAL_MINUTES.map((m, i) => {
                const hh = String(i).padStart(2, "0");
                const label = m === 0 ? `${hh}:00 — no activity` : `${hh}:00 to ${hh}:59, ${m} minutes average`;
                const show = (x: number, y: number) => setTip({ text: label, x, y });
                return (
                  <button
                    key={i}
                    type="button"
                    aria-label={label}
                    onMouseEnter={(e) => show(e.clientX, e.clientY)}
                    onMouseMove={(e) => show(e.clientX, e.clientY)}
                    onMouseLeave={() => setTip(null)}
                    onFocus={(e) => {
                      const r = e.currentTarget.getBoundingClientRect();
                      setTip({ text: label, x: r.left + r.width / 2, y: r.top });
                    }}
                    onBlur={() => setTip(null)}
                    className={`h-8 min-w-0 flex-1 rounded cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/30 hover:scale-y-110 transition-transform ${blueForMinutes(m)}`}
                  />
                );
              })}
            </div>
          </div>
          <TipBubble tip={tip} />
        </div>
      </div>
    </div>
  );
}
