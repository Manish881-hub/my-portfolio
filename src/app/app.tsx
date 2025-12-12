
"use client";
import React, { useState, useEffect } from 'react';
import {
    Github,
    Twitter,
    Linkedin,
    BookOpen,
    Code,
    Mail,
    Menu,
    X,
    ExternalLink,
    Terminal,
    Cpu,
    Globe,

    Award,
    Users,
    Layout,
    ArrowRight,
    GraduationCap,
    FileText,
    CalendarClock
} from 'lucide-react';
import ScrollStack, { ScrollStackItem } from '../components/ScrollStack';
import LogoLoop from '@/components/LogoLoop';

import { PROFILE, BADGES, PROJECTS, BLOGS, CERTIFICATIONS } from '../data/portfolioData';
import Timeline from '../components/timeline';
import { PillNav } from '../components/pill-nav';
import { SplitText } from '../components/split-text';




// --- COMPONENTS ---

const Badge = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <span className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${className}`}>
        {children}
    </span>
);

const SectionTitle = ({ title, subtitle }: { title: string, subtitle?: string }) => (
    <div className="mb-8">
        <h2 className="text-3xl font-bold text-primary mb-2 relative inline-block">
            {title}
            <span className="absolute -bottom-1 left-0 w-1/3 h-1 bg-blue-500 rounded-full"></span>
        </h2>
        {subtitle && <p className="text-gray-600 dark:text-gray-400 mt-2">{subtitle}</p>}
    </div>
);

const Card = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
    <div className={`bg-surface rounded-xl border border-card p-6 shadow-sm hover:shadow-md transition-shadow duration-300 ${className}`}>
        {children}
    </div>
);

export default function App() {
    const [activeTab, setActiveTab] = useState('home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);



    const NavLink = ({ tab, label, icon: Icon }: { tab: string, label: string, icon: any }) => (
        <button
            onClick={() => {
                setActiveTab(tab);
                setIsMenuOpen(false);
                window.scrollTo(0, 0);
            }}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 w-full md:w-auto text-left md:text-center
        ${activeTab === tab
                    ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 font-medium'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                }`}
        >
            <Icon size={18} />
            <span>{label}</span>
        </button>
    );

    return (
        <div className={`min-h-screen font-sans transition-colors duration-300 bg-gray-50 overflow-x-hidden`}>


            {/* Floating Pill Navigation */}
            {/* Dark mode toggle removed */}

            {/* Desktop Nav: Top Right */}

            {/* Desktop Nav: Top Right */}
            <PillNav
                activeTab={activeTab}
                onTabChange={setActiveTab}
                items={[
                    { id: 'home', label: 'Home', icon: Layout },
                    { id: 'projects', label: 'Projects', icon: Code },
                    { id: 'timeline', label: 'Timeline', icon: CalendarClock },
                    { id: 'blog', label: 'Blog', icon: BookOpen },
                    { id: 'about', label: 'About', icon: Users },
                    { id: 'cv', label: 'CV', icon: FileText },
                ]}
                className="hidden md:flex absolute top-6 left-1/2 -translate-x-1/2 z-50"
            />

            {/* Mobile Nav: Bottom Center */}
            <PillNav
                activeTab={activeTab}
                onTabChange={setActiveTab}
                items={[
                    { id: 'home', label: 'Home', icon: Layout },
                    { id: 'projects', label: 'Projects', icon: Code },
                    { id: 'timeline', label: 'Timeline', icon: CalendarClock },
                    { id: 'blog', label: 'Blog', icon: BookOpen },
                    { id: 'about', label: 'About', icon: Users },
                    { id: 'cv', label: 'CV', icon: FileText },
                ]}
                className="md:hidden fixed absolute top-4 left-1/2 -translate-x-1/2"
            />

            {/* Main Content Area */}
            <main className="pt-24 pb-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* --- HOME SECTION --- */}
                {activeTab === 'home' && (
                    <div className="space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        {/* Hero */}
                        <section className="flex flex-col gap-12 py-10 md:py-20">

                            {/* Top Part: Text + Image */}
                            <div className="flex flex-col-reverse md:flex-row items-center gap-10">
                                <div className="flex-1 space-y-6 text-center md:text-left">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium">
                                        <span className="relative flex h-2 w-2">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                                        </span>
                                        Open to work
                                    </div>

                                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-primary tracking-tight">
                                        Hi, I'm <SplitText className="ml-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 dark:from-indigo-400 dark:via-purple-500 dark:to-pink-400 inline-block">{PROFILE.name.split(' ')[0]}</SplitText>
                                    </h1>

                                    <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">
                                        {PROFILE.role}
                                    </h2>

                                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
                                        {PROFILE.tagline}
                                    </p>

                                    <div className="flex flex-wrap justify-center md:justify-start gap-3 pt-2">
                                        {BADGES.map((badge, i) => (
                                            <Badge key={i} className={badge.color}>
                                                <span className="mr-1">{badge.icon}</span> {badge.title}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>

                                {/* Profile Image / Abstract Visual */}
                                <div className="flex-1 flex justify-center self-center md:self-start">
                                    <div className="relative w-64 h-64 md:w-80 md:h-80">
                                        <div className="absolute inset-0 bg-blue-200 dark:bg-blue-900/40 rounded-full blur-2xl opacity-50 animate-pulse"></div>
                                        <div className="relative w-full h-full rounded-full border-4 border-white dark:border-gray-800 shadow-2xl overflow-hidden bg-gray-200 z-10">
                                            <img
                                                src="/profile.png"
                                                alt="Manish Bhaktisagar"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Bottom Part: Logo Loop (Full Width) */}
                            <div className="w-full pt-4">
                                <LogoLoop
                                    items={[
                                        { src: '/logos/react.svg', alt: 'React' },
                                        { src: '/logos/nodejs.svg', alt: 'Node.js' },
                                        { src: '/logos/flask.svg', alt: 'Flask' },
                                        { src: '/logos/typescript.svg', alt: 'TypeScript' },
                                        { src: '/logos/nextjs.svg', alt: 'Next.js' },
                                        { src: '/logos/tailwind.svg', alt: 'Tailwind' },
                                        { src: '/logos/docker.svg', alt: 'Docker' },
                                        { src: '/logos/postgres.svg', alt: 'PostgreSQL' },
                                        { src: '/logos/javascript.svg', alt: 'JavaScript' },
                                        { src: '/logos/prisma.svg', alt: 'Prisma' },
                                        { src: '/logos/supabase.svg', alt: 'Supabase' },
                                    ]}
                                    speed="slow"
                                />
                            </div>
                        </section>
                        {/* End Hero */}

                        {/* Featured Projects Preview - OMITTED */}
                    </div>
                )}

                {/* --- ABOUT SECTION --- */}
                {
                    activeTab === 'about' && (
                        <div className="max-w-3xl mx-auto space-y-12 animate-in fade-in zoom-in-95 duration-300">
                            <div className="text-center md:text-left">
                                <h1 className="text-4xl font-bold text-primary mb-6">About Me</h1>
                                <div className="prose dark:prose-invert max-w-none">
                                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                                        Hello! I'm <strong>{PROFILE.name}</strong>, currently pursuing a <strong>Bachelor of Technology in Computer Science</strong> at Trident Academy of Technology, Bhubaneswar. My academic journey started with a diploma in Information Technology, giving me a strong foundation in the basics before diving deep into engineering.
                                    </p>
                                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                                        I specialize in <strong>Full Stack Development</strong> with a focus on <strong>React, Node.js, and Flask</strong>. I recently contributed as an Internship Trainee at Internshala, where I built projects involving REST APIs and Docker containerization.
                                    </p>
                                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                        I'm passionate about clean architecture, CI/CD, and enhancing user experiences. When I'm not coding, I enjoy competitive gaming and have led teams to victory in esports competitions.
                                    </p>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                                        <Cpu size={20} className="text-blue-500" /> Tech Stack
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {['JavaScript', 'React.js', 'Node.js', 'Flask', 'Python', 'AWS', 'Docker', 'SQL', 'C++', 'Java'].map(skill => (
                                            <span key={skill} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm">
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
                                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></span>
                                                <span>{cert}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-xl">
                                <h3 className="text-lg font-bold text-primary mb-2">Languages</h3>
                                <div className="flex gap-6 text-gray-600 dark:text-gray-400">
                                    <div>English <span className="text-xs opacity-75 block">Full Professional</span></div>
                                    <div>Hindi <span className="text-xs opacity-75 block">Full Professional</span></div>
                                    <div>Odia <span className="text-xs opacity-75 block">Native</span></div>
                                </div>
                            </div>
                        </div>
                    )
                }

                {/* --- PROJECTS SECTION --- */}
                {
                    activeTab === 'projects' && (
                        <div className="animate-in fade-in zoom-in-95 duration-300">
                            <SectionTitle title="Projects" subtitle="Building scalable applications with modern tech stacks." />



                            <ScrollStack
                                itemDistance={100}
                                itemScale={0.03}
                                itemStackDistance={30}
                                stackPosition="20%"
                                scaleEndPosition="10%"
                                baseScale={0.9}
                                scaleDuration={0.5}
                                rotationAmount={5}
                                blurAmount={0}
                                useWindowScroll={true}
                                className=""
                            >
                                {PROJECTS.map((project, idx) => (
                                    <ScrollStackItem key={idx} itemClassName="bg-surface rounded-3xl border border-card p-8 shadow-sm">
                                        <div className="flex flex-col h-full">
                                            <div className="flex justify-between items-start mb-6">
                                                <div className="p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl text-indigo-600 dark:text-indigo-400">
                                                    <Code size={28} />
                                                </div>
                                                <a href={project.link} className="p-2 text-gray-400 hover:text-blue-500 transition-colors" target="_blank" rel="noopener noreferrer">
                                                    <ExternalLink size={24} />
                                                </a>
                                            </div>

                                            <h3 className="text-3xl font-bold text-primary mb-3">
                                                {project.title}
                                            </h3>

                                            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 flex-grow leading-relaxed">
                                                {project.description}
                                            </p>

                                            <div className="pt-6 border-t border-gray-100 dark:border-gray-700 mt-auto">
                                                <div className="flex flex-wrap gap-2 mb-6">
                                                    {project.tags.map(tag => (
                                                        <span key={tag} className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-lg text-sm font-medium">
                                                            #{tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </ScrollStackItem>
                                ))}
                            </ScrollStack>

                        </div>
                    )
                }

                {/* --- BLOG (Activity) SECTION --- */}
                {
                    activeTab === 'blog' && (
                        <div className="animate-in fade-in zoom-in-95 duration-300 max-w-3xl mx-auto">
                            <SectionTitle title="Recent Activity" subtitle="Thoughts on tech, debugging, and industry trends." />

                            <div className="space-y-6">
                                {BLOGS.map((post, idx) => (
                                    <article key={idx} className="bg-surface p-6 rounded-xl border border-card hover:border-blue-200 dark:hover:border-blue-800 transition-colors group cursor-pointer shadow-sm">
                                        <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                                            <span className="flex items-center gap-1"><BookOpen size={14} /> {post.platform}</span>
                                            <span>•</span>
                                            <span>{post.date}</span>
                                            <span>•</span>
                                            <span>{post.readTime}</span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-blue-600 transition-colors">
                                            {post.title}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                                            {post.excerpt}
                                        </p>
                                        <div className="flex items-center text-blue-600 font-medium text-sm group-hover:translate-x-1 transition-transform">
                                            View Post <ArrowRight size={16} className="ml-1" />
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>
                    )
                }



                {/* --- TIMELINE SECTION --- */}
                {
                    activeTab === 'timeline' && (
                        <div className="animate-in fade-in zoom-in-95 duration-300">
                            <SectionTitle title="My Journey" subtitle="A visual timeline of my career and education." />
                            <Timeline />
                        </div>
                    )
                }


            </main>

            {/* Footer */}
            <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-12 mt-12">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <div className="flex justify-center gap-6 mb-8">
                        <a href={PROFILE.socials.github} className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400 hover:bg-black hover:text-white transition-all">
                            <Github size={20} />
                        </a>
                        <a href={PROFILE.socials.twitter} className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400 hover:bg-blue-400 hover:text-white transition-all">
                            <Twitter size={20} />
                        </a>
                        <a href={PROFILE.socials.linkedin} className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400 hover:bg-blue-700 hover:text-white transition-all">
                            <Linkedin size={20} />
                        </a>
                        <a href={PROFILE.socials.reddit} className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400 hover:bg-orange-500 hover:text-white transition-all">
                            <Globe size={20} />
                        </a>
                        <a href={PROFILE.socials.hackerrank} className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400 hover:bg-green-500 hover:text-white transition-all">
                            <Code size={20} />
                        </a>
                        <a href={`mailto:${PROFILE.email}`} className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400 hover:bg-green-500 hover:text-white transition-all">
                            <Mail size={20} />
                        </a>
                    </div>
                    <p className="text-gray-500 dark:text-gray-600">
                        © {new Date().getFullYear()} . Built with love by {PROFILE.name}.
                    </p>
                </div>
            </footer>
        </div>
    );
}