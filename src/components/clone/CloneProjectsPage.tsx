import { CLONE_ALL_PROJECTS } from "@/data/clonePagesData";
import Reveal from "./Reveal";
import { GithubActivityCard, CodingActivityCard } from "./CloneActivity";
import CloneProjectCard from "./CloneProjectCard";

export default function CloneProjectsPage() {
  return (
    <div className="max-w-5xl mx-auto px-0 py-12 pb-8">
      <Reveal>
        <header className="mb-12">
          <h1 className="text-2xl font-mono mb-2">projects</h1>
          <p className="text-neutral-500 dark:text-neutral-400 font-mono text-sm">things I&apos;ve built</p>
        </header>
      </Reveal>

      <Reveal>
        <div className="mb-16 space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            <GithubActivityCard />
            <CodingActivityCard />
          </div>
        </div>
      </Reveal>

      <div className="space-y-4">
        {CLONE_ALL_PROJECTS.map((p, i) => (
          <Reveal key={p.title} delay={Math.min(i * 40, 200)}>
            <CloneProjectCard
              title={p.title}
              description={p.description}
              tags={p.tags}
              initial={p.initial}
              status={p.status}
              github={p.github}
              demo={p.demo}
            />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
