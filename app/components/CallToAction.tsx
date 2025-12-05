'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function CallToAction() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-wine-900 to-wine-800" />

      {/* Texture */}
      <div className="absolute inset-0 opacity-10"
        style={{ backgroundImage: 'radial-gradient(#F5DAA7 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-display font-bold text-white mb-8 tracking-tight"
        >
          Start Building <br />
          <span className="text-gold-400">in Crimson</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl text-white/80 mb-12 max-w-2xl mx-auto"
        >
          Automate more. Stress less. Ship faster.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <button className="px-10 py-5 bg-gold-400 text-wine-900 text-lg font-bold rounded-full shadow-2xl hover:shadow-gold-400/50 hover:bg-white hover:text-wine-900 transition-all duration-300 transform hover:-translate-y-1">
            Launch Crimson
          </button>
          <p className="mt-6 text-sm text-white/40">
            Free tier available. No credit card required.
          </p>
        </motion.div>
      </div>
    </section>
  );
}