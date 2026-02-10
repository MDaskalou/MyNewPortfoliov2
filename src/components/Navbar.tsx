'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import LanguageSwitcher from './LanguageSwitcher';
import { useNavbarTranslation } from '@/context/TranslationContext';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { t } = useNavbarTranslation();

    const navLinks = [
        { name: t.links.home, href: '#hem' },
        { name: t.links.projects, href: '#projekt' },
        { name: t.links.about, href: '#om-mig' },
        { name: t.links.skills, href: '#kunskaper' },
        { name: t.links.experience, href: '#erfarenhet' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed left-0 top-0 z-[100] w-full transition-all duration-300 ${
                scrolled
                    /* FIX: Ändrat till bg-gray-950 (solid) och ökat border-synlighet */
                    ? 'bg-gray-950 py-3 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] border-b border-gray-800'
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
                            className="relative text-base font-medium text-gray-300 transition-colors hover:text-white group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-indigo-500 transition-all group-hover:w-full" />
                        </Link>
                    ))}

                    <LanguageSwitcher variant="compact" />

                    <Link
                        href="#kontakt"
                        className="relative inline-flex items-center justify-center px-6 py-2.5 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 rounded-full hover:bg-indigo-700 group shadow-lg shadow-indigo-500/25"
                    >
                        <span className="relative">{t.cta}</span>
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
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        /* FIX: bg-gray-950 (solid) säkerställer att ingen text under syns i mobilmenyn */
                        className="fixed inset-0 z-[150] flex flex-col bg-gray-950 md:hidden"
                    >
                        <div className="flex items-center justify-between px-6 py-5 border-b border-white/5">
                            <div className="flex items-center gap-2">
                                <div className="h-8 w-8 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-white">
                                    M
                                </div>
                                <span className="font-bold text-white">Mikael</span>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2 text-3xl text-white hover:bg-white/10 rounded-full transition-colors"
                            >
                                <HiX />
                            </button>
                        </div>

                        <div className="flex flex-col items-center justify-center flex-grow space-y-8 px-6">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="w-full text-center"
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="block text-4xl font-bold text-white active:text-indigo-500 transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: navLinks.length * 0.1 }}
                                className="w-full pt-6"
                            >
                                <Link
                                    href="#kontakt"
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center justify-center w-full rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 py-5 text-xl font-bold text-white shadow-xl shadow-indigo-500/20"
                                >
                                    {t.cta}
                                </Link>
                            </motion.div>

                            {/* Language switcher in mobile menu */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: (navLinks.length + 1) * 0.1 }}
                                className="pt-4"
                            >
                                <LanguageSwitcher variant="default" />
                            </motion.div>
                        </div>

                        <div className="p-10 text-center border-t border-white/5">
                            <p className="text-gray-500 text-sm mb-4">{t.copyright}</p>
                            <div className="flex justify-center gap-6 text-2xl text-gray-400">
                                <a href="https://github.com/mdaskalou" target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><FaGithub /></a>
                                <a href="https://www.linkedin.com/in/mikael-daskalou-46b424184/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><FaLinkedin /></a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}