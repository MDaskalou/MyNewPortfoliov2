import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import './swiper-style.css'; // <-- LÖSNINGEN: Lade till denna import
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Mikael Daskalou - Systemutvecklare .NET',
    description: 'Portfolio för en C# .NET systemutvecklare.',
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="sv" className="scroll-smooth">
        <body className={`${inter.className} bg-black text-white`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        </body>
        </html>
    );
}