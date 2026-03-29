'use client'

import React, { useState } from "react";
import { Github } from "lucide-react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Portfolio routes
  const routes = {
    Home: "/",
    Skills: "/skill",
    Projects: "/projects",
    About: "/about",
    Contact: "/contact",
  };

  return (
    <nav className="w-full sticky top-0 left-0 z-50 backdrop-blur-md bg-white/30 dark:bg-black/30 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* LOGO (UNCHANGED) */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 cursor-pointer"
        >
          <motion.div
            className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-xl flex items-center justify-center text-white text-xl font-bold"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
          >
            T
          </motion.div>
          <h1 className="text-2xl font-extrabold tracking-wide">TIMI-TECH-Ltd</h1>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-semibold text-lg">
          {Object.keys(routes).map((item, i) => (
            <motion.div key={i} whileHover={{ scale: 1.1, color: "#6b21a8" }}>
              <Link href={routes[item]} className="cursor-pointer transition">
                {item}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <motion.button
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
          whileTap={{ scale: 0.8 }}
        >
          {open ? <X /> : <Menu />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white/40 dark:bg-black/40 backdrop-blur-xl px-6 py-4 flex flex-col gap-4 text-lg font-medium shadow-lg"
        >
          {Object.keys(routes).map((item, i) => (
            <motion.div key={i} whileHover={{ x: 10 }}>
              <Link href={routes[item]} onClick={() => setOpen(false)}>
                {item}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
