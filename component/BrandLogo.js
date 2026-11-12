"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site";

export default function BrandLogo({ className = "" }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span
        aria-hidden="true"
        className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-cyan-400/30 bg-cyan-400/10 font-mono text-[11px] font-bold text-cyan-300 shadow-[0_0_24px_rgba(34,211,238,0.18)] ${className}`}
      >
        {"</>"}
      </span>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={siteConfig.logo}
      alt={`${siteConfig.name} logo`}
      onError={() => setFailed(true)}
      className={`h-9 w-9 shrink-0 rounded-lg border border-cyan-400/20 bg-white/5 object-contain p-1 shadow-[0_0_24px_rgba(34,211,238,0.14)] ${className}`}
    />
  );
}
