import Navbar from "@/component/Navbar";
import Bottom from "@/component/Bottom";
import LearnHub from "@/component/LearnHub";
import { learningTopics } from "@/lib/learning";
import { ArrowDown, GraduationCap, Mail, MessageCircle, Terminal } from "lucide-react";

export const metadata = {
  title: "Learn With Me",
  description:
    "Pick what you want to learn — frontend, backend, design, SEO or digital growth — and send your request straight to The Genesis on WhatsApp and email.",
};

const highlights = [
  { icon: GraduationCap, label: "1-on-1 mentorship" },
  { icon: Mail, label: "email notification" },
  { icon: MessageCircle, label: "WhatsApp handoff" },
];

export default function LearnPage() {
  return (
    <div>
      <Navbar />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-cyan-400/10 px-5 pb-16 pt-16 sm:px-8 md:px-12 lg:px-20 lg:pb-20 lg:pt-20">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(74,222,128,0.10),transparent_35%),radial-gradient(circle_at_85%_30%,rgba(34,211,238,0.10),transparent_35%)]" />
          <div className="animate-glow pointer-events-none absolute -left-20 top-1/3 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
          <div className="animate-glow pointer-events-none absolute -right-20 top-10 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="animate-rise">
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-emerald-300">
                <Terminal className="h-3 w-3" />
                learn.with.genesis
              </p>

              <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Pick a skill.
                <br />
                <span className="gradient-text">I&apos;ll teach you</span> how to
                build it.
              </h1>

              <p className="mt-6 max-w-2xl font-mono text-sm leading-relaxed text-slate-400 md:text-base">
                This is not a generic course library. Choose exactly what you
                want to learn, tell me where you are, and we build a path around
                you. Your request goes straight to my WhatsApp and arrives in my
                email instantly.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {highlights.map((item) => {
                  const Icon = item.icon;
                  return (
                    <span
                      key={item.label}
                      className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 font-mono text-[10px] text-slate-300"
                    >
                      <Icon className="h-3.5 w-3.5 text-cyan-400" />
                      {item.label}
                    </span>
                  );
                })}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#tracks"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-3.5 font-mono text-sm font-bold text-[#031018] transition hover:bg-cyan-300"
                >
                  browse_{learningTopics.length}_tracks
                  <ArrowDown className="h-4 w-4 transition group-hover:translate-y-1" />
                </a>
              </div>
            </div>

            {/* Boot terminal */}
            <div className="animate-rise" style={{ animationDelay: "0.15s" }}>
              <div className="code-panel overflow-hidden rounded-2xl">
                <div className="code-chrome flex items-center justify-between px-4 py-2.5">
                  <div className="flex items-center gap-2">
                    <span className="terminal-dot bg-red-400/80" />
                    <span className="terminal-dot bg-yellow-400/80" />
                    <span className="terminal-dot bg-emerald-400/80" />
                  </div>
                  <span className="font-mono text-[10px] text-slate-500">
                    ~/the-genesis/learn.sh
                  </span>
                  <span className="font-mono text-[10px] text-emerald-400">
                    ready
                  </span>
                </div>
                <div className="p-5 font-mono text-[11px] leading-7 text-slate-300 sm:text-xs">
                  <p>
                    <span className="text-emerald-400">$</span> who_do_i_want_to_learn_from
                  </p>
                  <p className="text-cyan-300">→ The Genesis</p>
                  <p className="mt-3">
                    <span className="text-emerald-400">$</span> what_can_i_choose
                  </p>
                  <p className="text-slate-400">
                    frontend · backend · design · SEO · growth · engineering
                  </p>
                  <p className="mt-3">
                    <span className="text-emerald-400">$</span> how_do_i_start
                  </p>
                  <p className="text-slate-400">
                    1. select tracks
                    <br />
                    2. add your details
                    <br />
                    3. send to WhatsApp + email
                  </p>
                  <p className="mt-3 text-emerald-300">
                    ✓ no payment required to start the conversation
                  </p>
                  <p className="mt-2">
                    <span className="text-emerald-400">$</span>{" "}
                    <span className="animate-blink text-cyan-400">▌</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <LearnHub />
      </main>

      <Bottom />
    </div>
  );
}
