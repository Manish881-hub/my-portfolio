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
    },
    {
      title: "The Pragmatic Programmer",
      author: "Hunt & Thomas",
      status: "read" as const,
      progress: 100,
      spine: ["#4c3728", "#6b543a", "#c9b48a"],
      ink: "#faf6ec",
    },
    {
      title: "Deep Work",
      author: "Cal Newport",
      status: "reading" as const,
      progress: 62,
      spine: ["#1d2a41", "#2e3f5e", "#8fa3c4"],
      ink: "#eef2fa",
    },
    {
      title: "The Innovator's Dilemma",
      author: "Clayton Christensen",
      status: "read" as const,
      progress: 100,
      cover: "/books/0009274687-L.jpg",
      spine: ["#d8cfbe", "#f5efe4", "#d8cfbe"],
      ink: "#17120e",
    },
    {
      title: "How Will You Measure Your Life?",
      author: "Clayton Christensen",
      status: "read" as const,
      progress: 100,
      cover: "/books/0009644895-L.jpg",
      spine: ["#cfc3aa", "#ebe2cf", "#cfc3aa"],
      ink: "#15120f",
    },
    {
      title: "Think Like a Monk",
      author: "Jay Shetty",
      status: "read" as const,
      progress: 100,
      cover: "/books/0010355397-L.jpg",
      spine: ["#18213c", "#2b3a60", "#18213c"],
      ink: "#fbfdff",
    },
    {
      title: "101 Essays That Will Change The Way You Think",
      author: "Brianna Wiest",
      status: "read" as const,
      progress: 100,
      cover: "/books/0010524689-L.jpg",
      spine: ["#111312", "#25261f", "#111312"],
      ink: "#faf5e6",
    },
    {
      title: "The Expectation Effect",
      author: "David Robson",
      status: "read" as const,
      progress: 100,
      cover: "/books/122026760.jpg",
      spine: ["#18213c", "#2b3a60", "#18213c"],
      ink: "#fbfdff",
    },
    {
      title: "The Unfair Advantage",
      author: "Ash Ali & Hasan Kubba",
      status: "read" as const,
      progress: 100,
      cover: "/books/14845030-L.jpg",
      spine: ["#a8a59b", "#cfccc2", "#a8a59b"],
      ink: "#111312",
    },
    {
      title: "You Deserve This Sh!t",
      author: "Jordan Tarver",
      status: "read" as const,
      progress: 100,
      cover: "/books/14957703-L.jpg",
      spine: ["#d8cfbe", "#f5efe4", "#d8cfbe"],
      ink: "#17120e",
    },
    {
      title: "The Obstacle Is the Way",
      author: "Ryan Holiday",
      status: "read" as const,
      progress: 100,
      cover: "/books/18668059.jpg",
      spine: ["#705722", "#967b38", "#705722"],
      ink: "#fff8df",
    },
    {
      title: "$100M Leads",
      author: "Alex Hormozi",
      status: "read" as const,
      progress: 100,
      cover: "/books/193177586.jpg",
      spine: ["#e5dccb", "#fbf6ec", "#e5dccb"],
      ink: "#14110e",
    },
    {
      title: "The Three-Body Problem",
      author: "Cixin Liu",
      status: "read" as const,
      progress: 100,
      cover: "/books/20518872.jpg",
      spine: ["#e7ddca", "#fbf6eb", "#e7ddca"],
      ink: "#111111",
    },
    {
      title: "The Art of Focus",
      author: "Dan Koe",
      status: "read" as const,
      progress: 100,
      cover: "/books/205405070.jpg",
      spine: ["#d8cfbe", "#f5efe4", "#d8cfbe"],
      ink: "#17120e",
    },
    {
      title: "You Can Just Do Things",
      author: "",
      status: "read" as const,
      progress: 100,
      cover: "/books/232294916.jpg",
      spine: ["#ddd6c7", "#f4f0e7", "#ddd6c7"],
      ink: "#121212",
    },
    {
      title: "The Goal",
      author: "Eliyahu Goldratt",
      status: "read" as const,
      progress: 100,
      cover: "/books/27404812.jpg",
      spine: ["#705722", "#967b38", "#705722"],
      ink: "#fff8df",
    },
    {
      title: "Becoming Mindful",
      author: "",
      status: "read" as const,
      progress: 100,
      cover: "/books/34354520.jpg",
      spine: ["#e7ddca", "#fbf6eb", "#e7ddca"],
      ink: "#111111",
    },
    {
      title: "Sherlock Holmes Alphabet",
      author: "",
      status: "read" as const,
      progress: 100,
      cover: "/books/43602793.jpg",
      spine: ["#d8cfbe", "#f5efe4", "#d8cfbe"],
      ink: "#17120e",
    },
    {
      title: "The Personal MBA",
      author: "Josh Kaufman",
      status: "read" as const,
      progress: 100,
      cover: "/books/51913170.jpg",
      spine: ["#d4a10c", "#efc11a", "#c8970a"],
      ink: "#171209",
    },
    {
      title: "The Inheritance Games",
      author: "Jennifer Lynn Barnes",
      status: "read" as const,
      progress: 100,
      cover: "/books/52439531.jpg",
      spine: ["#e5dccb", "#fbf6ec", "#e5dccb"],
      ink: "#14110e",
    },
    {
      title: "The Four Agreements",
      author: "Don Miguel Ruiz",
      status: "read" as const,
      progress: 100,
      cover: "/books/924526-L.jpg",
      spine: ["#45151a", "#6d2228", "#45151a"],
      ink: "#fff7ec",
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
    { title: "The Batman", year: "2022", gradient: ["#7a1f1f", "#1a1a1a"], poster: "/posters/the-batman.jpg" },
    { title: "Dune", year: "2021", gradient: ["#6b4a2a", "#c98f3d"], poster: "/posters/dune-2021.jpg" },
    { title: "Dune: Part Two", year: "2024", gradient: ["#6b4a2a", "#c98f3d"], poster: "/posters/dune-part-two.jpg" },
    { title: "Interstellar", year: "2014", gradient: ["#101828", "#2a3f5f"], poster: "/posters/interstellar.jpg" },
    { title: "Spider-Man: No Way Home", year: "2021", gradient: ["#1f3a7a", "#a01f1f"], poster: "/posters/spiderman-nwh.jpg" },
    { title: "Avengers: Endgame", year: "2019", gradient: ["#2a1f5c", "#5c1f5c"], poster: "/posters/endgame.jpg" },
    { title: "The Lord of the Rings: The Fellowship of the Ring", year: "2001", gradient: ["#1f4a2a", "#8aa05c"], poster: "/posters/lotr-fellowship.jpg" },
    { title: "Avatar", year: "2009", gradient: ["#1f5c7a", "#3da08a"], poster: "/posters/avatar.jpg" },
  ],
  shows: [
    { title: "Friends", year: "1994", gradient: ["#6b4a8a", "#c9a0dc"], poster: "/posters/friends.jpg" },
    { title: "The Big Bang Theory", year: "2007", gradient: ["#8a2a2a", "#dc8a5c"] },
    { title: "Dark", year: "2017", gradient: ["#141414", "#3d3d3d"] },
    { title: "Vinland Saga", year: "2019", gradient: ["#2a4a2a", "#7a9a5a"], poster: "/posters/vinland-saga.jpg" },
    { title: "Suits", year: "2011", gradient: ["#1a1a2e", "#4a4a6a"] },
    { title: "Avatar: The Last Airbender", year: "2024", gradient: ["#7a5c1f", "#c9a53d"], poster: "/posters/avatar-last-airbender.jpg" },
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
