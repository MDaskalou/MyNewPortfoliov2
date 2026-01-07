'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaChartBar, FaFire, FaCalendar } from 'react-icons/fa';

const GITHUB_USERNAME = 'mdaskalou';

export default function GitHubSection() {
    const [graphType, setGraphType] = useState('activity');
    const [imageError, setImageError] = useState(false);

    const languageStatsUrl = `https://github-readme-stats.vercel.app/api/top-langs?username=${GITHUB_USERNAME}&theme=dark&hide_border=true&layout=compact&bg_color=0d1117&title_color=a78bfa&text_color=c9d1d9&icon_color=a78bfa`;    const activityGraphUrl = `https://github-readme-activity-graph.vercel.app/graph?username=${GITHUB_USERNAME}&theme=github-dark&hide_border=true&area=true&bg_color=0d1117&color=a78bfa&line=8b5cf6&point=c084fc`;
    const streakStatsUrl = `https://github-readme-streak-stats.herokuapp.com/?user=${GITHUB_USERNAME}&theme=dark&hide_border=true&background=0d1117&ring=a78bfa&fire=c084fc&currStreakLabel=a78bfa`;
    const simpleChartUrl = `https://ghchart.rshah.org/8b5cf6/${GITHUB_USERNAME}`;

    const getGraphUrl = () => {
        switch(graphType) {
            case 'activity': return activityGraphUrl;
            case 'streak': return streakStatsUrl;
            case 'simple': return simpleChartUrl;
            default: return activityGraphUrl;
        }
    };

    const graphOptions = [
        { id: 'activity', label: 'Activity Graph', icon: FaChartBar },
        { id: 'streak', label: 'Streak Stats', icon: FaFire },
        { id: 'simple', label: 'Simple Chart', icon: FaCalendar },
    ];

    return (
        <section id="github-aktivitet" className="relative bg-gray-900 py-24 text-white border-t border-gray-800 overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute top-1/2 left-1/3 w-96 h-96 bg-purple-600 opacity-10 filter blur-3xl rounded-full"
                    animate={{
                        x: [0, -50, 0],
                        y: [0, 50, 0],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </div>

            <div className="container mx-auto max-w-6xl px-6 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 mb-6 shadow-lg shadow-indigo-500/20">
                        <FaGithub className="text-3xl text-white" />
                    </div>
                    <h2 className="mb-4 text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Engagemang & Kontinuitet
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Se min senaste bidragsaktivitet och mina toppspråk på GitHub
                    </p>
                </motion.div>

                {/* Graph Type Selector */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                    {graphOptions.map((option) => {
                        const IconComponent = option.icon;
                        return (
                            <button
                                key={option.id}
                                onClick={() => {
                                    setGraphType(option.id);
                                    setImageError(false);
                                }}
                                className={`group flex items-center gap-2 px-5 py-3 rounded-lg font-medium transition-all duration-300 ${
                                    graphType === option.id
                                        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/30 scale-105'
                                        : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700 hover:text-white border border-gray-700'
                                }`}
                            >
                                <IconComponent className={`text-lg transition-transform duration-300 ${graphType === option.id ? '' : 'group-hover:scale-110'}`} />
                                <span>{option.label}</span>
                            </button>
                        );
                    })}
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Main Contribution Graph */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="lg:col-span-2 rounded-xl bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 p-6 md:p-8 border border-gray-800 shadow-xl overflow-hidden group hover:border-indigo-500/50 transition-all duration-300"
                    >
                        {/* Gradient overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 via-purple-600/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <span className="inline-block w-1 h-6 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full"></span>
                                Bidragsaktivitet
                            </h3>

                            <div className="flex justify-center items-center min-h-[300px] bg-black/20 rounded-lg p-4">
                                {imageError ? (
                                    <div className="text-center py-12">
                                        <FaGithub className="text-6xl text-gray-700 mx-auto mb-4" />
                                        <p className="text-red-400 mb-2">Kunde inte ladda graf</p>
                                        <p className="text-gray-500 text-sm">Kontrollera internetanslutningen</p>
                                    </div>
                                ) : (
                                    <img
                                        src={getGraphUrl()}
                                        alt={`${GITHUB_USERNAME}'s GitHub Contributions`}
                                        className="w-full h-auto rounded-lg"
                                        onError={() => setImageError(true)}
                                    />
                                )}
                            </div>
                        </div>
                    </motion.div>

                    {/* Language Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="rounded-xl bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 p-6 md:p-8 border border-gray-800 shadow-xl group hover:border-indigo-500/50 transition-all duration-300"
                    >
                        {/* Gradient overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 via-purple-600/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <span className="inline-block w-1 h-6 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full"></span>
                                Toppspråk
                            </h3>

                            <div className="flex justify-center items-center bg-black/20 rounded-lg p-4">
                                <img
                                    src={languageStatsUrl}
                                    alt={`${GITHUB_USERNAME}'s Top Languages`}
                                    className="w-full h-auto rounded-lg"
                                    onError={(e) => {
                                        e.currentTarget.style.display = 'none';
                                    }}
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Stats Cards */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6"
                >
                    {[
                        { label: 'Konsekvent bidrag', value: 'Daglig aktivitet', icon: '📅' },
                        { label: 'Aktiva projekt', value: 'Portfolio & Mer', icon: '🚀' },
                        { label: 'Huvudspråk', value: 'C# & TypeScript', icon: '💻' },
                    ].map((stat, index) => (
                        <div
                            key={stat.label}
                            className="rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 p-6 border border-gray-800 hover:border-indigo-500/50 transition-all duration-300 group"
                        >
                            <div className="text-3xl mb-3">{stat.icon}</div>
                            <div className="text-gray-400 text-sm mb-1">{stat.label}</div>
                            <div className="text-white text-xl font-bold">{stat.value}</div>
                        </div>
                    ))}
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-center mt-12"
                >
                    <a
                        href={`https://github.com/${GITHUB_USERNAME}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-indigo-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/40 hover:scale-105"
                    >
                        <FaGithub className="text-xl" />
                        Besök min GitHub-profil
                        <motion.span
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            →
                        </motion.span>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}