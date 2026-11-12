"use client";

import React from "react";
import { motion } from "framer-motion";

const tags = [
  "JavaScript",
  "React",
  "Next.js",
  "TailwindCSS",
  "Python",
  "FastAPI",
  "MongoDB",
  "Node.js",
  "Astra DB",
];

export default function Asap() {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden border-b border-cyan-400/10 px-5 py-20 text-white sm:px-8 md:px-20">
      {/* Floating background glow — original animation kept */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.25 }}
        transition={{ duration: 2 }}
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 blur-2xl"
      />

      <div className="relative z-10 w-full max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-10 text-center"
        >
          <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.26em] text-cyan-400/80">
            {"// 05 — mastery.log"}
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            My <span className="gradient-text">Skill Mastery</span>
          </h1>
          <p className="mt-4 font-mono text-xs text-slate-500">
            <span className="text-emerald-400">$</span> cat mastery.log
          </p>
        </motion.div>

        {/* Write-up terminal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          whileHover={{ scale: 1.01 }}
          className="code-panel relative overflow-hidden rounded-2xl"
        >
          <div className="code-chrome flex items-center justify-between px-4 py-2.5">
            <div className="flex items-center gap-2">
              <span className="terminal-dot bg-red-400/80" />
              <span className="terminal-dot bg-yellow-400/80" />
              <span className="terminal-dot bg-emerald-400/80" />
            </div>
            <span className="font-mono text-[10px] text-slate-500">
              ~/the-genesis/mastery.md
            </span>
            <span className="font-mono text-[10px] text-emerald-400">
              read-only
            </span>
          </div>

          <div className="relative overflow-hidden p-6 sm:p-10">
            {/* Shine animation — original animation kept */}
            <motion.div
              initial={{ x: "-120%" }}
              animate={{ x: "160%" }}
              transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
              className="pointer-events-none absolute left-0 top-0 h-full w-1/3 rotate-12 bg-white/[0.035]"
            />

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="relative z-20 space-y-5 font-mono text-sm leading-7 text-slate-300 md:text-[15px] md:leading-8"
            >
              <p>
                I am highly skilled and deeply experienced across a wide range
                of modern technologies — JavaScript, React, Next.js, TailwindCSS,
                Python, FastAPI, MongoDB, Node.js, and Astra DB.
              </p>

              <p>
                I have mastered these tools not just in theory, but in real-world
                development, building high-performance, scalable, and visually
                stunning solutions. I combine creativity, engineering precision,
                and problem-solving excellence to bring powerful ideas to life.
              </p>

              <p>
                I am a{" "}
                <span className="font-bold text-emerald-300">
                  pro at what I do
                </span>
                , constantly improving, learning fast, adapting, and teaching
                others along the way. My passion for growth and innovation makes
                me unstoppable in any project I take on.
              </p>

              <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/[0.04] p-4 font-mono text-xs text-emerald-200/90">
                <span className="text-emerald-400">$</span>{" "}
                <span>{'git commit -m "learn, build, teach, repeat"'}</span>
                <br />
                <span className="text-slate-500">[main 9f3a1c2]</span> 1 file
                changed, infinite growth
              </div>
            </motion.div>

            <div className="mt-7 flex flex-wrap gap-2 border-t border-white/[0.06] pt-5">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-cyan-400/15 bg-cyan-400/[0.05] px-2.5 py-1 font-mono text-[10px] text-cyan-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating bubbles (contained) — original animations kept */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute bottom-10 left-10 h-6 w-6 rounded-full bg-cyan-300/60"
          animate={{ y: [0, -20, 0], opacity: [0.4, 0.9, 0.4] }}
          transition={{ repeat: Infinity, duration: 3 }}
        />
        <motion.div
          className="absolute right-20 top-20 h-10 w-10 rounded-full bg-violet-400/50"
          animate={{ y: [0, -25, 0], opacity: [0.3, 0.8, 0.3] }}
          transition={{ repeat: Infinity, duration: 4 }}
        />
      </div>
    </section>
  );
}
