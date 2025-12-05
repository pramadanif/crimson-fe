'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Blocks, Puzzle, Shield, Clock, RotateCcw, FileText } from 'lucide-react';

export default function Features() {
  return (
    <>
      {/* Feature Section 1: Visual Builder */}
      <section id="features" className="py-24 bg-surface-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-display font-bold text-wine-900 mb-6">
                A Workflow Builder <br />
                <span className="text-wine-700">That Feels Effortless</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Crimson lets you create powerful automation by simply dragging blocks, connecting steps, and deploying. Everything is visual, readable, and saved instantly.
              </p>
              <ul className="space-y-4">
                {[
                  'Intuitive block-based design',
                  'Real-time monitoring',
                  'Modular logic nodes',
                  'Version control for every flow'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-wine-800 font-medium">
                    <div className="w-2 h-2 rounded-full bg-gold-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-wine-900/5">
                <div className="flex items-center gap-2 mb-6">
                  <Blocks className="w-6 h-6 text-wine-900" />
                  <span className="font-bold text-wine-900">Visual Builder</span>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-wine-50 rounded-xl border-l-4 border-wine-700">
                    <div className="text-sm font-bold text-wine-900">Trigger Block</div>
                    <div className="text-xs text-gray-500 mt-1">When event occurs...</div>
                  </div>
                  <div className="p-4 bg-surface-100 rounded-xl border-l-4 border-gold-400">
                    <div className="text-sm font-bold text-wine-900">Logic Block</div>
                    <div className="text-xs text-gray-500 mt-1">Process data...</div>
                  </div>
                  <div className="p-4 bg-wine-50 rounded-xl border-l-4 border-wine-700">
                    <div className="text-sm font-bold text-wine-900">Action Block</div>
                    <div className="text-xs text-gray-500 mt-1">Execute result...</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Section 2: Integrations */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-wine-900 mb-4">
              Everything Connected. <span className="text-wine-700">Nothing Complicated.</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Crimson works with your existing stack — APIs, databases, cron jobs, and Casper smart contracts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Puzzle className="w-6 h-6" />, title: 'REST / GraphQL calls', desc: 'Connect to any API endpoint' },
              { icon: <FileText className="w-6 h-6" />, title: 'Database queries', desc: 'Read and write to databases' },
              { icon: <Clock className="w-6 h-6" />, title: 'Scheduled jobs', desc: 'Cron-based automation' },
              { icon: <Blocks className="w-6 h-6" />, title: 'Smart contract triggers', desc: 'React to blockchain events' },
              { icon: <Shield className="w-6 h-6" />, title: 'Notification nodes', desc: 'Email / Telegram / webhook' },
              { icon: <RotateCcw className="w-6 h-6" />, title: 'Custom integrations', desc: 'Build your own connectors' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-surface-50 border border-wine-700/10 hover:border-gold-400/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-wine-900 flex items-center justify-center mb-4 text-gold-400">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-wine-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Section 3: Reliability */}
      <section className="py-24 bg-surface-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-wine-900/5">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl border border-green-200">
                    <span className="text-sm font-bold text-green-900">✓ Execution Complete</span>
                    <span className="text-xs text-green-600">2.3s</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-xl border border-yellow-200">
                    <span className="text-sm font-bold text-yellow-900">↻ Retry Attempt 2/3</span>
                    <span className="text-xs text-yellow-600">Auto</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl border border-blue-200">
                    <span className="text-sm font-bold text-blue-900">📋 Audit Log Saved</span>
                    <span className="text-xs text-blue-600">View</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-4xl font-display font-bold text-wine-900 mb-6">
                Never Lose Control <br />
                <span className="text-wine-700">of Your Flow</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Crimson runs automations with predictable, verifiable execution. Logs, retries, and rollbacks keep everything stable.
              </p>
              <ul className="space-y-4">
                {[
                  'Full execution timeline',
                  'Auto-retry failed nodes',
                  'Audit logs for every run',
                  'Rollback on errors'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-wine-800 font-medium">
                    <div className="w-2 h-2 rounded-full bg-gold-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}