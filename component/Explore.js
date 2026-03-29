'use client'

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Explore = () => {
  return (
    <section
      className="w-full py-32 px-6 md:px-20 relative overflow-hidden flex items-center justify-center text-white"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(0,0,0,0.7)"
      }}
    >
      {/* Floating Circles / Glow */}
      <motion.div
        className="absolute top-10 left-10 w-40 h-40 bg-purple-600 rounded-full opacity-20 blur-3xl"
        animate={{ scale: [1, 1.3, 1], rotate: [0, 15, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-48 h-48 bg-blue-600 rounded-full opacity-20 blur-3xl"
        animate={{ scale: [1, 1.25, 1], rotate: [0, -15, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
      />

      <div className="relative z-10 text-center max-w-3xl">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold mb-6"
        >
          Ready to Explore My World?
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-200 text-lg md:text-xl mb-10"
        >
          Dive into my portfolio and discover the projects, skills, and creativity  
          I bring to the table. Every project tells a story — and you’re invited to explore it.
        </motion.p>

        {/* Call-to-Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href="/skill"
            className="px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-xl font-semibold text-lg transition transform hover:scale-105 flex items-center gap-2"
          >
            View My Skills <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="/contact"
            className="px-8 py-4 border border-purple-500 hover:bg-purple-600/20 rounded-xl font-semibold text-lg transition transform hover:scale-105"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Explore;
