"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MessageCircle,
  Send,
  Terminal,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import {
  siteConfig,
  getWhatsAppLink,
  isWhatsAppConfigured,
} from "@/lib/site";

export default function Scap() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({ type: "idle", message: "" });
  const whatsappReady = isWhatsAppConfigured();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setStatus({ type: "loading", message: "transmitting..." });

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const text = await res.text();

      let data;

      try {
        data = JSON.parse(text);
      } catch {
        throw new Error(text.slice(0, 100));
      }

      if (res.ok) {
        setStatus({
          type: "success",
          message: "message delivered — I'll get back to you shortly.",
        });
        setForm({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setStatus({ type: "error", message: data.error || "send failed." });
      }
    } catch (err) {
      console.error("FETCH ERROR:", err);
      setStatus({
        type: "error",
        message: `network error: ${err.message || "unknown error"}`,
      });
    }
  };

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-4 py-16 text-white sm:px-6">
      {/* Floating particles — original animations kept */}
      <motion.div
        className="absolute h-2 w-2 rounded-full bg-purple-500"
        animate={{ y: [0, -40, 0], opacity: [0.4, 1, 0.4] }}
        transition={{ repeat: Infinity, duration: 4 }}
        style={{ top: "20%", left: "10%" }}
      />
      <motion.div
        className="absolute h-3 w-3 rounded-full bg-pink-500"
        animate={{ y: [0, -50, 0], opacity: [0.4, 1, 0.4] }}
        transition={{ repeat: Infinity, duration: 5 }}
        style={{ top: "70%", left: "80%" }}
      />
      <motion.div
        className="absolute h-2 w-2 rounded-full bg-cyan-500"
        animate={{ y: [0, -30, 0], opacity: [0.4, 1, 0.4] }}
        transition={{ repeat: Infinity, duration: 3 }}
        style={{ top: "40%", left: "60%" }}
      />

      <div className="relative z-10 grid w-full max-w-6xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        {/* Contact info terminal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#070c17]/75 p-6 backdrop-blur sm:p-8"
        >
          <div>
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.24em] text-cyan-400/80">
              {"// 06 — contact.sh"}
            </p>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Let&apos;s build
              <br />
              <span className="gradient-text">something great.</span>
            </h1>
            <p className="mt-4 font-mono text-xs leading-relaxed text-slate-400">
              Have a project, a question, or want to learn coding with me? Send
              a message — it lands straight in my inbox.
            </p>

            <div className="mt-7 space-y-3 font-mono text-xs">
              <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-3">
                <p className="text-[9px] uppercase tracking-[0.18em] text-slate-600">
                  email_channel
                </p>
                <p className="mt-1 flex items-center gap-2 text-slate-300">
                  <span className="text-emerald-400">$</span> form → inbox
                  <span className="ml-auto text-[9px] text-emerald-400">
                    instant
                  </span>
                </p>
              </div>

              <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-3">
                <p className="text-[9px] uppercase tracking-[0.18em] text-slate-600">
                  whatsapp_channel
                </p>
                <p className="mt-1 flex items-center gap-2 text-slate-300">
                  <span className="text-emerald-400">$</span> direct chat
                  <span className="ml-auto text-[9px] text-cyan-400">
                    {whatsappReady ? "available" : "setup needed"}
                  </span>
                </p>
              </div>

              <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-3">
                <p className="text-[9px] uppercase tracking-[0.18em] text-slate-600">
                  location
                </p>
                <p className="mt-1 flex items-center gap-2 text-slate-300">
                  <span className="text-emerald-400">$</span> {siteConfig.location}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 space-y-3">
            {whatsappReady && (
              <a
                href={getWhatsAppLink(
                  "Hello The Genesis, I'd like to discuss a project."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-4 py-3 font-mono text-xs font-semibold text-emerald-300 transition hover:border-emerald-300 hover:bg-emerald-400/15"
              >
                <MessageCircle className="h-4 w-4" />
                chat_on_whatsapp
              </a>
            )}
            <Link
              href="/learn"
              className="flex items-center justify-between rounded-xl border border-cyan-400/20 bg-cyan-400/[0.05] px-4 py-3 font-mono text-xs text-cyan-200 transition hover:border-cyan-300/50"
            >
              <span className="flex items-center gap-2">
                <Sparkles className="h-4 w-4" />
                want to learn coding?
              </span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>

        {/* Contact form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="code-panel relative overflow-hidden rounded-2xl"
        >
          <div className="code-chrome flex items-center justify-between px-4 py-2.5">
            <div className="flex items-center gap-2">
              <span className="terminal-dot bg-red-400/80" />
              <span className="terminal-dot bg-yellow-400/80" />
              <span className="terminal-dot bg-emerald-400/80" />
            </div>
            <span className="flex items-center gap-1.5 font-mono text-[10px] text-slate-500">
              <Terminal className="h-3 w-3" />
              ~/the-genesis/new-message
            </span>
            <span className="font-mono text-[10px] text-emerald-400">draft</span>
          </div>

          <div className="p-6 sm:p-8">
            <div className="mb-6 flex items-center gap-2 font-mono text-[11px] text-slate-500">
              <span className="text-emerald-400">$</span> compose message
              <span className="animate-blink text-cyan-400">▌</span>
            </div>

            <div className="space-y-4">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.16em] text-cyan-400/80"
                >
                  {"// your_name"}
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder="Ada Lovelace"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-white/10 bg-[#020617]/80 p-3 font-mono text-sm text-slate-200 outline-none transition placeholder:text-slate-600 focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/10"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.16em] text-cyan-400/80"
                >
                  {"// your_email"}
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-white/10 bg-[#020617]/80 p-3 font-mono text-sm text-slate-200 outline-none transition placeholder:text-slate-600 focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/10"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.16em] text-cyan-400/80"
                >
                  {"// your_message"}
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Tell me what you want to build, fix, or learn..."
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full resize-none rounded-xl border border-white/10 bg-[#020617]/80 p-3 font-mono text-sm text-slate-200 outline-none transition placeholder:text-slate-600 focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/10"
                />
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={status.type === "loading"}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 p-3.5 font-mono text-sm font-bold text-[#031018] transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Send className="h-4 w-4" />
              {status.type === "loading" ? "sending..." : "send_message"}
            </motion.button>

            {status.message && (
              <p
                className={`mt-4 rounded-lg border px-3 py-2.5 text-center font-mono text-xs ${
                  status.type === "success"
                    ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-300"
                    : status.type === "error"
                      ? "border-red-400/30 bg-red-400/10 text-red-300"
                      : "border-cyan-400/20 bg-cyan-400/5 text-cyan-300"
                }`}
              >
                <span className="mr-1 opacity-60">$</span>
                {status.message}
              </p>
            )}
          </div>
        </motion.form>
      </div>
    </div>
  );
}
