import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shows",
  description: "Shows on Manish's shelf",
  alternates: { canonical: "/shelf/shows" },
};

export { ShelfShowsPage as default } from "../shared-pages";
