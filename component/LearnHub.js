"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Atom,
  Check,
  CheckCircle2,
  Code2,
  Cpu,
  Database,
  Globe,
  Layers,
  Loader2,
  Mail,
  MessageCircle,
  PenTool,
  Rocket,
  Search,
  Send,
  Server,
  Smartphone,
  Terminal,
  AlertTriangle,
} from "lucide-react";
import Link from "next/link";
import {
  learningCategories,
  learningTopics,
} from "@/lib/learning";
import {
  getWhatsAppLink,
  isWhatsAppConfigured,
} from "@/lib/site";

const iconMap = {
  Atom,
  Code2,
  Cpu,
  Database,
  Globe,
  Layers,
  Mail,
  PenTool,
  Rocket,
  Search,
  Server,
  Smartphone,
};

const experienceLevels = ["Complete beginner", "Some experience", "Intermediate", "Advanced"];

export default function LearnHub() {
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "Complete beginner",
    goal: "",
  });
  const [status, setStatus] = useState({
    type: "idle",
    message: "",
    whatsappLink: "",
  });
  const [sending, setSending] = useState(false);

  const whatsappReady = isWhatsAppConfigured();

  const selectedTopics = learningTopics.filter((topic) =>
    selected.includes(topic.id)
  );

  const filteredTopics =
    category === "All"
      ? learningTopics
      : learningTopics.filter((topic) => topic.category === category);

  const toggleTopic = (id) => {
    setSelected((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
    if (status.type !== "idle") {
      setStatus({ type: "idle", message: "", whatsappLink: "" });
    }
  };

  const handleChange = (event) => {
    setForm((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  };

  const buildMessage = () => {
    const tracks = selectedTopics
      .map(
        (topic) =>
          `• ${topic.title} (${topic.level} · ${topic.duration})`
      )
      .join("\n");

    return [
      "Hello The Genesis! I'd like to learn with you.",
      "",
      "TRACKS:",
      tracks,
      "",
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `WhatsApp: ${form.phone || "not provided"}`,
      `Experience: ${form.experience}`,
      `Goal: ${form.goal || "not provided"}`,
      "",
      "Sent from The Genesis portfolio → /learn",
    ].join("\n");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!selectedTopics.length) {
      setStatus({
        type: "error",
        message: "pick at least one track before sending.",
        whatsappLink: "",
      });
      return;
    }

    const message = buildMessage();
    const whatsappLink = getWhatsAppLink(message);

    // Open WhatsApp synchronously inside the click so browsers allow it.
    let whatsappWindow = null;
    if (whatsappReady) {
      whatsappWindow = window.open(whatsappLink, "_blank");
      if (whatsappWindow) {
        whatsappWindow.opener = null;
      }
    }

    setSending(true);
    setStatus({
      type: "loading",
      message: "sending your request to The Genesis...",
      whatsappLink,
    });

    try {
      const response = await fetch("/api/learn", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          topics: selectedTopics.map((topic) => ({
            title: topic.title,
            category: topic.category,
            level: topic.level,
            duration: topic.duration,
          })),
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.error || "request could not be sent.");
      }

      let messageText = "email sent successfully.";

      if (whatsappReady && whatsappWindow) {
        messageText += " WhatsApp is open — press send to deliver it.";
      } else if (whatsappReady) {
        messageText += " WhatsApp popup was blocked — use the button below.";
      } else {
        messageText +=
          " Add your WhatsApp number in lib/site.js to enable WhatsApp handoff.";
      }

      setStatus({
        type: "success",
        message: messageText,
        whatsappLink: whatsappReady ? whatsappLink : "",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message: `email failed: ${error.message}`,
        whatsappLink: whatsappReady ? whatsappLink : "",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="tracks"
      className="relative w-full border-b border-cyan-400/10 px-5 py-16 sm:px-8 md:px-12 lg:px-20"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.05),transparent_40%)]" />

      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.55fr_1fr] xl:gap-14">
        {/* ── Left: tracks ─────────────────────────────────────────────── */}
        <div>
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.24em] text-cyan-400/80">
                {"// 01 — choose your track"}
              </p>
              <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                What do you want to build?
              </h2>
              <p className="mt-2 font-mono text-xs text-slate-500">
                Select one or more tracks. No payment needed to start the
                conversation.
              </p>
            </div>

            <div className="rounded-lg border border-white/[0.08] bg-[#070c17]/70 px-3 py-2 font-mono text-[10px] text-slate-500">
              <span className="text-emerald-400">✓</span> {selected.length}{" "}
              selected
            </div>
          </div>

          {/* Category filters */}
          <div className="mb-6 flex flex-wrap gap-2">
            {learningCategories.map((item) => {
              const active = category === item;
              return (
                <motion.button
                  key={item}
                  type="button"
                  onClick={() => setCategory(item)}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  className={`rounded-lg border px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] transition ${
                    active
                      ? "border-cyan-400/50 bg-cyan-400/10 text-cyan-200"
                      : "border-white/10 bg-white/[0.02] text-slate-500 hover:border-cyan-400/25 hover:text-slate-300"
                  }`}
                >
                  {active && <span className="mr-1.5 text-emerald-400">●</span>}
                  {item}
                </motion.button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {filteredTopics.map((topic, index) => {
              const Icon = iconMap[topic.icon] || Code2;
              const isSelected = selected.includes(topic.id);

              return (
                <motion.button
                  key={topic.id}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => toggleTopic(topic.id)}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: Math.min(index * 0.04, 0.3) }}
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.985 }}
                  className={`group relative overflow-hidden rounded-xl border p-4 text-left transition duration-300 ${
                    isSelected
                      ? "border-emerald-400/45 bg-emerald-400/[0.06] shadow-[0_0_35px_rgba(74,222,128,0.07)]"
                      : "border-white/[0.08] bg-[#070c17]/70 hover:border-cyan-400/25 hover:bg-[#080f1d]"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <span
                      className={`inline-flex rounded-lg border p-2.5 ${
                        isSelected
                          ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-300"
                          : "border-cyan-400/15 bg-cyan-400/[0.04] text-cyan-300"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </span>

                    <span
                      className={`flex h-5 w-5 items-center justify-center rounded border transition ${
                        isSelected
                          ? "border-emerald-400 bg-emerald-400 text-[#03130b]"
                          : "border-slate-600 bg-transparent text-transparent group-hover:border-cyan-400/50"
                      }`}
                    >
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                  </div>

                  <h3 className="mt-3 text-sm font-bold leading-snug text-white sm:text-[15px]">
                    {topic.title}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-slate-400">
                    {topic.blurb}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-1.5 font-mono text-[9px]">
                    <span className="rounded border border-violet-400/20 bg-violet-400/[0.06] px-1.5 py-0.5 text-violet-300">
                      {topic.level}
                    </span>
                    <span className="rounded border border-white/10 bg-white/[0.03] px-1.5 py-0.5 text-slate-400">
                      {topic.duration}
                    </span>
                    <span className="rounded border border-cyan-400/15 bg-cyan-400/[0.04] px-1.5 py-0.5 text-cyan-300/80">
                      {topic.category}
                    </span>
                  </div>

                  <p className="mt-3 border-t border-white/[0.06] pt-2.5 font-mono text-[9px] leading-relaxed text-slate-600">
                    <span className="text-emerald-400/70">→</span>{" "}
                    {topic.outcome}
                  </p>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* ── Right: request form ─────────────────────────────────────── */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="code-panel overflow-hidden rounded-2xl"
          >
            <div className="code-chrome flex items-center justify-between px-4 py-2.5">
              <div className="flex items-center gap-2">
                <span className="terminal-dot bg-red-400/80" />
                <span className="terminal-dot bg-yellow-400/80" />
                <span className="terminal-dot bg-emerald-400/80" />
              </div>
              <span className="font-mono text-[10px] text-slate-500">
                ~/the-genesis/learning-request
              </span>
              <span className="font-mono text-[10px] text-emerald-400">new</span>
            </div>

            <div className="p-5 sm:p-6">
              <div className="mb-4 flex items-center gap-2 font-mono text-[11px] text-slate-500">
                <Terminal className="h-3.5 w-3.5 text-cyan-400" />
                <span>
                  <span className="text-emerald-400">$</span> ./start-learning
                </span>
                <span className="animate-blink text-cyan-400">▌</span>
              </div>

              <div className="mb-5 rounded-xl border border-white/[0.07] bg-[#020617]/70 p-3">
                <p className="mb-2 font-mono text-[9px] uppercase tracking-[0.18em] text-slate-600">
                  selected_tracks
                </p>
                {selectedTopics.length ? (
                  <div className="flex flex-wrap gap-1.5">
                    {selectedTopics.map((topic) => (
                      <button
                        key={topic.id}
                        type="button"
                        onClick={() => toggleTopic(topic.id)}
                        className="group inline-flex items-center gap-1.5 rounded border border-emerald-400/20 bg-emerald-400/[0.07] px-2 py-1 font-mono text-[9px] text-emerald-200 transition hover:border-red-400/40 hover:text-red-300"
                        aria-label={`Remove ${topic.title}`}
                      >
                        {topic.title}
                        <span className="text-emerald-500 transition group-hover:text-red-400">
                          ×
                        </span>
                      </button>
                    ))}
                  </div>
                ) : (
                  <p className="font-mono text-[10px] text-slate-600">
                    {"/* nothing selected yet */"}
                  </p>
                )}
              </div>

              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div>
                  <label
                    htmlFor="learn-name"
                    className="mb-1 block font-mono text-[9px] uppercase tracking-[0.16em] text-cyan-400/80"
                  >
                    {"// name"}
                  </label>
                  <input
                    id="learn-name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full rounded-lg border border-white/10 bg-[#020617]/80 px-3 py-2.5 font-mono text-xs text-slate-200 outline-none transition placeholder:text-slate-600 focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="learn-email"
                    className="mb-1 block font-mono text-[9px] uppercase tracking-[0.16em] text-cyan-400/80"
                  >
                    {"// email"}
                  </label>
                  <input
                    id="learn-email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full rounded-lg border border-white/10 bg-[#020617]/80 px-3 py-2.5 font-mono text-xs text-slate-200 outline-none transition placeholder:text-slate-600 focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="learn-phone"
                    className="mb-1 block font-mono text-[9px] uppercase tracking-[0.16em] text-cyan-400/80"
                  >
                    {"// whatsapp_number (optional)"}
                  </label>
                  <input
                    id="learn-phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+234..."
                    className="w-full rounded-lg border border-white/10 bg-[#020617]/80 px-3 py-2.5 font-mono text-xs text-slate-200 outline-none transition placeholder:text-slate-600 focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="learn-experience"
                    className="mb-1 block font-mono text-[9px] uppercase tracking-[0.16em] text-cyan-400/80"
                  >
                    {"// experience_level"}
                  </label>
                  <select
                    id="learn-experience"
                    name="experience"
                    value={form.experience}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-white/10 bg-[#020617] px-3 py-2.5 font-mono text-xs text-slate-200 outline-none transition focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/10"
                  >
                    {experienceLevels.map((level) => (
                      <option key={level} value={level}>
                        {level}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="learn-goal"
                    className="mb-1 block font-mono text-[9px] uppercase tracking-[0.16em] text-cyan-400/80"
                  >
                    {"// your_goal (optional)"}
                  </label>
                  <textarea
                    id="learn-goal"
                    name="goal"
                    rows="3"
                    value={form.goal}
                    onChange={handleChange}
                    placeholder="What do you want to build or achieve?"
                    className="w-full resize-none rounded-lg border border-white/10 bg-[#020617]/80 px-3 py-2.5 font-mono text-xs text-slate-200 outline-none transition placeholder:text-slate-600 focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/10"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={sending || !selectedTopics.length}
                  whileHover={sending ? {} : { scale: 1.015 }}
                  whileTap={sending ? {} : { scale: 0.985 }}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-400 px-4 py-3 font-mono text-xs font-bold text-[#03130b] transition hover:bg-emerald-300 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {sending ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      sending_request...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      send_to_whatsapp_+_email
                    </>
                  )}
                </motion.button>
              </form>

              {status.message && (
                <div
                  className={`mt-4 rounded-lg border px-3 py-2.5 font-mono text-[10px] leading-relaxed ${
                    status.type === "success"
                      ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-300"
                      : status.type === "error"
                        ? "border-red-400/30 bg-red-400/10 text-red-300"
                        : "border-cyan-400/20 bg-cyan-400/5 text-cyan-300"
                  }`}
                >
                  <p>
                    <span className="mr-1 opacity-60">$</span>
                    {status.message}
                  </p>

                  {status.type === "success" && status.whatsappLink && (
                    <a
                      href={status.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-1.5 font-semibold text-emerald-200 underline decoration-emerald-400/30 underline-offset-4 transition hover:text-white"
                    >
                      <MessageCircle className="h-3.5 w-3.5" />
                      open_whatsapp ↗
                    </a>
                  )}
                </div>
              )}

              {!whatsappReady && (
                <p className="mt-3 flex items-start gap-2 rounded-lg border border-yellow-400/20 bg-yellow-400/[0.05] px-3 py-2 font-mono text-[9px] leading-relaxed text-yellow-200/80">
                  <AlertTriangle className="mt-0.5 h-3 w-3 shrink-0" />
                  WhatsApp handoff is not configured yet. Add your number to
                  lib/site.js.
                </p>
              )}

              <div className="mt-4 space-y-1.5 border-t border-white/[0.06] pt-3 font-mono text-[9px] text-slate-600">
                <p className="flex items-center gap-1.5">
                  <Mail className="h-3 w-3 text-cyan-400/70" />
                  Email notification is delivered instantly.
                </p>
                <p className="flex items-center gap-1.5">
                  <MessageCircle className="h-3 w-3 text-emerald-400/70" />
                  WhatsApp opens with your full request ready to send.
                </p>
              </div>

              <div className="mt-4 flex items-center justify-between gap-2 border-t border-white/[0.06] pt-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 font-mono text-[10px] text-slate-400 transition hover:text-cyan-300"
                >
                  <MessageCircle className="h-3 w-3" />
                  custom request
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-1.5 font-mono text-[10px] text-slate-400 transition hover:text-cyan-300"
                >
                  see my work ↗
                </Link>
              </div>
            </div>
          </motion.div>

          <div className="mt-4 flex items-center justify-center gap-2 font-mono text-[9px] uppercase tracking-[0.18em] text-slate-600">
            <CheckCircle2 className="h-3 w-3 text-emerald-400/70" />
            one click · two channels
          </div>
        </div>
      </div>
    </section>
  );
}
