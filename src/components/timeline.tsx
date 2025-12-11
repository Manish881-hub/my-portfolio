import React from 'react';
import { Briefcase, GraduationCap, Star } from 'lucide-react';

interface TimelineItem {
    id: number;
    title: string;
    role: string;
    date: string;
    description: string;
    type: 'work' | 'education' | 'achievement';
    tags: string[];
}

const timelineData: TimelineItem[] = [
    {
        id: 1,
        title: "Full-stack Developer",
        role: "Tekpages IT Solutions Private Limited",
        date: "Jul 2025 - Oct 2025",
        description: "Designed and deployed 3+ responsive web pages using HTML, CSS, and JavaScript, improving user engagement by 40%. Developed a Temperature Converter Web App integrating AWS services. Collaborated in real-world case studies involving hybrid cloud setups using AWS & Azure.",
        type: "work",
        tags: ["HTML", "CSS", "JavaScript", "AWS", "Azure", "JSP"]
    },
    {
        id: 2,
        title: "Web Development Intern",
        role: "Oasis Infobyte",
        date: "Dec 2023 - Jan 2024",
        description: "Developed and deployed mobile-first, responsive web applications using React.js and HTML5. Created modular, reusable React components, reducing front-end development time by 25%. Conducted extensive cross-browser testing.",
        type: "work",
        tags: ["React.js", "HTML5", "Agile", "Cross-browser Testing"]
    },
    {
        id: 3,
        title: "Bachelor of Technology - Computer Science",
        role: "Trident Academy of Technology (TAT), Bhubaneswar",
        date: "Dec 2022 - Apr 2025",
        description: "Grade: 7.5 CGPA. Led a 4-member team to secure 3rd place in an inter-college esports LAN competition, showcasing teamwork and strategy.",
        type: "education",
        tags: ["BTech", "Computer Science", "Team Leadership"]
    },
    {
        id: 4,
        title: "Diploma of Education, Information Technology",
        role: "Government Polytechnic, Bhubaneswar",
        date: "Mar 2018 - Jan 2021",
        description: "Grade: 82%. Represented college as Forward Commander during cultural events, coordinating teams and ensuring smooth event execution.",
        type: "education",
        tags: ["Diploma", "Information Technology", "Event Management"]
    },
    {
        id: 5,
        title: "Primary Education, Science",
        role: "DPS VIDYAPEETH",
        date: "Mar 2007 - Mar 2018",
        description: "Grade: 6.0/10 CGPA. Engaged in diverse extracurricular activities including Football, Basketball, Debate, and Speech.",
        type: "education",
        tags: ["Science", "Debate", "Sports"]
    }
];

const Timeline = () => {
    return (
        <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-zinc-800 dark:text-zinc-100">
                My Journey
            </h2>

            <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-4 sm:left-1/2 h-full w-0.5 bg-gradient-to-b from-zinc-200 via-zinc-400 to-zinc-200 dark:from-zinc-800 dark:via-zinc-600 dark:to-zinc-800 -translate-x-1/2 rounded-full" />

                <div className="flex flex-col gap-12 sm:gap-24">
                    {timelineData.map((item, index) => {
                        const isLeft = index % 2 === 0;

                        return (
                            <div
                                key={item.id}
                                className={`flex flex-col sm:flex-row items-center sm:items-start w-full relative group ${isLeft ? 'sm:flex-row' : 'sm:flex-row-reverse'
                                    }`}
                            >
                                {/* Mobile: Connector Line to Dot */}
                                <div className="absolute left-4 w-8 h-0.5 bg-zinc-300 dark:bg-zinc-700 top-6 sm:hidden" />

                                {/* Center Icon/Dot */}
                                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 z-10">
                                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white dark:bg-zinc-900 border-4 border-zinc-100 dark:border-zinc-800 shadow-xl group-hover:scale-110 transition-transform duration-300 group-hover:border-blue-500/30">
                                        {item.type === 'work' && <Briefcase className="w-5 h-5 text-blue-500" />}
                                        {item.type === 'education' && <GraduationCap className="w-5 h-5 text-emerald-500" />}
                                        {item.type === 'achievement' && <Star className="w-5 h-5 text-amber-500" />}
                                    </div>
                                </div>

                                {/* Content Card */}
                                <div className={`w-full sm:w-[calc(50%-3rem)] pl-16 sm:pl-0 ${isLeft ? 'sm:pr-12 sm:text-right' : 'sm:pl-12 sm:text-left'
                                    }`}>
                                    <div className={`
                    p-6 rounded-2xl bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm 
                    border border-zinc-200/50 dark:border-zinc-800/50 shado-sm hover:shadow-xl 
                    transition-all duration-300 group-hover:-translate-y-1
                    ${isLeft ? 'sm:items-end' : 'sm:items-start'}
                    flex flex-col
                  `}>
                                        <div className="flex items-center gap-2 mb-2 sm:mb-1 opacity-80">
                                            <span className="text-sm font-semibold tracking-wider text-blue-600 dark:text-blue-400 uppercase">
                                                {item.date}
                                            </span>
                                        </div>

                                        <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-1">
                                            {item.title}
                                        </h3>

                                        <p className="text-zinc-600 dark:text-zinc-400 font-medium mb-3">
                                            {item.role}
                                        </p>

                                        <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed mb-4">
                                            {item.description}
                                        </p>

                                        <div className={`flex flex-wrap gap-2 ${isLeft ? 'sm:justify-end' : 'sm:justify-start'
                                            }`}>
                                            {item.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="px-3 py-1 text-xs font-medium rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300"
                                                >
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Timeline;
