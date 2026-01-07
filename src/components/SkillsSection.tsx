'use client';

import React from 'react';
import { FaServer, FaCode, FaDatabase, FaUsers } from 'react-icons/fa';
import { motion } from 'framer-motion';

const backendSkills = ['C#', '.NET 6', 'ASP.NET Core', 'Entity Framework', 'REST API'];
const frontendSkills = ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS'];
const otherSkills = ['SQL Server', 'Git', 'GitHub', 'Azure (Grundläggande)'];
const softSkills = ['Problemlösning', 'Teamarbete', 'Agil Metodik', 'Kommunikation', 'Självgående'];

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
};

const skillCategories = [
    { title: 'Backend', icon: FaServer, skills: backendSkills, gradient: 'from-blue-600 to-cyan-600' },
    { title: 'Frontend', icon: FaCode, skills: frontendSkills, gradient: 'from-purple-600 to-pink-600' },
    { title: 'Övrigt', icon: FaDatabase, skills: otherSkills, gradient: 'from-green-600 to-teal-600' },
    { title: 'Mjuka Förmågor', icon: FaUsers, skills: softSkills, gradient: 'from-orange-600 to-red-600' },
];

export default function SkillsSection() {
    return (
        <section id="kunskaper" className="relative bg-gray-950 py-24 text-white overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute top-1/4 -left-1/4 w-96 h-96 bg-indigo-600 opacity-10 filter blur-3xl rounded-full"
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -50, 0],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-purple-600 opacity-10 filter blur-3xl rounded-full"
                    animate={{
                        x: [0, -100, 0],
                        y: [0, 50, 0],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
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
                    <h2 className="mb-4 text-5xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Mina Kompetenser
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        En kombination av tekniska färdigheter och mjuka förmågor som driver mig framåt
                    </p>
                </motion.div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {skillCategories.map((category, index) => {
                        const IconComponent = category.icon;
                        return (
                            <motion.div
                                key={category.title}
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -8, scale: 1.02 }}
                                className="group relative rounded-xl bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 p-6 border border-gray-800 transition-all duration-300 hover:border-transparent overflow-hidden"
                            >
                                {/* Gradient border effect on hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl`} />

                                {/* Icon with gradient background */}
                                <div className={`mb-4 inline-flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-br ${category.gradient} shadow-lg`}>
                                    <IconComponent className="h-7 w-7 text-white" />
                                </div>

                                {/* Title */}
                                <h3 className="mb-4 text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-indigo-400 group-hover:to-purple-400 transition-all duration-300">
                                    {category.title}
                                </h3>

                                {/* Skills */}
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill, skillIndex) => (
                                        <motion.span
                                            key={skill}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                                            className="rounded-full bg-white/5 backdrop-blur-sm px-3 py-1.5 text-sm text-gray-300 border border-white/10 hover:bg-white/10 hover:border-white/20 hover:text-white transition-all duration-300"
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </div>

                                {/* Decorative corner accent */}
                                <div className={`absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-20 rounded-full blur-2xl transition-opacity duration-500`} />
                            </motion.div>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mt-16 text-center"
                >
                    <p className="text-gray-400 text-lg mb-6">
                        Vill du se hur jag tillämpar dessa färdigheter?
                    </p>
                    <a
                        href="#projekt"
                        className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-indigo-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/40 hover:scale-105"
                    >
                        Se mina projekt
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