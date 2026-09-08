import type { Metadata } from "next";
import CloneShell from "@/components/clone/CloneShell";
import { CloneUsesPage } from "@/components/clone/CloneNowUses";

export const metadata: Metadata = {
  title: "Uses",
  description: "Tools and gear I use daily",
  alternates: { canonical: "/uses" },
};

export default function UsesPage() {
  return (
    <CloneShell>
      <CloneUsesPage />
    </CloneShell>
  );
}
