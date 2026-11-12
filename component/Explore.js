"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function Explore() {
  return (
    <section className="relative flex w-full items-center justify-center overflow-hidden border-b border-cyan-400/10 px-6 py-28 text-white md:px-20">
      {/* Floating circles / glow — original animations kept */}
      <motion.div
        className="absolute left-10 top-10 h-40 w-40 rounded-full bg-purple-600 opacity-20 blur-3xl"
        animate={{ scale: [1, 1.3, 1], rotate: [0, 15, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 right-10 h-48 w-48 rounded-full bg-blue-600 opacity-20 blur-3xl"
        animate={{ scale: [1, 1.25, 1], rotate: [0, -15, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
      />

      {/* Ghost code in the background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 select-none overflow-hidden font-mono text-[11px] leading-6 text-cyan-300/[0.055] sm:text-xs"
      >
        <p className="absolute left-4 top-8 max-w-xs whitespace-pre">{`const explore = async () => {
  const ideas = await genesis.compile();
  return ideas.map(i => i.build());
};`}</p>
        <p className="absolute bottom-8 right-4 max-w-sm whitespace-pre text-right">{`while (curious) {
  learn();
  build();
  inspire();
  repeat();
}`}</p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="code-panel relative z-10 w-full max-w-4xl overflow-hidden rounded-2xl"
      >
        <div className="code-chrome flex items-center justify-between px-4 py-2.5 sm:px-5">
          <div className="flex items-center gap-2">
            <span className="terminal-dot bg-red-400/80" />
            <span className="terminal-dot bg-yellow-400/80" />
            <span className="terminal-dot bg-emerald-400/80" />
          </div>
          <span className="font-mono text-[10px] text-slate-500">
            ~/the-genesis/explore.sh
          </span>
          <span className="font-mono text-[10px] text-emerald-400">exit 0</span>
        </div>

        <div className="relative px-6 py-12 text-center sm:px-10 md:px-14">
          <p className="mb-4 font-mono text-xs text-slate-500">
            <span className="text-emerald-400">$</span> ./explore-my-world
            <span className="animate-blink ml-1 text-cyan-400">▌</span>
          </p>

          <h2 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            Ready to explore{" "}
            <span className="gradient-text">my world?</span>
          </h2>

          <p className="mx-auto mb-10 max-w-2xl font-mono text-sm leading-relaxed text-slate-400 md:text-base">
            Dive into my portfolio and discover the projects, skills, and
            creativity I bring to the table. Every project tells a story — and
            you&apos;re invited to explore it.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/learn"
                className="group flex items-center gap-2 rounded-xl bg-emerald-400 px-7 py-3.5 font-mono text-sm font-bold text-[#03130b] transition hover:bg-emerald-300"
              >
                <GraduationCap className="h-4 w-4" />
                learn_with_genesis
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/skill"
                className="flex items-center gap-2 rounded-xl border border-cyan-400/30 bg-cyan-400/[0.06] px-7 py-3.5 font-mono text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/10"
              >
                view_my_skills
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/contact"
                className="flex items-center gap-2 rounded-xl border border-purple-400/30 px-7 py-3.5 font-mono text-sm font-semibold text-purple-200 transition hover:border-purple-300 hover:bg-purple-400/10"
              >
                <MessageCircle className="h-4 w-4" />
                contact_me
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
