# Contact Section — Design

## Navigation
Add "Contact" as a 7th tab in the order: Home, Projects, Timeline, Blog, About, **Contact**, CV.
Both `PillNav` (desktop) and `Dock` (mobile) get the new entry with a `Mail` icon.

## Contact Page Layout
- **Heading**: "Let's Connect"
- **Subheading**: "Interested in AI products, AdTech, startups, or engineering? Send me a message."
- **XChatWindow component**: A locally-adapted version of the Framer X/Twitter DM widget (stripped of Framer-specific imports, using framer-motion for animation). Configured with:
  - Profile name/handle for Manish Bhakti Sagar
  - X profile URL for sending messages
  - Colors adapted to match portfolio theme (light/dark)
- **Social links row**: LinkedIn, GitHub, Email, X/Twitter as icon buttons

## Component Adaptation
The Framer XChatWindow uses `addPropertyControls`/`ControlType` from `framer` (design-time only). The runtime component only depends on React + framer-motion. I'll create `src/components/XChatWindow.tsx` as a standalone component with:
- Collapsible DM drawer (53px closed → 450px open)
- Profile image, name, handle, welcome text
- Message input with Enter/X profile redirect
- Themed colors via props
