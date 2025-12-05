'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Wallet, Sparkles } from 'lucide-react';

// --- Components Kecil untuk Animasi ---

// 1. Animasi Teks Per-Kata (Staggered)
const StaggeredText = ({ text, className = "", delay = 0 }: { text: string; className?: string; delay?: number }) => {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: delay * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { type: "spring" as const, damping: 12, stiffness: 100 },
    },
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(10px)", // Efek blur saat muncul
      transition: { type: "spring" as const, damping: 12, stiffness: 100 }
    },
  };

  return (
    <motion.div
      style={{ overflow: "hidden", display: "flex", flexWrap: "wrap" }}
      variants={container}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {words.map((word: string, index: number) => (
        <motion.span variants={child} style={{ marginRight: "0.25em" }} key={index}>
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

// 2. Ilustrasi Node (Sedikit dipercantik)
const NodeIllustration = () => (
  <svg viewBox="0 0 400 300" className="w-full h-auto drop-shadow-[0_0_30px_rgba(245,218,167,0.3)]">
    <defs>
      <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#A3485A" stopOpacity="0.1" />
        <stop offset="50%" stopColor="#F5DAA7" stopOpacity="1" />
        <stop offset="100%" stopColor="#A3485A" stopOpacity="0.1" />
      </linearGradient>
      <filter id="glow">
        <feGaussianBlur stdDeviation="4" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    {/* Connecting Lines */}
    <motion.path
      d="M50 150 C 100 150, 100 80, 150 80 L 250 80"
      fill="none"
      stroke="url(#lineGradient)"
      strokeWidth="2"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
    />
    <motion.path
      d="M50 150 C 100 150, 100 220, 150 220 L 250 220"
      fill="none"
      stroke="url(#lineGradient)"
      strokeWidth="2"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeInOut", delay: 0.8 }}
    />

    {/* Nodes Group */}
    <g filter="url(#glow)">
      {/* Trigger Node */}
      <motion.rect
        x="20" y="120" width="60" height="60" rx="16"
        fill="#A3485A"
        initial={{ scale: 0, rotate: -10 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", bounce: 0.5, delay: 0.2 }}
      />
      <motion.circle
        cx="50" cy="150" r="8" fill="#F5DAA7"
        animate={{ r: [8, 10, 8] }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* Logic Node Top */}
      <motion.rect
        x="240" y="50" width="130" height="60" rx="16"
        fill="rgba(102, 34, 34, 0.8)" stroke="#A3485A" strokeWidth="2"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      />
      <text x="260" y="85" fill="#fff" fontSize="12" fontFamily="sans-serif" fontWeight="bold">Smart Contract</text>

      {/* Logic Node Bottom */}
      <motion.rect
        x="240" y="190" width="130" height="60" rx="16"
        fill="rgba(102, 34, 34, 0.8)" stroke="#A3485A" strokeWidth="2"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 1.5 }}
      />
      <text x="260" y="225" fill="#fff" fontSize="12" fontFamily="sans-serif" fontWeight="bold">Transfer CSPR</text>

      {/* Energy Particles */}
      <motion.circle cx="150" cy="80" r="3" fill="#fff"
        animate={{ offsetDistance: "100%", cx: [50, 250], opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1.8 }}
      />
      <motion.circle cx="150" cy="220" r="3" fill="#fff"
        animate={{ offsetDistance: "100%", cx: [50, 250], opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 2.3 }}
      />
    </g>
  </svg>
);

export default function Hero() {
  // Rotating subtitles
  const subtitles = [
    "Build smart workflows that react to real blockchain events—fast, secure, and enterprise-ready. No Solidity required.",
    "Automate complex processes with visual blocks. Connect APIs, databases, and smart contracts effortlessly.",
    "Deploy production-ready workflows in minutes. Scale from simple tasks to enterprise automation."
  ];

  const [currentSubtitle, setCurrentSubtitle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSubtitle((prev) => (prev + 1) % subtitles.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    // Menggunakan warna custom arbitrary values untuk memastikan tampilan sesuai request tanpa tailwind config
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-[#2D1B22]">

      {/* 1. Background Enhancement: Grid & Vignette */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#4A1D2F] via-[#2D1B22] to-[#1A0F13] opacity-90" />

      {/* 2. Abstract Background Blobs (Animated) */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-[#A3485A]/20 rounded-full blur-[100px]"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[500px] h-[500px] bg-[#E6B980]/10 rounded-full blur-[80px]"
      />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* --- LEFT COLUMN: Text Content --- */}
        <div className="flex flex-col justify-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="w-fit"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#E6B980]/30 bg-[#E6B980]/10 backdrop-blur-md mb-8 shadow-[0_0_15px_rgba(230,185,128,0.2)]">
              <Sparkles className="w-3 h-3 text-[#E6B980]" />
              <span className="text-[#E6B980] text-xs font-bold tracking-widest uppercase">Beta Access Live</span>
            </div>
          </motion.div>

          {/* Main Headline - Interactive */}
          <div className="mb-6 relative group">
            <h1 className="font-display font-extrabold text-5xl lg:text-7xl text-white leading-[1.1] tracking-tight">
              <StaggeredText text="Automate On-Chain" className="block" delay={0.1} />

              {/* Animated Gradient Text - Interactive */}
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                whileHover={{ scale: 1.05, textShadow: "0 0 20px rgba(245,218,167,0.6)" }}
                className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#F5DAA7] via-[#E6B980] to-[#F5DAA7] bg-[length:200%_auto] animate-shimmer py-2 cursor-pointer"
                style={{ backgroundSize: "200% auto", animation: "shimmer 3s linear infinite" }}
              >
                Actions
              </motion.span>

              <StaggeredText text="With Zero Code." className="block" delay={0.4} />
            </h1>
          </div>

          {/* Subtitle - Rotating */}
          <motion.div
            key={currentSubtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="min-h-[80px] mb-10"
          >
            <p className="text-lg text-white/60 leading-relaxed max-w-xl border-l-2 border-[#E6B980]/30 pl-6">
              {subtitles[currentSubtitle]}
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            {/* Primary Button */}
            <button className="group relative px-8 py-4 bg-[#E6B980] text-[#2D1B22] rounded-full font-bold overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(230,185,128,0.4)] hover:scale-105 active:scale-95">
              <span className="relative z-10 flex items-center gap-2">
                Launch App <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
              {/* Button Shine Effect */}
              <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 transition-all duration-700 group-hover:left-[100%]" />
            </button>

            {/* Secondary Button */}
            <button className="group px-8 py-4 bg-white/5 border border-white/10 text-[#E6B980] hover:bg-white/10 rounded-full font-bold transition-all backdrop-blur-sm hover:border-[#E6B980]/50 hover:scale-105 active:scale-95 flex items-center gap-2">
              <Wallet className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              Connect Wallet
            </button>
          </motion.div>
        </div>

        {/* --- RIGHT COLUMN: Visual Content --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateY: -10 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, delay: 0.5, type: "spring" }}
          className="relative perspective-1000"
        >
          {/* Glass Card Container */}
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-xl p-1 shadow-2xl"
          >
            {/* Inner Content with darker bg */}
            <div className="rounded-[20px] bg-[#2D1B22]/60 overflow-hidden p-8 border border-white/5">
              {/* Window Controls */}
              <div className="flex justify-between items-center mb-6">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#A3485A]" />
                  <div className="w-3 h-3 rounded-full bg-[#E6B980]" />
                  <div className="w-3 h-3 rounded-full bg-[#3D3D3D]" />
                </div>
                <div className="h-2 w-20 rounded-full bg-white/10" />
              </div>

              <NodeIllustration />
            </div>

            {/* Glow Behind Card */}
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-[#E6B980]/20 blur-[60px] rounded-full" />
          </motion.div>
        </motion.div>

      </div>

      {/* CSS for custom keyframes that Tailwind might miss */}
      <style jsx global>{`
        @keyframes shimmer {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
      `}</style>
    </section>
  );
}