import type { Metadata } from "next";
import CloneShell from "@/components/clone/CloneShell";
import ClonePhotographyPage from "@/components/clone/ClonePhotographyPage";

export const metadata: Metadata = {
  title: "Photography",
  description: "Moments captured through my lens — Manish Bhakti Sagar",
  alternates: { canonical: "/photography" },
};

export default function PhotographyPage() {
  return (
    <CloneShell>
      <ClonePhotographyPage />
    </CloneShell>
  );
}
