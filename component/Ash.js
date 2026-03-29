'use client'

import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Lightbulb, Users } from "lucide-react";

const Ash = () => {
  return (
    <section className="w-full py-20 px-6 md:px-20 bg-gray-900 text-white">
      
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-wide">
          My Professional Approach
        </h2>
        <p className="text-gray-300 mt-4 max-w-3xl mx-auto text-lg md:text-xl">
          I strive to deliver high-quality results, continuously grow my skills,  
          and share knowledge with others to make a positive impact.
        </p>
      </motion.div>

      {/* Professional Traits */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        
        {/* Lifelong Learner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="p-8 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 hover:border-purple-500 transition shadow-lg"
        >
          <Lightbulb className="w-12 h-12 mb-4 text-purple-400" />
          <h3 className="text-2xl font-bold mb-2">Lifelong Learner</h3>
          <p className="text-gray-300">
            Always exploring new technologies, frameworks, and skills to  
            stay ahead in the ever-evolving tech world.
          </p>
        </motion.div>

        {/* Professional Excellence */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="p-8 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 hover:border-purple-500 transition shadow-lg"
        >
          <BookOpen className="w-12 h-12 mb-4 text-purple-400" />
          <h3 className="text-2xl font-bold mb-2">Professional Excellence</h3>
          <p className="text-gray-300">
            Delivering high-quality work consistently, focusing on details,  
            efficiency, and creating value for clients and teams.
          </p>
        </motion.div>

        {/* Mentorship & Sharing */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="p-8 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 hover:border-purple-500 transition shadow-lg"
        >
          <Users className="w-12 h-12 mb-4 text-purple-400" />
          <h3 className="text-2xl font-bold mb-2">Mentorship & Sharing</h3>
          <p className="text-gray-300">
            Passionate about teaching, guiding, and helping others grow  
            in tech and creative skills.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Ash;
