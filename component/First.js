"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  PenTool,
  Cpu,
  Mail,
  Rocket,
  TrendingUp,
} from "lucide-react";

const capabilities = [
  {
    icon: Code,
    file: "fullstack.tsx",
    title: "Full-Stack Development",
    text: "Expert in Next.js, React, JavaScript, Tailwind, Python, and FastAPI. I build lightning-fast, scalable applications with clean UI/UX.",
    command: "npm run ship",
    accent: "text-cyan-300",
  },
  {
    icon: Cpu,
    file: "engineering.c",
    title: "Computer Engineering",
    text: "A strong technical background that blends hardware and software to create well-optimized digital solutions.",
    command: "sudo make it work",
    accent: "text-emerald-300",
  },
  {
    icon: PenTool,
    file: "design.fig",
    title: "Graphic Design",
    text: "Skilled in crafting highly polished visuals — from logos to full brand identities and marketing materials.",
    command: "export brand --polished",
    accent: "text-violet-300",
  },
  {
    icon: TrendingUp,
    file: "seo.py",
    title: "SEO & Digital Growth",
    text: "I optimize websites for visibility, traffic, and ranking through proven SEO and growth strategies.",
    command: "python rank.py --grow",
    accent: "text-yellow-300",
  },
  {
    icon: Mail,
    file: "campaign.mjs",
    title: "Email Marketing",
    text: "Crafting high-conversion campaigns that turn attention into engagement and engagement into sales.",
    command: "send --conversion high",
    accent: "text-pink-300",
  },
  {
    icon: Rocket,
    file: "execute.sh",
    title: "Versatility & Execution",
    text: "From backend logic to UI design, from branding to optimisation — I deliver complete, polished digital products.",
    command: "./deliver --end-to-end",
    accent: "text-orange-300",
  },
];

export default function First() {
  return (
    <section className="relative w-full overflow-hidden border-b border-cyan-400/10 px-6 py-20 md:px-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(139,92,246,0.08),transparent_38%)]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center"
        >
          <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.26em] text-violet-300/80">
            {"// 00 — capabilities"}
          </p>
          <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            What I Bring to the{" "}
            <span className="gradient-text">Table</span>
          </h2>
          <p className="mx-auto mt-5 max-w-3xl font-mono text-sm leading-relaxed text-slate-400 md:text-base">
            A rare blend of engineering, creativity, and full-stack development
            — powering digital experiences that stand out.
          </p>
        </motion.div>

        {/* Capability cards */}
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.86, y: 18 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.08 * (index + 1) }}
                whileHover={{ y: -7 }}
                className="code-panel group relative overflow-hidden rounded-2xl"
              >
                <div className="code-chrome flex items-center justify-between px-4 py-2.5">
                  <div className="flex items-center gap-2">
                    <span className="terminal-dot bg-red-400/80" />
                    <span className="terminal-dot bg-yellow-400/80" />
                    <span className="terminal-dot bg-emerald-400/80" />
                  </div>
                  <span className="font-mono text-[10px] text-slate-500">
                    {item.file}
                  </span>
                  <span className="font-mono text-[10px] text-slate-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="relative p-7">
                  <span className="mb-5 inline-flex rounded-xl border border-white/10 bg-white/[0.04] p-3">
                    <Icon className={`h-7 w-7 ${item.accent}`} />
                  </span>
                  <h3 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 min-h-24 text-sm leading-relaxed text-slate-400">
                    {item.text}
                  </p>
                  <div className="mt-5 flex items-center gap-2 border-t border-white/[0.06] pt-4 font-mono text-[10px] text-slate-500">
                    <span className="text-emerald-400">$</span>
                    <span className="transition group-hover:text-cyan-300">
                      {item.command}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
