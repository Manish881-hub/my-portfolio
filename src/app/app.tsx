
"use client";
import React, { useState } from 'react';

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
import LogoLoop from '@/components/LogoLoop';

import { PROFILE, BADGES, PROJECTS, BLOGS, CERTIFICATIONS, CURRENT_FOCUS } from '../data/portfolioData';
import Timeline from '../components/timeline';
import { PillNav } from '../components/pill-nav';
import { SplitText } from '../components/split-text';
import Dock from '../components/Dock';
import BorderGlow from '@/components/BorderGlow';
import SpotlightCard from '../components/SpotlightCard';
import XChatWindow from '@/components/XChatWindow';




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
            <span className="absolute -bottom-1 left-0 w-1/3 h-1 bg-indigo-500 rounded-full"></span>
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



    const NavLink = ({ tab, label, icon: Icon }: { tab: string, label: string, icon: any }) => (
        <button
            onClick={() => {
                setActiveTab(tab);
                window.scrollTo(0, 0);
            }}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 w-full md:w-auto text-left md:text-center
        ${activeTab === tab
                    ? 'bg-indigo-50 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400 font-medium'
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
                    { id: 'contact', label: 'Contact', icon: Mail },
                    { id: 'cv', label: 'CV', icon: FileText },
                ]}
                className="hidden md:flex absolute top-6 left-1/2 -translate-x-1/2 z-50"
            />

            {/* Mobile Nav: Bottom Center */}
            {/* Mobile Nav: Bottom Center (Dock) */}
            <Dock
                activeTab={activeTab}
                onTabChange={setActiveTab}
                items={[
                    { id: 'home', label: 'Home', icon: Layout },
                    { id: 'projects', label: 'Projects', icon: Code },
                    { id: 'timeline', label: 'Timeline', icon: CalendarClock },
                    { id: 'blog', label: 'Blog', icon: BookOpen },
                    { id: 'about', label: 'About', icon: Users },
                    { id: 'contact', label: 'Contact', icon: Mail },
                    { id: 'cv', label: 'CV', icon: FileText },
                ]}
                className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2"
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
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-medium">
                                        <span className="relative flex h-2 w-2">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                                        </span>
                                        Open to work
                                    </div>

                                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-primary tracking-tight">
                                        Hi, I'm <SplitText className="ml-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 dark:from-indigo-400 dark:via-purple-500 dark:to-pink-400 inline-block">{PROFILE.name.split(' ')[0]}</SplitText>
                                    </h1>

                                    <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">
                                        {PROFILE.role}
                                    </h2>

                                    <p className="text-lg text-gray-500 dark:text-gray-400 font-medium">
                                        Building monetization infrastructure for conversational AI.
                                    </p>

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

                                    {/* Credibility Strip — Current Focus */}
                                    <div className="pt-4 space-y-2">
                                        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500">Currently</p>
                                        <div className="flex flex-col gap-1.5">
                                            {CURRENT_FOCUS.map((item, i) => (
                                                <div key={i} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                                                    <span>{item.icon}</span>
                                                    <span>{item.label}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap justify-center md:justify-start gap-3 pt-6">
                                        <a
                                            href={`mailto:${PROFILE.email}`}
                                            className="px-6 py-3 rounded-xl bg-indigo-600 text-white font-semibold text-sm hover:bg-indigo-700 transition-all shadow-sm"
                                        >
                                            Contact Me
                                        </a>
                                        <button
                                            onClick={() => { setActiveTab('projects'); window.scrollTo(0, 0); }}
                                            className="px-6 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 font-semibold text-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
                                        >
                                            View Projects
                                        </button>
                                        <a
                                            href="/cv"
                                            className="px-6 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 font-semibold text-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
                                        >
                                            Resume
                                        </a>
                                    </div>
                                </div>

                                {/* Profile Image / Abstract Visual */}
                                <div className="flex-1 flex justify-center self-center md:self-start">
                                    <BorderGlow
                                        borderRadius={999}
                                        backgroundColor="transparent"
                                        colors={['#6366f1', '#a855f7', '#ec4899']}
                                        glowColor="250 80 80"
                                        edgeSensitivity={10}
                                        glowIntensity={1.5}
                                        coneSpread={30}
                                        animated={true}
                                        className="w-64 h-64 md:w-80 md:h-80 !border-none !bg-transparent"
                                    >
                                        <div className="w-full h-full rounded-full border-4 border-white dark:border-gray-800 shadow-2xl overflow-hidden bg-gray-200">
                                            <img
                                                src="/profile.png"
                                                alt="Manish Bhaktisagar"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </BorderGlow>
                                </div>
                            </div>

                            {/* Bottom Part: Logo Loop (Full Width) */}
                            <div className="w-full pt-4">
                                <LogoLoop
                                    logos={[
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
                                    speed={30}
                                    direction="left"
                                    pauseOnHover
                                    logoHeight={32}
                                    gap={40}
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
                            {/* Who I Am */}
                            <section className="text-center md:text-left">
                                <SectionTitle title="Who I Am" />
                                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                    Founder and Full-Stack Developer focused on building AI-powered products, developer tools, and scalable web applications. I turn ideas into production-ready software — from concept to deployment.
                                </p>
                            </section>

                            {/* Current Focus */}
                            <section>
                                <SectionTitle title="Current Focus" />
                                <div className="flex flex-wrap gap-2.5">
                                    {["Model Context Protocol (MCP)", "Agentic Workflows", "AI Monetization", "FastAPI", "Next.js", "Cloud Architecture", "LLM Integration", "Generative AI"].map(item => (
                                        <span key={item} className="px-3.5 py-1.5 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 rounded-lg text-sm font-medium">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </section>

                            {/* What I Build */}
                            <section>
                                <SectionTitle title="What I Build" />
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {[
                                        { icon: "📦", title: "SaaS Products", desc: "Full-stack platforms with auth, payments, and dashboards" },
                                        { icon: "🤖", title: "LLM Applications", desc: "AI-powered tools, agents, and intelligent workflows" },
                                        { icon: "⚙️", title: "Backend APIs", desc: "FastAPI, PostgreSQL, RESTful services at scale" },
                                        { icon: "☁️", title: "Cloud Infrastructure", desc: "AWS, Docker, CI/CD, production deployments" },
                                    ].map((item, i) => (
                                        <div key={i} className="p-5 rounded-xl bg-white dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow">
                                            <span className="text-2xl mb-2 block">{item.icon}</span>
                                            <h4 className="font-semibold text-primary mb-1">{item.title}</h4>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Tech Stack + Certifications */}
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                                        <Cpu size={20} className="text-indigo-500" /> Tech Stack
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {['React.js', 'Next.js', 'TypeScript', 'Node.js', 'FastAPI', 'PostgreSQL', 'MongoDB', 'LLM Integration', 'Generative AI', 'Model Context Protocol (MCP)', 'Agentic Workflows', 'Prompt Engineering', 'AWS', 'Docker', 'SQL', 'JavaScript', 'Python'].map(skill => (
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
                                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0"></span>
                                                <span>{cert}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Languages */}
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
                            <SectionTitle title="Projects" subtitle="Real products I've built — from idea to deployment." />

                            {(() => {
                                const featured = PROJECTS.filter(p => p.featured);
                                const other = PROJECTS.filter(p => !p.featured);
                                const gradients = [
                                    'from-indigo-500 to-purple-600',
                                    'from-violet-500 to-pink-500',
                                    'from-blue-500 to-cyan-500',
                                    'from-purple-500 to-rose-500',
                                    'from-sky-500 to-indigo-500',
                                    'from-fuchsia-500 to-violet-500',
                                    'from-indigo-400 to-blue-500',
                                ];

                                const ProjectBanner = ({ project, idx }: { project: typeof PROJECTS[0], idx: number }) => (
                                    <div className="h-24 md:h-28 relative overflow-hidden bg-gray-100 dark:bg-gray-700">
                                        {project.image ? (
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <div className={`w-full h-full bg-gradient-to-br ${gradients[idx % gradients.length]} relative`}>
                                                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:24px_24px]" />
                                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-3 pt-8">
                                                    <h4 className="text-white font-bold text-sm md:text-base leading-tight">{project.title}</h4>
                                                    <p className="text-white/60 text-xs mt-0.5">{project.role}</p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                );

                                const ProjectInfo = ({ project }: { project: typeof PROJECTS[0] }) => (
                                    <>
                                        <div className="flex items-center justify-between mb-3 md:mb-4">
                                            <span className="text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400">
                                                {project.status}
                                            </span>
                                            <div className="flex items-center gap-2">
                                                {project.github && (
                                                    <a href={project.github} className="p-1.5 text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors" target="_blank" rel="noopener noreferrer" aria-label="View source on GitHub">
                                                        <Github size={16} />
                                                    </a>
                                                )}
                                                <a href={project.link} className="p-1.5 text-gray-400 hover:text-indigo-500 transition-colors" target="_blank" rel="noopener noreferrer" aria-label="View live project">
                                                    <ExternalLink size={16} />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="space-y-3 mb-4">
                                            <p className="text-sm text-gray-600 dark:text-gray-300"><span className="font-semibold text-gray-700 dark:text-gray-200">Problem: </span>{project.problem}</p>
                                            <p className="text-sm text-gray-600 dark:text-gray-300"><span className="font-semibold text-gray-700 dark:text-gray-200">Solution: </span>{project.solution}</p>
                                            {project.impact && (
                                                <p className="text-sm text-gray-600 dark:text-gray-300"><span className="font-semibold text-gray-700 dark:text-gray-200">Impact: </span>{project.impact}</p>
                                            )}
                                        </div>
                                        <div className="flex flex-wrap gap-1.5">
                                            {project.stack.map(item => (
                                                <span key={item} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-md text-xs font-medium">{item}</span>
                                            ))}
                                        </div>
                                    </>
                                );

                                return (
                                    <>
                                        <h3 className="text-lg font-semibold text-primary mb-5 flex items-center gap-2">
                                            <span className="w-1.5 h-5 rounded-full bg-indigo-500 inline-block" />
                                            Featured
                                        </h3>
                                        <div className="space-y-6 mb-14">
                                            {featured.map((project, idx) => (
                                                <div key={project.title} className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden">
                                                    <ProjectBanner project={project} idx={idx} />
                                                    <div className="p-5 md:p-7">
                                                        <ProjectInfo project={project} />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        <h3 className="text-lg font-semibold text-primary mb-5 flex items-center gap-2">
                                            <span className="w-1.5 h-5 rounded-full bg-gray-400 inline-block" />
                                            Other Projects
                                        </h3>
                                        <div className="grid gap-5 md:grid-cols-2">
                                            {other.map((project, idx) => (
                                                <div key={project.title} className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden">
                                                    <ProjectBanner project={project} idx={idx + featured.length} />
                                                    <div className="p-4 md:p-5">
                                                        <ProjectInfo project={project} />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </>
                                );
                            })()}
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
                                    <SpotlightCard key={idx} className="p-6 transition-colors shadow-sm cursor-pointer" spotlightColor="rgba(79, 70, 229, 0.15)">
                                        <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                                            <span className="flex items-center gap-1"><BookOpen size={14} /> {post.platform}</span>
                                            <span>•</span>
                                            <span>{post.date}</span>
                                            <span>•</span>
                                            <span>{post.readTime}</span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-indigo-600 transition-colors">
                                            {post.title}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                                            {post.excerpt}
                                        </p>
                                        <div className="flex items-center text-indigo-600 font-medium text-sm group-hover:translate-x-1 transition-transform">
                                            View Post <ArrowRight size={16} className="ml-1" />
                                        </div>
                                    </SpotlightCard>
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

                {/* --- CONTACT SECTION --- */}
                {
                    activeTab === 'contact' && (
                        <div className="max-w-3xl mx-auto space-y-10 animate-in fade-in zoom-in-95 duration-300">
                            <section className="text-center">
                                <h2 className="text-4xl font-extrabold text-primary mb-3">Let's Connect</h2>
                                <p className="text-gray-500 dark:text-gray-400 text-lg">
                                    Interested in:
                                </p>
                                <div className="flex flex-wrap justify-center gap-2 mt-3">
                                    {["AI Products", "AdTech", "Agentic Workflows", "Full-Stack Engineering"].map(item => (
                                        <span key={item} className="px-3.5 py-1.5 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 rounded-lg text-sm font-medium">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </section>

                            {/* Current Focus Card */}
                            <section className="bg-white dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 rounded-2xl p-5 shadow-sm max-w-md mx-auto">
                                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3">Currently</p>
                                <div className="space-y-2.5">
                                    {CURRENT_FOCUS.map((item, i) => (
                                        <div key={i} className="flex items-center gap-2.5 text-sm text-gray-600 dark:text-gray-400">
                                            <span>{item.icon}</span>
                                            <span>{item.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* XChatWindow — centered widget */}
                            <div className="flex justify-center">
                                <XChatWindow />
                            </div>

                            {/* Social icons directly below widget */}
                            {/*<div className="flex justify-center gap-4 -mt-4">
                                <a href="https://www.linkedin.com/in/manish-bhaktisagar/" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400 hover:bg-blue-700 hover:text-white transition-all" aria-label="LinkedIn">
                                    <Linkedin size={18} />
                                </a>
                                <a href={PROFILE.socials.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400 hover:bg-black hover:text-white transition-all" aria-label="GitHub">
                                    <Github size={18} />
                                </a>
                                <a href={`mailto:${PROFILE.email}`} className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400 hover:bg-green-500 hover:text-white transition-all" aria-label="Email">
                                    <Mail size={18} />
                                </a>
                                <a href="/cv" className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400 hover:bg-indigo-600 hover:text-white transition-all" aria-label="Resume">
                                    <FileText size={18} />
                                </a>
                            </div>*/}
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