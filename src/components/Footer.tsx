// components/Footer.tsx
import React from 'react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-gray-700 bg-gray-900 text-gray-400">
            <div className="container mx-auto max-w-5xl px-6 py-8 text-center">
                <p>
                    &copy; {currentYear} [Mikael Daskalou]. Byggd med Next.js & Tailwind CSS.
                </p>
                <div className="mt-4 flex justify-center space-x-6">
                    <a
                        href="https://www.linkedin.com/in/[din-profil]" // Byt ut denna!
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-indigo-400"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="https://github.com/[ditt-github-namn]" // Byt ut denna!
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-indigo-400"
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </footer>
    );
}