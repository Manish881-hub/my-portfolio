"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";
import { CLONE_PHOTOS } from "@/data/clonePagesData";
import Reveal from "./Reveal";

type Photo = (typeof CLONE_PHOTOS)[number];

// Responsive column count mirroring the source breakpoints (1 / md:2 / lg:3).
function useColumnCount() {
  const [cols, setCols] = useState(3);
  useEffect(() => {
    const mqMd = window.matchMedia("(min-width: 768px)");
    const mqLg = window.matchMedia("(min-width: 1024px)");
    const update = () => setCols(mqLg.matches ? 3 : mqMd.matches ? 2 : 1);
    update();
    mqMd.addEventListener("change", update);
    mqLg.addEventListener("change", update);
    return () => {
      mqMd.removeEventListener("change", update);
      mqLg.removeEventListener("change", update);
    };
  }, []);
  return cols;
}

// Shortest-column masonry packing by aspect ratio, like the source.
function useMasonry(photos: Photo[], cols: number) {
  return useMemo(() => {
    const columns: Photo[][] = Array.from({ length: cols }, () => []);
    const heights = new Array(cols).fill(0);
    for (const p of photos) {
      const ratio = (p.height || 600) / (p.width || 400);
      let target = 0;
      for (let c = 1; c < cols; c++) {
        if (heights[c] < heights[target]) target = c;
      }
      columns[target].push(p);
      heights[target] += ratio + 0.15;
    }
    return columns;
  }, [photos, cols]);
}

function PhotoCard({
  photo,
  index,
  eager,
  onOpen,
}: {
  photo: Photo;
  index: number;
  eager: boolean;
  onOpen: (index: number) => void;
}) {
  const [loaded, setLoaded] = useState(false);
  const markLoaded = useCallback(() => setLoaded(true), []);
  return (
    <div className="group cursor-pointer" onClick={() => onOpen(index)}>
      <div className="relative overflow-hidden rounded-lg bg-neutral-100 dark:bg-neutral-900 shadow-sm outline outline-1 outline-black/[0.06] dark:outline-white/[0.06] transition-[transform,box-shadow] duration-300 ease-out hover:translate-y-[-2px] hover:shadow-lg">
        <div className="relative">
          <Image
            src={photo.src}
            alt={photo.alt || photo.title || "Photo"}
            width={photo.width || 400}
            height={photo.height || 600}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority={eager}
            loading={eager ? "eager" : "lazy"}
            onLoad={markLoaded}
            onError={markLoaded}
            className={`w-full h-auto object-cover transition-[opacity,filter,transform] duration-500 hover:scale-[1.02] ${
              loaded ? "opacity-100 blur-0" : "opacity-0 blur-sm"
            }`}
          />
          {!loaded && <div className="absolute inset-0 bg-neutral-100 dark:bg-neutral-900 animate-pulse" aria-hidden="true" />}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-[background-color] duration-300 flex items-center justify-center">
            <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-[opacity,transform] duration-300 transform group-hover:scale-105" />
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-sm mb-1 text-neutral-900 dark:text-neutral-100">{photo.title}</h3>
          <p className="text-xs text-neutral-500 dark:text-neutral-400">{photo.caption}</p>
        </div>
      </div>
    </div>
  );
}

export default function ClonePhotographyPage() {
  const [active, setActive] = useState<number | null>(null);
  const cols = useColumnCount();
  const columns = useMasonry(CLONE_PHOTOS, cols);
  const flatIndex = useMemo(() => {
    const map = new Map<string, number>();
    CLONE_PHOTOS.forEach((p, i) => map.set(p.src, i));
    return map;
  }, []);

  const close = useCallback(() => setActive(null), []);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") setActive((i) => (i === null ? i : (i + 1) % CLONE_PHOTOS.length));
      if (e.key === "ArrowLeft")
        setActive((i) => (i === null ? i : (i - 1 + CLONE_PHOTOS.length) % CLONE_PHOTOS.length));
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close]);

  // Global position of each photo for eager-loading the first few + lightbox order.
  let seen = 0;

  return (
    <div className="max-w-5xl mx-auto px-0 py-12 pb-8">
      <Reveal>
        <header className="mb-12">
          <h1 className="text-2xl font-mono mb-2">photography</h1>
          <p className="text-neutral-500 dark:text-neutral-400 font-mono text-sm">moments captured through my lens</p>
        </header>
      </Reveal>
      <div className="grid gap-6" style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}>
        {columns.map((col, c) => (
          <div key={c} className="flex flex-col gap-6">
            {col.map((p) => {
              const i = flatIndex.get(p.src) ?? seen;
              const order = seen++;
              return <PhotoCard key={p.src} photo={p} index={i} eager={order < 3} onOpen={setActive} />;
            })}
          </div>
        ))}
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150"
          role="dialog"
          aria-modal="true"
          aria-label={CLONE_PHOTOS[active].alt}
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close photo"
            className="absolute top-4 right-4 rounded-full p-2 bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
          <figure className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="relative w-full max-h-[80vh] aspect-[4/3]">
              <Image
                src={CLONE_PHOTOS[active].src}
                alt={CLONE_PHOTOS[active].alt}
                fill
                sizes="100vw"
                className="object-contain rounded-lg"
                priority
              />
            </div>
            <figcaption className="mt-3 text-center text-sm font-mono text-neutral-300">
              {CLONE_PHOTOS[active].title} · {active + 1} / {CLONE_PHOTOS.length}
            </figcaption>
          </figure>
        </div>
      )}
    </div>
  );
}
