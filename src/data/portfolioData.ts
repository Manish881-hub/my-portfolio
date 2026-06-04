import { Github, Twitter, Linkedin, Globe, Code, Mail } from 'lucide-react';

export const PROFILE = {
    name: "Manish Bhakti Sagar",
    role: "Founder @ Adtext | Full-Stack Developer | AI Engineer",
    tagline: "I build AI-powered products, developer tools, and scalable web applications. Currently building Adtext, a monetization platform for conversational AI applications that enables contextual advertising inside chat experiences. My work spans React, Next.js, FastAPI, PostgreSQL, cloud infrastructure, and LLM-powered systems. I enjoy turning ideas into production-ready products, designing clean user experiences, and building reliable backend systems that scale. Always learning, always shipping, and always exploring the intersection of AI and software engineering. Open to software engineering, AI engineering, and startup opportunities.",
    location: "Bhubaneswar, Odisha, India",
    email: "bhaktisagar.manish@gmail.com",
    socials: {
        github: "https://github.com/Manish881-hub",
        twitter: "https://x.com/manishbhakti?s=21",
        linkedin: "https://www.linkedin.com/in/manish-bhakti-sagar-823404234/",
        reddit: "https://www.reddit.com/u/Quiet-Remove-3822/s/NsWuyZUGWp",
        hackerrank: "https://www.hackerrank.com/profile/manishbhakti881"
    }
};

export const BADGES = [
    { title: "Founder", icon: "🚀", color: "bg-indigo-100 text-indigo-800" },
    { title: "AI Engineer", icon: "🤖", color: "bg-purple-100 text-purple-800" },
    { title: "Full-Stack Developer", icon: "⚛️", color: "bg-blue-100 text-blue-800" },
    { title: "Cloud & Backend Systems", icon: "☁️", color: "bg-sky-100 text-sky-800" }
];

export const PROJECTS = [
    {
        title: "Adtext",
        problem: "AI chat apps struggle to monetize without harming user experience.",
        solution: "Built contextual ad infrastructure that detects conversation intent and surfaces relevant offers natively within chat interfaces.",
        role: "Founder, Product Builder, Full-Stack Engineer",
        stack: ["Next.js", "FastAPI", "PostgreSQL", "OpenAI"],
        status: "Building",
        link: "#"
    },
    {
        title: "Dimewise AI Finance APP",
        problem: "Managing personal finances is fragmented across multiple tools and platforms.",
        solution: "AI-powered finance dashboard with secure authentication, real-time budgeting, and intelligent insights.",
        role: "Full-Stack Developer",
        stack: ["React", "AI Integration", "Auth", "SaaS"],
        status: "Featured",
        link: "https://dimewise.vercel.app/"
    },
    {
        title: "Empty Cups",
        problem: "Small businesses need a simple way to display listings without a complex CMS.",
        solution: "Minimal full-stack app serving listing data via Flask REST API with a dynamic JS frontend, containerized with Docker for easy deployment.",
        role: "Full-Stack Developer",
        stack: ["Flask", "REST API", "Docker", "JavaScript"],
        status: "Live",
        link: "https://github.com/Manish881-hub/EmptyCups"
    },
    {
        title: "Real Estate Tenant Platform",
        problem: "Property managers lack streamlined tools for tenant onboarding and data management.",
        solution: "Full-featured tenant management system with property management workflows and secure data handling.",
        role: "Frontend Developer",
        stack: ["React", "Tailwind", "Property Management"],
        status: "New",
        link: "https://github.com/Manish881-hub/Real-Estate-Tenant-1"
    },
    {
        title: "CertifyME",
        problem: "Organizations need a fast way to generate and verify digital certificates.",
        solution: "Full-stack certification management system for generating, verifying, and managing digital certificates with Flask backend.",
        role: "Full-Stack Developer",
        stack: ["Flask", "Python", "Digital Certificates"],
        status: "Featured",
        link: "https://github.com/Manish881-hub/CertifyME"
    },
    {
        title: "Todo App with Authentication",
        problem: "Simple task management apps lack secure user-specific data isolation.",
        solution: "Todo application with secure authentication, protected routes, and persistent per-user storage.",
        role: "Full-Stack Developer",
        stack: ["React", "Auth", "JavaScript"],
        status: "New",
        link: "https://github.com/Manish881-hub/Todo-auth"
    },
    {
        title: "Firebase Login Authentication",
        problem: "Implementing secure auth flows from scratch is time-consuming and error-prone.",
        solution: "Reusable authentication system with email/password login, user onboarding, and protected routes using Firebase.",
        role: "Full-Stack Developer",
        stack: ["Firebase", "Auth", "React"],
        status: "Live",
        link: "https://github.com/Manish881-hub/Login-Authentication-Firebase"
    }
];

export const BLOGS = [
    {
        title: "The Reality of Paid Referrals",
        excerpt: "Recently, I came across a trend where some individuals charge just to provide a referral. Discussing the ethics and impact of this practice.",
        date: "Recent",
        readTime: "2 min read",
        platform: "LinkedIn"
    },
    {
        title: "Debugging Kubernetes with AI",
        excerpt: "Imagine debugging your entire Kubernetes app just by talking to your IDE. Exploring the future of AI-assisted DevOps workflows.",
        date: "Recent",
        readTime: "3 min read",
        platform: "LinkedIn"
    },
    {
        title: "Solving LeetCode 2872: DFS Challenges",
        excerpt: "Working on Maximum Number of K-Divisible Components. Sharing insights on errors encountered while implementing the DFS-based solution.",
        date: "Recent",
        readTime: "4 min read",
        platform: "LeetCode"
    }
];

export const TIMELINE_DATA = [
    {
        org: "Adtext",
        role: "Founder & Product Builder",
        date: "Jan 2026 - Present",
        location: "Remote",
        type: "Work",
        description: "Building Adtext, an AI monetization platform for conversational applications. Designed and developed a full-stack AI advertising platform enabling contextual ad delivery inside AI chat experiences. Built responsive React.js and Next.js frontends, FastAPI backend services, analytics systems, authentication workflows, scalable database architecture, and AI-powered recommendation pipelines."
    },
    {
        org: "TekPages IT Solutions",
        role: "Full Stack Intern",
        date: "May 2025 - Aug 2025",
        location: "Bangalore, India",
        type: "Work",
        description: "Supported cloud-based application deployment on AWS, working with EC2, S3, and Linux-based environments. Assisted in server configuration, application hosting, and runtime monitoring. Participated in testing, debugging, and issue analysis, improving application stability. Documented application architecture, deployment steps, and troubleshooting procedures. Collaborated with team members to understand CI/CD pipelines, DevOps workflows, and release management processes."
    },
    {
        org: "Oasis Infobyte",
        role: "Web Development Intern",
        date: "Dec 2023 - Jan 2024",
        location: "Remote",
        type: "Work",
        description: "Developed mobile-first React apps, improving engagement by 30%."
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
    "Network Defense Fundamentals (Udemy, Jan 2025)",
    "Tata Imagination Challenge 2024 (Unstop)",
    "Intro to Cloud Computing (Infosys)",
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
