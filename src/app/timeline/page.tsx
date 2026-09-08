import type { Metadata } from "next";
import PortfolioShell from "@/components/PortfolioShell";
import Timeline from "@/components/timeline";
import { SectionTitle } from "@/components/portfolio/SectionTitle";

export const metadata: Metadata = {
  title: "Journey",
  description:
    "Experience and education timeline of Manish Bhakti Sagar — Full Stack Engineer, from intern to shipping AI products on AWS.",
  alternates: { canonical: "/timeline" },
  openGraph: {
    url: "/timeline",
    title: "My Journey | Manish Bhaktisagar",
    description: "A visual timeline of career and education.",
  },
};

export default function TimelinePage() {
    return (
        <PortfolioShell>
            <div className="animate-in fade-in zoom-in-95 duration-300">
                <SectionTitle title="My Journey" subtitle="A visual timeline of my career and education." />
                <Timeline />
            </div>
        </PortfolioShell>
    );
}
