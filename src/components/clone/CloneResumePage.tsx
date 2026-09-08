"use client";

import { useMemo, useState } from "react";
import { Calendar, ChevronRight, ExternalLink, MapPin, X } from "lucide-react";
import { CV_HEADER, CV_SUMMARY, CV_EXPERIENCE } from "@/data/cvData";
import { CLONE_SKILLS, CLONE_EDUCATION_LIST, CLONE_CERTS } from "@/data/clonePagesData";
import Reveal from "./Reveal";

// Gantt-style career chart like the source: month grid across years, one
// positioned bar per role, today marker, click a bar for details.
// All dates are Manish's own (parsed from CV data).
const MONTH_IDX: Record<string, number> = {
  Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
  Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11,
};
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function parseMonthToken(tok: string, now: Date): number {
  const t = tok.trim();
  if (/^present$/i.test(t)) return now.getFullYear() * 12 + now.getMonth();
  const m = t.match(/^([A-Za-z]+)\s+(\d{4})$/);
  if (!m) return now.getFullYear() * 12 + now.getMonth();
  const mon = MONTH_IDX[m[1].slice(0, 3)] ?? 0;
  return parseInt(m[2], 10) * 12 + mon;
}

function CareerChart() {
  const [selected, setSelected] = useState<number | null>(null);
  const now = useMemo(() => new Date(), []);

  const model = useMemo(() => {
    const spans = CV_EXPERIENCE.map((j) => {
      const [a, b] = j.date.split(/\s*[–—-]\s*/);
      return {
        job: { ...j, type: "Work" },
        start: parseMonthToken(a ?? "", now),
        end: parseMonthToken(b ?? "Present", now),
      };
    }).sort((x, y) => x.start - y.start);
    const startYear = Math.min(...spans.map((s) => Math.floor(s.start / 12)));
    const endYear = Math.max(now.getFullYear() + 1, ...spans.map((s) => Math.floor(s.end / 12)));
    const base = startYear * 12;
    const total = (endYear + 1) * 12 - base;
    // Greedy lane packing: first lane without overlap, like the source.
    const lanes: typeof spans[] = [];
    for (const s of spans) {
      let placed = false;
      for (const lane of lanes) {
        if (lane[lane.length - 1].end < s.start) {
          lane.push(s);
          placed = true;
          break;
        }
      }
      if (!placed) lanes.push([s]);
    }
    const covered = new Set<number>();
    spans.forEach((s) => {
      for (let m = s.start; m <= s.end; m++) covered.add(m);
    });
    const years = Math.round((covered.size / 12) * 10) / 10;
    const yearList: number[] = [];
    for (let y = startYear; y <= endYear; y++) yearList.push(y);
    const todayPos = ((now.getFullYear() * 12 + now.getMonth() - base) / total) * 100;
    return { spans, lanes, base, total, years: yearList, yearsTotal: years, todayPos };
  }, [now]);

  const selIdx = selected !== null ? Math.min(selected, model.spans.length - 1) : null;
  const sel = selIdx !== null ? model.spans[selIdx] : null;
  const selSlug = sel ? sel.job.org.toLowerCase().replace(/[^a-z0-9]+/g, "-") : "";

  const barTitle = (org: string, left: number, width: number) =>
    `${org}: ${left.toFixed(1)}% → ${(left + width).toFixed(1)}%`;

  // Sub-role progression shown in the drawer (Manish's own history).
  const progression = sel
    ? sel.job.org === "Coldrecs Private Limited"
      ? [
          {
            title: "Full Stack Engineer",
            date: "Jul 2025 – Dec 2025",
            bullets: [
              "Engineered backend systems and REST APIs using Java, Spring Boot, and Spring MVC; owned schema design, business logic, and API contracts",
              "Built production-facing frontend interfaces in React.js, Next.js, and TypeScript for legal and healthcare workflows",
              "Managed MySQL persistence via JDBC; deployed on AWS (EC2, S3, IAM) independently",
              "Skills: Java, Spring Boot, React.js, Next.js, TypeScript, MySQL, AWS",
              "Achievements: promoted from intern in 3 months; trusted with production systems in regulated industries",
            ],
          },
          {
            title: "Software Engineer Intern",
            date: "Mar 2025 – Jun 2025",
            bullets: [
              "Contributed to secure backend infrastructure for enterprise clients",
              "Systems design and backend integration using Java and Spring MVC",
              "Database design and API development",
            ],
          },
        ]
      : null
    : null;

  return (
    <div>
      <div className="flex flex-col gap-2 mb-6 md:flex-row md:items-baseline md:justify-between">
        <h2 className="font-mono text-sm font-medium tracking-wider uppercase text-neutral-500">
          Career Timeline{" "}
          <span className="font-mono text-xs font-normal text-neutral-500">({model.yearsTotal} years)</span>
        </h2>
        <div className="font-mono text-xs text-neutral-500">Scroll to explore</div>
      </div>

      <div className="relative overflow-hidden rounded-xl border border-neutral-200/50 dark:border-neutral-800/50 bg-white/50 dark:bg-neutral-950/50">
        <div className="relative">
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white/80 dark:from-[#0a0a0a]/80 to-transparent z-40" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white/80 dark:from-[#0a0a0a]/80 to-transparent z-40 md:hidden" />
          <div className="overflow-x-auto no-scrollbar scroll-smooth">
            <div className="relative min-w-max px-6 py-6 md:px-8 md:py-7" style={{ minWidth: `${model.total * 50}px` }}>
              {/* Month axis */}
              <div className="relative mb-8 h-12 border-b border-neutral-200/40 dark:border-neutral-800/40">
                {model.years.map((y) => (
                  <div
                    key={`y-${y}`}
                    className="absolute top-0"
                    style={{ left: `${(((y * 12 - model.base) / model.total) * 100).toFixed(3)}%`, transform: "translateX(-50%)" }}
                  >
                    <div className="absolute left-1/2 -translate-x-1/2 border-l border-neutral-900/40 dark:border-white/40 h-6" />
                    <div className="absolute top-7 left-1/2 -translate-x-1/2 whitespace-nowrap">
                      <span className="text-sm font-semibold text-neutral-900/60 dark:text-white/60 font-mono">{y}</span>
                    </div>
                  </div>
                ))}
                {Array.from({ length: model.total }, (_, i) => {
                  const m = i % 12;
                  if (m === 0) return null;
                  return (
                    <div
                      key={`m-${i}`}
                      className="absolute top-0"
                      style={{ left: `${((i / model.total) * 100).toFixed(3)}%`, transform: "translateX(-50%)" }}
                    >
                      <div className="absolute left-1/2 -translate-x-1/2 border-l border-neutral-900/20 dark:border-white/20 h-4" />
                      <div className="absolute top-7 left-1/2 -translate-x-1/2 whitespace-nowrap">
                        <span className="text-xs text-neutral-900/30 dark:text-white/30 font-mono">{MONTHS[m]}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Lanes */}
              <div className="relative">
                <div className="pointer-events-none absolute inset-0" aria-hidden="true">
                  {model.years.map((y) => (
                    <div
                      key={`g-${y}`}
                      className="absolute top-0 bottom-0 w-px bg-neutral-200/50 dark:bg-neutral-800/50"
                      style={{ left: `${(((y * 12 - model.base) / model.total) * 100).toFixed(2)}%` }}
                    />
                  ))}
                </div>
                <div
                  className="pointer-events-none absolute top-0 bottom-0 w-0.5 bg-red-500 z-30"
                  style={{ left: `${model.todayPos.toFixed(2)}%` }}
                  aria-hidden="true"
                >
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap">
                    <span className="font-mono text-xs font-semibold text-red-500">
                      {MONTHS[now.getMonth()]} {now.getFullYear()}
                    </span>
                  </div>
                </div>

                <div className="relative space-y-2 pb-2 pt-2">
                  {model.lanes.map((lane, li) => (
                    <div key={li} className="relative h-[36px]">
                      <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-neutral-200/50 dark:bg-neutral-800/50" />
                      {lane.map((s) => {
                        const globalIdx = model.spans.indexOf(s);
                        const left = ((s.start - model.base) / model.total) * 100;
                        const width = ((s.end - s.start + 1) / model.total) * 100;
                        const isSel = globalIdx === selIdx;
                        return (
                          <button
                            key={`${s.job.org}-${s.job.date}`}
                            type="button"
                            onClick={() => setSelected(globalIdx)}
                            aria-pressed={isSel}
                            aria-expanded={isSel}
                            title={barTitle(s.job.org, left, width)}
                            style={{ left: `${left.toFixed(3)}%`, width: `${width.toFixed(3)}%` }}
                            className={`group absolute top-0 bottom-0 flex items-center px-3 rounded-lg border text-left focus:outline-none focus:ring-2 focus:ring-neutral-900/30 dark:focus:ring-white/30 overflow-hidden transition-all active:scale-[0.985] shadow-sm ${
                              isSel
                                ? "border-neutral-900/50 dark:border-white/40 bg-neutral-200/60 dark:bg-neutral-700/60"
                                : "border-neutral-200/40 dark:border-neutral-800/40 bg-neutral-100/40 dark:bg-neutral-900/40"
                            }`}
                          >
                            <span className="min-w-0 flex-1 truncate whitespace-nowrap font-mono text-xs font-medium text-neutral-800/90 dark:text-neutral-200/90">
                              {s.job.org} @ {s.job.role}
                            </span>
                            <span aria-hidden="true" className="ml-auto shrink-0 md:hidden">
                              <ChevronRight className="h-3.5 w-3.5 text-neutral-400" />
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile detail panel */}
        <div
          className="grid md:hidden transition-[grid-template-rows] duration-300"
          style={{ gridTemplateRows: sel ? "1fr" : "0fr" }}
        >
          <div className="min-h-0 overflow-hidden">
            {sel && (
              <div className="px-6 py-4 border-t border-neutral-200/50 dark:border-neutral-800/50">
                <div className="font-medium text-sm">{sel.job.org}</div>
                <div className="text-xs font-mono text-neutral-500 mt-0.5">
                  {sel.job.role} · {sel.job.date}
                </div>
                <ul className="list-disc ml-4 mt-2 space-y-1 text-xs text-neutral-600 dark:text-neutral-300">
                  {sel.job.bullets.map((b) => (
                    <li key={b.slice(0, 48)}>{b}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="md:hidden text-center py-3 border-t border-neutral-200/50 dark:border-neutral-800/50 bg-neutral-100/40 dark:bg-neutral-900/40">
          <p className="font-mono text-xs text-neutral-500">← Swipe to explore →</p>
        </div>

        {/* Desktop slide-over detail drawer */}
        {sel && (
          <aside
            role="region"
            aria-labelledby={`career-${selSlug}-desktop-heading`}
            data-career-detail-panel="desktop"
            className="pointer-events-auto hidden md:flex md:flex-col absolute right-0 top-0 bottom-0 w-[22rem] border-l border-neutral-200/70 dark:border-neutral-800/70 bg-white/95 dark:bg-[#0a0a0a]/95 px-6 py-6 backdrop-blur shadow-2xl overflow-y-auto no-scrollbar animate-in fade-in duration-200"
          >
            <div className="flex h-full flex-col gap-5 pb-12">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] text-neutral-500/80">
                    <span>{sel.job.type}</span>
                    <span className="h-1 w-1 rounded-full bg-neutral-500/60" />
                    <span className="font-normal">{sel.job.date}</span>
                  </div>
                  <h3 id={`career-${selSlug}-desktop-heading`} className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 break-words">
                    {sel.job.org}
                  </h3>
                  <p className="text-sm text-neutral-500">{sel.job.role}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setSelected(null)}
                  aria-label="Close details"
                  className="rounded-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 p-1.5 text-neutral-500 transition hover:bg-neutral-100/60 dark:hover:bg-neutral-800/60 focus:outline-none focus:ring-2 focus:ring-neutral-900/30"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="space-y-2 font-mono text-xs text-neutral-500">
                <div className="flex items-start gap-2">
                  <MapPin className="h-3 w-3 mt-0.5 shrink-0" />
                  <span>{sel.job.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-3 w-3 shrink-0" />
                  <span>{sel.job.date}</span>
                </div>
                {sel.job.links?.map((l) => (
                  <div key={l.url} className="flex items-center gap-2">
                    <ExternalLink className="h-3 w-3 shrink-0" />
                    <a href={l.url} target="_blank" rel="noopener noreferrer" className="clone-link">
                      {l.label}: {l.url.replace(/^https?:\/\//, "")}
                    </a>
                  </div>
                ))}
              </div>

              {progression ? (
                <div className="pt-3 border-t border-neutral-200/50 dark:border-neutral-800/50">
                  <p className="font-mono text-xs text-neutral-500 mb-3">Career progression:</p>
                  <div className="space-y-3">
                    {progression.map((r) => (
                      <div key={r.title} className="space-y-1">
                        <div className="flex items-baseline justify-between gap-3">
                          <p className="font-mono text-xs font-medium text-neutral-900 dark:text-neutral-100">{r.title}</p>
                          <span className="font-mono text-[10px] text-neutral-500 shrink-0">{r.date}</span>
                        </div>
                        <ul className="space-y-1 font-mono text-xs text-neutral-500">
                          {r.bullets.map((b) => (
                            <li key={b.slice(0, 40)} className="flex gap-2">
                              <span className="shrink-0">·</span>
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="pt-3 border-t border-neutral-200/50 dark:border-neutral-800/50">
                  <ul className="space-y-1 font-mono text-xs text-neutral-500">
                    {sel.job.bullets.map((b) => (
                      <li key={b.slice(0, 40)} className="flex gap-2">
                        <span className="shrink-0">·</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </aside>
        )}
      </div>
    </div>
  );
}

// Target resume: header name/location/contact + Download PDF → Summary →
// Career Timeline (Gantt chart) → Skills → Education.
// Rebuilt with Manish data only.
export default function CloneResumePage() {
  return (
    <div className="max-w-5xl mx-auto px-0 py-12 pb-8">
      <Reveal>
        <header className="space-y-3 mb-10">
          <h1 className="text-2xl font-mono">Resume</h1>
          <div className="font-mono text-sm">
            <div className="font-semibold text-base">{CV_HEADER.name}, Bhubaneswar, India</div>
            <div className="text-neutral-500 dark:text-neutral-400 text-xs mt-1 flex flex-wrap gap-x-3 gap-y-1">
              <a href={`mailto:${CV_HEADER.email}`} className="clone-link">{CV_HEADER.email}</a>
              <a href={CV_HEADER.linkedinUrl} target="_blank" rel="noopener noreferrer" className="clone-link">LinkedIn</a>
              <a href="/documents/resume.pdf" download className="clone-link">Download PDF</a>
            </div>
          </div>
        </header>
      </Reveal>

      <Reveal>
        <section className="mb-10">
          <h2 className="font-mono text-sm font-medium tracking-wider uppercase text-neutral-500 mb-2">Summary</h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-3xl">{CV_SUMMARY}</p>
        </section>
      </Reveal>

      <section className="mb-10">
        <CareerChart />
      </section>

      <Reveal>
        <section className="mb-10">
          <h2 className="font-mono text-sm font-medium tracking-wider uppercase text-neutral-500 mb-3">Skills</h2>
          <div className="space-y-1.5">
            {CLONE_SKILLS.map((s) => (
              <p key={s.category} className="text-sm">
                <span className="font-mono font-medium">{s.category}:</span>{" "}
                <span className="text-neutral-600 dark:text-neutral-300 text-sm">{s.items}</span>
              </p>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="mb-10">
          <h2 className="font-mono text-sm font-medium tracking-wider uppercase text-neutral-500 mb-3">Education</h2>
          <div className="space-y-5">
            {CLONE_EDUCATION_LIST.map((edu) => (
              <div key={edu.org} className="text-sm">
                <div className="font-medium">{edu.org}</div>
                <div className="text-neutral-600 dark:text-neutral-300 text-xs mt-0.5">{edu.degree}</div>
                <div className="text-xs font-mono text-neutral-500 mt-0.5">
                  {edu.date}{"location" in edu && edu.location ? ` · ${edu.location}` : ""}
                </div>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      <section>
        <h2 className="font-mono text-sm font-medium tracking-wider uppercase text-neutral-500 mb-3">Certifications</h2>
        <ul className="flex flex-wrap gap-2">
          {CLONE_CERTS.map((c) => (
            <li key={c} className="text-[11px] font-mono px-2 py-1 rounded-full border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-300">{c}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
