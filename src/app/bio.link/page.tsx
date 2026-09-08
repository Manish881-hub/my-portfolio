import { permanentRedirect } from "next/navigation";

// Legacy URL — canonical links page is now `/links`.
export default function BioLinkLegacy() {
  permanentRedirect("/links");
}
