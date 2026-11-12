"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  MessageCircle,
  Sparkles,
  Terminal,
  GraduationCap,
} from "lucide-react";
import Link from "next/link";
import Typewriter from "./Typewriter";

const roles = [
  "Full-Stack Developer",
  "Computer Engineer",
  "Graphic Designer",
  "SEO Specialist",
  "Email Marketer",
  "Coding Mentor",
];

const stats = [
  { value: "5+", label: "years building" },
  { value: "30+", label: "projects shipped" },
  { value: "1:1", label: "mentorship" },
];

const floatingTags = [
  { label: "<Next.js />", className: "left-2 top-16 text-cyan-300", delay: 0 },
  { label: "python()", className: "right-0 top-28 text-emerald-300", delay: 0.8 },
  { label: "{ design }", className: "bottom-24 left-0 text-violet-300", delay: 1.4 },
];

export default function Dash() {
  // Change this URL to your own image anytime
  const profileImage = "https://i.ibb.co/tT4cPzvR/refreshed.png";

  return (
    <section className="relative w-full overflow-hidden border-b border-cyan-400/10 px-5 pb-20 pt-14 text-white sm:px-8 md:px-12 lg:px-20 lg:pb-24 lg:pt-20">
      {/* Ambient code glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_30%,rgba(34,211,238,0.10),transparent_34%),radial-gradient(circle_at_82%_22%,rgba(139,92,246,0.12),transparent_32%)]" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-12 lg:gap-10">
        {/* ── Left: profile terminal ─────────────────────────────────────── */}
        <motion.div
          className="relative mx-auto w-full max-w-md lg:col-span-5"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {floatingTags.map((tag) => (
            <motion.span
              key={tag.label}
              className={`pointer-events-none absolute z-20 hidden rounded-md border border-white/10 bg-[#020617]/90 px-2.5 py-1 font-mono text-[10px] shadow-lg backdrop-blur md:block ${tag.className}`}
              animate={{ y: [0, -8, 0], opacity: [0.65, 1, 0.65] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: tag.delay,
                ease: "easeInOut",
              }}
            >
              {tag.label}
            </motion.span>
          ))}

          <motion.div
            className="code-panel relative overflow-hidden rounded-2xl"
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 180, damping: 18 }}
          >
            <div className="code-chrome flex items-center justify-between px-4 py-2.5">
              <div className="flex items-center gap-2">
                <span className="terminal-dot bg-red-400/90" />
                <span className="terminal-dot bg-yellow-400/90" />
                <span className="terminal-dot bg-emerald-400/90" />
              </div>
              <span className="font-mono text-[10px] tracking-wide text-slate-400">
                ~/the-genesis/profile.tsx
              </span>
              <span className="flex items-center gap-1.5 font-mono text-[9px] text-emerald-400">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                LIVE
              </span>
            </div>

            <div className="relative p-4 sm:p-5">
              <div className="relative overflow-hidden rounded-xl border border-cyan-400/20">
                <motion.img
                  src={profileImage}
                  alt="The Genesis — full-stack developer"
                  className="h-[320px] w-full object-cover object-center sm:h-[380px]"
                  animate={{ y: [0, -14, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                  }}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-cyan-400/5" />
                <div className="scanlines pointer-events-none absolute inset-0 opacity-30" />
                <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-3">
                  <div className="rounded-md border border-white/10 bg-black/55 px-2.5 py-1.5 font-mono text-[10px] text-cyan-300 backdrop-blur">
                    <span className="text-emerald-400">$</span> whoami
                  </div>
                  <Sparkles className="h-4 w-4 animate-pulse text-cyan-300" />
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mt-4 flex items-center justify-between gap-3 rounded-lg border border-white/5 bg-white/[0.03] px-3 py-2.5"
              >
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
                    {"// greeting"}
                  </p>
                  <h3 className="mt-1 text-base font-semibold text-purple-200 sm:text-lg">
                    👋 Hello, I&apos;m The Genesis
                  </h3>
                </div>
                <Code2 className="h-5 w-5 shrink-0 text-cyan-400" />
              </motion.div>
            </div>
          </motion.div>

          {/* Floating glow — original animation kept */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.35 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
            className="absolute -bottom-12 left-1/2 -z-10 h-64 w-64 -translate-x-1/2 rounded-full bg-purple-600 blur-3xl"
          />
        </motion.div>

        {/* ── Right: terminal copy ───────────────────────────────────────── */}
        <div className="mx-auto w-full max-w-2xl text-center lg:col-span-7 lg:mx-0 lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-cyan-300"
          >
            <Terminal className="h-3 w-3" />
            portfolio.init()
            <span className="h-1 w-1 rounded-full bg-emerald-400" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-mono text-xs text-slate-500 sm:text-sm"
          >
            <span className="text-emerald-400">$</span> whoami
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-3 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl"
          >
            Building digital
            <br />
            <span className="gradient-text glow-text">experiences</span> that
            inspire.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-5 flex min-h-7 items-center justify-center gap-2 font-mono text-sm text-cyan-200 sm:text-base lg:justify-start"
          >
            <span className="text-emerald-400">$</span>
            <span className="text-slate-500">role</span>
            <span className="text-slate-600">=</span>
            <Typewriter words={roles} className="text-cyan-300" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.55 }}
            className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base md:text-lg lg:mx-0"
          >
            I&apos;m a full-stack developer, computer engineer, graphic designer,
            SEO specialist and email marketer — crafting powerful websites,
            brand visuals and digital experiences that stand out.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.6 }}
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start"
          >
            <Link
              href="/projects"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 font-mono text-sm font-bold text-[#031018] transition hover:bg-cyan-300 sm:w-auto"
            >
              view_my_work
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
            <Link
              href="/learn"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl border border-emerald-400/40 bg-emerald-400/10 px-6 py-3 font-mono text-sm font-semibold text-emerald-300 transition hover:border-emerald-300 hover:bg-emerald-400/15 sm:w-auto"
            >
              <GraduationCap className="h-4 w-4" />
              learn_with_me
            </Link>
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-purple-400/30 px-6 py-3 font-mono text-sm font-semibold text-purple-200 transition hover:border-purple-300 hover:bg-purple-400/10 sm:w-auto"
            >
              <MessageCircle className="h-4 w-4" />
              contact
            </Link>
          </motion.div>

          {/* Terminal stats */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-9 grid grid-cols-3 divide-x divide-white/[0.07] overflow-hidden rounded-xl border border-white/[0.08] bg-[#070c17]/70"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="px-4 py-4 text-center lg:text-left">
                <p className="font-mono text-xl font-bold text-white sm:text-2xl">
                  {stat.value}
                </p>
                <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.16em] text-slate-500 sm:text-[10px]">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="mx-auto mt-14 flex max-w-7xl items-center justify-center gap-3 font-mono text-[10px] uppercase tracking-[0.25em] text-slate-600"
      >
        <span className="h-px w-10 bg-gradient-to-r from-transparent to-cyan-400/40" />
        scroll to compile
        <motion.span
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="text-cyan-400"
        >
          ↓
        </motion.span>
        <span className="h-px w-10 bg-gradient-to-l from-transparent to-cyan-400/40" />
      </motion.div>
    </section>
  );
}
