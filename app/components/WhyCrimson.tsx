'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Eye, TrendingUp, Shield, Sparkles, Zap } from 'lucide-react';

export default function WhyCrimson() {
    const reasons = [
        {
            icon: <Rocket className="w-6 h-6" />,
            title: 'MVP instantly',
            description: 'Build usable flows in minutes, not days.'
        },
        {
            icon: <Eye className="w-6 h-6" />,
            title: 'Readable logic',
            description: 'Zero confusion, everything visual.'
        },
        {
            icon: <TrendingUp className="w-6 h-6" />,
            title: 'Scales beautifully',
            description: 'From one task to enterprise-level automation.'
        },
        {
            icon: <Shield className="w-6 h-6" />,
            title: 'Secure foundation',
            description: 'Reliable execution you can trust.'
        },
        {
            icon: <Sparkles className="w-6 h-6" />,
            title: 'Modern UI',
            description: 'Bold crimson aesthetic, built for clarity and speed.'
        },
        {
            icon: <Zap className="w-6 h-6" />,
            title: 'Lightning fast',
            description: 'Optimized performance for real-time automation.'
        }
    ];

    return (
        <section id="why-crimson" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-display font-bold text-wine-900 mb-4">
                        Why Developers <span className="text-wine-700">Choose Crimson</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 rounded-[24px] bg-surface-50 border border-wine-700/10 hover:border-gold-400/50 shadow-sm hover:shadow-xl hover:shadow-wine-900/5 transition-all duration-300"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-wine-900 flex items-center justify-center mb-6 text-gold-400">
                                {reason.icon}
                            </div>
                            <h3 className="text-xl font-bold text-wine-900 mb-3 font-display">
                                {reason.title}
                            </h3>
                            <p className="text-gray-500 leading-relaxed">
                                {reason.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
