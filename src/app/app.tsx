
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
    Moon,
    Sun,
    Award,
    Users,
    Layout,
    ArrowRight,
    GraduationCap,
    FileText,
    CalendarClock
} from 'lucide-react';
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
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 relative inline-block">
            {title}
            <span className="absolute -bottom-1 left-0 w-1/3 h-1 bg-blue-500 rounded-full"></span>
        </h2>
        {subtitle && <p className="text-gray-600 dark:text-gray-400 mt-2">{subtitle}</p>}
    </div>
);

const Card = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
    <div className={`bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 p-6 shadow-sm hover:shadow-md transition-shadow duration-300 ${className}`}>
        {children}
    </div>
);

export default function App() {
    const [activeTab, setActiveTab] = useState('home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setDarkMode(true);
        }
    }, []);

    const toggleTheme = () => {
        setDarkMode(!darkMode);
    };

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
        <div className={`min-h-screen font-sans transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>

            {/* Floating Pill Navigation */}
            <header className="fixed top-4 right-4 z-50">
                <button
                    onClick={toggleTheme}
                    className="p-3 rounded-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors shadow-lg"
                    aria-label="Toggle Dark Mode"
                >
                    {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>
            </header>

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
                className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2"
            />

            {/* Main Content Area */}
            <main className="pt-24 pb-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* --- HOME SECTION --- */}
                {activeTab === 'home' && (
                    <div className="space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        {/* Hero */}
                        <section className="flex flex-col-reverse md:flex-row items-center gap-10 py-10 md:py-20">
                            <div className="flex-1 space-y-6 text-center md:text-left">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                                    </span>
                                    Open to work
                                </div>

                                <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-tight">
                                    Hi, I'm <SplitText className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 inline-block">{PROFILE.name.split(' ')[0]}</SplitText>
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

                                <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
                                    <button
                                        onClick={() => setActiveTab('projects')}
                                        className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-transform active:scale-95 shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2"
                                    >
                                        View Projects <ArrowRight size={18} />
                                    </button>
                                    <div className="flex items-center gap-4 px-4 justify-center">
                                        <a href={PROFILE.socials.github} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">
                                            <Github size={24} />
                                        </a>
                                        <a href={PROFILE.socials.twitter} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-blue-400 transition-colors">
                                            <Twitter size={24} />
                                        </a>
                                        <a href={PROFILE.socials.linkedin} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-blue-700 transition-colors">
                                            <Linkedin size={24} />
                                        </a>
                                        <a href={PROFILE.socials.reddit} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-orange-500 transition-colors">
                                            <Globe size={24} />
                                        </a>
                                        <a href={PROFILE.socials.hackerrank} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-green-600 transition-colors">
                                            <Code size={24} />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Profile Image / Abstract Visual */}
                            <div className="flex-1 flex justify-center">
                                <div className="relative w-64 h-64 md:w-80 md:h-80">
                                    <div className="absolute inset-0 bg-blue-200 dark:bg-blue-900/40 rounded-full blur-2xl opacity-50 animate-pulse"></div>
                                    <div className="relative w-full h-full rounded-full border-4 border-white dark:border-gray-800 shadow-2xl overflow-hidden bg-gray-200">
                                        <img
                                            src="/profile.png"
                                            alt="Manish Bhaktisagar"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    {/* Floating Elements */}
                                    <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 flex items-center gap-3 animate-bounce" style={{ animationDuration: '3s' }}>
                                        <div className="bg-green-100 p-2 rounded-lg text-green-600">
                                            <Code size={20} />
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500">Skills</p>
                                            <p className="font-bold text-gray-900 dark:text-white">React, Flask</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Featured Projects Preview */}
                        <section>
                            <div className="flex justify-between items-end mb-8">
                                <SectionTitle title="Latest Projects" />
                                <button onClick={() => setActiveTab('projects')} className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-1 mb-8">
                                    View all <ArrowRight size={16} />
                                </button>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                {PROJECTS.map((project, idx) => (
                                    <Card key={idx} className="group cursor-pointer">
                                        <div className="flex justify-between items-start mb-4">
                                            <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-blue-600 dark:text-blue-400">
                                                <Terminal size={24} />
                                            </div>
                                            <ExternalLink size={20} className="text-gray-400 group-hover:text-blue-500 transition-colors" />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                                            {project.description}
                                        </p>
                                        <div className="flex items-center gap-4 text-sm text-gray-500">
                                            <div className="flex gap-2 flex-wrap">
                                                {project.tags.map(tag => (
                                                    <span key={tag} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-xs">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </Card>
                                ))}
                            </div>
                        </section>
                    </div>
                )}

                {/* --- ABOUT SECTION --- */}
                {activeTab === 'about' && (
                    <div className="max-w-3xl mx-auto space-y-12 animate-in fade-in zoom-in-95 duration-300">
                        <div className="text-center md:text-left">
                            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">About Me</h1>
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
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
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
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
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
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Languages</h3>
                            <div className="flex gap-6 text-gray-600 dark:text-gray-400">
                                <div>English <span className="text-xs opacity-75 block">Full Professional</span></div>
                                <div>Hindi <span className="text-xs opacity-75 block">Full Professional</span></div>
                                <div>Odia <span className="text-xs opacity-75 block">Native</span></div>
                            </div>
                        </div>
                    </div>
                )}

                {/* --- PROJECTS SECTION --- */}
                {activeTab === 'projects' && (
                    <div className="animate-in fade-in zoom-in-95 duration-300">
                        <SectionTitle title="Projects" subtitle="Building scalable applications with modern tech stacks." />

                        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
                            {PROJECTS.map((project, idx) => (
                                <Card key={idx} className="group flex flex-col h-full">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl text-indigo-600 dark:text-indigo-400">
                                            <Code size={24} />
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors">
                                        {project.title}
                                    </h3>

                                    <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow">
                                        {project.description}
                                    </p>

                                    <div className="pt-4 border-t border-gray-100 dark:border-gray-700 mt-auto">
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.tags.map(tag => (
                                                <span key={tag} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded text-xs font-medium">
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>
                                        <a href={project.link} className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700">
                                            View details <ExternalLink size={14} />
                                        </a>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                )}

                {/* --- BLOG (Activity) SECTION --- */}
                {activeTab === 'blog' && (
                    <div className="animate-in fade-in zoom-in-95 duration-300 max-w-3xl mx-auto">
                        <SectionTitle title="Recent Activity" subtitle="Thoughts on tech, debugging, and industry trends." />

                        <div className="space-y-6">
                            {BLOGS.map((post, idx) => (
                                <article key={idx} className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-800 transition-colors group cursor-pointer shadow-sm">
                                    <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                                        <span className="flex items-center gap-1"><BookOpen size={14} /> {post.platform}</span>
                                        <span>•</span>
                                        <span>{post.date}</span>
                                        <span>•</span>
                                        <span>{post.readTime}</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 transition-colors">
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
                )}



                {/* --- TIMELINE SECTION --- */}
                {activeTab === 'timeline' && (
                    <div className="animate-in fade-in zoom-in-95 duration-300">
                        <SectionTitle title="My Journey" subtitle="A visual timeline of my career and education." />
                        <Timeline />
                    </div>
                )}


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
                        © {new Date().getFullYear()} {PROFILE.name}. Built with React & Tailwind.
                    </p>
                </div>
            </footer>
        </div>
    );
}