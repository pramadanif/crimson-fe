'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Showcase() {
  return (
    <section className="py-24 bg-surface-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-5 gap-16 items-center">

        <div className="lg:col-span-2">
          <h2 className="text-4xl font-display font-bold text-wine-900 mb-6">
            Visual Logic Builder
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Design sophisticated dApp backends visually. Our engine monitors the Casper blockchain 24/7 and executes your logic securely.
          </p>
          <ul className="space-y-4">
            {['Listen to Contract Events', 'Filter by Value/Address', 'Trigger Multi-sig Transactions'].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-wine-800 font-medium">
                <div className="w-2 h-2 rounded-full bg-gold-400" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3 relative">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gold-400/20 blur-3xl rounded-full transform scale-75" />

          {/* Diagram Container */}
          <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-wine-900/5">
            {/* Header Fake UI */}
            <div className="flex items-center justify-between mb-8 border-b border-gray-100 pb-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-gray-200" />
                <div className="w-3 h-3 rounded-full bg-gray-200" />
              </div>
              <div className="text-xs font-mono text-gray-400">Workflow #8821: Price Watch</div>
            </div>

            {/* Nodes */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative">

              {/* Node 1 */}
              <motion.div
                className="w-full md:w-64 bg-white border border-wine-200 rounded-2xl p-5 shadow-lg relative z-10"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-wine-700 uppercase tracking-wider">Trigger</span>
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                </div>
                <div className="font-bold text-wine-900">Token Price Oracle</div>
                <div className="text-xs text-gray-500 mt-1">CSPR/USD &gt; $0.05</div>
              </motion.div>

              {/* Connector */}
              <div className="h-12 w-0.5 md:w-16 md:h-0.5 bg-gold-400 relative">
                <div className="absolute inset-0 animate-pulse bg-gold-300 blur-[1px]" />
              </div>

              {/* Node 2 */}
              <motion.div
                className="w-full md:w-64 bg-wine-900 rounded-2xl p-5 shadow-lg relative z-10 border border-wine-800"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-gold-400 uppercase tracking-wider">Action</span>
                  <div className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
                </div>
                <div className="font-bold text-white">Execute Swap</div>
                <div className="text-xs text-white/60 mt-1">Contract: 0x8f...2a</div>
              </motion.div>

              {/* Connector */}
              <div className="h-12 w-0.5 md:w-16 md:h-0.5 bg-gold-400 relative">
                <div className="absolute inset-0 animate-pulse bg-gold-300 blur-[1px]" />
              </div>

              {/* Node 3 */}
              <motion.div
                className="w-full md:w-64 bg-white border border-wine-200 rounded-2xl p-5 shadow-lg relative z-10"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-wine-700 uppercase tracking-wider">Notify</span>
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                </div>
                <div className="font-bold text-wine-900">Email Admin</div>
                <div className="text-xs text-gray-500 mt-1">alert@company.com</div>
              </motion.div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}