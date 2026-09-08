import Link from "next/link";
import { CLONE_PROJECTS } from "@/data/cloneData";
import Reveal from "./Reveal";

export default function CloneProjects() {
  return (
    <section className="space-y-4">
      <Link href="/projects" className="inline-block group">
        <h2 className="font-mono text-sm font-medium tracking-wider text-neutral-500 dark:text-neutral-400 uppercase group-hover:text-neutral-900 dark:group-hover:text-neutral-100 transition-colors duration-200 inline-flex items-center gap-1.5 clone-link">
          Projects
          <span aria-hidden="true" className="inline-block transition-transform duration-200 group-hover:translate-x-0.5">→</span>
        </h2>
      </Link>
      <div className="space-y-4">
        {CLONE_PROJECTS.map((p, i) => (
          <Reveal key={p.title} delay={i * 60}>
            <div className="flex items-start gap-4 group/row">
              <div className="h-10 w-10 rounded-lg bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-lg flex-shrink-0 overflow-hidden font-mono font-semibold text-neutral-600 dark:text-neutral-300">
                {p.initial}
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <a href={p.href} target={p.href.startsWith("http") ? "_blank" : undefined} rel={p.href.startsWith("http") ? "noopener noreferrer" : undefined} className="rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/30">
                    <span className="inline-flex items-center clone-link clone-arrow text-base font-medium text-neutral-900 dark:text-neutral-50 hover:text-neutral-900/80 dark:hover:text-neutral-50/80">
                      {p.title}
                    </span>
                  </a>
                  <span className={`inline-flex items-center px-1.5 py-0.5 text-xs font-medium rounded ${p.statusStyle}`}>
                    {p.status}
                  </span>
                </div>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">{p.description}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
