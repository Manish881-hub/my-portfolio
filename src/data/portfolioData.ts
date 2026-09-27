import { Github, Twitter, Linkedin, Globe, Code, Mail, Atom, Bot, Cloud, Award } from 'lucide-react';

export const PROFILE = {
    name: "Manish Bhakti Sagar",
    role: "LLM Engineer | Generative AI Engineer | Python Developer",
    tagline: "LLM Engineer and Python Developer building AI-powered applications with FastAPI, OpenAI APIs, RAG, and conversational AI — from AI assistants and LLM workflows to scalable backends on AWS.",
    location: "Bhubaneswar, Odisha, India",
    email: "bhaktisagar.manish@gmail.com",
    socials: {
        github: "https://github.com/Manish881-hub",
        twitter: "https://x.com/manishbhakti",
        linkedin: "https://www.linkedin.com/in/manish-bhaktisagar/",
        hackerrank: "https://www.hackerrank.com/profile/manishbhakti881"
    }
};

export const BADGES = [
    { title: "LLM Engineer", Icon: Atom, color: "bg-indigo-100 text-indigo-800" },
    { title: "AI Engineer", Icon: Bot, color: "bg-purple-100 text-purple-800" },
    { title: "Cloud Engineer", Icon: Cloud, color: "bg-violet-100 text-violet-800" },
    { title: "AWS Certified", Icon: Award, color: "bg-amber-100 text-amber-800" }
];

export const AVAILABILITY = {
    status: "Open to Full Stack, Backend, DevOps, and Cloud Engineer roles",
    locations: "Remote · Bangalore · Hyderabad",
    bestContact: "Email gets the fastest reply — or connect on LinkedIn.",
};

export const TECH_STACK = [
    "JavaScript", "TypeScript", "Python", "Java", "SQL",
    "React.js", "Next.js", "Tailwind CSS", "Node.js", "FastAPI",
    "Spring Boot", "PostgreSQL", "MySQL", "MongoDB", "Prisma",
    "AWS (EC2, S3, IAM, RDS)", "Docker", "Linux", "CI/CD",
    "LLM Integration", "Prompt Engineering", "RAG", "Agentic Workflows",
];

export const PROJECTS = [
    {
        title: "SanketAura — Vastu & Palmistry by Ram Shankar",
        problem: "Client project for SanketAura (by Ram Shankar) — they needed a marketing + booking site for scientific 16-zone Vastu consultations, non-demolition remedies, and Vedic palmistry in Gurugram (Sector-37D), Delhi NCR, and online worldwide.",
        solution: "React + Vite frontend with an Express server for the AI chatbot and Razorpay payments. Server prices every order from canonical pricing data — the client never sends an amount — and verifies each payment signature before a slot is reserved.",
        impact: "Designed, built, and shipped solo for a client — live project with online checkout (Razorpay: UPI, cards, netbanking, wallets) plus manual-UPI + WhatsApp-confirm fallback; webhook endpoint logs captured payments for reconciliation.",
        role: "Freelance Developer — Client Work",
        stack: ["React", "Vite", "Express", "Razorpay", "AI Chatbot"],
        status: "Live",
        link: "https://www.sanketaura.com/",
        github: "https://github.com/Manish881-hub/Sanket-Aura",
        image: null,
        highlights: ["Live client site: sanketaura.com", "Razorpay checkout + signature-verified slot booking", "Server-side pricing + /api/razorpay-webhook reconciliation"],
        featured: true
    },
    {
        title: "AI Voice Receptionist",
        problem: "A premium wellness resort needed to answer caller questions about packages without adding front-desk load.",
        solution: "LiveKit Agents voice receptionist with OpenAI GPT, Cartesia TTS, Deepgram STT, a package-information tool, multimodal turn detection, and noise cancellation.",
        impact: "Production voice agent for a real resort client, with a recorded demo of full caller conversations.",
        role: "AI Engineer",
        stack: ["TypeScript", "LiveKit Agents", "OpenAI", "Cartesia", "Deepgram"],
        status: "Featured",
        link: "https://drive.google.com/drive/folders/1sLyfz_vF0XEHdakmL6QUuRlRx-4gsWE9",
        github: "https://github.com/Manish881-hub/AI-Voice-Receptionist-Plan",
        image: null,
        highlights: ["Real client deployment", "Tool calling + turn detection", "Sub-500ms voice pipeline"],
        featured: true
    },
    {
        title: "Dimewise AI Finance APP",
        problem: "Managing personal finances is fragmented across multiple tools and platforms.",
        solution: "AI-powered finance dashboard with secure authentication, real-time budgeting, and intelligent insights.",
        impact: "Unified budgeting, transaction tracking, and AI-powered financial insights in a single platform.",
        role: "Full-Stack Developer",
        stack: ["React", "AI Integration", "Auth", "SaaS"],
        status: "Featured",
        link: "https://dimewise.vercel.app/",
        github: null,
        image: "/projects/dimewise-ai-finance-app.svg",
        highlights: ["Live demo at dimewise.vercel.app", "Auth, budgeting & transaction tracking", "AI-powered financial insights"],
        featured: true
    },
    {
        title: "TaskFlow — Realtime Collaborative Task Boards",
        problem: "Teams need Trello/Jira-style boards with live collaboration without heavyweight setup or seat-based pricing.",
        solution: "FastAPI + SQLAlchemy + PostgreSQL backend with native WebSockets, Next.js frontend, JWT access tokens with rotating opaque refresh tokens, and a one-command Docker Compose deploy with seed data.",
        impact: "Live multi-user boards where teammates see card moves and comments instantly, with connection health tracking and clean local/Docker onboarding.",
        role: "Full-Stack Developer",
        stack: ["FastAPI", "PostgreSQL", "WebSockets", "Next.js", "Docker"],
        status: "Live",
        link: "https://taskflow-manish.vercel.app/",
        github: "https://github.com/Manish881-hub/task-flow",
        image: null,
        highlights: ["Live at taskflow-manish.vercel.app", "Live multi-user updates over native WebSockets", "JWT + rotating refresh tokens, Docker Compose deploy"],
        featured: false
    },
    {
        title: "ESP32 AI — LLM on a Microcontroller",
        problem: "Frontier language models need servers or GPUs, ruling out private, offline inference on tiny hardware.",
        solution: "Ported a 28.9M-parameter language model to run fully on-device on an $8 ESP32-S3, streaming tokens to an attached screen at ~9 tokens/second with nothing sent to a server.",
        impact: "100x larger than the previous 260K-parameter on-chip record — most-starred build, with a live hardware demo.",
        role: "AI Engineer",
        stack: ["Python", "ESP32-S3", "On-device LLM", "Embedded AI"],
        status: "Featured",
        link: "https://github.com/Manish881-hub/esp32-ai",
        github: "https://github.com/Manish881-hub/esp32-ai",
        image: null,
        highlights: ["28.9M params fully on-device", "~9 tokens/sec on $8 hardware", "Live hardware demo GIF"],
        featured: true
    },
    {
        title: "Realtime Phone Agents",
        problem: "Businesses miss calls and lead follow-ups outside working hours, and staffing a call center is expensive and slow to scale.",
        solution: "Real-time phone agent platform with a streaming FastRTC voice agent, faster-whisper STT, Orpheus TTS, tool-calling property search over a Superlinked vector index, avatar personas, and outbound calling through a Gradio + FastAPI app.",
        impact: "Production-style voice AI with Dockerized STT/TTS services, CI deploys, RunPod GPU orchestration, and 4 tutorial notebooks walking through the full pipeline.",
        role: "AI Engineer",
        stack: ["Python", "FastRTC", "Faster-Whisper", "Orpheus TTS", "Superlinked", "FastAPI", "Docker"],
        status: "Featured",
        link: "https://github.com/Manish881-hub/phone-calling-agents",
        github: "https://github.com/Manish881-hub/phone-calling-agents",
        image: null,
        highlights: ["Streaming STT to LLM to TTS phone pipeline", "Superlinked vector property-search tools", "Dockerized services + RunPod GPU deploys"],
        featured: true
    },
    {
        title: "Radiology Report Harness",
        problem: "LLM-generated radiology reports drift from required templates — breaking negation, laterality, and measurements.",
        solution: "Template-faithful harness that routes each dictated finding to its field, edits abnormals minimally, preserves normals verbatim, and validates every report; Gemini 2.0 Flash at temperature 0 with deterministic fallback.",
        impact: "End-to-end test.csv to submission.csv pipeline with field-routing and preservation checks.",
        role: "AI Engineer",
        stack: ["Python", "Gemini API", "LLM Evals", "Harness Engineering"],
        status: "New",
        link: "https://github.com/Manish881-hub/Radiology-harness",
        github: "https://github.com/Manish881-hub/Radiology-harness",
        image: null,
        highlights: ["Template-faithful generation", "Negation + laterality validation", "Deterministic fallback path"],
        featured: false
    },
    {
        title: "Context Policy Platform",
        problem: "Permissions baked into prompts can't enforce context-dependent access for AI agents calling tools.",
        solution: "Policy-first platform that evaluates identity plus live context fresh on every tool call — the same request is allowed or denied based on queue, GPS check-in, and ticket state.",
        impact: "Working authorization layer for field-service agent tooling, built from scratch.",
        role: "AI Engineer",
        stack: ["Python", "Policy Engine", "Agent Tool-use", "FastAPI"],
        status: "Building",
        link: "https://github.com/Manish881-hub/context-policy-platform",
        github: "https://github.com/Manish881-hub/context-policy-platform",
        image: null,
        highlights: ["Policy-first, not prompt-first", "Per-call context evaluation", "Field-service authorization"],
        featured: false
    },
    {
        title: "SEO/AEO Blog Engine",
        problem: "AI content agents with write access are unsafe, and most auto-generated posts never match real search demand.",
        solution: "Agentic blog engine with a hard invariant — the agent has no write tool. It audits posts, drafts against demand, and posts suggestion cards to Slack; a server handler publishes only after a human click.",
        impact: "Human-in-the-loop publishing loop with demand measurement built in.",
        role: "AI Engineer",
        stack: ["TypeScript", "Slack API", "Agentic Workflows", "SEO"],
        status: "New",
        link: "https://github.com/Manish881-hub/seo-aeo-blogengine",
        github: "https://github.com/Manish881-hub/seo-aeo-blogengine",
        image: null,
        highlights: ["No-write-tool safety invariant", "Slack approval workflow", "Demand-measured output"],
        featured: false
    },
    {
        title: "Autonomous Insurance Claims Agent",
        problem: "First Notice of Loss intake is manual, slow, and error-prone across PDFs and free-text reports.",
        solution: "Backend service that parses claim documents, extracts structured data with OpenRouter and Mistral, validates mandatory fields, routes by priority across 5 workflows, and justifies each decision in plain language.",
        impact: "Automated FNOL pipeline with validation, smart routing, and explainable AI justifications.",
        role: "AI Engineer",
        stack: ["Python", "OpenRouter", "Mistral", "Docker", "Jest"],
        status: "Featured",
        link: "https://github.com/Manish881-hub/Autonomous-Insurance-Claims-Processing-Agent",
        github: "https://github.com/Manish881-hub/Autonomous-Insurance-Claims-Processing-Agent",
        image: null,
        highlights: ["PDF + TXT claim parsing", "Mistral-powered extraction", "Explainable routing decisions"],
        featured: true
    },
    {
        title: "Empty Cups",
        problem: "Small businesses need a simple way to display listings without a complex CMS.",
        solution: "Minimal full-stack app serving listing data via Flask REST API with a dynamic JS frontend, containerized with Docker for easy deployment.",
        impact: "Dockerized full-stack listing platform that small businesses can deploy with minimal setup.",
        role: "Full-Stack Developer",
        stack: ["Flask", "REST API", "Docker", "JavaScript"],
        status: "Live",
        link: "https://github.com/Manish881-hub/EmptyCups",
        github: "https://github.com/Manish881-hub/EmptyCups",
        image: "/projects/empty-cups.svg",
        highlights: ["One-command Docker deploy", "Flask REST API + dynamic JS frontend"],
        featured: false
    },
    {
        title: "Real Estate Tenant Platform",
        problem: "Property managers lack streamlined tools for tenant onboarding and data management.",
        solution: "Full-featured tenant management system with property management workflows and secure data handling.",
        impact: "Streamlined tenant onboarding and property data management in a single dashboard.",
        role: "Frontend Developer",
        stack: ["React", "Tailwind", "Property Management"],
        status: "New",
        link: "https://github.com/Manish881-hub/Real-Estate-Tenant-1",
        github: "https://github.com/Manish881-hub/Real-Estate-Tenant-1",
        image: "/projects/real-estate-tenant-platform.svg",
        highlights: ["Tenant onboarding workflows", "React + Tailwind dashboard"],
        featured: false
    },
    {
        title: "CertifyME",
        problem: "Organizations need a fast way to generate and verify digital certificates.",
        solution: "Full-stack certification management system for generating, verifying, and managing digital certificates with Flask backend.",
        impact: "Automated digital certificate generation and verification for organizations.",
        role: "Full-Stack Developer",
        stack: ["Flask", "Python", "Digital Certificates"],
        status: "Featured",
        link: "https://github.com/Manish881-hub/CertifyME",
        github: "https://github.com/Manish881-hub/CertifyME",
        image: "/projects/certifyme.svg",
        highlights: ["Certificate generation + verification", "Flask backend with manage UI"],
        featured: false
    },
    {
        title: "Todo App with Authentication",
        problem: "Simple task management apps lack secure user-specific data isolation.",
        solution: "Todo application with secure authentication, protected routes, and persistent per-user storage.",
        impact: "Secure multi-user task management with persistent per-user data isolation.",
        role: "Full-Stack Developer",
        stack: ["React", "Auth", "JavaScript"],
        status: "New",
        link: "https://github.com/Manish881-hub/Todo-auth",
        github: "https://github.com/Manish881-hub/Todo-auth",
        image: "/projects/todo-app-with-authentication.svg",
        highlights: ["Per-user data isolation", "Protected routes + persistent storage"],
        featured: false
    },
    {
        title: "Firebase Login Authentication",
        problem: "Implementing secure auth flows from scratch is time-consuming and error-prone.",
        solution: "Reusable authentication system with email/password login, user onboarding, and protected routes using Firebase.",
        impact: "Reusable auth system that can be dropped into any Firebase-based project.",
        role: "Full-Stack Developer",
        stack: ["Firebase", "Auth", "React"],
        status: "Live",
        link: "https://github.com/Manish881-hub/Login-Authentication-Firebase",
        github: "https://github.com/Manish881-hub/Login-Authentication-Firebase",
        image: "/projects/firebase-login-authentication.svg",
        highlights: ["Drop-in reusable auth module", "Email/password login + onboarding"],
        featured: false
    }
];

export const BLOGS = [
    {
        title: "How Adtext Finds Relevant Ads in AI Conversations",
        excerpt: "Building contextual ad infrastructure that detects conversation intent and surfaces relevant offers natively within chat interfaces — without harming user experience.",
        date: "2026",
        readTime: "4 min read",
        platform: "Adtext Blog",
        url: "https://adtext.org/"
    },
    {
        title: "Lessons Building an AI Monetization SDK",
        excerpt: "What I learned building a full-stack AI advertising platform: architecture decisions, API design, and integrating LLM-powered recommendation pipelines.",
        date: "2026",
        readTime: "5 min read",
        platform: "Adtext Blog",
        url: "https://adtext.org/"
    },
    {
        title: "What MCP Changes for AI Applications",
        excerpt: "Exploring how the Model Context Protocol enables standardized tool interaction for LLMs and what it means for agentic workflow architecture.",
        date: "2025",
        readTime: "3 min read",
        platform: "LinkedIn",
        url: PROFILE.socials.linkedin
    },
];

export const TIMELINE_DATA = [
    {
        org: "Adtext",
        role: "Artificial Intelligence Engineer · Full-time",
        date: "Feb 2026 - Jul 2026 · 6 mos",
        location: "Remote",
        type: "Work",
        description: "Built and shipped an AI-powered contextual advertising platform for conversational AI, owning frontend, backend, AI infrastructure, deployment, and product strategy. Semantic targeting with FastAPI, sentence-transformer embeddings, ONNX Runtime, and contextual retrieval; OpenAI-compatible LLM workflows, streaming chat, Supabase, and multi-model support. Scalable APIs and cloud infra with FastAPI, Next.js, React, PostgreSQL, Redis, Docker, AWS, and Cloudflare. Led discovery with 50+ AI founders. Skills: LLM/AI Integration, Python and full-stack AI delivery. Live: https://adtext.org/"
    },
    {
        org: "Coldrecs Private Limited",
        role: "Full Stack Engineer",
        date: "Mar 2025 - Dec 2025",
        location: "Bengaluru, India · Remote",
        type: "Work",
        description: "Shipped secure enterprise software for legal, healthcare, and government clients. Promoted from intern in 3 months. Backend with Java, Spring Boot, and Spring MVC; frontends in React.js, Next.js, and TypeScript; MySQL via JDBC; AWS (EC2, S3, IAM) deployments handled independently."
    },
    {
        org: "Trident Academy of Technology",
        role: "B.Tech in Computer Science",
        date: "Dec 2022 - May 2025",
        location: "Bhubaneswar",
        type: "Education",
        description: "CGPA: 7.5. Led team to 3rd place in inter-college esports LAN competition."
    },
    {
        org: "Government Polytechnic",
        role: "Diploma in Information Technology",
        date: "Oct 2018 - Jun 2021",
        location: "Bhubaneswar",
        type: "Education",
        description: "Secured 82%. Represented college as Forward Commander during cultural events."
    }
];

export const CERTIFICATIONS = [
    "Generative AI (Databricks, Nov 2025)",
    "JavaScript Intermediate (HackerRank, Nov 2025)",
    "SQL Intermediate (HackerRank, Nov 2025)",
    "AI Engineer Fresher (Unstop, Oct 2025)",
];

export const CURRENT_FOCUS = [
    { icon: "🚀", label: "Ex-Adtext AI Engineer — shipped contextual ads for AI chat" },
    { icon: "🤖", label: "Exploring Agentic AI Systems & MCP" },
    { icon: "☁️", label: "Shipping Cloud-Native Products" },
];

export const BIO_LINKS = [
    { label: "Personal Website", url: "/", icon: Globe },
    { label: "GitHub Profile", url: PROFILE.socials.github, icon: Github },
    { label: "LinkedIn Profile", url: PROFILE.socials.linkedin, icon: Linkedin },
    { label: "Twitter (X)", url: PROFILE.socials.twitter, icon: Twitter },
    { label: "HackerRank", url: PROFILE.socials.hackerrank, icon: Code },
    { label: "Contact Me", url: `mailto:${PROFILE.email}`, icon: Mail },
];
