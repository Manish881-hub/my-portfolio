// CV data mirrors public/documents/resume.tex (the ATS-passed LaTeX resume) 1:1.
// Update resume.tex first, then mirror the change here so the /cv page,
// the plain-text copy, and the PDF source never drift apart.

export const CV_HEADER = {
  name: "Manish Bhakti Sagar",
  headline: "LLM Engineer | Generative AI Engineer | Python Developer",
  phone: "+91-7536907707",
  phoneHref: "tel:+917536907707",
  email: "bhaktisagar.manish@gmail.com",
  linkedinLabel: "manishbhakti",
  linkedinUrl: "https://www.linkedin.com/in/manish-bhaktisagar/",
  githubLabel: "Manish881-hub",
  githubUrl: "https://github.com/Manish881-hub",
  portfolioLabel: "Portfolio",
  portfolioUrl: "https://www.manish-bhaktisagar.is-a.dev/",
};

export const CV_SUMMARY =
  "LLM Engineer and Python Developer with experience building AI-powered applications using FastAPI, OpenAI APIs, Retrieval-Augmented Generation (RAG), conversational AI, and REST APIs. Experienced in developing AI assistants, LLM-powered workflows, and scalable backend services while optimizing AI applications for performance and reliability.";

export interface CVJob {
  org: string;
  date: string;
  role: string;
  location: string;
  bullets: string[];
  links?: { label: string; url: string }[];
}

export const CV_EXPERIENCE: CVJob[] = [
  {
    org: "Adtext",
    date: "Feb 2026 – Jul 2026",
    role: "Artificial Intelligence Engineer",
    location: "Remote",
    bullets: [
      "Built and shipped an AI-powered contextual advertising platform for conversational AI applications, owning development across frontend, backend, AI infrastructure, deployment, and product strategy.",
      "Designed and developed semantic targeting pipelines using FastAPI, sentence-transformer embeddings, ONNX Runtime, and contextual retrieval to deliver real-time ad recommendations.",
      "Integrated OpenAI-compatible LLM workflows, streaming chat interfaces, Supabase, and multi-model AI support to power production-ready conversational experiences.",
      "Built and deployed scalable APIs, authentication, and cloud infrastructure using FastAPI, Next.js, PostgreSQL, Docker, AWS, and Cloudflare.",
      "Led customer discovery and go-to-market efforts by engaging with 50+ AI founders, validating product demand, gathering feedback, and shaping product direction through real user insights.",
      "Stack: Python · FastAPI · Next.js · React · PostgreSQL · Redis · OpenAI API · Sentence Transformers · ONNX Runtime · Docker · AWS · Cloudflare.",
    ],
    links: [{ label: "Live site", url: "https://adtext.org/" }],
  },
  {
    org: "Coldrecs Private Limited",
    date: "Mar 2025 – Dec 2025",
    role: "Full Stack Engineer",
    location: "Bengaluru, India · Remote",
    bullets: [
      "Shipped secure, enterprise-grade software for clients in legal, healthcare, and government domains where correctness and security are non-negotiable.",
      "Promoted from Software Engineer Intern to Full Stack Engineer within 3 months — one of the fastest progressions on the team.",
      "Engineered backend systems and REST APIs using Java, Spring Boot, and Spring MVC; owned feature delivery across schema design, business logic, and API contracts for enterprise clients with strict compliance requirements.",
      "Built production-facing frontend interfaces in React.js, Next.js, and TypeScript — handling data-dense UI for legal and healthcare workflows.",
      "Managed relational data persistence with MySQL via JDBC; designed and optimized schemas for high-integrity enterprise data.",
      "Deployed and maintained applications on AWS infrastructure (EC2 for compute, S3 for storage, IAM for access control) — handled deployment pipelines and environment configuration independently.",
      "Stack: Java · Spring Boot · Spring MVC · React.js · Next.js · TypeScript · MySQL · JDBC · AWS EC2 · S3 · IAM.",
    ],
  },
];

export interface CVProject {
  title: string;
  date: string;
  githubUrl: string;
  bullets: string[];
  links?: { label: string; url: string }[];
}

export const CV_PROJECTS: CVProject[] = [
  {
    title: "AI Voice Receptionist",
    date: "July-2026",
    githubUrl: "https://github.com/Manish881-hub/AI-Voice-Receptionist-Plan",
    bullets: [
      "Engineered real-time voice interactions with <500ms latency using optimized STT + LLM + TTS pipelines.",
      "Implemented tool calling and conversational turn detection, achieving 92% accuracy in understanding user intent.",
      "Containerized the application with Docker and deployed on LiveKit Cloud, reducing setup time from 2 days to 2 hours.",
    ],
    links: [
      {
        label: "Demo Video",
        url: "https://drive.google.com/drive/folders/1sLyfz_vF0XEHdakmL6QUuRlRx-4gsWE9",
      },
    ],
  },
  {
    title: "RAG Evaluation Framework",
    date: "June-2026",
    githubUrl: "https://github.com/Manish881-hub/livo-ai-rag-evaluation.git",
    bullets: [
      "Designed evaluation pipelines that measured Precision, Recall, F1-Score, MRR, and NDCG across 5+ retrieval strategies.",
      "Improved retrieval quality by 28% through systematic comparison of chunk sizes and embedding models.",
      "Created automated visualization dashboards, reducing analysis time from 4 hours to 15 minutes.",
      "Tech Stack: Python, TF-IDF, Cosine Similarity, NumPy, Matplotlib.",
    ],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/Manish881-hub/livo-ai-rag-evaluation.git",
      },
    ],
  },
];

export const CV_SKILLS: { category: string; items: string }[] = [
  { category: "Languages", items: "Python, Java, TypeScript, SQL" },
  {
    category: "AI & LLM",
    items:
      "OpenAI API, LiveKit Agents, Generative AI, Prompt Engineering, Tool Calling, RAG",
  },
  { category: "Backend", items: "FastAPI, Node.js, REST APIs, WebSockets" },
  { category: "Databases", items: "PostgreSQL, MongoDB, MySQL" },
  { category: "Frontend", items: "React, Next.js, Tailwind CSS, HTML, CSS" },
  {
    category: "DevOps & Cloud",
    items: "AWS (EC2, S3, IAM, RDS), Docker, Git, GitHub, CI/CD, Linux",
  },
];

export const CV_EDUCATION = {
  org: "Trident Academy of Technology, Bhubaneswar",
  date: "Dec 2022 – Apr 2025",
  degree: "Bachelor of Technology in Computer Science & Technology – CGPA 7.5/10",
  location: "Bhubaneswar, Odisha, India",
};

export const CV_CERTIFICATIONS = [
  "Databricks Generative AI (2025)",
  "Anthropic AI Fluency (2026)",
  "Anthropic MCP",
  "AWS Certified Cloud Practitioner (2025)",
  "GitHub Developer Program (2026)",
  "HackerRank SQL",
  "HackerRank JavaScript",
  "OpenEDG Python (2021)",
];

export function buildCVPlainText(): string {
  const lines: string[] = [
    CV_HEADER.name.toUpperCase(),
    CV_HEADER.headline,
    `${CV_HEADER.phone} | ${CV_HEADER.email}`,
    `${CV_HEADER.linkedinUrl} | ${CV_HEADER.githubUrl} | ${CV_HEADER.portfolioUrl}`,
    "",
    "PROFESSIONAL SUMMARY",
    CV_SUMMARY,
    "",
    "EXPERIENCE",
    ...CV_EXPERIENCE.flatMap((job) => [
      `${job.org} — ${job.role} (${job.date}, ${job.location})`,
      ...job.bullets.map((b) => `* ${b}`),
      ...(job.links ?? []).map((l) => `* ${l.label}: ${l.url}`),
      "",
    ]),
    "PROJECTS",
    ...CV_PROJECTS.flatMap((p) => [
      `${p.title} (${p.date}) — ${p.githubUrl}`,
      ...p.bullets.map((b) => `* ${b}`),
      ...(p.links ?? []).map((l) => `* ${l.label}: ${l.url}`),
      "",
    ]),
    "TECHNICAL SKILLS",
    ...CV_SKILLS.map((s) => `${s.category}: ${s.items}`),
    "",
    "EDUCATION",
    `${CV_EDUCATION.degree}, ${CV_EDUCATION.org} (${CV_EDUCATION.date})`,
    "",
    "CERTIFICATIONS",
    CV_CERTIFICATIONS.join(" | "),
  ];
  return lines.join("\n");
}
