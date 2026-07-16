"use client";

import React from 'react';

import { Briefcase, GraduationCap, Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface TimelineItem {
    id: number;
    title: string;
    role: string;
    date: string;
    description: string;
    type: 'work' | 'education' | 'achievement';
    tags: string[];
    link?: string;
    current?: boolean;
}

const timelineData: TimelineItem[] = [
    {
        id: 1,
        title: "Full Stack Engineer",
        role: "Adtext (Startup)",
        date: "Jan 2026 - Jul 2026",
        link: "https://adtext.org/",
        description: "Built a full-stack AI monetization platform from scratch using React, Next.js, FastAPI, Node.js, and PostgreSQL. Deployed on AWS using Docker. Integrated LLM APIs (OpenRouter, Mistral) for context-aware ad recommendations. Led go-to-market: cold outreach to 20+ publishers, built pitch decks, closed a pilot conversation. Made the strategic decision to sunset the product after assessing market readiness.",
        type: "work",
        tags: ["FastAPI", "React", "Next.js", "Node.js", "PostgreSQL", "AWS", "Docker", "LLM"]
    },
    {
        id: 2,
        title: "Full Stack Engineer",
        role: "Coldrecs Private Limited",
        date: "Jul 2025 - Dec 2025",
        description: "Built and maintained secure applications for enterprise clients in legal, healthcare, and government sectors. Developed backend solutions using Spring MVC, Spring Boot, and Java. Built frontend interfaces using React.js, Next.js, and TypeScript. Managed MySQL databases using JDBC. Deployed applications on AWS (EC2, S3, IAM). Promoted from intern in 3 months.",
        type: "work",
        tags: ["Java", "SpringBoot", "React", "Next.js", "TypeScript", "MySQL", "AWS"]
    },
    {
        id: 3,
        title: "Software Engineer Intern",
        role: "Coldrecs Private Limited",
        date: "Mar 2025 - Jun 2025",
        description: "Contributed to building secure backend infrastructure for enterprise clients. Worked on systems design and backend integration using Java and Spring MVC. Collaborated on database design and API development. Recognized for performance and promoted to Full Stack Engineer.",
        type: "work",
        tags: ["Java", "SpringMVC", "Backend", "Database Design"]
    },
    {
        id: 4,
        title: "Dimewise — Finance Management Platform",
        role: "Personal Project",
        date: "Feb 2025 - Apr 2025",
        description: "Built a full-stack finance management platform using Next.js, React, TypeScript, and Tailwind CSS. Implemented user authentication, transaction tracking, and data visualization. Integrated REST APIs and managed data with PostgreSQL and Prisma ORM.",
        type: "achievement",
        tags: ["Next.js", "React", "TypeScript", "PostgreSQL", "Prisma", "TailwindCSS"]
    },
    {
        id: 5,
        title: "Software Engineer Intern",
        role: "Tekpages IT Solutions",
        date: "May 2025 - Aug 2025",
        description: "Supported cloud-based application deployment on AWS (EC2, S3, Linux). Contributed to CI/CD pipelines, testing, and deployment documentation.",
        type: "work",
        tags: ["AWS", "Linux", "CI/CD", "DevOps", "EC2", "S3"]
    },
    {
        id: 6,
        title: "Web Development Intern",
        role: "Oasis Infobyte",
        date: "Dec 2023 - Jan 2024",
        description: "Developed mobile-first React applications. Built modular components reducing front-end development time by 25%.",
        type: "work",
        tags: ["React.js", "HTML5", "Agile", "Cross-browser Testing"]
    },
    {
        id: 7,
        title: "Bachelor of Technology - Computer Science",
        role: "Trident Academy of Technology, Bhubaneswar",
        date: "Dec 2022 - May 2025",
        description: "Grade: 7.5 CGPA. Led team to 3rd place in inter-college esports LAN competition.",
        type: "education",
        tags: ["BTech", "Computer Science", "Team Leadership"]
    },
    {
        id: 8,
        title: "Diploma in Information Technology",
        role: "Government Polytechnic, Bhubaneswar",
        date: "Oct 2018 - Jun 2021",
        description: "Grade: 82%. Represented college as Forward Commander during cultural events.",
        type: "education",
        tags: ["Diploma", "Information Technology", "Event Management"]
    },
    {
        id: 9,
        title: "Primary Education",
        role: "DPS Vidyapeeth",
        date: "2007 - 2018",
        description: "CGPA: 6.0/10. Engaged in Football, Basketball, Debate, and Speech.",
        type: "education",
        tags: ["Science", "Debate", "Sports"]
    }
];

const Timeline = () => {
    return (
        <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold text-center mb-12 text-zinc-800 dark:text-zinc-100"
            >
                Experience & Education
            </motion.h2>

            <div className="relative">
                {/* Vertical Line */}
                <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "100%" }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="absolute left-4 sm:left-1/2 h-full w-0.5 bg-gradient-to-b from-zinc-200 via-zinc-400 to-zinc-200 dark:from-zinc-800 dark:via-zinc-600 dark:to-zinc-800 -translate-x-1/2 rounded-full"
                />

                <div className="flex flex-col gap-12 sm:gap-24">
                    {timelineData.map((item, index) => {
                        const isLeft = index % 2 === 0;

                        return (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`flex flex-col sm:flex-row items-center sm:items-start w-full relative group ${isLeft ? 'sm:flex-row' : 'sm:flex-row-reverse'
                                    }`}
                            >
                                {/* Mobile: Connector Line to Dot */}
                                <div className="absolute left-4 w-8 h-0.5 bg-zinc-300 dark:bg-zinc-700 top-6 sm:hidden" />

                                {/* Center Icon/Dot */}
                                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 z-10">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 + (index * 0.1) }}
                                        className="w-12 h-12 flex items-center justify-center rounded-full bg-white dark:bg-zinc-900 border-4 border-zinc-100 dark:border-zinc-800 shadow-xl group-hover:scale-110 transition-transform duration-300 group-hover:border-blue-500/30"
                                    >
                                        {item.type === 'work' && <Briefcase className="w-5 h-5 text-indigo-500" />}
                                        {item.type === 'education' && <GraduationCap className="w-5 h-5 text-emerald-500" />}
                                        {item.type === 'achievement' && <Star className="w-5 h-5 text-amber-500" />}
                                    </motion.div>
                                </div>

                                {/* Content Card */}
                                <div className={`w-full sm:w-[calc(50%-3rem)] pl-16 sm:pl-0 ${isLeft ? 'sm:pr-12 sm:text-right' : 'sm:pl-12 sm:text-left'
                                    }`}>
                                    <div className={`
                    p-6 rounded-2xl bg-white dark:bg-zinc-900/50 backdrop-blur-sm 
                    border border-zinc-200 dark:border-zinc-800/50 shadow-sm hover:shadow-xl 
                    transition-all duration-300 group-hover:-translate-y-1
                    ${isLeft ? 'sm:items-end' : 'sm:items-start'}
                    flex flex-col
                  `}>
                                        <div className="flex items-center gap-2 mb-2 sm:mb-1 opacity-80">
                                            <span className="text-sm font-semibold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase">
                                                {item.date}
                                            </span>
                                            {item.current && (
                                                <span className="text-[10px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400">
                                                    Current
                                                </span>
                                            )}
                                        </div>

                                        <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-1">
                                            {item.title}
                                        </h3>

                                        <p className="text-zinc-600 dark:text-zinc-400 font-medium mb-3">
                                            {item.link ? (
                                                <a href={item.link} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                                                    {item.role}
                                                </a>
                                            ) : (
                                                item.role
                                            )}
                                        </p>

                                        <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed mb-4">
                                            {item.description}
                                        </p>

                                        <div className={`flex flex-wrap gap-2 ${isLeft ? 'sm:justify-end' : 'sm:justify-start'
                                            }`}>
                                            {item.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="px-3 py-1 text-xs font-medium rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300"
                                                >
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Timeline;
