'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    Zap,
    Cpu,
    Globe,
    Send,
    Database,
    Brain,
    Workflow
} from 'lucide-react';

const nodeCategories = [
    {
        title: "AI Nodes",
        badge: "NEW",
        gradient: "from-[#F5DAA7] to-[#E6B980]",
        icon: <Brain className="w-6 h-6 text-[#2D1B22]" />,
        description: "Smart processing layer powered by on-chain AI models.",
        nodes: [
            { name: "AI Classifier", desc: "Categorize events & data" },
            { name: "AI Reasoning", desc: "Decision making logic" },
            { name: "AI Sentiment", desc: "Analyze market/social mood" },
            { name: "AI Price Check", desc: "Smart price heuristics" },
            { name: "AI Fraud Detector", desc: "Identify suspicious patterns" },
            { name: "AI Guardrail", desc: "Safety checks & validation" },
        ]
    },
    {
        title: "Trigger Nodes",
        gradient: "from-[#F5DAA7] to-[#E6B980]",
        icon: <Zap className="w-6 h-6 text-[#2D1B22]" />,
        description: "Start workflows based on chain or external events.",
        nodes: [
            { name: "Wallet Event", desc: "Transfer, Approval, Balance" },
            { name: "Contract Event", desc: "Emit event listener" },
            { name: "Schedule", desc: "Cron/Interval trigger" },
            { name: "Webhook", desc: "External HTTP API trigger" },
        ]
    },
    {
        title: "Logic Nodes",
        gradient: "from-[#F5DAA7] to-[#E6B980]",
        icon: <Cpu className="w-6 h-6 text-[#2D1B22]" />,
        description: "Process, filter, and transform data.",
        nodes: [
            { name: "Filter", desc: "Conditional if/else logic" },
            { name: "Transformer", desc: "Data mappers & formatters" },
            { name: "Math", desc: "Calculate fees & amounts" },
            { name: "Aggregator", desc: "Combine multiple inputs" },
            { name: "State Manager", desc: "Log state to Casper" },
        ]
    },
    {
        title: "Cross-Chain",
        gradient: "from-[#F5DAA7] to-[#E6B980]",
        icon: <Globe className="w-6 h-6 text-[#2D1B22]" />,
        description: "Crimson's signature messaging layer.",
        nodes: [
            { name: "To Casper", desc: "Send message to Casper" },
            { name: "To EVM", desc: "Instruction via Relayer" },
            { name: "Broadcast", desc: "Multi-chain signal" },
        ]
    },
    {
        title: "Action Nodes",
        gradient: "from-[#F5DAA7] to-[#E6B980]",
        icon: <Send className="w-6 h-6 text-[#2D1B22]" />,
        description: "Execute transactions on destination chains.",
        nodes: [
            { name: "Exec Contract", desc: "Call smart contract function" },
            { name: "Token Transfer", desc: "Send ERC20/Native tokens" },
            { name: "DEX Swap", desc: "Automated liquidity/swaps" },
            { name: "Oracle Fetch", desc: "Get Chainlink/Pyth price" },
        ]
    },
    {
        title: "Off-Chain Utility",
        gradient: "from-[#F5DAA7] to-[#E6B980]",
        icon: <Database className="w-6 h-6 text-[#2D1B22]" />,
        description: "Bridge Web3 with Web2 tools.",
        nodes: [
            { name: "Notification", desc: "Telegram, Email, Discord" },
            { name: "Database", desc: "Log to Postgres/Mongo" },
            { name: "HTTP Request", desc: "Call external APIs" },
        ]
    },
];

const NodeCard = ({ node, index }: { node: any, index: number }) => (
    <motion.div
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.05 }}
        className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#E6B980]/30 transition-all cursor-default group"
    >
        <div className="w-1.5 h-1.5 rounded-full bg-[#E6B980] group-hover:shadow-[0_0_8px_#E6B980]" />
        <div>
            <div className="font-bold text-gray-200 text-sm group-hover:text-[#E6B980] transition-colors">{node.name}</div>
            <div className="text-xs text-gray-500 group-hover:text-gray-400 leading-tight">{node.desc}</div>
        </div>
    </motion.div>
);

export default function ShowcaseNodes() {
    return (
        <section className="py-24 bg-[#1A0F13] overflow-hidden relative">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]" />
            <div className="absolute top-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] left-[10%] w-96 h-96 bg-[#A3485A]/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-[#E6B980]/5 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#E6B980]/20 bg-[#E6B980]/5 backdrop-blur-sm mb-6"
                    >
                        <Workflow className="w-4 h-4 text-[#E6B980]" />
                        <span className="text-sm font-bold text-[#E6B980] tracking-wide uppercase">Crimson Node Ecosystem</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl lg:text-5xl font-display font-bold text-white mb-6"
                    >
                        Powering Logic with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5DAA7] to-[#E6B980]">Intelligence</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-gray-400 max-w-2xl mx-auto"
                    >
                        From basic automations to advanced AI reasoning. Build complex dApp backends by simply connecting the nodes.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {nodeCategories.map((category, i) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group relative"
                        >
                            {/* Card Container */}
                            <div className="relative h-full bg-[#2D1B22]/40 backdrop-blur-md rounded-[24px] p-1 border border-white/5 hover:border-[#E6B980]/30 hover:bg-[#2D1B22]/60 transition-all duration-500 overflow-hidden shadow-xl">

                                {/* Icon & Title Header */}
                                <div className="relative z-10 p-6 pb-4 flex items-start justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-500`}>
                                            {category.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white group-hover:text-[#F5DAA7] transition-colors">{category.title}</h3>
                                            {category.badge && (
                                                <span className="inline-block px-2 py-0.5 mt-1 text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full tracking-wider">
                                                    {category.badge}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Description */}
                                <div className="px-6 mb-6">
                                    <p className="text-gray-400 text-sm leading-relaxed">{category.description}</p>
                                </div>

                                {/* Inner List Container */}
                                <div className="mx-2 mb-2 bg-[#1A0F13]/50 rounded-[20px] p-4 border border-white/5 space-y-2 min-h-[200px]">
                                    {category.nodes.map((node, j) => (
                                        <NodeCard key={j} node={node} index={j} />
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
