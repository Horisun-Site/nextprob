"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const Scap = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const res = await fetch(`${window.location.origin}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setStatus("Message Sent Successfully!");
      setForm({ name: "", email: "", message: "" });
    } else {
      setStatus("Failed to send message.");
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex justify-center items-center px-4 overflow-hidden">
      {/* FLOATING PARTICLES */}
      <motion.div
        className="absolute w-2 h-2 bg-purple-500 rounded-full"
        animate={{ y: [0, -40, 0], opacity: [0.4, 1, 0.4] }}
        transition={{ repeat: Infinity, duration: 4 }}
        style={{ top: "20%", left: "10%" }}
      />

      <motion.div
        className="absolute w-3 h-3 bg-pink-500 rounded-full"
        animate={{ y: [0, -50, 0], opacity: [0.4, 1, 0.4] }}
        transition={{ repeat: Infinity, duration: 5 }}
        style={{ top: "70%", left: "80%" }}
      />

      <motion.div
        className="absolute w-2 h-2 bg-indigo-500 rounded-full"
        animate={{ y: [0, -30, 0], opacity: [0.4, 1, 0.4] }}
        transition={{ repeat: Infinity, duration: 3 }}
        style={{ top: "40%", left: "60%" }}
      />

      {/* CONTACT CARD */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative bg-gray-900/70 backdrop-blur-xl w-full max-w-xl border border-purple-700/40 shadow-[0_0_20px_rgba(128,0,255,0.4)] p-8 rounded-2xl"
      >
        <h1 className="text-3xl font-bold mb-6 text-center">
          Contact <span className="text-purple-400">Me</span>
        </h1>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full p-3 bg-gray-800 border border-gray-700 rounded-xl mb-4 focus:border-purple-500 outline-none"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full p-3 bg-gray-800 border border-gray-700 rounded-xl mb-4 focus:border-purple-500 outline-none"
        />

        <textarea
          name="message"
          placeholder="What do you want me to do for you?"
          value={form.message}
          onChange={handleChange}
          required
          rows="5"
          className="w-full p-3 bg-gray-800 border border-gray-700 rounded-xl mb-4 focus:border-purple-500 outline-none"
        ></textarea>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          type="submit"
          className="w-full bg-purple-600 text-white p-3 rounded-xl font-semibold hover:bg-purple-700 transition"
        >
          Send Message
        </motion.button>

        {status && (
          <p className="mt-4 text-center font-medium text-purple-300">
            {status}
          </p>
        )}
      </motion.form>
    </div>
  );
};

export default Scap;
