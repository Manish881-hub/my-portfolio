import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CV / Resume",
  description:
    "CV of Manish Bhakti Sagar — Full Stack Engineer with 1+ year shipping cloud-native apps on AWS. Experience, projects, skills, certifications.",
  alternates: { canonical: "/cv" },
  openGraph: {
    url: "/cv",
    title: "CV | Manish Bhaktisagar",
    description: "Experience, key projects, skills, and certifications.",
  },
};

export default function CvLayout({ children }: { children: React.ReactNode }) {
  return children;
}
