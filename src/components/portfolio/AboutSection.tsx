import { Cpu, Award } from "lucide-react";
import { CERTIFICATIONS, TECH_STACK } from "@/data/portfolioData";
import { SectionTitle } from "./SectionTitle";

const CURRENT_FOCUS_TAGS = [
  "Model Context Protocol (MCP)",
  "Agentic Workflows",
  "AI Monetization",
  "FastAPI",
  "Next.js",
  "Cloud Architecture",
  "LLM Integration",
  "Generative AI",
];

const WHAT_I_BUILD = [
  {
    icon: "📦",
    title: "AI Assistants & Agents",
    desc: "Voice agents, RAG apps, and LLM-powered workflows",
  },
  {
    icon: "🤖",
    title: "LLM Applications",
    desc: "AI-powered tools, agents, and intelligent workflows",
  },
  {
    icon: "⚙️",
    title: "Backend APIs",
    desc: "FastAPI, Node.js, PostgreSQL at scale",
  },
  {
    icon: "☁️",
    title: "Cloud Infrastructure",
    desc: "AWS, Docker, CI/CD, production deployments",
  },
];

export default function AboutSection() {
  return (
    <div className="max-w-3xl mx-auto space-y-12 animate-in fade-in zoom-in-95 duration-300">
      {/* Who I Am */}
      <section className="text-center md:text-left">
        <SectionTitle title="Who I Am" />
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          LLM Engineer and Python Developer building AI-powered applications
          with FastAPI, OpenAI APIs, Retrieval-Augmented Generation (RAG),
          conversational AI, and REST APIs.
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
          Experienced in developing AI assistants, LLM-powered workflows, and
          scalable backend services — previously Artificial Intelligence Engineer at
          Adtext (Feb–Jul 2026, Remote), where I built and shipped a contextual
          advertising platform with semantic targeting, LLM-driven recommendations,
          and cloud deployment on AWS. Side projects in voice agents and RAG evaluation. AWS Certified
          Cloud Practitioner with hands-on Docker, Linux, and CI/CD experience.
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
          Currently looking for LLM Engineer, Generative AI Engineer, Backend,
          or Cloud roles. Open to remote or Bangalore/Hyderabad.
        </p>
      </section>

      {/* Current Focus */}
      <section>
        <SectionTitle title="Current Focus" />
        <div className="flex flex-wrap gap-2.5">
          {CURRENT_FOCUS_TAGS.map((item) => (
            <span
              key={item}
              className="px-3.5 py-1.5 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 rounded-lg text-sm font-medium"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* What I Build */}
      <section>
        <SectionTitle title="What I Build" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {WHAT_I_BUILD.map((item, i) => (
            <div
              key={i}
              className="p-5 rounded-xl bg-white dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="text-2xl mb-2 block">{item.icon}</span>
              <h4 className="font-semibold text-primary mb-1">{item.title}</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack + Certifications */}
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
            <Cpu size={20} className="text-indigo-500" /> Tech Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {TECH_STACK.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
            <Award size={20} className="text-yellow-500" /> Certifications
          </h3>
          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
            {CERTIFICATIONS.map((cert, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0"></span>
                <span>{cert}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Languages */}
      <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-xl">
        <h3 className="text-lg font-bold text-primary mb-2">Languages</h3>
        <div className="flex gap-6 text-gray-600 dark:text-gray-400">
          <div>
            English{" "}
            <span className="text-xs opacity-75 block">Full Professional</span>
          </div>
          <div>
            Hindi{" "}
            <span className="text-xs opacity-75 block">Full Professional</span>
          </div>
          <div>
            Odia <span className="text-xs opacity-75 block">Native</span>
          </div>
        </div>
      </div>
    </div>
  );
}
