'use client'

import React from "react";
import { motion } from "framer-motion";

const Dash = () => {
  // Change this URL to your own image anytime
  const profileImage = "https://known-red-2g2ybo6f4k.edgeone.app/best.png";

  return (
    <section className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 bg-gradient-to-br from-black to-[#170033] text-white relative">
      
      {/* Left Side: Image + Greeting */}
      <motion.div
        className="md:w-1/2 flex flex-col items-center mb-10 md:mb-0"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Profile Image with floating animation */}
        <motion.img
          src={profileImage}
          alt="Timi Profile"
          className="w-64 h-64 md:w-96 md:h-96 rounded-2xl object-cover border-4 border-purple-500 shadow-2xl"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "mirror" }}
        />

        {/* Greeting directly below image */}
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-xl text-purple-300 mt-4"
        >
          👋 Hello, I’m Timi
        </motion.h3>
      </motion.div>

      {/* Right Side: Content */}
      <div className="md:w-1/2 text-center md:text-left max-w-2xl">
        
        {/* Big Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-4xl md:text-6xl font-extrabold mt-4 leading-tight"
        >
          Building Digital Experiences  
          <span className="text-purple-500"> That Inspire</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-6 text-gray-300 text-base md:text-lg"
        >
          I’m a Full-Stack Developer, Computer Engineer, Graphic Designer,  
          SEO Specialist and Email Marketer — crafting powerful websites,  
          brand visuals, and digital solutions that stand out.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-6 mt-10"
        >
          <a
            href="/projects"
            className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-xl font-semibold transition"
          >
            View My Work
          </a>
          <a
            href="/contact"
            className="px-6 py-3 border border-purple-500 hover:bg-purple-600/20 rounded-xl font-semibold transition"
          >
            Contact Me
          </a>
        </motion.div>

      </div>

      {/* Floating Glow Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.35 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
        className="w-72 h-72 rounded-full bg-purple-600 blur-3xl absolute -z-10 top-20 left-1/2 -translate-x-1/2"
      />
    </section>
  );
};

export default Dash;
