'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export default function Demo() {
    return (
        <section id="demo" className="py-24 bg-surface-50">
            <div className="max-w-5xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl font-display font-bold text-wine-900 mb-4">
                        See Crimson <span className="text-wine-700">in Action</span>
                    </h2>
                    <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
                        Watch a simple "API → Process → Notify" workflow built in 30 seconds.
                    </p>

                    {/* Demo Video Placeholder */}
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-wine-900 to-wine-800 aspect-video">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <button className="w-20 h-20 rounded-full bg-gold-400 flex items-center justify-center hover:bg-gold-500 transition-all hover:scale-110 shadow-2xl">
                                <Play className="w-8 h-8 text-wine-900 ml-1" fill="currentColor" />
                            </button>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute top-4 left-4 flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-400/80" />
                            <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                            <div className="w-3 h-3 rounded-full bg-green-400/80" />
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/50 to-transparent">
                            <div className="text-white/80 text-sm">Demo: API Integration Workflow</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
