import type { Metadata } from "next";
import CloneShell from "@/components/clone/CloneShell";
import CloneHome from "@/components/clone/CloneHome";

export const metadata: Metadata = {
  title: "Manish Bhakti Sagar — LLM Engineer",
  description:
    "Manish Bhakti Sagar builds AI-powered applications with FastAPI, OpenAI APIs, RAG, and conversational AI — from assistants and LLM workflows to scalable backends on AWS.",
  alternates: { canonical: "/" },
  openGraph: {
    url: "/",
    title: "Manish Bhaktisagar",
    description:
      "LLM Engineer and Python Developer building AI assistants, RAG apps, and LLM-powered workflows on FastAPI and AWS.",
  },
};

export default function Home() {
  return (
    <CloneShell>
      <CloneHome />
    </CloneShell>
  );
}
