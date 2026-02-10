'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '@/context/TranslationContext';

type LanguageSwitcherProps = {
  variant?: 'default' | 'compact' | 'dropdown';
  className?: string;
};

export default function LanguageSwitcher({ variant = 'default', className = '' }: LanguageSwitcherProps) {
  const { locale, setLocale, t } = useTranslation();

  if (variant === 'compact') {
    return (
      <button
        onClick={() => setLocale(locale === 'sv' ? 'en' : 'sv')}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-800/50 border border-gray-700 hover:border-indigo-500/50 hover:bg-gray-800 transition-all duration-300 text-sm font-medium ${className}`}
        aria-label={locale === 'sv' ? 'Switch to English' : 'Byt till svenska'}
      >
        <span className="text-gray-300">{locale.toUpperCase()}</span>
      </button>
    );
  }

  if (variant === 'dropdown') {
    return (
      <div className={`relative group ${className}`}>
        <button
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700 hover:border-indigo-500/50 hover:bg-gray-800 transition-all duration-300 text-sm font-medium text-gray-300"
          aria-label="Select language"
        >
          <span className="text-lg">{locale === 'sv' ? '🇸🇪' : '🇬🇧'}</span>
          <span>{locale === 'sv' ? t.common.language.swedish : t.common.language.english}</span>
          <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div className="absolute top-full left-0 mt-2 w-full min-w-[140px] py-2 bg-gray-900 border border-gray-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
          <button
            onClick={() => setLocale('sv')}
            className={`flex items-center gap-2 w-full px-4 py-2 text-sm text-left hover:bg-gray-800 transition-colors ${
              locale === 'sv' ? 'text-indigo-400' : 'text-gray-300'
            }`}
          >
            <span>🇸🇪</span>
            <span>{t.common.language.swedish}</span>
            {locale === 'sv' && <span className="ml-auto text-indigo-400">✓</span>}
          </button>
          <button
            onClick={() => setLocale('en')}
            className={`flex items-center gap-2 w-full px-4 py-2 text-sm text-left hover:bg-gray-800 transition-colors ${
              locale === 'en' ? 'text-indigo-400' : 'text-gray-300'
            }`}
          >
            <span>🇬🇧</span>
            <span>{t.common.language.english}</span>
            {locale === 'en' && <span className="ml-auto text-indigo-400">✓</span>}
          </button>
        </div>
      </div>
    );
  }

  // Default toggle variant
  return (
    <div className={`flex items-center gap-1 p-1 rounded-xl bg-gray-800/50 border border-gray-700 ${className}`}>
      <motion.button
        onClick={() => setLocale('sv')}
        className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
          locale === 'sv' ? 'text-white' : 'text-gray-400 hover:text-gray-200'
        }`}
      >
        {locale === 'sv' && (
          <motion.div
            layoutId="activeLanguage"
            className="absolute inset-0 bg-indigo-600 rounded-lg"
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          />
        )}
        <span className="relative z-10">🇸🇪</span>
        <span className="relative z-10">SV</span>
      </motion.button>
      <motion.button
        onClick={() => setLocale('en')}
        className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
          locale === 'en' ? 'text-white' : 'text-gray-400 hover:text-gray-200'
        }`}
      >
        {locale === 'en' && (
          <motion.div
            layoutId="activeLanguage"
            className="absolute inset-0 bg-indigo-600 rounded-lg"
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          />
        )}
        <span className="relative z-10">🇬🇧</span>
        <span className="relative z-10">EN</span>
      </motion.button>
    </div>
  );
}
