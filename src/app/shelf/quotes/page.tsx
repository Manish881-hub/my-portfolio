import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quotes",
  description: "Quotes on Manish's shelf",
  alternates: { canonical: "/shelf/quotes" },
};

export { ShelfQuotesPage as default } from "../shared-pages";
