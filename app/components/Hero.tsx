'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Wallet } from 'lucide-react';

const NodeIllustration = () => (
  <svg viewBox="0 0 400 300" className="w-full h-auto drop-shadow-2xl">
    <defs>
      <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#A3485A" stopOpacity="0.4" />
        <stop offset="50%" stopColor="#F5DAA7" stopOpacity="1" />
        <stop offset="100%" stopColor="#A3485A" stopOpacity="0.4" />
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
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, ease: "easeInOut" }}
    />
    <motion.path
      d="M50 150 C 100 150, 100 220, 150 220 L 250 220"
      fill="none"
      stroke="url(#lineGradient)"
      strokeWidth="2"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
    />

    {/* Nodes */}
    <g filter="url(#glow)">
      {/* Trigger Node */}
      <motion.rect
        x="20" y="120" width="60" height="60" rx="16"
        fill="#A3485A"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      />
      <circle cx="50" cy="150" r="8" fill="#F5DAA7" />

      {/* Logic Node Top */}
      <motion.rect
        x="240" y="50" width="120" height="60" rx="16"
        fill="#662222" stroke="#A3485A" strokeWidth="2"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      />
      <text x="260" y="85" fill="#fff" fontSize="12" fontFamily="sans-serif">Smart Contract</text>

      {/* Logic Node Bottom */}
      <motion.rect
        x="240" y="190" width="120" height="60" rx="16"
        fill="#662222" stroke="#A3485A" strokeWidth="2"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      />
      <text x="260" y="225" fill="#fff" fontSize="12" fontFamily="sans-serif">Transfer CSPR</text>

      {/* Floating Particles */}
      <motion.circle cx="150" cy="80" r="4" fill="#F5DAA7"
        animate={{ x: [0, 100], opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1 }}
      />
      <motion.circle cx="150" cy="220" r="4" fill="#F5DAA7"
        animate={{ x: [0, 100], opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1.5 }}
      />
    </g>
  </svg>
);

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-gradient-to-br from-wine-900 to-wine-800">
      {/* Abstract Background Blobs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-wine-700/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[500px] h-[500px] bg-wine-700/10 rounded-full blur-[80px]" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-gold-400/30 bg-gold-400/10 backdrop-blur-sm mb-6">
            <span className="text-gold-400 text-xs font-bold tracking-wider uppercase">Beta Access Live</span>
          </div>

          <h1 className="font-display font-bold text-5xl lg:text-7xl text-white leading-[1.1] mb-6 tracking-tight">
            Automate On-Chain <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-[#E6B980]">
              Actions
            </span> <br />
            With Zero Code.
          </h1>

          <p className="text-lg text-white/70 mb-10 leading-relaxed max-w-xl">
            Build smart workflows that react to real blockchain events—fast, secure, and enterprise-ready. No Solidity required.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="flex items-center gap-2 px-8 py-4 bg-gold-400 hover:bg-gold-500 text-wine-900 rounded-full font-bold transition-all shadow-lg hover:shadow-gold-400/20 hover:-translate-y-1">
              Launch App
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-gold-400/30 text-gold-400 hover:border-gold-400 rounded-full font-bold transition-all hover:-translate-y-1">
              <Wallet className="w-5 h-5" />
              Connect Wallet
            </button>
          </div>
        </motion.div>

        {/* Hero Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm p-8 shadow-2xl">
            <div className="absolute top-4 left-4 flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
              <div className="w-3 h-3 rounded-full bg-green-400/80" />
            </div>
            <div className="mt-6">
              <NodeIllustration />
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-wine-700/20 blur-3xl rounded-full" />
        </motion.div>

      </div>
    </section>
  );
}