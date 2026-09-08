import Link from "next/link";
import { CLONE_ALL_POSTS, CLONE_USES, CLONE_NOW } from "@/data/clonePagesData";
import Reveal from "./Reveal";

export default function CloneBlogPage() {
  return (
    <div className="max-w-5xl mx-auto px-0 py-12 pb-8">
      <Reveal>
        <header className="mb-12">
          <h1 className="text-2xl font-mono mb-2">blog</h1>
          <p className="text-neutral-500 dark:text-neutral-400 font-mono text-sm">thoughts and ideas</p>
        </header>
      </Reveal>

      <Reveal>
        <section className="mb-12">
          <h2 className="font-mono text-sm font-medium tracking-wider uppercase text-neutral-500 dark:text-neutral-400 mb-4">Pinned</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/uses" className="group block p-4 rounded-xl border border-neutral-200/60 dark:border-neutral-800/60 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors">
              <div className="font-mono text-sm text-neutral-900 dark:text-neutral-100">/uses</div>
              <div className="text-xs text-neutral-500 mt-1 line-clamp-2">{CLONE_USES.slice(0, 2).join(" · ")} →</div>
            </Link>
            <Link href="/now" className="group block p-4 rounded-xl border border-neutral-200/60 dark:border-neutral-800/60 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors">
              <div className="font-mono text-sm text-neutral-900 dark:text-neutral-100">/now</div>
              <div className="text-xs text-neutral-500 mt-1 line-clamp-2">{CLONE_NOW[0]} →</div>
            </Link>
          </div>
        </section>
      </Reveal>

      <section>
        <h2 className="font-mono text-sm font-medium tracking-wider uppercase text-neutral-500 dark:text-neutral-400 mb-4">Posts</h2>
        <div className="space-y-3">
          {CLONE_ALL_POSTS.map((p, i) => (
            <Reveal key={`${p.title}-${i}`} delay={Math.min(i * 40, 160)}>
              <div className="flex items-baseline justify-between gap-4 group">
                <a href={p.href} target={p.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="clone-link clone-arrow text-sm flex-1 min-w-0 truncate">
                  {p.title} <span aria-hidden="true" className="arrow ml-1">↗</span>
                </a>
                <span className="text-xs font-mono text-neutral-500 shrink-0">{p.date}</span>
              </div>
              {p.excerpt && <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5 max-w-2xl">{p.excerpt}</p>}
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
