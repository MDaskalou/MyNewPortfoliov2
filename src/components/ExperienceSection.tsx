'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useExperienceTranslation } from '@/context/TranslationContext';

type TimelineItem = {
    title: string;
    location: string;
    date: string;
    description: string;
    current?: boolean;
};

// --- Underkomponent: TimelineCard ---
const TimelineCard = ({ item, index, readMore, showLess }: { item: TimelineItem; index: number; readMore: string; showLess: string }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const isLongText = item.description.length > 100;

    return (
        <motion.li
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="relative pl-10 pb-12 last:pb-0"
        >
            {/* Status-badge / Pulsande prick */}
            <div className="absolute left-0 top-1 z-10 flex h-6 w-6 items-center justify-center">
                <div className="h-3 w-3 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.8)]" />
                {item.current && (
                    <div className="absolute h-6 w-6 animate-ping rounded-full bg-indigo-500/40" />
                )}
            </div>

            <div className="group rounded-2xl border border-gray-800 bg-gray-900/50 p-5 transition-all hover:border-indigo-500/50 hover:bg-gray-900 shadow-xl">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-xl font-bold text-transparent">
                        {item.title}
                    </h3>
                    <span className="text-sm font-medium text-indigo-300/80 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20 w-fit mt-2 md:mt-0">
                        {item.date}
                    </span>
                </div>

                <p className="font-semibold text-gray-200 mb-2">{item.location}</p>

                <div className="text-gray-400 text-sm leading-relaxed">
                    {isExpanded ? item.description : `${item.description.substring(0, 100)}${isLongText ? '...' : ''}`}
                </div>

                {isLongText && (
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="mt-3 flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-indigo-400 hover:text-indigo-300 transition-colors"
                    >
                        {isExpanded ? (
                            <>{showLess} <FaChevronUp /></>
                        ) : (
                            <>{readMore} <FaChevronDown /></>
                        )}
                    </button>
                )}
            </div>
        </motion.li>
    );
};

// --- Huvudkomponent ---
export default function ExperienceSection() {
    const [activeTab, setActiveTab] = useState<'edu' | 'work'>('work');
    const { t } = useExperienceTranslation();

    // Get data from translations
    const educationData: TimelineItem[] = t.education.map((item: { title: string; location: string; date: string; description: string; current?: boolean }) => ({
        title: item.title,
        location: item.location,
        date: item.date,
        description: item.description,
        current: item.current,
    }));

    const workData: TimelineItem[] = t.work.map((item: { title: string; location: string; date: string; description: string; current?: boolean }) => ({
        title: item.title,
        location: item.location,
        date: item.date,
        description: item.description,
        current: item.current,
    }));

    return (
        <section id="erfarenhet" className="bg-gray-950 py-24 text-white overflow-hidden">
            <div className="container mx-auto max-w-4xl px-6">

                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4">{t.title}</h2>
                    <p className="text-gray-400">{t.subtitle}</p>
                </div>

                {/* Tab Navigation */}
                <div className="flex justify-center mb-12">
                    <div className="inline-flex p-1 bg-gray-900 rounded-xl border border-gray-800 shadow-2xl">
                        <button
                            onClick={() => setActiveTab('work')}
                            className={`relative px-6 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 ${
                                activeTab === 'work' ? 'text-white' : 'text-gray-500 hover:text-gray-300'
                            }`}
                        >
                            {activeTab === 'work' && (
                                <motion.div layoutId="activeTab" className="absolute inset-0 bg-indigo-600 rounded-lg shadow-lg shadow-indigo-500/20" />
                            )}
                            <span className="relative z-10 flex items-center gap-2">
                                <FaBriefcase /> {t.tabs.work}
                            </span>
                        </button>
                        <button
                            onClick={() => setActiveTab('edu')}
                            className={`relative px-6 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 ${
                                activeTab === 'edu' ? 'text-white' : 'text-gray-500 hover:text-gray-300'
                            }`}
                        >
                            {activeTab === 'edu' && (
                                <motion.div layoutId="activeTab" className="absolute inset-0 bg-indigo-600 rounded-lg shadow-lg shadow-indigo-500/20" />
                            )}
                            <span className="relative z-10 flex items-center gap-2">
                                <FaGraduationCap /> {t.tabs.education}
                            </span>
                        </button>
                    </div>
                </div>

                {/* Timeline Content */}
                <div className="relative">
                    {/* Gradient Vertikal Linje */}
                    <div className="absolute left-[11px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-indigo-600 via-purple-500 to-transparent opacity-30" />

                    <AnimatePresence mode="wait">
                        <motion.ul
                            key={activeTab}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-4"
                        >
                            {(activeTab === 'work' ? workData : educationData).map((item, index) => (
                                <TimelineCard
                                    key={item.title + index}
                                    item={item}
                                    index={index}
                                    readMore={t.readMore}
                                    showLess={t.showLess}
                                />
                            ))}
                        </motion.ul>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}