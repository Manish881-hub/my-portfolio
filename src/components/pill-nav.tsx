import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface NavItem {
    id: string;
    label: string;
    icon: React.ElementType;
}

interface PillNavProps {
    items: NavItem[];
    activeTab: string;
    onTabChange: (id: string) => void;
    className?: string; // Add className prop
}

export const PillNav = ({ items, activeTab, onTabChange, className = '' }: PillNavProps) => { // Accept className
    const defaultPosition = className?.includes('fixed') || className?.includes('absolute')
        ? ''
        : 'fixed bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2';

    return (
        <div className={`${defaultPosition} z-50 ${className}`}>
            <nav className="flex items-center gap-1 p-2 rounded-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur-lg border border-zinc-200 dark:border-zinc-800 shadow-xl shadow-black/5">
                {items.map((item) => {
                    const isActive = activeTab === item.id;
                    const isCV = item.id === 'cv';

                    if (isCV) {
                        return (
                            <a
                                key={item.id}
                                href="/cv"
                                className={`
                  relative flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200
                  ${isActive
                                        ? 'text-white'
                                        : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                                    }
                `}
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    <item.icon size={18} />
                                    <span className="hidden sm:inline">{item.label}</span>
                                </span>
                            </a>
                        )
                    }

                    return (
                        <button
                            key={item.id}
                            onClick={() => {
                                onTabChange(item.id);
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                            className={`
                relative flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200
                ${isActive
                                    ? 'text-white'
                                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                                }
              `}
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="active-pill"
                                    className="absolute inset-0 bg-zinc-900 dark:bg-white rounded-full"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}

                            <span className="relative z-10 flex items-center gap-2 mix-blend-exclusion">
                                <item.icon size={18} />
                                <span className="hidden sm:inline">{item.label}</span>
                            </span>
                        </button>
                    );
                })}
            </nav>
        </div>
    );
};
