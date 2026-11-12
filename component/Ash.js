"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Lightbulb, Users } from "lucide-react";

const traits = [
  {
    icon: Lightbulb,
    file: "learner.md",
    title: "Lifelong Learner",
    text: "Always exploring new technologies, frameworks, and skills to stay ahead in the ever-evolving tech world.",
    command: "cat learner.md",
    accent: "from-cyan-400/20 to-transparent",
  },
  {
    icon: BookOpen,
    file: "excellence.ts",
    title: "Professional Excellence",
    text: "Delivering high-quality work consistently, focusing on details, efficiency, and creating value for clients and teams.",
    command: "npm run excellence",
    accent: "from-violet-400/20 to-transparent",
  },
  {
    icon: Users,
    file: "mentorship.js",
    title: "Mentorship & Sharing",
    text: "Passionate about teaching, guiding, and helping others grow in tech and creative skills.",
    command: "git commit -m 'pass it on'",
    accent: "from-emerald-400/20 to-transparent",
  },
];

export default function Ash() {
  return (
    <section className="relative w-full overflow-hidden border-b border-cyan-400/10 px-6 py-20 md:px-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.06),transparent_40%)]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center"
        >
          <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.26em] text-cyan-400/80">
            {"// 01 — the approach"}
          </p>
          <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            My Professional{" "}
            <span className="gradient-text">Approach</span>
          </h2>
          <p className="mx-auto mt-5 max-w-3xl font-mono text-sm leading-relaxed text-slate-400 md:text-base">
            <span className="text-slate-600">{"/*"}</span> I strive to deliver
            high-quality results, continuously grow my skills, and share
            knowledge with others to make a positive impact.{" "}
            <span className="text-slate-600">{"*/"}</span>
          </p>
        </motion.div>

        {/* Trait cards */}
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {traits.map((trait, index) => {
            const Icon = trait.icon;

            return (
              <motion.div
                key={trait.title}
                initial={{ opacity: 0, scale: 0.86, y: 16 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
                whileHover={{ y: -7, rotate: index === 1 ? 0.5 : -0.5 }}
                className="code-panel group relative overflow-hidden rounded-2xl"
              >
                <div className="code-chrome flex items-center justify-between px-4 py-2.5">
                  <div className="flex items-center gap-2">
                    <span className="terminal-dot bg-red-400/80" />
                    <span className="terminal-dot bg-yellow-400/80" />
                    <span className="terminal-dot bg-emerald-400/80" />
                  </div>
                  <span className="font-mono text-[10px] text-slate-500">
                    {trait.file}
                  </span>
                  <span className="font-mono text-[10px] text-slate-600">
                    0{index + 1}
                  </span>
                </div>

                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${trait.accent} opacity-0 transition duration-500 group-hover:opacity-100`}
                />

                <div className="relative p-7">
                  <div className="mb-5 flex items-center justify-between">
                    <span className="inline-flex rounded-xl border border-cyan-400/15 bg-cyan-400/[0.06] p-3">
                      <Icon className="h-7 w-7 text-cyan-300" />
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-600">
                      exported
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold tracking-tight text-white">
                    {trait.title}
                  </h3>
                  <p className="mt-3 min-h-24 text-sm leading-relaxed text-slate-400">
                    {trait.text}
                  </p>

                  <div className="mt-5 flex items-center gap-2 border-t border-white/[0.06] pt-4 font-mono text-[10px] text-slate-500">
                    <span className="text-emerald-400">$</span>
                    <span className="transition group-hover:text-cyan-300">
                      {trait.command}
                    </span>
                    <span className="animate-blink ml-auto text-cyan-400">▌</span>
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
