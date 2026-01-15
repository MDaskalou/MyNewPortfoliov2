'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

export default function ContactSection() {
    // Status-state för att hantera inskickningen
    const [status, setStatus] = useState<'IDLE' | 'SUBMITTING' | 'SUCCESS' | 'ERROR'>('IDLE');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('SUBMITTING');

        const formData = new FormData(e.currentTarget);

        try {
            const response = await fetch("https://formspree.io/f/xvgabbrn", {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setStatus('SUCCESS');
                (e.target as HTMLFormElement).reset(); // Tömmer formuläret vid framgång
            } else {
                setStatus('ERROR');
            }
        } catch (error) {
            setStatus('ERROR');
        }
    };

    return (
        <section id="kontakt" className="relative bg-gray-950 py-24 text-white overflow-hidden">
            {/* Subtil bakgrundseffekt */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto max-w-6xl px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* VÄNSTER: Info & Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Låt oss bygga något <br />
                            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                                fantastiskt tillsammans
                            </span>
                        </h2>
                        <p className="text-gray-400 text-lg mb-10 max-w-md">
                            Jag är alltid öppen för nya möjligheter, spännande projekt eller bara ett trevligt samtal om teknik.
                            Skicka ett meddelande så svarar jag så snart jag kan!
                        </p>

                        <div className="space-y-6">
                            {[
                                { icon: <FaEnvelope />, label: 'E-post', value: 'mikael.daskalou@hotmail.com', href: 'mailto:mikael.daskalou@hotmail.com' },
                                { icon: <FaLinkedin />, label: 'LinkedIn', value: 'Mikael Daskalou', href: 'https://www.linkedin.com/in/mikael-daskalou-46b424184/' },
                                { icon: <FaGithub />, label: 'GitHub', value: 'github.com/mdaskalou', href: 'https://github.com/mdaskalou' },
                                { icon: <FaMapMarkerAlt />, label: 'Plats', value: 'Göteborg, Sverige', href: null },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 group">
                                    <div className="w-12 h-12 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-lg">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase tracking-widest">{item.label}</p>
                                        {item.href ? (
                                            <a href={item.href} className="text-white hover:text-indigo-400 transition-colors font-medium">
                                                {item.value}
                                            </a>
                                        ) : (
                                            <p className="text-white font-medium">{item.value}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* HÖGER: Kontaktformulär */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="rounded-2xl bg-gray-900/50 p-8 border border-gray-800 backdrop-blur-sm shadow-2xl relative overflow-hidden"
                    >
                        <AnimatePresence mode="wait">
                            {status === 'SUCCESS' ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    className="h-full flex flex-col items-center justify-center text-center py-12"
                                >
                                    <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(34,197,94,0.2)]">
                                        <FaCheckCircle className="text-4xl" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2">Meddelande skickat!</h3>
                                    <p className="text-gray-400 max-w-xs mx-auto mb-8">
                                        Tack för att du hörde av dig, Mikael återkommer till dig så snart som möjligt.
                                    </p>
                                    <button
                                        onClick={() => setStatus('IDLE')}
                                        className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors"
                                    >
                                        Skicka ett till meddelande
                                    </button>
                                </motion.div>
                            ) : (
                                <motion.form
                                    key="form"
                                    onSubmit={handleSubmit}
                                    className="space-y-6"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-400 ml-1">Namn</label>
                                            <input
                                                required
                                                name="name"
                                                type="text"
                                                className="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all"
                                                placeholder="Ditt namn"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-400 ml-1">E-post</label>
                                            <input
                                                required
                                                name="email"
                                                type="email"
                                                className="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all"
                                                placeholder="din@epost.se"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-400 ml-1">Ämne</label>
                                        <input
                                            required
                                            name="subject"
                                            type="text"
                                            className="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all"
                                            placeholder="Vad gäller det?"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-400 ml-1">Meddelande</label>
                                        <textarea
                                            required
                                            name="message"
                                            rows={4}
                                            className="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all resize-none"
                                            placeholder="Hej Mikael, jag skulle vilja..."
                                        />
                                    </div>

                                    {status === 'ERROR' && (
                                        <div className="flex items-center gap-2 text-red-400 text-sm bg-red-400/10 p-3 rounded-lg border border-red-400/20">
                                            <FaExclamationCircle />
                                            <span>Något gick fel. Försök igen eller skicka ett direkt-mail.</span>
                                        </div>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={status === 'SUBMITTING'}
                                        className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-4 text-base font-bold text-white shadow-lg shadow-indigo-500/20 transition-all hover:shadow-indigo-500/40 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                                    >
                                        {status === 'SUBMITTING' ? (
                                            <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        ) : (
                                            <>
                                                <FaPaperPlane className="text-sm" />
                                                <span>Skicka meddelande</span>
                                            </>
                                        )}
                                    </button>
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}