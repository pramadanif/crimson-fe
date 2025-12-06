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

// 2. Busy Node Network Animation
const BusyNodeNetwork = () => {
  // Generate random positions for a "crowded" look but controllable
  // We'll have layers: Triggers (left), Logic/AI (center), Actions (right)

  const nodes = [
    // Triggers
    { id: 't1', type: 'trigger', label: 'Wallet Event', x: 50, y: 80, color: '#A3485A' },
    { id: 't2', type: 'trigger', label: 'Webhook', x: 50, y: 160, color: '#A3485A' },
    { id: 't3', type: 'trigger', label: 'Schedule', x: 50, y: 240, color: '#A3485A' },

    // Logic / AI (The "Ramai" part)
    { id: 'l1', type: 'logic', label: 'Filter', x: 180, y: 60, color: '#E6B980' },
    { id: 'l2', type: 'ai', label: 'AI Sentiment', x: 180, y: 120, color: '#FFD700' }, // Gold for AI
    { id: 'l3', type: 'logic', label: 'Transformer', x: 180, y: 200, color: '#E6B980' },
    { id: 'l4', type: 'ai', label: 'AI Guardrail', x: 200, y: 260, color: '#FFD700' },
    { id: 'l5', type: 'logic', label: 'Aggregator', x: 260, y: 90, color: '#E6B980' },
    { id: 'l6', type: 'ai', label: 'AI Classifier', x: 260, y: 170, color: '#FFD700' },

    // Actions
    { id: 'a1', type: 'action', label: 'Exec Contract', x: 380, y: 70, color: '#662222' },
    { id: 'a2', type: 'action', label: 'Notify User', x: 380, y: 150, color: '#662222' },
    { id: 'a3', type: 'action', label: 'Cross-Chain', x: 380, y: 230, color: '#662222' },
  ];

  const connections = [
    { from: 't1', to: 'l1' }, { from: 't1', to: 'l2' },
    { from: 't2', to: 'l3' }, { from: 't3', to: 'l4' },
    { from: 'l1', to: 'l5' }, { from: 'l2', to: 'l5' },
    { from: 'l3', to: 'l6' }, { from: 'l4', to: 'a3' },
    { from: 'l5', to: 'a1' }, { from: 'l6', to: 'a2' },
    { from: 'l6', to: 'a3' },
  ];

  return (
    <svg viewBox="0 0 500 320" className="w-full h-auto drop-shadow-[0_0_30px_rgba(245,218,167,0.2)]">
      <defs>
        <linearGradient id="linePulse" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#A3485A" stopOpacity="0.2" />
          <stop offset="50%" stopColor="#F5DAA7" stopOpacity="1" />
          <stop offset="100%" stopColor="#A3485A" stopOpacity="0.2" />
        </linearGradient>
      </defs>

      {/* Connections with animated particles */}
      {connections.map((conn, i) => {
        const start = nodes.find(n => n.id === conn.from);
        const end = nodes.find(n => n.id === conn.to);
        if (!start || !end) return null;

        return (
          <g key={i}>
            <motion.path
              d={`M ${start.x + 30} ${start.y + 15} C ${start.x + 80} ${start.y + 15}, ${end.x - 50} ${end.y + 15}, ${end.x} ${end.y + 15}`}
              fill="none"
              stroke="url(#linePulse)"
              strokeWidth="1.5"
              strokeOpacity="0.4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: i * 0.1 }}
            />
            {/* Fast Data Particles */}
            <motion.circle r="2" fill="#fff">
              <animateMotion
                dur={`${1.5 + (i % 3) * 0.5}s`}
                repeatCount="indefinite"
                path={`M ${start.x + 30} ${start.y + 15} C ${start.x + 80} ${start.y + 15}, ${end.x - 50} ${end.y + 15}, ${end.x} ${end.y + 15}`}
              />
            </motion.circle>
          </g>
        );
      })}

      {/* Nodes */}
      {nodes.map((node, i) => (
        <motion.g
          key={node.id}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            delay: i * 0.1,
            stiffness: 200,
            damping: 15
          }}
          whileHover={{ scale: 1.1 }}
        >
          {/* Hover Glow */}
          <motion.rect
            x={node.x - 2} y={node.y - 2} width="84" height="34" rx="10"
            fill={node.color}
            opacity="0.3"
            animate={{ opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
          />
          {/* Main Node Body */}
          <rect
            x={node.x} y={node.y} width="80" height="30" rx="8"
            fill="#2D1B22"
            stroke={node.color}
            strokeWidth="1.5"
          />
          {/* Node Label */}
          <text x={node.x + 40} y={node.y + 19} textAnchor="middle" fill="#eee" fontSize="10" fontFamily="sans-serif" fontWeight="600" style={{ pointerEvents: 'none' }}>
            {node.label}
          </text>

          {/* Status Dot */}
          <motion.circle
            cx={node.x + 70} cy={node.y + 10} r="2"
            fill={node.type === 'ai' ? '#00ff88' : '#F5DAA7'}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </motion.g>
      ))}

      {/* Floating Particles for 'Amazing' effect */}
      {/* Floating Particles for 'Amazing' effect */}
      {/* Deterministic positions to prevent hydration errors */}
      {[
        { cx: 50, cy: 40, r: 1.5, d: 4, del: 0 },
        { cx: 420, cy: 300, r: 2, d: 5, del: 1 },
        { cx: 120, cy: 280, r: 1, d: 3.5, del: 2 },
        { cx: 300, cy: 50, r: 1.8, d: 4.5, del: 0.5 },
        { cx: 380, cy: 200, r: 1.2, d: 6, del: 1.5 },
        { cx: 60, cy: 180, r: 2.2, d: 3.8, del: 2.5 },
        { cx: 200, cy: 15, r: 0.8, d: 5.2, del: 3 },
        { cx: 440, cy: 150, r: 1.4, d: 4.2, del: 1.2 }
      ].map((p, i) => (
        <motion.circle
          key={`p-${i}`}
          cx={p.cx}
          cy={p.cy}
          r={p.r}
          fill="#E6B980"
          opacity="0.5"
          animate={{
            y: [0, -20, 0],
            opacity: [0, 0.8, 0]
          }}
          transition={{
            duration: p.d,
            repeat: Infinity,
            delay: p.del
          }}
        />
      ))}
    </svg>
  );
};

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

              <BusyNodeNetwork />
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