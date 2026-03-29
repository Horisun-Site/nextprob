'use client'

import React from "react";
import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Github, Linkedin } from "lucide-react";

const Bottom = () => {
  return (
    <footer className="w-full py-12 bg-gradient-to-t from-black via-gray-900 to-black text-white relative overflow-hidden">
      
      {/* Animated Gradient Glow */}
      <motion.div
        className="absolute -top-20 -left-40 w-72 h-72 sm:w-96 sm:h-96 bg-purple-600 rounded-full opacity-20 blur-3xl animate-pulse"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 15, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="relative z-10 flex flex-col items-center gap-6 px-4 sm:px-0">
        {/* Branding */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide text-center"
        >
          © {new Date().getFullYear()} TIMI-TECH LTD — Portfolio
        </motion.h1>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-xl sm:text-2xl"
        >
          <a aria-label="Github" href="https://github.com/Horisun-Site" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition"><Github /></a>
          <a aria-label="LinkedIn" href="https://www.linkedin.com/in/oladunjoye-iyanu-0b0740294/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition"><Linkedin /></a>
          <a aria-label="Instagram" href="https://www.instagram.com/horisun4/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition"><Instagram /></a>
          <a aria-label="Twitter" href="https://x.com/Horisun0" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition"><Twitter /></a>
          <a aria-label="Facebook" href="https://web.facebook.com/scott.emmanuel.230253/followers" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition"><Facebook /></a>
        </motion.div>

        {/* Footer Note */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-sm sm:text-base md:text-base text-gray-400 text-center max-w-md leading-relaxed"
        >
          Designed & Developed by Timi ✦ Full-Stack Developer / Designer / Engineer  
          <br /> Passionate about learning, building, and sharing knowledge.
        </motion.p>
      </div>
    </footer>
  );
};

export default Bottom;
