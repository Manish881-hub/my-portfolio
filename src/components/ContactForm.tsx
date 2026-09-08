"use client";

import { useId, useState } from "react";
import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { PROFILE } from "@/data/portfolioData";

type Status =
  | { kind: "idle" }
  | { kind: "sending" }
  | { kind: "success" }
  | { kind: "error"; message: string };

const inputClass =
  "w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-3 text-sm text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 transition";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const nameId = useId();
  const emailId = useId();
  const messageId = useId();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status.kind === "sending") return;
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus({ kind: "sending" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
          // Honeypot — must stay empty (see route.ts).
          company: data.get("company"),
        }),
      });
      const payload = (await res.json().catch(() => null)) as {
        ok?: boolean;
        error?: string;
      } | null;
      if (res.ok && payload?.ok) {
        form.reset();
        setStatus({ kind: "success" });
      } else {
        setStatus({
          kind: "error",
          message: payload?.error ?? "Something went wrong. Please try again.",
        });
      }
    } catch {
      setStatus({
        kind: "error",
        message: "Network error — please check your connection and try again.",
      });
    }
  }

  return (
    <section
      aria-labelledby="contact-form-heading"
      className="bg-white dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 rounded-2xl p-5 md:p-6 shadow-sm max-w-md mx-auto w-full"
    >
      <h3 id="contact-form-heading" className="text-lg font-bold text-primary mb-1">
        Send a message
      </h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
        Delivered straight to my inbox — I usually reply within a couple of days.
      </p>

      {status.kind === "success" ? (
        <div
          role="status"
          className="flex items-start gap-3 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 p-4"
        >
          <CheckCircle2 size={20} aria-hidden="true" className="shrink-0 text-emerald-600 dark:text-emerald-400" />
          <div>
            <p className="text-sm font-semibold text-emerald-800 dark:text-emerald-200">
              Message sent — thanks for reaching out!
            </p>
            <p className="text-sm text-emerald-700 dark:text-emerald-300 mt-1">
              Need it urgent?{" "}
              <a
                href={`mailto:${PROFILE.email}`}
                className="font-medium underline underline-offset-2"
              >
                Email me directly
              </a>
              .
            </p>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate={false} className="space-y-4">
          <div>
            <label htmlFor={nameId} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
              Name
            </label>
            <input
              id={nameId}
              name="name"
              type="text"
              required
              minLength={2}
              maxLength={100}
              autoComplete="name"
              placeholder="Your name"
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor={emailId} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
              Email
            </label>
            <input
              id={emailId}
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="you@example.com"
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor={messageId} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
              Message
            </label>
            <textarea
              id={messageId}
              name="message"
              required
              minLength={10}
              maxLength={5000}
              rows={5}
              placeholder="What would you like to discuss?"
              className={`${inputClass} resize-y`}
            />
          </div>

          {/* Honeypot — hidden from humans, catches bots */}
          <div className="hidden" aria-hidden="true">
            <label>
              Company
              <input type="text" name="company" tabIndex={-1} autoComplete="off" />
            </label>
          </div>

          {status.kind === "error" && (
            <div
              role="alert"
              className="flex items-start gap-2.5 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-3.5 text-sm text-red-700 dark:text-red-300"
            >
              <AlertCircle size={18} aria-hidden="true" className="shrink-0 mt-0.5" />
              <span>
                {status.message}{" "}
                <a href={`mailto:${PROFILE.email}`} className="font-medium underline underline-offset-2">
                  Email me directly
                </a>
                .
              </span>
            </div>
          )}

          <button
            type="submit"
            disabled={status.kind === "sending"}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 text-white font-semibold text-sm hover:bg-indigo-700 disabled:opacity-60 disabled:cursor-wait transition-all shadow-sm"
          >
            {status.kind === "sending" ? (
              <>
                <Loader2 size={16} aria-hidden="true" className="animate-spin" />
                Sending…
              </>
            ) : (
              <>
                <Send size={16} aria-hidden="true" />
                Send message
              </>
            )}
          </button>
        </form>
      )}
    </section>
  );
}
