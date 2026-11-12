"use client";

import React from "react";
import { motion } from "framer-motion";
import { User, Code2, Cpu } from "lucide-react";
import Link from "next/link";

const stack = [
  "WordPress",
  "React Native",
  "Next.js & React",
  "HTML, CSS, JavaScript",
  "Tailwind CSS",
  "Python",
  "FastAPI Backend",
  "MongoDB",
  "Astra DB",
];

export default function Slap() {
  return (
    <div className="relative w-full overflow-hidden border-b border-cyan-400/10 px-6 py-20 text-white md:px-20">
      {/* Floating icons — original animations kept */}
      <motion.div
        className="absolute left-6 top-10 text-yellow-400/80 sm:left-10"
        animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <Cpu size={38} />
      </motion.div>

      <motion.div
        className="absolute bottom-16 right-6 text-blue-400/80 sm:right-10"
        animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <Code2 size={38} />
      </motion.div>

      <div className="relative mx-auto max-w-7xl">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-14 text-center"
        >
          <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.26em] text-cyan-400/80">
            {"// 02 — about.tsx"}
          </p>
          <h1 className="text-5xl font-extrabold tracking-tight md:text-6xl">
            About <span className="gradient-text">Me</span>
          </h1>
          <p className="mx-auto mt-5 max-w-3xl font-mono text-sm leading-relaxed text-slate-400 md:text-base">
            <span className="text-slate-600">{"/*"}</span> A multi-skilled tech
            enthusiast with a solid foundation in science, engineering, and
            modern digital technologies.{" "}
            <span className="text-slate-600">{"*/"}</span>
          </p>
        </motion.div>

        <div className="grid items-start gap-10 md:grid-cols-2">
          {/* Terminal profile card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="md:sticky md:top-32"
          >
            <div className="code-panel overflow-hidden rounded-2xl">
              <div className="code-chrome flex items-center justify-between px-4 py-2.5">
                <div className="flex items-center gap-2">
                  <span className="terminal-dot bg-red-400/80" />
                  <span className="terminal-dot bg-yellow-400/80" />
                  <span className="terminal-dot bg-emerald-400/80" />
                </div>
                <span className="font-mono text-[10px] text-slate-500">
                  ~/the-genesis/identity.ts
                </span>
                <span className="font-mono text-[10px] text-emerald-400">
                  typed
                </span>
              </div>

              <div className="relative flex flex-col items-center px-6 py-10">
                <motion.div
                  className="relative flex h-44 w-44 items-center justify-center rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 via-transparent to-violet-500/10"
                  animate={{ rotate: [0, 2, -2, 0] }}
                  transition={{ duration: 6, repeat: Infinity }}
                >
                  <User size={96} className="text-cyan-300/90 drop-shadow-xl" />
                  <span className="absolute -bottom-2 -right-2 rounded-md border border-emerald-400/30 bg-[#03130b] px-2 py-1 font-mono text-[9px] text-emerald-300">
                    verified
                  </span>
                </motion.div>

                <div className="mt-8 w-full rounded-xl border border-white/[0.06] bg-[#020617]/70 p-4 font-mono text-xs leading-6">
                  <p>
                    <span className="text-violet-300">const</span>{" "}
                    <span className="text-cyan-300">genesis</span>{" "}
                    <span className="text-slate-500">=</span> {"{"}
                  </p>
                  <p className="pl-4">
                    <span className="text-emerald-300">degree</span>
                    <span className="text-slate-500">:</span>{" "}
                    <span className="text-yellow-200">
                      &quot;Physics with Electronics&quot;
                    </span>
                    ,
                  </p>
                  <p className="pl-4">
                    <span className="text-emerald-300">school</span>
                    <span className="text-slate-500">:</span>{" "}
                    <span className="text-yellow-200">&quot;BOUESTI&quot;</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-emerald-300">focus</span>
                    <span className="text-slate-500">:</span>{" "}
                    <span className="text-yellow-200">
                      &quot;build + teach&quot;
                    </span>
                    ,
                  </p>
                  <p>{"};"}</p>
                </div>

                <Link
                  href="/learn"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-emerald-400/30 bg-emerald-400/10 px-4 py-2.5 font-mono text-xs font-semibold text-emerald-300 transition hover:border-emerald-300 hover:bg-emerald-400/15"
                >
                  <span className="text-emerald-400">$</span> learn_from_me
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="space-y-5 font-mono text-sm leading-7 text-slate-300 md:text-[15px]"
          >
            <p>
              I am a graduate of{" "}
              <span className="font-bold text-yellow-300">
                Physics with Electronics
              </span>{" "}
              from{" "}
              <span className="font-bold text-cyan-300">
                BOUESTI (Bamidele Olumilua University of Education, Science and
                Technology, Ikere-Ekiti)
              </span>
              .
            </p>

            <p>
              A passionate{" "}
              <span className="font-semibold text-cyan-300">
                Computer Engineer
              </span>{" "}
              with strong problem-solving skills and hands-on experience in
              hardware and software systems.
            </p>

            <p>
              I am also a{" "}
              <span className="font-semibold text-emerald-300">
                Graphic Designer
              </span>
              ,{" "}
              <span className="font-semibold text-pink-300">
                Email Marketer
              </span>
              ,{" "}
              <span className="font-semibold text-emerald-300">
                GMB (Google My Business)
              </span>{" "}
              and{" "}
              <span className="font-semibold text-violet-300">
                SEO Specialist
              </span>{" "}
              with a focus on growth-driven digital strategies.
            </p>

            <p>
              As a{" "}
              <span className="font-semibold text-cyan-300">Web Developer</span>
              , I work with technologies such as:
            </p>

            <div className="rounded-xl border border-white/[0.07] bg-[#020617]/70 p-4">
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
                {"// stack.config.js"}
              </p>
              <div className="flex flex-wrap gap-2">
                {stack.map((item, index) => (
                  <span
                    key={item}
                    className="rounded-md border border-cyan-400/15 bg-cyan-400/[0.05] px-2.5 py-1 font-mono text-[11px] text-cyan-200"
                  >
                    <span className="mr-1 text-slate-600">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <p>
              My goal is simple:{" "}
              <span className="font-bold text-yellow-300">
                to build powerful, modern, and scalable digital experiences
              </span>{" "}
              that solve real-world problems.
            </p>

            <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/[0.04] p-4 font-mono text-xs text-emerald-200/90">
              <span className="text-emerald-400">$</span> git log --oneline
              <br />
              <span className="text-slate-500">a1b2c3d</span> learn continuously
              <br />
              <span className="text-slate-500">d4e5f6a</span> build with purpose
              <br />
              <span className="text-slate-500">g7h8i9j</span> share what you know
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom animation strip — original animation kept */}
      <motion.div
        className="pointer-events-none absolute bottom-0 left-0 h-20 w-full bg-gradient-to-t from-cyan-400/10 to-transparent"
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
    </div>
  );
}
