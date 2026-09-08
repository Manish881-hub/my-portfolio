import type { Metadata } from "next";
import CloneShell from "@/components/clone/CloneShell";
import { CloneNowPage } from "@/components/clone/CloneNowUses";

export const metadata: Metadata = {
  title: "Now",
  description: "What I'm focused on right now",
  alternates: { canonical: "/now" },
};

export default function NowPage() {
  return (
    <CloneShell>
      <CloneNowPage />
    </CloneShell>
  );
}
