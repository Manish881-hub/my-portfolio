import { BookOpen, ArrowRight } from "lucide-react";
import SpotlightCard from "@/components/SpotlightCard";
import { BLOGS } from "@/data/portfolioData";
import { SectionTitle } from "./SectionTitle";

export default function BlogSection() {
  return (
    <div className="animate-in fade-in zoom-in-95 duration-300 max-w-3xl mx-auto">
      <SectionTitle
        title="Recent Activity"
        subtitle="Thoughts on tech, debugging, and industry trends."
      />

      <div className="space-y-6">
        {BLOGS.map((post, idx) => (
          <a
            key={idx}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Read "${post.title}" on ${post.platform}`}
            className="block rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            <SpotlightCard
              className="p-6 transition-shadow shadow-sm hover:shadow-md"
              spotlightColor="rgba(79, 70, 229, 0.15)"
            >
              <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                <span className="flex items-center gap-1">
                  <BookOpen size={14} aria-hidden="true" /> {post.platform}
                </span>
                <span aria-hidden="true">•</span>
                <span>{post.date}</span>
                <span aria-hidden="true">•</span>
                <span>{post.readTime}</span>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-indigo-600 transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                {post.excerpt}
              </p>
              <div className="flex items-center text-indigo-600 font-medium text-sm group-hover:translate-x-1 transition-transform">
                View Post <ArrowRight size={16} className="ml-1" aria-hidden="true" />
              </div>
            </SpotlightCard>
          </a>
        ))}
      </div>
    </div>
  );
}
