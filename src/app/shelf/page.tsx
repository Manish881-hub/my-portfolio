import type { Metadata } from "next";
import CloneShell from "@/components/clone/CloneShell";
import CloneShelfPage from "@/components/clone/CloneShelfPage";

export const metadata: Metadata = {
  title: "Shelf",
  description: "Personal library — books, quotes, links, movies, shows",
  alternates: { canonical: "/shelf" },
};

export default function ShelfPage() {
  return (
    <CloneShell>
      <CloneShelfPage />
    </CloneShell>
  );
}
