import { Github, Twitter, Linkedin, Globe, Code, Mail } from 'lucide-react';

export const PROFILE = {
    name: "Manish Bhakti Sagar",
    role: "Cloud | Node.js | React",
    tagline: "Computer Science student passionate about full-stack development, cloud architecture, and enhancing user experiences.",
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
    { title: "Software Developer", icon: "⚛️", color: "bg-blue-100 text-blue-800" },
    { title: "Cloud Enthusiast", icon: "☁️", color: "bg-sky-100 text-sky-800" },
    { title: "Python/Flask", icon: "🐍", color: "bg-yellow-100 text-yellow-800" },
    { title: "Problem Solver", icon: "🧩", color: "bg-purple-100 text-purple-800" }
];

export const PROJECTS = [

    {
        title: "Dimewise AI Finance APP",
        description: "A production-grade finance application with secure authentication. Features scalable full-stack architecture, schema management, and optimized frontend performance.",
        tags: ["React", "AI Integration", "Auth", "SaaS"],
        stars: "Featured",
        link: "https://dimewise.vercel.app/"
    },
    {
        title: "Empty Cups",
        description: "A minimal full-stack project demonstrating backend–frontend integration. Serves listing data from a JSON file via Flask REST API with a dynamic JS frontend. Containerized with Docker.",
        tags: ["Flask", "REST API", "Docker", "JavaScript"],
        stars: "Live",
        link: "https://github.com/Manish881-hub/EmptyCups"
    },
    {
        title: "Real Estate Tenant Platform",
        description:
            "A real estate tenant management system featuring tenant onboarding, property management, and secure data workflows. Built with scalable frontend architecture and modern UI components.",
        tags: ["React", "Tailwind", "Property Management"],
        stars: "New",
        link: "https://github.com/Manish881-hub/Real-Estate-Tenant-1"
    },
    {
        title: "CertifyME (Certification Management App)",
        description:
            "A full-stack certification management system allowing users to generate, verify, and manage digital certificates. Built with Flask backend and responsive client UI.",
        tags: ["Flask", "Python", "Digital Certificates"],
        stars: "Featured",
        link: "https://github.com/Manish881-hub/CertifyME"
    },
    {
        title: "Todo App with Authentication",
        description:
            "A simple yet powerful Todo application with secure authentication, allowing users to manage tasks with protected routes and persistent storage.",
        tags: ["React", "Auth", "JavaScript"],
        stars: "New",
        link: "https://github.com/Manish881-hub/Todo-auth"
    },
    {
        title: "Firebase Login Authentication",
        description:
            "A secure authentication system built with Firebase, enabling email/password login, user onboarding, and protected routes. Demonstrates auth flows and reusable frontend components.",
        tags: ["Firebase", "Auth", "React"],
        stars: "Live",
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
        org: "EmptyCups / Internshala",
        role: "Internship Trainee",
        date: "May 2025 - Jul 2025",
        location: "Remote",
        type: "Work",
        description: "Built portfolio using Flask REST API and containerized with Docker."
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
        date: "2022 - 2025",
        location: "Bhubaneswar",
        type: "Education",
        description: "CGPA: 7.5. Led team to 3rd place in inter-college esports LAN competition."
    },
    {
        org: "Government Polytechnic",
        role: "Diploma in Information Technology",
        date: "2018 - 2021",
        location: "Bhubaneswar",
        type: "Education",
        description: "Secured 82%. Represented college as Forward Commander in cultural events."
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
    { label: "Reddit", url: PROFILE.socials.reddit, icon: Globe }, // Using Globe as placeholder for Reddit if needed, or just text
    { label: "Contact Me", url: `mailto:${PROFILE.email}`, icon: Mail },
];
