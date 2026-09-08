import CloneHero from "./CloneHero";
import CloneProjects from "./CloneProjects";
import CloneWriting from "./CloneWriting";

export default function CloneHome() {
  return (
    <div className="space-y-6 md:space-y-8">
      <CloneHero />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <CloneProjects />
        <CloneWriting />
      </div>
    </div>
  );
}
