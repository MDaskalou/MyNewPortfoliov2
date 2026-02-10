import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import './swiper-style.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { TranslationProvider } from '@/context/TranslationContext';

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
        <TranslationProvider defaultLocale="sv">
            <Navbar />
            <main>{children}</main>
            <Footer />
        </TranslationProvider>
        </body>
        </html>
    );
}