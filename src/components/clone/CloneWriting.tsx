import Link from "next/link";
import { CLONE_WRITING } from "@/data/cloneData";
import Reveal from "./Reveal";

export default function CloneWriting() {
  return (
    <section className="space-y-4">
      <Link href="/blog" className="inline-block group">
        <h2 className="font-mono text-sm font-medium tracking-wider text-neutral-500 dark:text-neutral-400 uppercase group-hover:text-neutral-900 dark:group-hover:text-neutral-100 transition-colors duration-200 inline-flex items-center gap-1.5 clone-link">
          Writing
          <span aria-hidden="true" className="inline-block transition-transform duration-200 group-hover:translate-x-0.5">→</span>
        </h2>
      </Link>
      <div className="space-y-3">
        {CLONE_WRITING.map((w, i) => (
          <Reveal key={`${w.title}-${i}`} delay={i * 50}>
            <div className="flex items-center justify-between gap-4 group">
              <span className="text-xs text-neutral-500 dark:text-neutral-400 font-mono shrink-0">{w.date}</span>
              <a
                href={w.href}
                target={w.href.startsWith("http") ? "_blank" : undefined}
                rel={w.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="text-sm text-neutral-900 dark:text-neutral-100 hover:text-neutral-900/80 dark:hover:text-neutral-100/80 flex-1 text-right clone-link clone-arrow inline-flex items-center justify-end rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/30"
              >
                <span className="truncate">{w.title}</span>
                <span aria-hidden="true" className="arrow ml-1 shrink-0">↗</span>
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
