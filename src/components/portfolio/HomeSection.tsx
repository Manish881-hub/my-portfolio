import Image from "next/image";
import Link from "next/link";
import LogoLoop from "@/components/LogoLoop";
import { SplitText } from "@/components/split-text";
import BorderGlow from "@/components/BorderGlow";
import { PROFILE, BADGES, CURRENT_FOCUS } from "@/data/portfolioData";
import { Badge } from "./SectionTitle";

export default function HomeSection() {
  return (
    <div className="space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Hero */}
      <section className="flex flex-col gap-12 py-10 md:py-20">
        {/* Top Part: Text + Image */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-10">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              Open to work
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-primary tracking-tight">
              Hi, I&apos;m{" "}
              <SplitText className="ml-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 dark:from-indigo-400 dark:via-purple-500 dark:to-pink-400 inline-block">
                {PROFILE.name.split(" ")[0]}
              </SplitText>
            </h1>

            <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">
              {PROFILE.role}
            </h2>

            <p className="text-lg text-gray-500 dark:text-gray-400 font-medium">
              I build AI-powered products, developer tools, and scalable web
              applications.
            </p>

            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
              {PROFILE.tagline}
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-3 pt-2">
              {BADGES.map((badge, i) => (
                <Badge key={i} className={badge.color}>
                  <badge.Icon size={12} className="mr-1" aria-hidden="true" /> {badge.title}
                </Badge>
              ))}
            </div>

            {/* Credibility Strip — Current Focus */}
            <div className="pt-4 space-y-2">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                Currently
              </p>
              <div className="flex flex-col gap-1.5">
                {CURRENT_FOCUS.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
                  >
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap justify-center md:justify-start gap-3 pt-6">
              <a
                href={`mailto:${PROFILE.email}`}
                className="px-6 py-3 rounded-xl bg-indigo-600 text-white font-semibold text-sm hover:bg-indigo-700 transition-all shadow-sm"
              >
                Contact Me
              </a>
              <Link
                href="/projects"
                className="px-6 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 font-semibold text-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
              >
                View Projects
              </Link>
              <Link
                href="/cv"
                className="px-6 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 font-semibold text-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
              >
                Resume
              </Link>
            </div>
          </div>

          {/* Profile Image / Abstract Visual */}
          <div className="flex-1 flex justify-center self-center md:self-start">
            <BorderGlow
              borderRadius={999}
              backgroundColor="transparent"
              colors={["#6366f1", "#a855f7", "#ec4899"]}
              glowColor="250 80 80"
              edgeSensitivity={10}
              glowIntensity={1.5}
              coneSpread={30}
              animated={true}
              className="w-64 h-64 md:w-80 md:h-80 !border-none !bg-transparent"
            >
              <div className="w-full h-full rounded-full border-4 border-white dark:border-gray-800 shadow-2xl overflow-hidden bg-gray-200">
                <Image
                  src="/profile.jpeg"
                  alt="Manish Bhaktisagar"
                  width={320}
                  height={320}
                  priority
                  sizes="(max-width: 768px) 256px, 320px"
                  className="w-full h-full object-cover"
                />
              </div>
            </BorderGlow>
          </div>
        </div>

        {/* Bottom Part: Logo Loop (Full Width) */}
        <div className="w-full pt-4">
          <LogoLoop
            logos={[
              { src: "/logos/react.svg", alt: "React" },
              { src: "/logos/nodejs.svg", alt: "Node.js" },
              { src: "/logos/flask.svg", alt: "Flask" },
              { src: "/logos/typescript.svg", alt: "TypeScript" },
              { src: "/logos/nextjs.svg", alt: "Next.js" },
              { src: "/logos/tailwind.svg", alt: "Tailwind" },
              { src: "/logos/docker.svg", alt: "Docker" },
              { src: "/logos/postgres.svg", alt: "PostgreSQL" },
              { src: "/logos/javascript.svg", alt: "JavaScript" },
              { src: "/logos/prisma.svg", alt: "Prisma" },
              { src: "/logos/supabase.svg", alt: "Supabase" },
            ]}
            speed={30}
            direction="left"
            pauseOnHover
            logoHeight={32}
            gap={40}
          />
        </div>
      </section>
      {/* End Hero */}
    </div>
  );
}
