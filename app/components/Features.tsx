'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ShieldCheck, Database, Layers } from 'lucide-react';

const features = [
  {
    icon: <Zap className="w-6 h-6 text-wine-900" />,
    title: "No-Code Automation",
    description: "Drag-and-drop interface to build complex logic without writing a single line of Rust or Solidity."
  },
  {
    icon: <Database className="w-6 h-6 text-wine-900" />,
    title: "Enterprise-Grade Contracts",
    description: "Pre-audited, gas-optimized smart contracts ready to deploy for common business logic."
  },
  {
    icon: <Layers className="w-6 h-6 text-wine-900" />,
    title: "Real On-Chain Triggers",
    description: "React instantly to token transfers, contract events, or state changes on the Casper mainnet."
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-wine-900" />,
    title: "Secure & Auditable",
    description: "Every workflow run is verifiable on-chain. Enterprise security standards built-in by default."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-surface-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-display font-bold text-wine-900 mb-4">
            Built for the <span className="text-wine-700">Future of Web3</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Empower your team to manage blockchain operations with familiar, intuitive tooling.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-[24px] bg-white border border-wine-700/10 hover:border-gold-400/50 shadow-sm hover:shadow-xl hover:shadow-wine-900/5 transition-all duration-300 relative overflow-hidden"
            >
              {/* Background Tint */}
              <div className="absolute inset-0 bg-gold-400 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300" />

              <div className="w-14 h-14 rounded-2xl bg-surface-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-wine-900/5">
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold text-wine-900 mb-3 font-display">
                {feature.title}
              </h3>

              <p className="text-gray-500 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}