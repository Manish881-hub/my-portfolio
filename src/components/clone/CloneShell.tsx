import CloneDock from "./CloneDock";
import { CloneCorners } from "./CloneCorners";

export default function CloneShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] text-neutral-900 dark:text-neutral-50 font-mono">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-white dark:focus:bg-neutral-900 focus:text-neutral-900 dark:focus:text-neutral-100 focus:px-4 focus:py-2 focus:rounded-md focus:border focus:border-neutral-200 dark:focus:border-neutral-800 focus:text-sm focus:font-mono"
      >
        skip to content
      </a>
      <CloneDock />
      <main id="main-content" className="container mx-auto px-6 py-4 pb-32 max-w-5xl">
        {children}
      </main>
      <CloneCorners />
    </div>
  );
}
