"use client";

import { useEffect, useState } from "react";
import { CLONE_PROFILE } from "@/data/cloneData";

export function CloneCorners() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const fmt = () =>
      new Intl.DateTimeFormat("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "Asia/Kolkata",
      }).format(new Date());
    setTime(fmt());
    const id = setInterval(() => setTime(fmt()), 30000);
    return () => clearInterval(id);
  }, []);
  return (
    <>
      <div className="hidden md:block fixed bottom-6 left-6 z-40 text-xs md:text-sm text-neutral-500/90 dark:text-neutral-400/90 font-mono">
        Manish © {new Date().getFullYear()}
      </div>
      <div className="hidden md:block fixed bottom-6 right-6 z-40 text-xs md:text-sm text-neutral-500/90 dark:text-neutral-400/90 text-right font-mono">
        <div>{CLONE_PROFILE.locationLong}</div>
        <div className="tabular-nums">{time ? `${time} IST` : "—"}</div>
      </div>
    </>
  );
}
