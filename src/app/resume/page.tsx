import type { Metadata } from "next";
import CloneShell from "@/components/clone/CloneShell";
import CloneResumePage from "@/components/clone/CloneResumePage";

export const metadata: Metadata = {
  title: "Resume",
  description: "Resume — Manish Bhakti Sagar, LLM Engineer",
  alternates: { canonical: "/resume" },
};

export default function ResumePage() {
  return (
    <CloneShell>
      <CloneResumePage />
    </CloneShell>
  );
}
