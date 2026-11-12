import React from "react";
import { Terminal } from "lucide-react";

const messages = [
  "message me for more info",
  "open for freelance projects",
  "1-on-1 coding mentorship available",
  "full-stack • design • SEO • email",
  "let's build something that stands out",
];

export default function Top() {
  const items = [...messages, ...messages];

  return (
    <div className="relative overflow-hidden border-b border-cyan-400/10 bg-gradient-to-r from-[#031018] via-[#07101f] to-[#0c0718] py-2.5 text-white">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#05070d] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#05070d] to-transparent" />
      <div className="animate-marquee flex w-max items-center gap-10 whitespace-nowrap font-mono text-[11px] tracking-[0.15em] text-slate-300 sm:text-xs">
        {items.map((message, index) => (
          <span key={`${message}-${index}`} className="flex items-center gap-3">
            <Terminal className="h-3.5 w-3.5 text-cyan-400" />
            <span className="text-emerald-400">$</span>
            <span>{message}</span>
            <span className="text-slate-700">{"//"}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
