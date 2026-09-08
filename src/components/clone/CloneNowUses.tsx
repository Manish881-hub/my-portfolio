import { CLONE_USES, CLONE_NOW } from "@/data/clonePagesData";

export function CloneUsesPage() {
  return (
    <div className="max-w-3xl mx-auto py-12">
      <h1 className="text-2xl font-mono mb-2">uses</h1>
      <p className="text-neutral-500 font-mono text-sm mb-6">living document — tools and gear, constantly evolving</p>
      <ul className="space-y-2 text-sm">
        {CLONE_USES.map((u) => (
          <li key={u} className="flex gap-2"><span>·</span><span>{u}</span></li>
        ))}
      </ul>
    </div>
  );
}

export function CloneNowPage() {
  return (
    <div className="max-w-3xl mx-auto py-12">
      <h1 className="text-2xl font-mono mb-2">now</h1>
      <p className="text-neutral-500 font-mono text-sm mb-6">what I&apos;m focused on right now</p>
      <ul className="space-y-2 text-sm">
        {CLONE_NOW.map((n) => (
          <li key={n} className="flex gap-2"><span>·</span><span>{n}</span></li>
        ))}
      </ul>
    </div>
  );
}
