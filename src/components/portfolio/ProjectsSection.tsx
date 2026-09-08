import Image from "next/image";
import { Github, ExternalLink, Check } from "lucide-react";
import { PROJECTS } from "@/data/portfolioData";
import { SectionTitle } from "./SectionTitle";

type Project = (typeof PROJECTS)[number];

const GRADIENTS = [
  "from-indigo-500 to-purple-600",
  "from-violet-500 to-pink-500",
  "from-blue-500 to-cyan-500",
  "from-purple-500 to-rose-500",
  "from-sky-500 to-indigo-500",
  "from-fuchsia-500 to-violet-500",
  "from-indigo-400 to-blue-500",
];

function ProjectBanner({ project, idx }: { project: Project; idx: number }) {
  return (
    <div className="h-24 md:h-28 relative overflow-hidden bg-gray-100 dark:bg-gray-700">
      {project.image ? (
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 800px"
          loading="lazy"
          className="object-cover"
        />
      ) : (
        <div
          className={`w-full h-full bg-gradient-to-br ${GRADIENTS[idx % GRADIENTS.length]} relative`}
        >
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:24px_24px]" />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-3 pt-8">
            <h4 className="text-white font-bold text-sm md:text-base leading-tight">
              {project.title}
            </h4>
            <p className="text-white/60 text-xs mt-0.5">{project.role}</p>
          </div>
        </div>
      )}
    </div>
  );
}

function ProjectInfo({ project }: { project: Project }) {
  return (
    <>
      <div className="flex items-center justify-between mb-3 md:mb-4">
        <span className="text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400">
          {project.status}
        </span>
        <div className="flex items-center gap-2">
          {project.github && (
            <a
              href={project.github}
              className="p-1.5 text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} source on GitHub`}
            >
              <Github size={16} />
            </a>
          )}
          <a
            href={project.link}
            className="p-1.5 text-gray-400 hover:text-indigo-500 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} live`}
          >
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
      <div className="space-y-3 mb-4">
        <p className="text-sm text-gray-600 dark:text-gray-300">
          <span className="font-semibold text-gray-700 dark:text-gray-200">
            Problem:{" "}
          </span>
          {project.problem}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          <span className="font-semibold text-gray-700 dark:text-gray-200">
            Solution:{" "}
          </span>
          {project.solution}
        </p>
        {project.impact && (
          <p className="text-sm text-gray-600 dark:text-gray-300">
            <span className="font-semibold text-gray-700 dark:text-gray-200">
              Impact:{" "}
            </span>
            {project.impact}
          </p>
        )}
      </div>
      {"highlights" in project && Array.isArray(project.highlights) && (
        <ul className="space-y-1.5 mb-4">
          {(project.highlights as string[]).map((point) => (
            <li
              key={point}
              className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-200"
            >
              <Check
                size={14}
                aria-hidden="true"
                className="mt-0.5 shrink-0 text-emerald-600 dark:text-emerald-400"
              />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      )}
      <div className="flex flex-wrap gap-1.5">
        {project.stack.map((item) => (
          <span
            key={item}
            className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-md text-xs font-medium"
          >
            {item}
          </span>
        ))}
      </div>
    </>
  );
}

export default function ProjectsSection() {
  const featured = PROJECTS.filter((p) => p.featured);
  const other = PROJECTS.filter((p) => !p.featured);

  return (
    <div className="animate-in fade-in zoom-in-95 duration-300">
      <SectionTitle
        title="Projects"
        subtitle="Real products I've built — from idea to deployment."
      />

      <h3 className="text-lg font-semibold text-primary mb-5 flex items-center gap-2">
        <span className="w-1.5 h-5 rounded-full bg-indigo-500 inline-block" />
        Featured
      </h3>
      <div className="space-y-6 mb-14">
        {featured.map((project, idx) => (
          <article
            key={project.title}
            className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden"
          >
            <ProjectBanner project={project} idx={idx} />
            <div className="p-5 md:p-7">
              <ProjectInfo project={project} />
            </div>
          </article>
        ))}
      </div>

      <h3 className="text-lg font-semibold text-primary mb-5 flex items-center gap-2">
        <span className="w-1.5 h-5 rounded-full bg-gray-400 inline-block" />
        Other Projects
      </h3>
      <div className="grid gap-5 md:grid-cols-2">
        {other.map((project, idx) => (
          <article
            key={project.title}
            className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden"
          >
            <ProjectBanner project={project} idx={idx + featured.length} />
            <div className="p-4 md:p-5">
              <ProjectInfo project={project} />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
