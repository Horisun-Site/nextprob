"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  GraduationCap,
  Terminal,
} from "lucide-react";
import Link from "next/link";
import { learningTopics } from "@/lib/learning";

const perks = [
  "One-on-one, project-based learning",
  "Choose your own track — frontend, backend, design or growth",
  "Real feedback on real code, not just theory",
  "Start the conversation on WhatsApp + email instantly",
];

export default function LearnCTA() {
  const preview = learningTopics.slice(0, 4);

  return (
    <section className="relative w-full overflow-hidden border-b border-cyan-400/10 px-6 py-20 md:px-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,rgba(74,222,128,0.08),transparent_35%),radial-gradient(circle_at_80%_60%,rgba(34,211,238,0.08),transparent_35%)]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="code-panel relative mx-auto grid max-w-7xl overflow-hidden rounded-2xl lg:grid-cols-2"
      >
        <div className="code-chrome absolute inset-x-0 top-0 flex items-center justify-between px-4 py-2.5">
          <div className="flex items-center gap-2">
            <span className="terminal-dot bg-red-400/80" />
            <span className="terminal-dot bg-yellow-400/80" />
            <span className="terminal-dot bg-emerald-400/80" />
          </div>
          <span className="font-mono text-[10px] text-slate-500">
            ~/the-genesis/learn
          </span>
          <span className="font-mono text-[10px] text-emerald-400">
            open_for_students
          </span>
        </div>

        {/* Copy */}
        <div className="px-6 pb-10 pt-16 sm:px-10 sm:pb-12 sm:pt-20">
          <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.24em] text-emerald-400/80">
            {"// 02 — learn.with.genesis"}
          </p>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
            I don&apos;t just build.
            <br />
            <span className="gradient-text">I teach what I know.</span>
          </h2>
          <p className="mt-4 max-w-lg font-mono text-xs leading-relaxed text-slate-400 sm:text-sm">
            Want to learn coding, design, SEO or digital growth from someone who
            builds with it every day? Pick the exact skill you want, send the
            request to my WhatsApp, and it lands in my email at the same time.
          </p>

          <ul className="mt-6 space-y-3">
            {perks.map((perk) => (
              <li
                key={perk}
                className="flex items-start gap-2.5 font-mono text-[11px] leading-relaxed text-slate-300 sm:text-xs"
              >
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-400" />
                {perk}
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-wrap gap-2">
            {preview.map((topic) => (
              <span
                key={topic.id}
                className="rounded-md border border-cyan-400/15 bg-cyan-400/[0.04] px-2.5 py-1 font-mono text-[9px] text-cyan-200"
              >
                {topic.title}
              </span>
            ))}
            <span className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-[9px] text-slate-400">
              +{learningTopics.length - preview.length} more
            </span>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/learn"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-400 px-6 py-3 font-mono text-sm font-bold text-[#03130b] transition hover:bg-emerald-300"
            >
              <GraduationCap className="h-4 w-4" />
              pick_what_i_learn
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.02] px-6 py-3 font-mono text-sm font-semibold text-slate-300 transition hover:border-cyan-400/30 hover:text-cyan-200"
            >
              <Terminal className="h-4 w-4" />
              ask_a_question
            </Link>
          </div>
        </div>

        {/* Code preview */}
        <div className="relative flex items-center border-t border-white/[0.06] bg-[#020617]/60 px-6 pb-6 pt-16 sm:px-10 sm:pb-10 sm:pt-20 lg:border-l lg:border-t-0">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full rounded-xl border border-white/[0.08] bg-[#030712] p-5 font-mono text-[11px] leading-6 text-slate-300 shadow-2xl sm:text-xs"
          >
            <div className="mb-4 flex items-center justify-between border-b border-white/[0.06] pb-3">
              <span className="text-slate-500">mentorship.config.js</span>
              <span className="flex gap-1.5">
                <span className="h-2 w-2 rounded-full bg-red-400/70" />
                <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
                <span className="h-2 w-2 rounded-full bg-emerald-400/70" />
              </span>
            </div>
            <p>
              <span className="text-violet-300">const</span>{" "}
              <span className="text-cyan-300">student</span>{" "}
              <span className="text-slate-500">=</span> {"{"}
            </p>
            <p className="pl-4">
              <span className="text-emerald-300">curious</span>
              <span className="text-slate-500">:</span>{" "}
              <span className="text-orange-300">true</span>,
            </p>
            <p className="pl-4">
              <span className="text-emerald-300">readyToBuild</span>
              <span className="text-slate-500">:</span>{" "}
              <span className="text-orange-300">true</span>,
            </p>
            <p className="pl-4">
              <span className="text-emerald-300">track</span>
              <span className="text-slate-500">:</span>{" "}
              <span className="text-yellow-200">&quot;your choice&quot;</span>,
            </p>
            <p>{"};"}</p>
            <p className="mt-4 text-slate-500">
              <span className="text-emerald-400">$</span> start learning…
              <span className="animate-blink ml-1 text-cyan-400">▌</span>
            </p>

            <motion.div
              className="mt-6 flex items-center justify-between rounded-lg border border-emerald-400/20 bg-emerald-400/[0.05] px-3 py-2.5"
              animate={{ boxShadow: ["0 0 0 rgba(74,222,128,0)", "0 0 28px rgba(74,222,128,0.12)", "0 0 0 rgba(74,222,128,0)"] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <span className="flex items-center gap-2 text-[10px] text-emerald-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                whatsapp + email ready
              </span>
              <ArrowRight className="h-3.5 w-3.5 text-emerald-400" />
            </motion.div>
          </motion.div>

          <motion.div
            className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-emerald-500/10 blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
