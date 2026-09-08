import type { Metadata } from "next";
import CloneShell from "@/components/clone/CloneShell";
import CloneTerminal from "@/components/clone/CloneTerminal";

export const metadata: Metadata = {
  title: "Terminal",
  description: "Interactive terminal — Manish Bhakti Sagar",
  alternates: { canonical: "/cmd" },
};

export default function CmdPage() {
  return (
    <CloneShell>
      <CloneTerminal />
    </CloneShell>
  );
}
