type Poster = { title: string; year: string; gradient: string[] };

export default function PosterRail({ items }: { items: Poster[] }) {
  return (
    <div className="overflow-hidden border border-neutral-900/15 dark:border-white/15 bg-white dark:bg-neutral-950 shadow-[0_18px_44px_-44px_rgba(0,0,0,0.5)]">
      <div className="relative overflow-hidden px-4 md:px-6 pb-6 pt-4">
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-6 h-14 border-y border-neutral-900/10 dark:border-white/10 bg-neutral-500/[0.06]" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-2 h-4 border-y border-neutral-900/10 dark:border-white/10 bg-neutral-500/[0.14] shadow-[0_20px_30px_-22px_rgba(0,0,0,0.86)]" />
        <div className="relative z-10">
          <div className="relative">
            <div className="flex snap-x snap-mandatory items-end overflow-x-auto overflow-y-hidden scroll-smooth pb-1 pr-9 overscroll-x-contain no-scrollbar gap-3 md:gap-4">
              {items.map((m) => (
                <article key={m.title} className="group shrink-0 snap-start w-[96px] sm:w-[108px] lg:w-[116px]" title={`${m.title} / ${m.year}`}>
                  <div
                    className="relative block aspect-[2/3] w-full overflow-hidden rounded-[3px] border border-neutral-900/10 dark:border-white/10 shadow-[0_20px_30px_-26px_rgba(0,0,0,0.85)] outline-none transition-transform duration-500 will-change-transform group-hover:-translate-y-0.5"
                    aria-label={m.title}
                  >
                    <div className="absolute inset-0 flex flex-col justify-between p-2" style={{ background: `linear-gradient(150deg, ${m.gradient[0]}, ${m.gradient[1]})` }}>
                      <div className="font-mono text-[7px] uppercase tracking-[0.2em] text-white/60">film</div>
                      <div className="font-fraunces text-sm leading-tight text-white">{m.title}</div>
                    </div>
                    <div aria-hidden="true" className="absolute inset-y-0 left-0 z-10 w-[7%] border-r border-white/15 bg-black/25" />
                    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-20 bg-[linear-gradient(112deg,rgba(255,255,255,0.18),transparent_18%,transparent_72%,rgba(0,0,0,0.12))]" />
                    <div className="pointer-events-none absolute inset-x-1.5 bottom-1.5 z-30 flex items-center justify-between gap-1">
                      <span />
                      <span className="rounded-full bg-white/85 dark:bg-black/60 px-1.5 py-0.5 font-mono text-[8px] text-neutral-900 dark:text-white backdrop-blur">
                        {m.year}
                      </span>
                    </div>
                  </div>
                  <div className="mt-2 min-h-9 transition-transform duration-500 group-hover:-translate-y-0.5">
                    <h3 className="line-clamp-2 font-medium text-xs">{m.title}</h3>
                  </div>
                </article>
              ))}
            </div>
            <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.85)_70%,white)] dark:bg-[linear-gradient(90deg,transparent,rgba(10,10,10,0.85)_70%,#0a0a0a)]" />
          </div>
        </div>
      </div>
    </div>
  );
}
