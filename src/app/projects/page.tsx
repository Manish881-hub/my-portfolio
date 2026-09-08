import type { Metadata } from "next";
import CloneShell from "@/components/clone/CloneShell";
import CloneProjectsPage from "@/components/clone/CloneProjectsPage";

export const metadata: Metadata = {
  title: "Projects",
  description: "Things I've built — Manish Bhakti Sagar",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <CloneShell>
      <CloneProjectsPage />
    </CloneShell>
  );
}
