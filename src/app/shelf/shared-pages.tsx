import type { Metadata } from "next";
import Link from "next/link";
import CloneShell from "@/components/clone/CloneShell";
import { LinkList, QuoteCards } from "@/components/clone/CloneShelfPage";
import PosterRail from "@/components/clone/PosterRail";
import { CLONE_SHELF } from "@/data/clonePagesData";

function SubHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <header className="max-w-2xl space-y-2">
      <p className="font-mono text-xs uppercase tracking-[0.22em] text-neutral-500">{eyebrow}</p>
      <h1 className="font-fraunces text-4xl md:text-5xl">{title}</h1>
      <Link href="/shelf" className="clone-link font-mono text-xs text-neutral-500 inline-block">← back to shelf</Link>
    </header>
  );
}

export function ShelfQuotesPage() {
  return (
    <CloneShell>
      <div className="space-y-8 py-10 md:py-14">
        <SubHeader eyebrow="personal library" title="quotes" />
        <QuoteCards items={CLONE_SHELF.quotes} />
      </div>
    </CloneShell>
  );
}

export function ShelfLinksPage() {
  return (
    <CloneShell>
      <div className="space-y-8 py-10 md:py-14">
        <SubHeader eyebrow="personal library" title="links" />
        <LinkList items={CLONE_SHELF.links} />
      </div>
    </CloneShell>
  );
}

export function ShelfMoviesPage() {
  return (
    <CloneShell>
      <div className="space-y-8 py-10 md:py-14">
        <SubHeader eyebrow="personal library" title="movies" />
        <PosterRail items={CLONE_SHELF.movies} />
      </div>
    </CloneShell>
  );
}

export function ShelfShowsPage() {
  return (
    <CloneShell>
      <div className="space-y-8 py-10 md:py-14">
        <SubHeader eyebrow="personal library" title="shows" />
        <PosterRail items={CLONE_SHELF.shows} />
      </div>
    </CloneShell>
  );
}
