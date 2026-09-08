"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export interface PillNavItem {
    href: string;
    label: string;
    icon: React.ElementType;
}

interface PillNavProps {
    items: PillNavItem[];
    className?: string;
}

export const PillNav = ({ items, className = '' }: PillNavProps) => {
    const pathname = usePathname();
    const defaultPosition = className?.includes('fixed') || className?.includes('absolute')
        ? ''
        : 'fixed bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2';

    return (
        <div className={`${defaultPosition} z-50 ${className}`}>
            <nav aria-label="Primary" className="flex items-center gap-1 p-2 rounded-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur-lg border border-zinc-200 dark:border-zinc-800 shadow-xl shadow-black/5">
                {items.map((item) => {
                    const isActive = pathname === item.href;

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            aria-current={isActive ? 'page' : undefined}
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
                        </Link>
                    );
                })}
            </nav>
        </div>
    );
};
