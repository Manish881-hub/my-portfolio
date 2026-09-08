import type { Metadata } from "next";
import PortfolioShell from "@/components/PortfolioShell";
import ContactSection from "@/components/portfolio/ContactSection";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Manish Bhakti Sagar — interested in AI products, AdTech, agentic workflows, and full-stack engineering roles.",
  alternates: { canonical: "/contact" },
  openGraph: {
    url: "/contact",
    title: "Contact | Manish Bhaktisagar",
    description: "Let's connect — AI products, AdTech, and engineering.",
  },
};

export default function ContactPage() {
  return (
    <PortfolioShell>
      <ContactSection />
    </PortfolioShell>
  );
}
