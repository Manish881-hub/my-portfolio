"use client";
import React from 'react';
import {
    Mail,
    Globe,
    Linkedin,
    Github,
    MapPin,
    Download,
    ArrowLeft,
    ExternalLink
} from 'lucide-react';
import { PROFILE, TIMELINE_DATA, PROJECTS, CERTIFICATIONS } from '../../data/portfolioData';

export default function CVPage() {
    // Filter data
    const workExperience = TIMELINE_DATA.filter(item => item.type === 'Work');
    const education = TIMELINE_DATA.filter(item => item.type === 'Education');

    // Skills (Hardcoded based on About section data for now, or could be moved to data file)
    const skills = [
        "JavaScript", "React.js", "Node.js", "Flask", "Python",
        "AWS", "Docker", "SQL", "C++", "Java", "Tailwind CSS", "Git"
    ];

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 font-sans print:bg-white print:p-0">

            {/* Controls (Hidden in Print) */}
            <div className="max-w-4xl mx-auto mb-8 flex justify-between items-center print:hidden">
                <a
                    href="/"
                    className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                >
                    <ArrowLeft size={20} /> Back to Home
                </a>
                <button
                    onClick={() => window.print()}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors shadow-sm"
                >
                    <Download size={18} /> Download CV
                </button>
            </div>

            {/* CV Paper */}
            <div className="max-w-4xl mx-auto bg-white shadow-xl print:shadow-none print:w-full print:max-w-none p-8 md:p-12 rounded-xl text-gray-900">

                {/* Header */}
                <header className="border-b-2 border-gray-900 pb-8 mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-2 uppercase">
                            {PROFILE.name}
                        </h1>
                        <p className="text-xl text-gray-600 font-medium">
                            {PROFILE.role}
                        </p>
                        <p className="text-gray-500 mt-2 max-w-lg text-sm leading-relaxed">
                            {PROFILE.tagline}
                        </p>
                    </div>

                    <div className="flex flex-col gap-2 text-sm text-gray-600">
                        <a href={`mailto:${PROFILE.email}`} className="flex items-center gap-2 hover:text-blue-600">
                            <Mail size={16} /> {PROFILE.email}
                        </a>
                        <a href={PROFILE.socials.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-blue-600">
                            <Linkedin size={16} /> LinkedIn Profile
                        </a>
                        <a href={PROFILE.socials.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-blue-600">
                            <Github size={16} /> GitHub Profile
                        </a>
                        <div className="flex items-center gap-2">
                            <MapPin size={16} /> Bhubaneswar, India
                        </div>
                    </div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">

                    {/* Left Column (Main Content) */}
                    <div className="md:col-span-2 space-y-10">

                        {/* Experience */}
                        <section>
                            <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wider border-b border-gray-200 pb-2 mb-6 flex items-center gap-2">
                                Experience
                            </h2>
                            <div className="space-y-8">
                                {workExperience.map((job, idx) => (
                                    <div key={idx}>
                                        <div className="flex justify-between items-baseline mb-1">
                                            <h3 className="text-lg font-bold text-gray-900">{job.role}</h3>
                                            <span className="text-sm font-medium text-gray-500 whitespace-nowrap">{job.date}</span>
                                        </div>
                                        <div className="text-blue-600 font-medium mb-2">{job.org}</div>
                                        <p className="text-gray-600 text-sm leading-relaxed text-justify">
                                            {job.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Projects */}
                        <section>
                            <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wider border-b border-gray-200 pb-2 mb-6">
                                Key Projects
                            </h2>
                            <div className="space-y-6">
                                {PROJECTS.slice(0, 3).map((project, idx) => (
                                    <div key={idx}>
                                        <div className="flex justify-between items-center mb-1">
                                            <h3 className="font-bold text-gray-900">{project.title}</h3>
                                            {project.link !== '#' && (
                                                <a href={project.link} target="_blank" rel="noreferrer" className="text-xs text-blue-600 hover:underline flex items-center gap-1">
                                                    View <ExternalLink size={10} />
                                                </a>
                                            )}
                                        </div>
                                        <p className="text-gray-600 text-sm mb-2">{project.description}</p>
                                        <div className="flex flex-wrap gap-1">
                                            {project.tags.map(tag => (
                                                <span key={tag} className="text-[10px] px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                    </div>

                    {/* Right Column (Sidebar) */}
                    <div className="space-y-10">

                        {/* Education */}
                        <section>
                            <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wider border-b border-gray-200 pb-2 mb-6">
                                Education
                            </h2>
                            <div className="space-y-6">
                                {education.map((edu, idx) => (
                                    <div key={idx}>
                                        <h3 className="font-bold text-gray-900">{edu.org}</h3>
                                        <div className="text-gray-600 text-sm mb-1">{edu.role}</div>
                                        <div className="text-gray-500 text-xs italic">{edu.date}</div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Skills */}
                        <section>
                            <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wider border-b border-gray-200 pb-2 mb-6">
                                Skills
                            </h2>
                            <div className="flex flex-wrap gap-2">
                                {skills.map(skill => (
                                    <span key={skill} className="px-2 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </section>

                        {/* Certifications */}
                        <section>
                            <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wider border-b border-gray-200 pb-2 mb-6">
                                Certifications
                            </h2>
                            <ul className="space-y-2">
                                {CERTIFICATIONS.map((cert, idx) => (
                                    <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></span>
                                        {cert}
                                    </li>
                                ))}
                            </ul>
                        </section>

                    </div>
                </div>

                {/* Footer */}
                <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-400 text-xs">
                    <p>References available upon request.</p>
                </div>

            </div>
        </div>
    );
}
