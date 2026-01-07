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
    { name: 'Kontakt', href: '#kontakt' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Ändra bakgrunden när man scrollar för bättre läsbarhet
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed left-0 top-0 z-[100] w-full transition-all duration-300 ${
                scrolled
                    ? 'bg-gray-950/90 py-3 shadow-xl backdrop-blur-md border-b border-gray-800'
                    : 'bg-transparent py-5'
            }`}
        >
            <div className="container mx-auto flex max-w-6xl items-center justify-between px-6">

                {/* LOGO */}
                <Link href="#hem" className="group flex items-center gap-2">
                    <div className="h-8 w-8 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-white group-hover:rotate-12 transition-transform">
                        M
                    </div>
                    <span className="text-xl font-bold tracking-tight text-white group-hover:text-indigo-400 transition-colors">
                        Mikael <span className="text-indigo-500">Daskalou</span>
                    </span>
                </Link>

                {/* DESKTOP NAV */}
                <div className="hidden items-center space-x-8 md:flex">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-gray-300 transition-colors hover:text-indigo-400"
                        >
                            {link.name}
                        </Link>
                    ))}
                    {/* En liten CTA-knapp i navbaren */}
                    <Link
                        href="#kontakt"
                        className="rounded-full bg-indigo-600 px-5 py-2 text-sm font-bold text-white transition-all hover:bg-indigo-700 hover:shadow-[0_0_15px_rgba(79,70,229,0.4)]"
                    >
                        Anlita mig
                    </Link>
                </div>

                {/* MOBILE TOGGLE */}
                <button
                    className="text-3xl text-white md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <HiX /> : <HiMenuAlt3 className="text-indigo-500" />}
                </button>
            </div>

            {/* MOBILE MENU OVERLAY */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-[99] flex flex-col items-center justify-center bg-gray-950 md:hidden"
                    >
                        {/* Stäng-knapp inuti menyn */}
                        <button
                            className="absolute top-6 right-6 text-4xl text-white"
                            onClick={() => setIsOpen(false)}
                        >
                            <HiX />
                        </button>

                        <ul className="space-y-8 text-center">
                            {navLinks.map((link, i) => (
                                <motion.li
                                    key={link.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-3xl font-bold text-white hover:text-indigo-500 transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>

                        {/* Sociala ikoner eller info längst ner i mobila menyn */}
                        <div className="absolute bottom-12 text-gray-500 text-sm">
                            © 2024 Mikael Daskalou
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}