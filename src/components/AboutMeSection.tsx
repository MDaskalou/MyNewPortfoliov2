'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaLightbulb, FaRocket } from 'react-icons/fa';
import { useAboutTranslation } from '@/context/TranslationContext';

// Snabb-badges för tekniker du nämner i texten
const techStack = [
    { name: 'C# .NET', icon: <FaServer className="text-indigo-400" /> },
    { name: 'SQL', icon: <FaServer className="text-blue-400" /> },
    { name: 'Next.js', icon: <FaCode className="text-white" /> },
    { name: 'TypeScript', icon: <FaCode className="text-blue-500" /> },
    { name: 'Tailwind CSS', icon: <FaCode className="text-cyan-400" /> },
];

export default function AboutMeSection() {
    const { t } = useAboutTranslation();

    return (
        <section id="om-mig" className="bg-gray-950 py-24 text-white overflow-hidden">
            <div className="container mx-auto max-w-6xl px-6">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
                        {t.title}
                    </h2>
                    <div className="h-1 w-20 bg-indigo-600 mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* --- BILD-KOLUMN --- */}
                    <motion.div
                        className="lg:col-span-5 flex justify-center"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="relative">
                            {/* Dekorativ bakgrundseffekt */}
                            <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-full opacity-20 blur-2xl animate-pulse" />

                            {/* Justerad container för att visa huvudet bättre */}
                            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                                <Image
                                    src="/Mikael2.png"
                                    alt="Mikael - Systemutvecklare"
                                    fill
                                    className="rounded-3xl object-cover object-top shadow-2xl border-2 border-gray-800"
                                    priority
                                />

                                {/* Overlay badge */}
                                <div className="absolute -bottom-6 -right-6 bg-gray-900 border border-gray-700 p-4 rounded-2xl shadow-xl hidden md:block">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-indigo-500/20 p-2 rounded-lg">
                                            <FaRocket className="text-indigo-400 text-xl" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-400 uppercase font-bold tracking-widest">{t.statusLabel}</p>
                                            <p className="text-sm font-semibold">{t.statusValue}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    {/* --- TEXT-KOLUMN --- */}
                    <motion.div
                        className="lg:col-span-7 space-y-8"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="space-y-6 text-gray-300 leading-relaxed">
                            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                                <span className="text-indigo-500 text-3xl">/</span>
                                {t.subtitle}
                            </h3>

                            <p className="text-lg" dangerouslySetInnerHTML={{ __html: t.paragraphs[0] }} />

                            <p className="text-lg" dangerouslySetInnerHTML={{ __html: t.paragraphs[1] }} />

                            <div className="bg-gray-900/50 border border-gray-800 p-6 rounded-2xl">
                                <h4 className="text-sm uppercase tracking-[0.2em] font-bold text-indigo-400 mb-4 flex items-center gap-2">
                                    <FaLightbulb className="animate-bounce" /> {t.hybridSkill.title}
                                </h4>
                                <p className="text-sm text-gray-400" dangerouslySetInnerHTML={{ __html: t.hybridSkill.description }} />
                            </div>
                        </div>

                        {/* Teknik-badges */}
                        <div>
                            <p className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4">{t.focusAreas}</p>
                            <div className="flex flex-wrap gap-3">
                                {techStack.map((tech) => (
                                    <span
                                        key={tech.name}
                                        className="flex items-center gap-2 px-4 py-2 bg-gray-900 border border-gray-800 rounded-full text-sm font-medium hover:border-indigo-500/50 transition-colors"
                                    >
                                        {tech.icon}
                                        {tech.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}