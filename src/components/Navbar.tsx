'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const navLinks = [
    { name: 'Hem', href: '#hem' },
    { name: 'Projekt', href: '#projekt' },
    { name: 'Om mig', href: '#om-mig' },
    { name: 'Kunskaper', href: '#kunskaper' },
    { name: 'Erfarenhet', href: '#erfarenhet' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed left-0 top-0 z-[100] w-full transition-all duration-500 ${
                scrolled
                    ? 'bg-gray-950/80 py-3 shadow-2xl backdrop-blur-lg border-b border-white/5'
                    : 'bg-transparent py-6'
            }`}
        >
            <div className="container mx-auto flex max-w-6xl items-center justify-between px-6">

                {/* LOGO */}
                <Link href="#hem" className="group flex items-center gap-2">
                    <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center font-bold text-white shadow-lg group-hover:shadow-indigo-500/50 transition-all duration-300">
                        M
                    </div>
                    <span className="text-xl font-bold tracking-tight text-white">
                        Mikael <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Daskalou</span>
                    </span>
                </Link>

                {/* DESKTOP NAV */}
                <div className="hidden items-center space-x-8 md:flex">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="relative text-sm font-medium text-gray-400 transition-colors hover:text-white group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-indigo-500 transition-all group-hover:w-full" />
                        </Link>
                    ))}

                    {/* Anlita mig - Primär CTA */}
                    <Link
                        href="#kontakt"
                        className="relative inline-flex items-center justify-center px-6 py-2.5 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 rounded-full hover:bg-indigo-700 group shadow-lg shadow-indigo-500/25"
                    >
                        <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                        <span className="relative">Anlita mig</span>
                    </Link>
                </div>

                {/* MOBILE TOGGLE */}
                <button
                    className="text-3xl text-white md:hidden p-2 hover:bg-white/5 rounded-lg transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <HiX /> : <HiMenuAlt3 className="text-indigo-400" />}
                </button>
            </div>

            {/* MOBILE MENU */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-[99] flex flex-col items-center justify-center bg-gray-950/98 backdrop-blur-xl md:hidden"
                    >
                        <button
                            className="absolute top-6 right-6 text-4xl text-white"
                            onClick={() => setIsOpen(false)}
                        >
                            <HiX />
                        </button>

                        <ul className="space-y-6 text-center">
                            {navLinks.map((link, i) => (
                                <motion.li
                                    key={link.name}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-2xl font-semibold text-white hover:text-indigo-400 transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.li>
                            ))}
                            <motion.li
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: navLinks.length * 0.05 }}
                                className="pt-4"
                            >
                                <Link
                                    href="#kontakt"
                                    onClick={() => setIsOpen(false)}
                                    className="inline-block rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-3 text-xl font-bold text-white shadow-xl shadow-indigo-500/20"
                                >
                                    Anlita mig
                                </Link>
                            </motion.li>
                        </ul>

                        <div className="absolute bottom-12 text-gray-500 text-sm">
                            © 2026 Mikael Daskalou
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}