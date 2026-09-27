// Rebranded clone of anuragd.me layout — original code, Manish copy.
// Layout rhythm cloned, all text/assets are Manish's own (clone-site stance: rebranded).
import { PROFILE as P, PROJECTS as ALL_PROJECTS, BLOGS } from "./portfolioData";

export const CLONE_PROFILE = {
  greeting: "Hey, it's Manish",
  subtitle: "LLM Engineer — Generative AI Apps & Python Backends.",
  name: P.name,
  locationShort: "Bhubaneswar, IN",
  locationLong: "Bhubaneswar, India",
  email: P.email,
  github: P.socials.github,
  linkedin: P.socials.linkedin,
  twitter: P.socials.twitter,
  resumeHref: "/cv",
  photoSrc: "/profile.jpeg",
  photoAlt: "Manish Bhakti Sagar profile photo",
};

// Summary rows mirror target's SUMMARY list (icon tile + line).
// Colors replicate target's blue/green/purple/red/orange/emerald tiles.
export const CLONE_SUMMARY = [
  { icon: "🤖", label: "LLM Engineer — AI assistants, RAG & agentic workflows", bg: "bg-blue-100 dark:bg-blue-900/30", fg: "text-blue-600 dark:text-blue-400" },
  { icon: "🎓", label: "B.Tech CS @ Trident Academy of Technology", bg: "bg-green-100 dark:bg-green-900/30", fg: "text-green-600 dark:text-green-400" },
  { icon: "💻", label: "Prev Full Stack @ Coldrecs (Java, Spring, React, AWS)", bg: "bg-purple-100 dark:bg-purple-900/30", fg: "text-purple-600 dark:text-purple-400" },
  { icon: "🚀", label: "Ex-AI Engineer @ Adtext (Feb–Jul 2026) — shipped contextual ads for AI chat", bg: "bg-red-100 dark:bg-red-900/30", fg: "text-red-600 dark:text-red-400" },
  { icon: "📍", label: "Bhubaneswar, Odisha, India", bg: "bg-orange-100 dark:bg-orange-900/30", fg: "text-orange-600 dark:text-orange-400" },
  { icon: "☁️", label: "FastAPI · OpenAI APIs · AWS · Docker", bg: "bg-emerald-100 dark:bg-emerald-900/30", fg: "text-emerald-600 dark:text-emerald-400" },
];

export const CLONE_PROJECTS = [
  {
    initial: "S",
    title: ALL_PROJECTS[0].title,
    href: ALL_PROJECTS[0].link,
    status: "Live · Client",
    statusStyle: "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300",
    description:
      "Marketing + booking site for Vastu & palmistry — React + Vite, Express AI chatbot, Razorpay checkout with signature-verified booking.",
  },
  {
    initial: "D",
    title: ALL_PROJECTS[1].title,
    href: ALL_PROJECTS[1].link,
    status: "Live",
    statusStyle: "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300",
    description:
      "AI-powered finance dashboard with auth, real-time budgeting, and intelligent insights in one platform.",
  },
  {
    initial: "E",
    title: ALL_PROJECTS[2].title,
    href: ALL_PROJECTS[2].link,
    status: "Featured",
    statusStyle: "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300",
    description:
      "28.9M-param LLM running fully on-device on an $8 ESP32-S3 at ~9 tokens/sec — private, offline inference.",
  },
  {
    initial: "R",
    title: "RAG Evaluation Framework",
    href: "https://github.com/Manish881-hub/livo-ai-rag-evaluation.git",
    status: "Live",
    statusStyle: "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300",
    description:
      "Evaluation pipelines over 5+ retrieval strategies — +28% retrieval quality, analysis from 4h to 15min.",
  },
];

export const CLONE_WRITING = [
  { date: "2026", title: BLOGS[0].title, href: BLOGS[0].url },
  { date: "2026", title: BLOGS[1].title, href: BLOGS[1].url },
  { date: "2025", title: BLOGS[2].title, href: BLOGS[2].url },
  { date: "2025", title: "AI Voice Receptionist — sub-500ms voice agents", href: "https://github.com/Manish881-hub/AI-Voice-Receptionist-Plan" },
  { date: "2025", title: "Shipping on AWS with Docker & CI/CD", href: P.socials.linkedin },
];
