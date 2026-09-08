"use client";

import { useState } from "react";
import { CLONE_SHELF } from "@/data/clonePagesData";

type Book = (typeof CLONE_SHELF.books)[number];

const TILTS = ["0.96deg", "-0.48deg", "0.24deg"];

function Spine({ book, tilt }: { book: Book; tilt: string }) {
  const [c1, c2, c3] = book.spine;
  return (
    <div
      aria-hidden="true"
      className="absolute bottom-0 left-0 overflow-hidden rounded-[1px] border-x border-black/10 shadow-[0_12px_16px_-18px_rgba(0,0,0,0.55)] transition-[opacity,transform] duration-200"
      style={{
        height: "203px",
        width: "100%",
        opacity: 1,
        transform: `translateX(0px) rotateY(0deg) rotate(${tilt})`,
        transformOrigin: "left bottom",
        transformStyle: "preserve-3d",
      }}
    >
      <div
        className="absolute inset-0 overflow-hidden rounded-[1px]"
        style={{ background: `linear-gradient(90deg, ${c1}, ${c2} 50%, ${c1})`, color: book.ink }}
      >
        <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.13),rgba(255,255,255,0.08)_10%,transparent_23%,transparent_77%,rgba(0,0,0,0.12))]" />
        <div aria-hidden="true" className="absolute inset-y-0 left-0 w-px bg-white/45" />
        <div aria-hidden="true" className="absolute inset-y-0 right-0 w-px bg-black/25" />
        <div className="absolute left-1/2 top-[46%] flex origin-center -translate-x-1/2 -translate-y-1/2 -rotate-90 items-center justify-center text-center" style={{ width: "150px" }}>
          <div
            className="whitespace-nowrap uppercase leading-none font-serif font-semibold tracking-[0.045em]"
            style={{ color: book.ink, fontSize: "10.5px" }}
          >
            {book.title}
          </div>
        </div>
        <div
          className="pointer-events-none absolute inset-x-[10%] bottom-[6.5%] z-10 mx-auto hidden min-h-[12%] flex-col items-center justify-end overflow-hidden border-t border-current/10 pt-1 text-center font-mono font-semibold uppercase leading-[1.05] tracking-[0.045em] opacity-60 md:flex"
          style={{ color: book.ink, fontSize: "6px" }}
        >
          <span className="line-clamp-2">{book.author}</span>
        </div>
      </div>
    </div>
  );
}

function Cover({ book }: { book: Book }) {
  const [c1, c2] = book.cover;
  return (
    <div className="absolute bottom-0 left-0 overflow-hidden rounded-[2px] bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.095)]">
      <div className="relative h-full w-full overflow-hidden p-4 flex flex-col justify-between" style={{ background: `linear-gradient(135deg, ${c1}, ${c2} 60%, ${c1})` }}>
        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/65">book</div>
        <div className="space-y-2">
          <div className="font-fraunces text-2xl leading-none text-white">{book.title}</div>
          <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/70">{book.author}</div>
        </div>
        <div>
          <div className="h-1 rounded-full bg-white/20 overflow-hidden">
            <div className="h-full bg-white/80" style={{ width: `${book.progress}%` }} />
          </div>
          <div className="mt-1 font-mono text-[9px] text-white/60">
            {book.status === "read" ? "finished" : `${book.progress}% read`}
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.18)_0%,rgba(255,255,255,0.15)_3%,transparent_7%,transparent_100%)]" />
    </div>
  );
}

export default function BookShelf() {
  const [open, setOpen] = useState(0);
  const books = CLONE_SHELF.books;

  return (
    <div className="overflow-hidden border border-neutral-900/15 dark:border-white/15 bg-white dark:bg-neutral-950 shadow-[0_22px_48px_-50px_rgba(0,0,0,0.78)]">
      <div className="relative border-t border-black/10 px-4 pb-3 pt-3 md:px-6 md:pb-4 md:pt-4">
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-[35px] z-30 h-px bg-[linear-gradient(90deg,transparent,rgba(0,0,0,0.12)_12%,rgba(0,0,0,0.2)_50%,rgba(0,0,0,0.12)_88%,transparent)]" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-3.5 z-30 h-3.5 border-y border-black/10 bg-[linear-gradient(180deg,#fbfbfa,#e7e7e3_50%,#c9c9c4)] md:bottom-4" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-1 z-30 h-3 border-y border-black/10 bg-[linear-gradient(180deg,#ededeb,#d5d5d0_62%,#b9b9b3)] md:bottom-1.5" />

        <div className="relative z-10">
          <div className="flex min-h-[132px] items-end overflow-hidden md:min-h-[203px]">
            <div className="relative overflow-hidden">
              <div className="snap-x snap-mandatory overflow-x-auto overflow-y-hidden scroll-smooth overscroll-x-contain py-1 pr-6 no-scrollbar">
                <div className="relative flex w-max items-end gap-[2px]" style={{ minHeight: "206px" }}>
                  <div className="relative flex items-end gap-[2px] pt-7">
                    <div className="pointer-events-none absolute left-0 top-0 z-30 whitespace-nowrap font-mono text-[8px] uppercase tracking-[0.28em] text-neutral-500/70 sm:left-1/2 sm:-translate-x-1/2 md:text-[9px]">
                      <span className="sm:hidden">recent</span>
                      <span className="hidden sm:inline">recently read</span>
                    </div>
                    {books.map((b, i) => {
                      const isOpen = open === i;
                      return (
                        <button
                          key={b.title}
                          type="button"
                          onClick={() => setOpen(isOpen ? -1 : i)}
                          aria-label={`${isOpen ? "Close" : "Open"} ${b.title}, ${b.status}`}
                          aria-pressed={isOpen}
                          className="book-interaction group relative shrink-0 snap-start cursor-pointer select-none self-end bg-transparent p-0 text-left outline-none active:scale-[0.985] focus-visible:ring-2 focus-visible:ring-neutral-900/30"
                          style={{
                            height: "206px",
                            width: isOpen ? "155px" : "37px",
                            minWidth: isOpen ? "155px" : "37px",
                            flexBasis: isOpen ? "155px" : "37px",
                            perspective: "720px",
                            transition: "width 240ms cubic-bezier(0.16, 1, 0.3, 1)",
                            zIndex: isOpen ? 20 : 10,
                          }}
                        >
                          <div
                            className="absolute bottom-0 left-0"
                            style={{
                              height: "203px",
                              width: isOpen ? "155px" : "100%",
                              opacity: isOpen ? 0 : 1,
                              transform: isOpen ? "translateX(-3px) rotateY(-72deg)" : `translateX(0px) rotateY(0deg)`,
                              transformOrigin: "left bottom",
                              transformStyle: "preserve-3d",
                              transition: "opacity 200ms, transform 200ms",
                            }}
                          >
                            <Spine book={b} tilt={TILTS[i % TILTS.length]} />
                          </div>
                          <div
                            className="absolute bottom-0 left-0 will-change-transform"
                            style={{
                              height: "203px",
                              width: "150px",
                              opacity: isOpen ? 1 : 0,
                              transform: isOpen
                                ? "translateX(0px) translateY(0px) rotateY(0deg) scaleX(1) scale(1)"
                                : "translateX(-10px) translateY(5px) rotateY(-58deg) scaleX(0.72) scale(0.985)",
                              transformOrigin: "left bottom",
                              transformStyle: "preserve-3d",
                              transition: "opacity 180ms, transform 240ms cubic-bezier(0.16, 1, 0.3, 1)",
                              pointerEvents: isOpen ? "auto" : "none",
                            }}
                          >
                            <Cover book={b} />
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 z-30 w-12 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.85)_70%,white)] dark:bg-[linear-gradient(90deg,transparent,rgba(10,10,10,0.85)_70%,#0a0a0a)]" />
      </div>
    </div>
  );
}
