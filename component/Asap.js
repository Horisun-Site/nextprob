'use client'

import React from "react";
import { motion } from "framer-motion";

const Asap = () => {
  return (
    <section className="relative min-h-screen w-full bg-white text-black px-6 py-20 flex flex-col items-center justify-center overflow-hidden">

      {/* Floating Background Glow (Now contained) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.25 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-gradient-to-br from-purple-200 via-white to-purple-100 blur-2xl pointer-events-none"
      />

      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-extrabold tracking-wide mb-10 text-center z-10"
      >
        My <span className="text-purple-600">Skill Mastery</span>
      </motion.h1>

      {/* Write-up Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        whileHover={{ scale: 1.03 }}
        className="max-w-3xl bg-white border border-gray-200 shadow-2xl rounded-3xl p-10 backdrop-blur-xl relative overflow-hidden z-10"
      >
        {/* Shine Animation */}
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "150%" }}
          transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
          className="absolute top-0 left-0 w-1/3 h-full bg-white/10 rotate-12"
        />

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="text-lg md:text-xl leading-relaxed font-medium text-center z-20"
        >
          I am highly skilled and deeply experienced across a wide range of modern
          technologies—JavaScript, React, Next.js, TailwindCSS, Python, FastAPI,
          MongoDB, Node.js, and Astra DB.
          <br /><br />
          I have mastered these tools not just in theory, but in real-world
          development, building high-performance, scalable, and visually stunning
          solutions. I combine creativity, engineering precision, and problem-solving
          excellence to bring powerful ideas to life.
          <br /><br />
          I am a **pro at what I do**, constantly improving, learning fast, adapting,
          and teaching others along the way. My passion for growth and innovation
          makes me unstoppable in any project I take on.
        </motion.p>
      </motion.div>

      {/* Floating Bubbles (Contained Inside Section) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute bottom-10 left-10 w-6 h-6 rounded-full bg-purple-300"
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
        />
        <motion.div
          className="absolute top-20 right-20 w-10 h-10 rounded-full bg-purple-400"
          animate={{ y: [0, -25, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
        />
      </div>

    </section>
  );
};

export default Asap;
