'use client'

import React from "react";
import { motion } from "framer-motion";
import { Code, PenTool, Cpu, Mail, Rocket, TrendingUp } from "lucide-react";

const First = () => {
  return (
    <section className="w-full py-20 px-6 md:px-20 bg-gradient-to-br from-black to-[#0f0220] text-white">
      
      {/* Heading Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-wide">
          What I Bring to the Table
        </h2>
        <p className="text-gray-300 mt-4 text-lg md:text-xl max-w-3xl mx-auto">
          A rare blend of engineering, creativity, and full-stack development —  
          powering digital experiences that stand out.
        </p>
      </motion.div>

      {/* Skill Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        
        {/* Full-Stack Dev */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="p-8 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 hover:border-purple-500 transition shadow-lg"
        >
          <Code className="w-12 h-12 mb-4 text-purple-400" />
          <h3 className="text-2xl font-bold mb-2">Full-Stack Development</h3>
          <p className="text-gray-300">
            Expert in Next.js, React, JavaScript, Tailwind, Python, and FastAPI.  
            I build lightning-fast, scalable applications with clean UI/UX.
          </p>
        </motion.div>

        {/* Engineering */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="p-8 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 hover:border-purple-500 transition shadow-lg"
        >
          <Cpu className="w-12 h-12 mb-4 text-purple-400" />
          <h3 className="text-2xl font-bold mb-2">Computer Engineering</h3>
          <p className="text-gray-300">
            A strong technical background that blends hardware and software  
            to create well-optimized digital solutions.
          </p>
        </motion.div>

        {/* Graphic Design */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="p-8 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 hover:border-purple-500 transition shadow-lg"
        >
          <PenTool className="w-12 h-12 mb-4 text-purple-400" />
          <h3 className="text-2xl font-bold mb-2">Graphic Design</h3>
          <p className="text-gray-300">
            Skilled in crafting highly polished visuals — from logos to full  
            brand identities and marketing materials.
          </p>
        </motion.div>

        {/* SEO Specialist */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="p-8 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 hover:border-purple-500 transition shadow-lg"
        >
          <TrendingUp className="w-12 h-12 mb-4 text-purple-400" />
          <h3 className="text-2xl font-bold mb-2">SEO & Digital Growth</h3>
          <p className="text-gray-300">
            I optimize websites for visibility, traffic, and ranking  
            through proven SEO and growth strategies.
          </p>
        </motion.div>

        {/* Email Marketing */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="p-8 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 hover:border-purple-500 transition shadow-lg"
        >
          <Mail className="w-12 h-12 mb-4 text-purple-400" />
          <h3 className="text-2xl font-bold mb-2">Email Marketing</h3>
          <p className="text-gray-300">
            Crafting high-conversion campaigns that turn attention  
            into engagement and engagement into sales.
          </p>
        </motion.div>

        {/* Extra Power */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="p-8 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 hover:border-purple-500 transition shadow-lg"
        >
          <Rocket className="w-12 h-12 mb-4 text-purple-400" />
          <h3 className="text-2xl font-bold mb-2">Versatility & Execution</h3>
          <p className="text-gray-300">
            From backend logic to UI design, from branding to optimisation —  
            I deliver complete, polished digital products.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default First;
