import type { Metadata } from "next";
import CloneShell from "@/components/clone/CloneShell";
import CloneBlogPage from "@/components/clone/CloneBlogPage";

export const metadata: Metadata = {
  title: "Blog",
  description: "Thoughts and ideas — Manish Bhakti Sagar",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <CloneShell>
      <CloneBlogPage />
    </CloneShell>
  );
}
