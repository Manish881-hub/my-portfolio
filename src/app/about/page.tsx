import type { Metadata } from "next";
import PortfolioShell from "@/components/PortfolioShell";
import AboutSection from "@/components/portfolio/AboutSection";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Manish Bhakti Sagar — Full Stack Engineer with 1+ year building cloud-native apps on AWS. Tech stack, certifications, and what I build.",
  alternates: { canonical: "/about" },
  openGraph: {
    url: "/about",
    title: "About | Manish Bhaktisagar",
    description:
      "Full Stack Engineer building cloud-native applications on AWS.",
  },
};

export default function AboutPage() {
  return (
    <PortfolioShell>
      <AboutSection />
    </PortfolioShell>
  );
}
