import { MapPin, Briefcase, AtSign } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import XChatWindow from "@/components/XChatWindow";
import { PROFILE, AVAILABILITY, CURRENT_FOCUS } from "@/data/portfolioData";

const INTERESTS = [
  "AI Products",
  "AdTech",
  "Agentic Workflows",
  "Full-Stack Engineering",
];

export default function ContactSection() {
  return (
    <div className="max-w-3xl mx-auto space-y-10 animate-in fade-in zoom-in-95 duration-300">
      <section className="text-center">
        <h2 className="text-4xl font-extrabold text-primary mb-3">
          Let&apos;s Connect
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-lg">
          Interested in:
        </p>
        <div className="flex flex-wrap justify-center gap-2 mt-3">
          {INTERESTS.map((item) => (
            <span
              key={item}
              className="px-3.5 py-1.5 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 rounded-lg text-sm font-medium"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* Availability + location */}
      <section
        aria-label="Availability"
        className="bg-white dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 rounded-2xl p-5 shadow-sm max-w-md mx-auto space-y-3"
      >
        <div className="flex items-start gap-2.5 text-sm text-gray-600 dark:text-gray-300">
          <Briefcase size={16} aria-hidden="true" className="mt-0.5 shrink-0 text-indigo-500" />
          <span>{AVAILABILITY.status}</span>
        </div>
        <div className="flex items-start gap-2.5 text-sm text-gray-600 dark:text-gray-300">
          <MapPin size={16} aria-hidden="true" className="mt-0.5 shrink-0 text-indigo-500" />
          <span>
            {PROFILE.location} · {AVAILABILITY.locations}
          </span>
        </div>
        <div className="flex items-start gap-2.5 text-sm text-gray-600 dark:text-gray-300">
          <AtSign size={16} aria-hidden="true" className="mt-0.5 shrink-0 text-indigo-500" />
          <span>
            {AVAILABILITY.bestContact}{" "}
            <a
              href={`mailto:${PROFILE.email}`}
              className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline"
            >
              {PROFILE.email}
            </a>
          </span>
        </div>
      </section>

      {/* Contact form — POSTs to /api/contact */}
      <ContactForm />

      {/* Current Focus Card */}
      <section className="bg-white dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 rounded-2xl p-5 shadow-sm max-w-md mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3">
          Currently
        </p>
        <div className="space-y-2.5">
          {CURRENT_FOCUS.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 text-sm text-gray-600 dark:text-gray-400"
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* XChatWindow — centered widget */}
      <div className="flex justify-center">
        <XChatWindow />
      </div>
    </div>
  );
}
