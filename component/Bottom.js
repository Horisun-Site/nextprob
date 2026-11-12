"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Instagram,
  Github,
  Linkedin,
  Terminal,
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";
import BrandLogo from "./BrandLogo";
import {
  siteConfig,
  getWhatsAppLink,
  isWhatsAppConfigured,
} from "@/lib/site";

const socials = [
  { label: "Github", icon: Github, href: siteConfig.socials.github },
  { label: "LinkedIn", icon: Linkedin, href: siteConfig.socials.linkedin },
  { label: "Instagram", icon: Instagram, href: siteConfig.socials.instagram },
  { label: "Twitter", icon: Twitter, href: siteConfig.socials.twitter },
  { label: "Facebook", icon: Facebook, href: siteConfig.socials.facebook },
];

const footerLinks = [
  { label: "Skills", href: "/skill" },
  { label: "Projects", href: "/projects" },
  { label: "Learn", href: "/learn" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Bottom() {
  const whatsappReady = isWhatsAppConfigured();

  return (
    <footer className="relative w-full overflow-hidden border-t border-cyan-400/10 bg-[#03050a]/80 py-14 text-white">
      {/* Animated gradient glow — original animation kept */}
      <motion.div
        className="absolute -left-40 -top-20 h-72 w-72 rounded-full bg-purple-600 opacity-20 blur-3xl sm:h-96 sm:w-96"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 15, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-24 right-0 h-64 w-64 rounded-full bg-cyan-500 opacity-10 blur-3xl"
        animate={{ scale: [1, 1.3, 1], x: [0, -20, 0] }}
        transition={{ duration: 9, repeat: Infinity }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="code-panel mb-12 flex flex-col items-start justify-between gap-6 overflow-hidden rounded-2xl p-6 sm:p-8 lg:flex-row lg:items-center"
        >
          <div>
            <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.24em] text-emerald-400">
              {"// currently accepting work"}
            </p>
            <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
              Have an idea? Let&apos;s{" "}
              <span className="gradient-text">build it.</span>
            </h2>
            <p className="mt-2 max-w-xl font-mono text-xs leading-relaxed text-slate-400 sm:text-sm">
              Websites, brands, automation or mentorship — start a conversation
              and let&apos;s turn it into something real.
            </p>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a
              href={
                whatsappReady
                  ? getWhatsAppLink(
                      "Hello The Genesis, I'd like to discuss a project."
                    )
                  : "/contact"
              }
              target={whatsappReady ? "_blank" : undefined}
              rel={whatsappReady ? "noopener noreferrer" : undefined}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-400 px-5 py-3 font-mono text-xs font-bold text-[#03130b] transition hover:bg-emerald-300"
            >
              <MessageCircle className="h-4 w-4" />
              whatsapp_me
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-cyan-400/25 bg-cyan-400/[0.05] px-5 py-3 font-mono text-xs font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/10"
            >
              send_a_message
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>

        <div className="grid gap-10 md:grid-cols-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="md:col-span-5"
          >
            <div className="flex items-center gap-3">
              <span className="font-mono text-lg font-extrabold tracking-tight">
                <span className="text-cyan-400/80">~/</span>
                <span className="gradient-text">{siteConfig.name}</span>
              </span>
              <BrandLogo />
            </div>
            <p className="mt-4 max-w-sm font-mono text-xs leading-relaxed text-slate-500">
              <span className="text-slate-600">{"/*"}</span> Full-stack developer,
              designer and mentor building software that looks as good as it
              performs. <span className="text-slate-600">{"*/"}</span>
            </p>
            <p className="mt-4 flex items-center gap-2 font-mono text-[10px] text-slate-500">
              <Terminal className="h-3.5 w-3.5 text-cyan-400" />
              {siteConfig.location}
            </p>
          </motion.div>

          {/* Nav */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="md:col-span-3"
          >
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500">
              {"// navigation"}
            </p>
            <ul className="space-y-2.5 font-mono text-sm">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-slate-400 transition hover:text-cyan-300"
                  >
                    <span className="text-slate-700 transition group-hover:text-cyan-500">
                      →
                    </span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="md:col-span-4"
          >
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500">
              {"// connect"}
            </p>
            <div className="flex flex-wrap items-center gap-3">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    aria-label={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -4, scale: 1.08 }}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-slate-400 transition hover:border-cyan-400/40 hover:text-cyan-300"
                  >
                    <Icon className="h-4 w-4" />
                  </motion.a>
                );
              })}
            </div>
            <p className="mt-6 font-mono text-[10px] leading-relaxed text-slate-600">
              $ echo &quot;designed &amp; developed by The Genesis&quot;
              <span className="animate-blink ml-1 text-cyan-500">▌</span>
            </p>
          </motion.div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/[0.06] pt-6 font-mono text-[10px] text-slate-600 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.name} — portfolio
          </p>
          <p className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            built with Next.js, caffeine &amp; clean code
          </p>
        </div>
      </div>
    </footer>
  );
}
