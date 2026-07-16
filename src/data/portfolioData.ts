import { Github, Twitter, Linkedin, Globe, Code, Mail } from 'lucide-react';

export const PROFILE = {
    name: "Manish Bhakti Sagar",
    role: "Full Stack Engineer | AWS Certified | Cloud & Backend",
    tagline: "I build AI-powered products, developer tools, and scalable web applications. 1+ year of experience shipping production code — from frontend to backend to AWS infrastructure.",
    location: "Bhubaneswar, Odisha, India",
    email: "bhaktisagar.manish@gmail.com",
    socials: {
        github: "https://github.com/Manish881-hub",
        twitter: "https://x.com/manishbhakti?s=21",
        linkedin: "https://www.linkedin.com/in/manish-bhaktisagar/",
        reddit: "https://www.reddit.com/u/Quiet-Remove-3822/s/NsWuyZUGWp",
        hackerrank: "https://www.hackerrank.com/profile/manishbhakti881"
    }
};

export const BADGES = [
    { title: "Full-Stack Engineer", icon: "⚛️", color: "bg-indigo-100 text-indigo-800" },
    { title: "AI Engineer", icon: "🤖", color: "bg-purple-100 text-purple-800" },
    { title: "Cloud Engineer", icon: "☁️", color: "bg-violet-100 text-violet-800" },
    { title: "AWS Certified", icon: "☁️", color: "bg-amber-100 text-amber-800" }
];

export const PROJECTS = [
    {
        title: "Adtext",
        problem: "AI chat apps struggle to monetize without harming user experience.",
        solution: "Built contextual ad infrastructure that detects conversation intent and surfaces relevant offers natively within chat interfaces.",
        impact: "Building monetization infrastructure for conversational AI applications — enabling contextual ad delivery inside AI chat experiences.",
        role: "Founder, Product Builder, Full-Stack Engineer",
        stack: ["Next.js", "FastAPI", "PostgreSQL", "OpenAI"],
        status: "Building",
        link: "https://adtext.org/",
        github: null,
        image: "/projects/adtext.svg",
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
        featured: false
    }
];

export const BLOGS = [
    {
        title: "How Adtext Finds Relevant Ads in AI Conversations",
        excerpt: "Building contextual ad infrastructure that detects conversation intent and surfaces relevant offers natively within chat interfaces — without harming user experience.",
        date: "Recent",
        readTime: "4 min read",
        platform: "Adtext Blog"
    },
    {
        title: "Lessons Building an AI Monetization SDK",
        excerpt: "What I learned building a full-stack AI advertising platform: architecture decisions, API design, and integrating LLM-powered recommendation pipelines.",
        date: "Recent",
        readTime: "5 min read",
        platform: "Adtext Blog"
    },
    {
        title: "What MCP Changes for AI Applications",
        excerpt: "Exploring how the Model Context Protocol enables standardized tool interaction for LLMs and what it means for agentic workflow architecture.",
        date: "Recent",
        readTime: "3 min read",
        platform: "LinkedIn"
    },
];

export const TIMELINE_DATA = [
    {
        org: "Adtext",
        role: "Full Stack Engineer",
        date: "Jan 2026 - Jul 2026",
        location: "Remote",
        type: "Work",
        description: "Built a full-stack AI monetization platform from scratch using React, Next.js, FastAPI, Node.js, and PostgreSQL. Deployed on AWS using Docker. Integrated LLM APIs (OpenRouter, Mistral) for context-aware ad recommendations. Led go-to-market: cold outreach to 20+ publishers, built pitch decks, closed a pilot conversation. Made the strategic decision to sunset the product after assessing market readiness."
    },
    {
        org: "Coldrecs Private Limited",
        role: "Full Stack Engineer",
        date: "Jul 2025 - Dec 2025",
        location: "Bangalore, India",
        type: "Work",
        description: "Built and maintained secure applications for enterprise clients in legal, healthcare, and government sectors. Developed backend solutions using Spring MVC, Spring Boot, and Java. Built frontend interfaces using React.js, Next.js, and TypeScript. Managed MySQL databases using JDBC. Deployed applications on AWS (EC2, S3, IAM). Promoted from intern in 3 months."
    },
    {
        org: "Coldrecs Private Limited",
        role: "Software Engineer Intern",
        date: "Mar 2025 - Jun 2025",
        location: "Bangalore, India",
        type: "Work",
        description: "Contributed to building secure backend infrastructure for enterprise clients. Worked on systems design and backend integration using Java and Spring MVC. Collaborated on database design and API development. Recognized for performance and promoted to Full Stack Engineer."
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
    { icon: "🚀", label: "Building Adtext — AI Monetization Infrastructure" },
    { icon: "🤖", label: "Exploring Agentic AI Systems & MCP" },
    { icon: "☁️", label: "Shipping Cloud-Native Products" },
];

export const BIO_LINKS = [
    { label: "Personal Website", url: "/portfolio", icon: Globe },
    { label: "GitHub Profile", url: PROFILE.socials.github, icon: Github },
    { label: "LinkedIn Profile", url: PROFILE.socials.linkedin, icon: Linkedin },
    { label: "Twitter (X)", url: PROFILE.socials.twitter, icon: Twitter },
    { label: "HackerRank", url: PROFILE.socials.hackerrank, icon: Code },
    { label: "Reddit", url: PROFILE.socials.reddit, icon: Globe },
    { label: "Contact Me", url: `mailto:${PROFILE.email}`, icon: Mail },
];
