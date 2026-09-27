import Image from "next/image";
import Link from "next/link";
import { Mail, Linkedin, Github } from "lucide-react";
import { CLONE_PROFILE, CLONE_SUMMARY } from "@/data/cloneData";
import Reveal from "./Reveal";

export default function CloneHero() {
  return (
    <section className="py-6 md:py-8">
      <div className="grid grid-cols-1 md:grid-cols-[1.25fr_1fr] gap-8 md:gap-12 items-start">
        <Reveal className="space-y-6 md:space-y-8 max-w-2xl order-1 md:col-start-1">
          <div className="space-y-3 max-w-[38ch]">
            <h1 className="font-mono font-semibold tracking-tight text-neutral-900 dark:text-neutral-50 text-3xl md:text-4xl lg:text-5xl leading-tight">
              {CLONE_PROFILE.greeting}
            </h1>
            <p className="font-mono text-base md:text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
              {CLONE_PROFILE.subtitle}
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-mono text-xs font-medium tracking-wider text-neutral-500 dark:text-neutral-400 uppercase">
              Summary
            </h3>
            <ul className="font-mono space-y-2 text-neutral-900/90 dark:text-neutral-100/90 text-sm md:text-base leading-relaxed">
              {CLONE_SUMMARY.map((row) => (
                <li key={row.label} className="flex items-center gap-3">
                  <div className={`w-4 h-4 rounded-sm flex items-center justify-center flex-shrink-0 ${row.bg}`}>
                    <span className={`text-xs ${row.fg}`}>{row.icon}</span>
                  </div>
                  <span>{row.label}</span>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4">
              <Link href={CLONE_PROFILE.resumeHref} className="rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/30 dark:focus-visible:ring-white/30">
                <span className="inline-flex items-center clone-link clone-arrow text-sm text-neutral-900 dark:text-neutral-100">
                  View resume
                </span>
              </Link>
              <div className="flex items-center gap-3">
                <a href={`mailto:${CLONE_PROFILE.email}`} aria-label="Email" className="rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/30">
                  <span className="inline-flex items-center clone-link text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors">
                    <Mail className="h-4 w-4" />
                  </span>
                </a>
                <a href={CLONE_PROFILE.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/30">
                  <span className="inline-flex items-center clone-link text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors">
                    <Linkedin className="h-4 w-4" />
                  </span>
                </a>
                <a href={CLONE_PROFILE.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/30">
                  <span className="inline-flex items-center clone-link text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors">
                    <Github className="h-4 w-4" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120} className="order-2 md:col-start-2 md:justify-self-end self-start relative w-full">
          <div className="relative mx-auto w-full max-w-[22rem] aspect-[4/5] md:mx-0 md:w-[360px] md:max-w-none md:aspect-auto md:min-h-[360px] md:h-[420px] rounded-2xl overflow-hidden bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/60 dark:border-neutral-800/60 shadow-md hover:shadow-lg transition-[box-shadow,transform] duration-300 hover:scale-[1.02]">
            <Image
              src={CLONE_PROFILE.photoSrc}
              alt={CLONE_PROFILE.photoAlt}
              fill
              priority
              sizes="(max-width: 768px) 352px, 360px"
              className="object-cover object-[center_20%]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
