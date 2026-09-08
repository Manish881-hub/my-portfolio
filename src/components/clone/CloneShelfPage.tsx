import Link from "next/link";
import { ArrowRight, BookOpen, Clapperboard, Link as LinkIcon, MessageSquareQuote, Tv } from "lucide-react";
import { CLONE_SHELF } from "@/data/clonePagesData";
import Reveal from "./Reveal";
import BookShelf from "./BookShelf";
import PosterRail from "./PosterRail";

function SectionHeader({
  icon,
  title,
  count,
  href,
  viewAll,
}: {
  icon: React.ReactNode;
  title: string;
  count: number;
  href: string;
  viewAll: string;
}) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 border-t border-neutral-900/20 dark:border-white/20 pt-5">
      <div className="flex items-center gap-2">
        {icon}
        <h2 className="font-mono text-[11px] uppercase tracking-[0.24em] text-neutral-500">{title}</h2>
        <span className="font-mono text-[11px] text-neutral-500">{count}</span>
      </div>
      <Link href={href} className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/30 rounded">
        <span className="clone-link inline-flex items-center gap-1 font-mono text-[11px] text-neutral-500 transition-colors hover:text-neutral-900 dark:hover:text-neutral-100">
          {viewAll}
          <ArrowRight className="h-3.5 w-3.5" />
        </span>
      </Link>
    </div>
  );
}

const ICON = "h-3.5 w-3.5 text-neutral-500";

export function QuoteCards({ items }: { items: typeof CLONE_SHELF.quotes }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {items.map((q) =>
        q.style === "marginalia" ? (
          <article key={q.text} className="relative overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 bg-white/60 dark:bg-white/5 border border-neutral-900/10 dark:border-white/10 h-full">
            <div className="p-5 sm:p-6">
              <p className="font-fraunces text-base sm:text-lg leading-[1.7] font-semibold">{q.text}</p>
              <div className="mt-8 pt-3 border-t border-neutral-900/20 dark:border-white/20">
                <div className="italic text-neutral-500 text-xs font-fraunces">
                  — {q.by}
                  <span className="not-italic opacity-70 ml-1">/ {q.source}</span>
                  <span className="not-italic opacity-50 ml-2 text-xs">{q.date}</span>
                </div>
              </div>
            </div>
          </article>
        ) : (
          <article key={q.text} className="relative overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 bg-white/60 dark:bg-white/5 border border-neutral-900/10 dark:border-white/10 h-full">
            <div className="p-5 sm:p-6 flex flex-col">
              <p className="font-fraunces text-lg sm:text-xl leading-snug text-right italic">“{q.text}”</p>
              <div className="text-sm text-neutral-500 mt-8 not-italic font-fraunces">
                — {q.by}
                <span className="not-italic opacity-70 ml-1">/ {q.source}</span>
                <span className="not-italic opacity-50 ml-2 text-xs">{q.date}</span>
              </div>
            </div>
          </article>
        )
      )}
    </div>
  );
}

export function LinkList({ items }: { items: typeof CLONE_SHELF.links }) {
  return (
    <div className="grid gap-x-10 gap-y-5 lg:grid-cols-2">
      {items.map((l) => (
        <article key={l.title} className="group flex items-start gap-3">
          <span className="mt-1 font-mono text-neutral-500" aria-hidden="true">-</span>
          <div className="min-w-0 flex-1 space-y-1">
            <a href={l.href} target={l.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/30 rounded">
              <span className="clone-link font-mono text-sm text-neutral-900 dark:text-neutral-100 transition-colors hover:text-neutral-500">
                {l.title}
              </span>
            </a>
            <p className="line-clamp-2 text-sm leading-6 text-neutral-500">{l.desc}</p>
            <div className="font-mono text-xs text-neutral-500">{l.date}</div>
          </div>
        </article>
      ))}
    </div>
  );
}

export default function CloneShelfPage() {
  return (
    <div className="space-y-14 md:space-y-16 py-10 md:py-14">
      <Reveal>
        <header className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="max-w-2xl space-y-5">
            <div className="space-y-2">
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-neutral-500">personal library</p>
              <h1 className="font-fraunces text-5xl leading-none tracking-normal md:text-7xl">shelf</h1>
            </div>
            <p className="text-base leading-7 text-neutral-500 md:text-lg">
              A small public stack of the books, films, shows, quotes, and links that keep staying with me.
            </p>
          </div>
        </header>
      </Reveal>

      <section className="space-y-5">
        <SectionHeader icon={<BookOpen className={ICON} />} title="Books" count={CLONE_SHELF.books.length} href="/shelf/books" viewAll="View all books" />
        <BookShelf />
      </section>

      <section className="space-y-8 border-t border-neutral-900/20 dark:border-white/20 pt-10">
        <section className="space-y-5">
          <SectionHeader icon={<MessageSquareQuote className={ICON} />} title="Quotes" count={CLONE_SHELF.quotes.length} href="/shelf/quotes" viewAll="View all quotes" />
          <QuoteCards items={CLONE_SHELF.quotes} />
        </section>
        <section className="space-y-5">
          <SectionHeader icon={<LinkIcon className={ICON} />} title="Links" count={CLONE_SHELF.links.length} href="/shelf/links" viewAll="View all links" />
          <LinkList items={CLONE_SHELF.links} />
        </section>
      </section>

      <section className="space-y-5">
        <SectionHeader icon={<Clapperboard className={ICON} />} title="Movies" count={CLONE_SHELF.movies.length} href="/shelf/movies" viewAll="View all movies" />
        <PosterRail items={CLONE_SHELF.movies} />
      </section>

      <section className="space-y-5">
        <SectionHeader icon={<Tv className={ICON} />} title="Shows" count={CLONE_SHELF.shows.length} href="/shelf/shows" viewAll="View all shows" />
        <PosterRail items={CLONE_SHELF.shows} />
      </section>
    </div>
  );
}
