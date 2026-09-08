import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Links",
  description: "Links on Manish's shelf",
  alternates: { canonical: "/shelf/links" },
};

export { ShelfLinksPage as default } from "../shared-pages";
