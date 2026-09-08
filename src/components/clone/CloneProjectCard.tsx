"use client";

import { useState } from "react";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";

export type CloneProjectStatus = "In Progress" | "Live" | "Archived" | string;

function StatusDot({ status }: { status: CloneProjectStatus }) {
  if (status === "Live") {
    return (
      <span className="inline-flex items-center gap-1.5 text-xs font-mono text-green-500">
        <span className="relative inline-flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping bg-green-500" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-500" />
        </span>
        Live
      </span>
    );
  }
  if (status === "In Progress") {
    return (
      <span className="inline-flex items-center gap-1.5 text-xs font-mono text-yellow-500">
        <span className="relative inline-flex h-1.5 w-1.5">
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-yellow-500" />
        </span>
        In Progress
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-500">
      <span className="relative inline-flex h-1.5 w-1.5">
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-neutral-500/50" />
      </span>
      {status}
    </span>
  );
}

function ProjectIcon({ title, initial, demo }: { title: string; initial: string; demo: string | null }) {
  const [failed, setFailed] = useState(false);
  let host: string | null = null;
  if (demo) {
    try {
      host = new URL(demo).hostname;
    } catch {
      host = null;
    }
  }
  return (
    <div className="h-7 w-7 rounded-md bg-neutral-500/10 dark:bg-neutral-500/20 flex items-center justify-center flex-shrink-0 overflow-hidden">
      {host && !failed ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`https://www.google.com/s2/favicons?domain=${host}&sz=32`}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="h-4 w-4"
          onError={() => setFailed(true)}
        />
      ) : (
        <span className="text-xs font-medium text-neutral-500">{initial}</span>
      )}
      <span className="sr-only">{title} icon</span>
    </div>
  );
}

export default function CloneProjectCard({
  title,
  description,
  tags,
  initial,
  status,
  github,
  demo,
}: {
  title: string;
  description: string;
  tags: string[];
  initial: string;
  status: CloneProjectStatus;
  github: string | null;
  demo: string | null;
}) {
  return (
    <article className="motion-card-lift group relative border border-neutral-200/40 dark:border-neutral-800/40 rounded-xl p-5 hover:border-neutral-300/80 dark:hover:border-neutral-700/80 hover:bg-neutral-50/50 dark:hover:bg-neutral-900/50 hover:shadow-lg hover:shadow-black/[0.04] dark:hover:shadow-black/20">
      <ArrowUpRight
        aria-hidden="true"
        className="pointer-events-none absolute top-4 right-4 h-4 w-4 text-neutral-500/60 opacity-0 group-hover:opacity-100 transition-opacity duration-150"
      />
      <div className="flex items-center gap-3 mb-2">
        <ProjectIcon title={title} initial={initial} demo={demo} />
        <h2 className="text-neutral-900 dark:text-neutral-100 font-medium">{title}</h2>
        <StatusDot status={status} />
      </div>
      <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed mb-3 pl-10">{description}</p>
      <div className="flex items-center justify-between gap-4 pl-10">
        <div className="flex flex-wrap gap-1.5">
          {tags.map((t) => (
            <span key={t} className="text-[11px] font-mono text-neutral-500 dark:text-neutral-400 bg-neutral-500/10 dark:bg-neutral-500/15 px-1.5 py-0.5 rounded">
              {t}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} on GitHub`}
              className="text-neutral-500/70 group-hover:text-neutral-500 hover:!text-neutral-900 dark:hover:!text-neutral-100 hover:scale-110 active:scale-95 transition-[color,transform] duration-200"
            >
              <Github className="h-4 w-4" />
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} live demo`}
              className="text-neutral-500/70 group-hover:text-neutral-500 hover:!text-neutral-900 dark:hover:!text-neutral-100 hover:scale-110 active:scale-95 transition-[color,transform] duration-200"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
