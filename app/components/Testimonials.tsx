'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function Testimonials() {
    const testimonials = [
        {
            quote: "I removed 14 cronjobs the first day.",
            author: "Alex Chen",
            role: "Backend Engineer"
        },
        {
            quote: "Finally, a workflow tool that looks good and works.",
            author: "Sarah Martinez",
            role: "DevOps Lead"
        },
        {
            quote: "Crimson is the cleanest UX I've seen in automation tools.",
            author: "Jordan Kim",
            role: "Full Stack Developer"
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-display font-bold text-wine-900 mb-4">
                        Builders <span className="text-wine-700">Love Crimson</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 rounded-[24px] bg-surface-50 border border-wine-700/10 hover:shadow-xl transition-all duration-300"
                        >
                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 text-gold-400 fill-gold-400" />
                                ))}
                            </div>
                            <p className="text-lg text-wine-900 font-medium mb-6 leading-relaxed">
                                "{testimonial.quote}"
                            </p>
                            <div>
                                <div className="font-bold text-wine-900">{testimonial.author}</div>
                                <div className="text-sm text-gray-500">{testimonial.role}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
