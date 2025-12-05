'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    num: "01",
    title: "Choose Trigger",
    desc: "Select a blockchain event, like 'Payment Received' or 'NFT Minted'.",
  },
  {
    num: "02",
    title: "Configure Logic",
    desc: "Add conditions (if/else), delays, or connect to Web2 APIs.",
  },
  {
    num: "03",
    title: "Execute Action",
    desc: "Automatically trigger a smart contract or send a transaction.",
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-white relative overflow-hidden">
      {/* Background Line */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gray-100 hidden md:block" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="text-wine-700 font-semibold tracking-wider uppercase text-sm">Simple Workflow</span>
          <h2 className="text-4xl font-display font-bold text-wine-900 mt-2">
            Automate in 3 Steps
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative flex flex-col items-center text-center"
            >
              {/* Step Icon/Number */}
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-wine-900 to-wine-800 flex items-center justify-center shadow-lg shadow-wine-900/20 mb-8 relative z-10 ring-4 ring-white">
                <span className="text-2xl font-bold text-gold-400 font-display">{step.num}</span>
              </div>

              {/* Connector Arrow (Desktop only, not for last item) */}
              {index !== steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-px border-t-2 border-dashed border-gray-200">
                  <div className="absolute -top-3 right-0">
                    <ArrowRight className="text-gray-300 w-6 h-6" />
                  </div>
                </div>
              )}

              <h3 className="text-2xl font-bold text-wine-900 mb-4">{step.title}</h3>
              <p className="text-gray-500 max-w-xs leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}