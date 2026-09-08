"use client";

import {
  Github,
  Twitter,
  Linkedin,
  Code,
  Mail,
  BookOpen,
  Layout,
  Users,
  CalendarClock,
  FileText,
} from "lucide-react";
import { PillNav } from "@/components/pill-nav";
import Dock from "@/components/Dock";
import ThemeToggle from "@/components/ThemeToggle";
import { PROFILE } from "@/data/portfolioData";

const NAV_ITEMS = [
  { href: "/", label: "Home", icon: Layout },
  { href: "/projects", label: "Projects", icon: Code },
  { href: "/timeline", label: "Timeline", icon: CalendarClock },
  { href: "/blog", label: "Blog", icon: BookOpen },
  { href: "/about", label: "About", icon: Users },
  { href: "/contact", label: "Contact", icon: Mail },
  { href: "/cv", label: "CV", icon: FileText },
];

const FOOTER_LINKS = [
  { href: PROFILE.socials.github, label: "GitHub", Icon: Github, hover: "hover:bg-black hover:text-white" },
  { href: PROFILE.socials.twitter, label: "Twitter / X", Icon: Twitter, hover: "hover:bg-blue-400 hover:text-white" },
  { href: PROFILE.socials.linkedin, label: "LinkedIn", Icon: Linkedin, hover: "hover:bg-blue-700 hover:text-white" },
  { href: PROFILE.socials.hackerrank, label: "HackerRank", Icon: Code, hover: "hover:bg-green-500 hover:text-white" },
  { href: `mailto:${PROFILE.email}`, label: "Email", Icon: Mail, hover: "hover:bg-green-500 hover:text-white" },
];

export default function PortfolioShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen font-sans transition-colors duration-300 bg-gray-50 dark:bg-zinc-950 overflow-x-hidden">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-indigo-600 focus:text-white focus:text-sm focus:font-medium"
      >
        Skip to content
      </a>
      <ThemeToggle />
      {/* Desktop Nav: Top Center */}
      <PillNav
        items={NAV_ITEMS}
        className="hidden md:flex absolute top-6 left-1/2 -translate-x-1/2 z-50"
      />

      {/* Mobile Nav: Bottom Center (Dock) */}
      <Dock
        items={NAV_ITEMS}
        className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2"
      />

      {/* Main Content Area */}
      <main id="main-content" className="pt-24 pb-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </main>

      {/* Footer (extra bottom padding on mobile so the fixed Dock never covers it) */}
      <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 pt-12 pb-28 md:pb-12 mt-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex justify-center gap-6 mb-8">
            {FOOTER_LINKS.map(({ href, label, Icon, hover }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400 ${hover} transition-all`}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
          <p className="text-gray-500 dark:text-gray-600">
            © {new Date().getFullYear()} . Built with love by {PROFILE.name}.
          </p>
        </div>
      </footer>
    </div>
  );
}
