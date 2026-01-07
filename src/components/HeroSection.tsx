'use client';

import Link from 'next/link';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaArrowDown } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function HeroSection() {
    return (
        <section
            id="hem"
            // Ändrat från h-screen till min-h-screen för att undvika overflow på mobil
            className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-black via-gray-950 to-gray-900 pt-20 pb-12"
        >
            {/* --- Bakgrundseffekter (Samma som innan) --- */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute -top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-indigo-600 opacity-20 filter blur-3xl rounded-full"
                    animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute top-1/4 right-0 w-64 h-64 md:w-96 md:h-96 bg-purple-600 opacity-10 filter blur-3xl rounded-full"
                    animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>

            <div className="relative container mx-auto max-w-6xl px-6 z-10">
                {/* Ändrat grid: ordning på mobil (bild först eller text först)
                    Här kör vi bild först på mobil (lg:order-last) för visuell impact */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">

                    {/* --- TEXT COLUMN --- */}
                    <motion.div
                        className="w-full lg:w-3/5 text-center lg:text-left order-2 lg:order-1"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {/* Badge */}
                        <div className="mb-6">
                            <span className="inline-flex items-center gap-2 rounded-full bg-indigo-600/10 px-3 py-1.5 text-xs md:text-sm font-medium text-indigo-400 border border-indigo-500/20">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                                </span>
                                Tillgänglig för nya möjligheter
                            </span>
                        </div>

                        {/* Main heading - Justerad storlek för mobil */}
                        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl mb-4">
                            <span className="block text-white text-3xl sm:text-5xl lg:text-6xl">Hej, jag är</span>
                            <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent pb-2">
                                Mikael Daskalou
                            </span>
                        </h1>

                        {/* Typing animation - Justerad min-höjd för mobil */}
                        <div className="min-h-[60px] md:min-h-[80px]">
                            <TypeAnimation
                                sequence={[
                                    'Systemutvecklare C# .NET', 2000,
                                    'Passionerad Frontend-utvecklare', 2000,
                                    'Skapar moderna webbupplevelser', 2000,
                                ]}
                                wrapper="p"
                                speed={50}
                                className="text-lg md:text-2xl text-gray-300 leading-relaxed"
                                repeat={Infinity}
                            />
                        </div>

                        {/* CTA Buttons - Fullbredd på mobil */}
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-8">
                            <Link
                                href="#projekt"
                                className="w-full sm:w-auto text-center rounded-xl bg-indigo-600 px-8 py-4 text-base font-bold text-white shadow-lg shadow-indigo-500/25 hover:bg-indigo-500 transition-all active:scale-95"
                            >
                                Se mina projekt
                            </Link>
                            <Link
                                href="#kontakt"
                                className="w-full sm:w-auto text-center rounded-xl bg-white/5 backdrop-blur-sm px-8 py-4 text-base font-bold text-white border border-white/10 hover:bg-white/10 transition-all active:scale-95"
                            >
                                Kontakta mig
                            </Link>
                        </div>

                        {/* Social Icons */}
                        <div className="flex justify-center lg:justify-start gap-5 mt-10">
                            <a href="https://github.com/MikaelDaskalou" target="_blank" className="text-gray-400 hover:text-indigo-400 transition-colors">
                                <FaGithub size={28} />
                            </a>
                            <a href="https://www.linkedin.com/in/mikael-daskalou-a226b815b/" target="_blank" className="text-gray-400 hover:text-indigo-400 transition-colors">
                                <FaLinkedin size={28} />
                            </a>
                        </div>
                    </motion.div>

                    {/* --- IMAGE COLUMN --- */}
                    <motion.div
                        className="w-full lg:w-2/5 flex justify-center order-1 lg:order-2"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <div className="relative">
                            {/* De dekorativa ringarna skalas ner på mobil */}
                            <div className="absolute inset-0 rounded-full border border-indigo-500/30 scale-110 animate-pulse" />

                            {/* Bildcontainer - Mindre på mobil (w-56) och större på desktop (w-96) */}
                            <div className="relative h-56 w-56 sm:h-72 sm:w-72 lg:h-96 lg:w-96 rounded-full overflow-hidden border-4 border-indigo-600/50 shadow-[0_0_50px_rgba(79,70,229,0.3)]">
                                <Image
                                    src="/mikael1.png"
                                    alt="Mikael Daskalou"
                                    fill
                                    className="object-cover object-top"
                                    priority
                                />
                            </div>

                            {/* Floating Badge - Dold på minsta skärmarna för att spara plats */}
                            <motion.div
                                className="absolute -bottom-2 -right-2 hidden sm:block rounded-2xl bg-gray-900/90 backdrop-blur-md p-4 border border-indigo-500/30 shadow-xl"
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 3, repeat: Infinity }}
                            >
                                <p className="text-2xl font-extrabold text-white">2+</p>
                                <p className="text-[10px] uppercase tracking-wider text-indigo-300 font-bold">År erfarenhet</p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator - Dold på mobil för att inte krocka med innehåll */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block">
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex flex-col items-center gap-2 text-gray-500"
                >
                    <span className="text-xs uppercase tracking-widest">Scrolla</span>
                    <FaArrowDown className="text-indigo-500" />
                </motion.div>
            </div>
        </section>
    );
}