"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle, Terminal } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BrandLogo from "./BrandLogo";
import {
  siteConfig,
  getWhatsAppLink,
  isWhatsAppConfigured,
} from "@/lib/site";

const routes = [
  { name: "Home", path: "/" },
  { name: "Skills", path: "/skill" },
  { name: "Projects", path: "/projects" },
  { name: "Learn", path: "/learn" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const whatsappReady = isWhatsAppConfigured();

  const talkHref = whatsappReady
    ? getWhatsAppLink("Hello The Genesis, I'd like to talk about a project.")
    : "/contact";

  return (
    <nav className="sticky top-0 left-0 z-50 w-full border-b border-cyan-400/10 bg-[#05070d]/80 backdrop-blur-2xl">
      {/* IDE status strip */}
      <div className="hidden border-b border-cyan-400/5 bg-[#03050a]/80 px-6 py-1 font-mono text-[10px] tracking-wider text-slate-500 md:flex md:items-center md:justify-between">
        <span className="flex items-center gap-2">
          <Terminal className="h-3 w-3 text-cyan-400" />
          <span className="text-slate-400">~/the-genesis</span>
          <span className="text-slate-700">|</span>
          <span className="text-emerald-400">main*</span>
        </span>
        <span className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            {siteConfig.availability}
          </span>
          <span className="text-slate-700">UTF-8</span>
          <span className="text-slate-700">Ln 1, Col 1</span>
        </span>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Brand — logo sits immediately after the name */}
          <motion.div
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/"
              className="group flex items-center gap-3"
              aria-label={`${siteConfig.name} home`}
            >
              <h1 className="font-mono text-lg font-extrabold tracking-tight text-white sm:text-xl">
                <span className="text-cyan-400/80">~/</span>
                <span className="gradient-text">{siteConfig.name}</span>
              </h1>
              <BrandLogo className="transition duration-500 group-hover:rotate-6 group-hover:border-cyan-300/50" />
            </Link>
          </motion.div>

          {/* Desktop menu */}
          <div className="hidden items-center gap-6 font-mono text-sm lg:flex lg:gap-7">
            {routes.map((route, index) => {
              const active =
                route.path === "/"
                  ? pathname === "/"
                  : pathname.startsWith(route.path);

              return (
                <motion.div
                  key={route.path}
                  whileHover={{ scale: 1.06 }}
                  transition={{ type: "spring", stiffness: 320, damping: 18 }}
                >
                  <Link
                    href={route.path}
                    className={`code-underline group flex items-center gap-1.5 transition ${
                      active
                        ? "text-cyan-300"
                        : "text-slate-300 hover:text-cyan-200"
                    }`}
                  >
                    <span className="text-[10px] text-slate-600 transition group-hover:text-cyan-500">
                      0{index + 1}
                    </span>
                    {route.name}
                    {active && (
                      <span className="h-1 w-1 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(74,222,128,0.9)]" />
                    )}
                  </Link>
                </motion.div>
              );
            })}

            <motion.a
              href={talkHref}
              target={whatsappReady ? "_blank" : undefined}
              rel={whatsappReady ? "noopener noreferrer" : undefined}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="ml-1 flex items-center gap-2 rounded-lg border border-emerald-400/30 bg-emerald-400/10 px-3.5 py-2 text-xs font-semibold text-emerald-300 transition hover:border-emerald-300/60 hover:bg-emerald-400/15"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              Let&apos;s talk
            </motion.a>
          </div>

          {/* Mobile menu icon */}
          <motion.button
            className="rounded-lg border border-cyan-400/15 bg-white/5 p-2 text-2xl text-cyan-300 lg:hidden"
            onClick={() => setOpen((value) => !value)}
            whileTap={{ scale: 0.86 }}
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28 }}
            className="overflow-hidden border-t border-cyan-400/10 bg-[#05070d]/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-5 font-mono text-base">
              <p className="mb-2 text-[10px] tracking-[0.24em] text-slate-500">
                {"// NAVIGATE"}
              </p>
              {routes.map((route, index) => (
                <motion.div
                  key={route.path}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * index }}
                  whileHover={{ x: 8 }}
                >
                  <Link
                    href={route.path}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 rounded-lg px-2 py-2.5 text-slate-300 transition hover:bg-cyan-400/5 hover:text-cyan-200"
                  >
                    <span className="text-[10px] text-cyan-500/60">
                      0{index + 1}
                    </span>
                    {route.name}
                  </Link>
                </motion.div>
              ))}
              <a
                href={talkHref}
                target={whatsappReady ? "_blank" : undefined}
                rel={whatsappReady ? "noopener noreferrer" : undefined}
                onClick={() => setOpen(false)}
                className="mt-3 flex items-center justify-center gap-2 rounded-lg border border-emerald-400/30 bg-emerald-400/10 px-4 py-3 font-semibold text-emerald-300"
              >
                <MessageCircle className="h-4 w-4" />
                Start a conversation
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
