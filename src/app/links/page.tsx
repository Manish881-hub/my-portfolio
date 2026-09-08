import type { Metadata } from "next";
import LinksPage from "@/components/LinksPage";

export const metadata: Metadata = {
  title: "Links",
  description:
    "All of Manish Bhakti Sagar's profiles in one place — portfolio, GitHub, LinkedIn, X, HackerRank, and contact.",
  alternates: { canonical: "/links" },
  openGraph: {
    url: "/links",
    title: "Manish Bhaktisagar | Links",
    description: "Portfolio, GitHub, LinkedIn, X, and contact links.",
  },
  robots: { index: true, follow: true },
};

export default function LinksRoute() {
  return <LinksPage />;
}
