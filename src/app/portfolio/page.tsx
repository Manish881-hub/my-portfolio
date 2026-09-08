import { permanentRedirect } from "next/navigation";

// Canonical home is now `/`. Keep old `/portfolio` links working
// without creating duplicate content for crawlers.
export default function Portfolio() {
  permanentRedirect("/");
}
