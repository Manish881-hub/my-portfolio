"use client";
// Rebuild trigger
import React, { useState, useEffect } from 'react';
import { BadgeCheck, Globe, Code, Mail, Share2, Moon, Sun, Copy, Check } from 'lucide-react';
import { PROFILE, BIO_LINKS } from '../../data/portfolioData';

export default function LinksPage() {
    const [darkMode, setDarkMode] = useState(false);
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        // Sync local state with global theme on mount
        const isDark = document.documentElement.classList.contains('dark');
        setDarkMode(isDark);

        // Optional: Listen for mutations or storage changes if needed, but simple sync is usually enough
    }, []);

    const toggleTheme = () => {
        const newMode = !darkMode;
        setDarkMode(newMode);

        if (newMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    const handleShare = async () => {
        const url = window.location.href;
        if (navigator.share) {
            try {
                await navigator.share({
                    title: `${PROFILE.name} - Links`,
                    url: url
                });
            } catch (err) {
                console.log('Error sharing:', err);
            }
        } else {
            // Fallback to copy to clipboard
            navigator.clipboard.writeText(url);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    return (
        <div className="min-h-screen transition-colors duration-300 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-xl mx-auto min-h-screen flex flex-col py-8 px-4 relative">

                {/* Header Controls */}
                <div className="absolute top-6 right-6 flex gap-3 z-10">
                    <button
                        onClick={toggleTheme}
                        className="p-2.5 rounded-full bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 shadow-sm hover:shadow-md transition-all border border-gray-100 dark:border-gray-700"
                        aria-label="Toggle Theme"
                        suppressHydrationWarning
                    >
                        {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                    </button>
                    <button
                        onClick={handleShare}
                        className="p-2.5 rounded-full bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 shadow-sm hover:shadow-md transition-all border border-gray-100 dark:border-gray-700 relative"
                        aria-label="Share"
                    >
                        {copied ? <Check size={18} className="text-green-500" /> : <Share2 size={18} />}
                    </button>
                </div>

                {/* Profile Section */}
                <div className="flex flex-col items-center text-center space-y-4 mt-12 mb-8">
                    <div className="relative w-24 h-24 md:w-28 md:h-28">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-600 blur-[6px] opacity-30"></div>
                        <div className="relative rounded-full overflow-hidden w-full h-full border-4 border-white dark:border-gray-900">
                            <img src="/profile.png" alt={PROFILE.name} className="w-full h-full object-cover" />
                        </div>


                    </div>

                    <div className="space-y-2">
                        <h1 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white flex items-center justify-center gap-1.5">
                            {PROFILE.name}
                            <BadgeCheck className="text-blue-500 fill-blue-500 text-white" size={22} />
                        </h1>
                        <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base max-w-sm leading-relaxed font-medium">
                            {PROFILE.role}
                        </p>
                    </div>
                </div>

                {/* Social Icons Row */}
                <div className="flex items-center justify-center gap-5 mb-10">
                    <a href={PROFILE.socials.twitter} target="_blank" rel="noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-all hover:scale-110 transform duration-200 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
                        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current"><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg>
                    </a>
                    <a href={PROFILE.socials.linkedin} target="_blank" rel="noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 transition-all hover:scale-110 transform duration-200 p-2 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-full">
                        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path></svg>
                    </a>
                    <a href={PROFILE.socials.github} target="_blank" rel="noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-all hover:scale-110 transform duration-200 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
                        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current"><path d="M12 2A10 10 0 002 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.17.66-.45v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02a9.56 9.56 0 015 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.54.67.45A10 10 0 0022 12 10 10 0 0012 2z"></path></svg>
                    </a>
                    <a href={`mailto:${PROFILE.email}`} target="_blank" rel="noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-red-500 transition-all hover:scale-110 transform duration-200 p-2 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-full">
                        <Mail size={24} />
                    </a>
                </div>

                {/* Links List */}
                <div className="w-full flex flex-col items-center mb-12">
                    <div className="w-full max-w-xl space-y-5">
                        {BIO_LINKS.map((link, idx) => (
                            <a
                                key={idx}
                                href={link.url}
                                target={link.url.startsWith("http") ? "_blank" : "_self"}
                                rel="noreferrer"
                                className="block"
                            >
                                {/* Outer border (creates the double-outline look) */}
                                <div className="rounded-[20px] p-[2px] bg-transparent border border-border-secondary hover:scale-[1.01] transform transition-all duration-200">
                                    {/* Inner button surface */}
                                    <div
                                        className="flex items-center justify-center gap-3 rounded-[18px] py-5 px-6 bg-surface border border-border-primary shadow-sm hover:shadow-md transition-shadow duration-200"
                                        role="button"
                                        aria-label={link.label}
                                    >
                                        {/* optional icon */}
                                        {link.icon && (
                                            <span className="opacity-80">
                                                <link.icon size={20} />
                                            </span>
                                        )}

                                        <span className="text-center text-main-text font-medium tracking-wide text-sm md:text-base">
                                            {link.label}
                                        </span>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Footer */}
                <div className="mt-auto text-center pt-8">
                    <a href="/" className="inline-flex items-center gap-2 text-sm font-bold text-gray-300 hover:text-gray-500 dark:text-gray-600 dark:hover:text-gray-400 transition-colors uppercase tracking-widest">
                        <Code size={16} /> {PROFILE.name}
                    </a>
                </div>

            </div>
        </div>
    );
}
