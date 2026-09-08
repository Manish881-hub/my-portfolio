import type { Metadata } from "next";
import Link from "next/link";
import CloneShell from "@/components/clone/CloneShell";
import { CLONE_SHELF } from "@/data/clonePagesData";

export const metadata: Metadata = {
  title: "Books",
  description: "Books on Manish's shelf",
  alternates: { canonical: "/shelf/books" },
};

export default function ShelfBooksPage() {
  return (
    <CloneShell>
      <div className="space-y-8 py-10 md:py-14">
        <header className="max-w-2xl space-y-2">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-neutral-500">personal library</p>
          <h1 className="font-fraunces text-4xl md:text-5xl">books</h1>
          <Link href="/shelf" className="clone-link font-mono text-xs text-neutral-500">← back to shelf</Link>
        </header>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CLONE_SHELF.books.map((b) => (
            <article key={b.title} className="rounded-lg border border-neutral-900/10 dark:border-white/10 overflow-hidden">
              <div className="p-5 flex flex-col gap-3 min-h-[220px] justify-between" style={{ background: `linear-gradient(150deg, ${b.cover[0]}, ${b.cover[1]})` }}>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/65">book</div>
                <div>
                  <div className="font-fraunces text-2xl leading-tight text-white">{b.title}</div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/70 mt-1">{b.author}</div>
                </div>
                <div>
                  <div className="h-1 rounded-full bg-white/20 overflow-hidden">
                    <div className="h-full bg-white/80" style={{ width: `${b.progress}%` }} />
                  </div>
                  <div className="mt-1 font-mono text-[9px] text-white/60">{b.status === "read" ? "finished" : `${b.progress}% read`}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </CloneShell>
  );
}
