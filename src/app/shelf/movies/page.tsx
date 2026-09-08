import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Movies",
  description: "Movies on Manish's shelf",
  alternates: { canonical: "/shelf/movies" },
};

export { ShelfMoviesPage as default } from "../shared-pages";
