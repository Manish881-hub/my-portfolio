// Full-page data for cloned routes — all Manish original copy.
import { PROJECTS, BLOGS, PROFILE } from "./portfolioData";
import { CV_EXPERIENCE, CV_SKILLS, CV_EDUCATION, CV_CERTIFICATIONS } from "./cvData";

export const CLONE_ALL_PROJECTS = PROJECTS.map((p) => ({
  title: p.title,
  href: p.link,
  github: p.github,
  demo: p.link.startsWith("http") ? p.link : null,
  status: p.status === "Building" ? "In Progress" : p.status === "Featured" || p.status === "Live" ? "Live" : p.status,
  description: `${p.problem} ${p.solution}`,
  tags: p.stack,
  initial: p.title.charAt(0),
}));

export const CLONE_ALL_POSTS = [
  ...BLOGS.map((b) => ({ title: b.title, date: b.date, href: b.url, excerpt: b.excerpt })),
  {
    title: "AI Voice Receptionist — sub-500ms voice agents",
    date: "2026",
    href: "https://github.com/Manish881-hub/AI-Voice-Receptionist-Plan",
    excerpt: "STT + LLM + TTS pipelines, tool calling and turn detection at 92% intent accuracy.",
  },
  {
    title: "RAG evals — from 4 hours to 15 minutes",
    date: "2026",
    href: "https://github.com/Manish881-hub/livo-ai-rag-evaluation.git",
    excerpt: "Precision, Recall, F1, MRR and NDCG across 5+ retrieval strategies.",
  },
];

export const CLONE_TIMELINE = CV_EXPERIENCE.map((j) => ({
  org: j.org,
  role: j.role,
  date: j.date,
  location: j.location,
  bullets: j.bullets,
}));

export const CLONE_SKILLS = CV_SKILLS;
export const CLONE_EDUCATION = CV_EDUCATION;
export const CLONE_EDUCATION_LIST = [
  CV_EDUCATION,
  {
    org: "Government Polytechnic Bhubaneswar",
    date: "Mar 2018 – Jan 2021",
    degree: "Diploma of Education, Information Technology — 82%",
    location: "Bhubaneswar, Odisha, India",
  },
  {
    org: "DPS Vidyapeeth",
    date: "2006 – 2018",
    degree: "Class X",
  },
];
export const CLONE_CERTS = CV_CERTIFICATIONS;

export const CLONE_SHELF = {
  books: [
    {
      title: "Designing Data-Intensive Applications",
      author: "Martin Kleppmann",
      status: "read" as const,
      progress: 100,
      spine: ["#26384e", "#315f68", "#d0bd82"],
      ink: "#f5f2e8",
      cover: ["#26384e", "#315f68"],
    },
    {
      title: "The Pragmatic Programmer",
      author: "Hunt & Thomas",
      status: "read" as const,
      progress: 100,
      spine: ["#4c3728", "#6b543a", "#c9b48a"],
      ink: "#faf6ec",
      cover: ["#3a2d20", "#5c4a33"],
    },
    {
      title: "Deep Work",
      author: "Cal Newport",
      status: "reading" as const,
      progress: 62,
      spine: ["#1d2a41", "#2e3f5e", "#8fa3c4"],
      ink: "#eef2fa",
      cover: ["#16213a", "#2c3e5d"],
    },
  ],
  quotes: [
    {
      text: "Go after the hardest thing — duty to future generations.",
      by: "house mantra",
      source: "personal notes",
      date: "2026",
      style: "rangedRight" as const,
    },
    {
      text: "The model is the brain, the harness is the body.",
      by: "build log",
      source: "agent notes",
      date: "2026",
      style: "marginalia" as const,
    },
    {
      text: "Ship small, measure, iterate.",
      by: "field note",
      source: "shipping rules",
      date: "2025",
      style: "rangedRight" as const,
    },
  ],
  links: [
    {
      title: "Adtext — contextual ads for AI chat",
      href: "https://adtext.org/",
      desc: "My build: monetization infrastructure for conversational AI — intent detection meets native offers.",
      date: "2026",
    },
    {
      title: "Model Context Protocol docs",
      href: "https://modelcontextprotocol.io/",
      desc: "The open standard for connecting LLMs to tools and data. Required reading for agent work.",
      date: "2025",
    },
    {
      title: "GitHub — Manish881-hub",
      href: PROFILE.socials.github,
      desc: "Where I ship: voice agents, RAG evals, on-device LLMs, and agentic workflows.",
      date: "2025",
    },
  ],
  movies: [
    { title: "Interstellar", year: "2014", gradient: ["#101828", "#2a3f5f"] },
    { title: "Dune: Part Two", year: "2024", gradient: ["#6b4a2a", "#c98f3d"] },
    { title: "The Batman", year: "2022", gradient: ["#7a1f1f", "#1a1a1a"] },
  ],
  shows: [
    { title: "Severance", year: "2022", gradient: ["#1e3a3a", "#4a7a7a"] },
    { title: "Dark", year: "2017", gradient: ["#141414", "#3d3d3d"] },
    { title: "Vinland Saga", year: "2019", gradient: ["#2a4a2a", "#7a9a5a"] },
  ],
};

export const CLONE_PHOTOS = [
  { src: "/cafe.jpeg", width: 3024, height: 4032, title: "Cafe", alt: "Cafe — coffee and quiet corners", caption: "cafe" },
  { src: "/Coke.jpeg", width: 3024, height: 4032, title: "Coke", alt: "Coke — chilled bottle on the table", caption: "coke" },
  { src: "/linkedinGTM.jpeg", width: 3024, height: 4032, title: "LinkedIn GTM", alt: "LinkedIn GTM — community meetup", caption: "linkedin gtm" },
  { src: "/sky.jpeg", width: 3024, height: 4032, title: "Sky", alt: "Sky — clouds over the city", caption: "sky" },
  { src: "/studytable.jpeg", width: 3024, height: 4032, title: "Study Table", alt: "Study table — desk setup", caption: "study table" },
  { src: "/sunrise.jpeg", width: 4032, height: 3024, title: "Sunrise", alt: "Sunrise — early morning light", caption: "sunrise" },
  { src: "/bornfire.jpeg", width: 3024, height: 4032, title: "Bonfire", alt: "Bonfire — flames under the night sky", caption: "bonfire" },
  { src: "/Jaganath Mandir.jpeg", width: 4160, height: 3120, title: "Jaganath Mandir", alt: "Jaganath Mandir — temple visit", caption: "jaganath mandir" },
];

export const CLONE_USES = [
  "MacBook + VS Code + Warp",
  "Next.js · FastAPI · PostgreSQL",
  "Docker · AWS (EC2, S3, IAM) · Cloudflare",
  "OpenAI APIs · OpenRouter · Mistral",
  "Notion + plain markdown for notes",
];

export const CLONE_NOW = [
  "Building Adtext monetization infra",
  "Shipping RAG + voice-agent evals",
  "Open to LLM / Backend / Cloud roles — remote",
];
