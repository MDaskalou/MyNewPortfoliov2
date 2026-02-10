'use client';

import React, { createContext, useContext, useState, useCallback, useEffect, ReactNode } from 'react';
import locales, { Locale, Translations } from '@/locales';

type TranslationContextType = {
  locale: Locale;
  t: Translations;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
};

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

const LOCALE_STORAGE_KEY = 'preferred-locale';

type TranslationProviderProps = {
  children: ReactNode;
  defaultLocale?: Locale;
};

export function TranslationProvider({ children, defaultLocale = 'sv' }: TranslationProviderProps) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);
  const [isHydrated, setIsHydrated] = useState(false);

  // Load saved locale from localStorage on mount
  useEffect(() => {
    const savedLocale = localStorage.getItem(LOCALE_STORAGE_KEY) as Locale | null;
    if (savedLocale && (savedLocale === 'sv' || savedLocale === 'en')) {
      // Use queueMicrotask to avoid synchronous setState warning
      queueMicrotask(() => setLocaleState(savedLocale));
    }
    setIsHydrated(true);
  }, []);

  // Save locale to localStorage when it changes
  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem(LOCALE_STORAGE_KEY, newLocale);
  }, []);

  // Toggle between Swedish and English
  const toggleLocale = useCallback(() => {
    const newLocale = locale === 'sv' ? 'en' : 'sv';
    setLocale(newLocale);
  }, [locale, setLocale]);

  // Get translations for current locale
  const t = locales[locale];

  // Prevent hydration mismatch by not rendering until client-side
  if (!isHydrated) {
    return (
      <TranslationContext.Provider value={{ locale: defaultLocale, t: locales[defaultLocale], setLocale, toggleLocale }}>
        {children}
      </TranslationContext.Provider>
    );
  }

  return (
    <TranslationContext.Provider value={{ locale, t, setLocale, toggleLocale }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
}

// Convenience hooks for specific sections
export function useNavbarTranslation() {
  const { t, ...rest } = useTranslation();
  return { t: t.navbar, ...rest };
}

export function useHeroTranslation() {
  const { t, ...rest } = useTranslation();
  return { t: t.hero, ...rest };
}

export function useAboutTranslation() {
  const { t, ...rest } = useTranslation();
  return { t: t.about, ...rest };
}

export function useProjectsTranslation() {
  const { t, ...rest } = useTranslation();
  return { t: t.projects, ...rest };
}

export function useSkillsTranslation() {
  const { t, ...rest } = useTranslation();
  return { t: t.skills, ...rest };
}

export function useExperienceTranslation() {
  const { t, ...rest } = useTranslation();
  return { t: t.experience, ...rest };
}

export function useContactTranslation() {
  const { t, ...rest } = useTranslation();
  return { t: t.contact, ...rest };
}

export function useGithubTranslation() {
  const { t, ...rest } = useTranslation();
  return { t: t.github, ...rest };
}

export function useFooterTranslation() {
  const { t, ...rest } = useTranslation();
  return { t: t.footer, ...rest };
}

export function useCommonTranslation() {
  const { t, ...rest } = useTranslation();
  return { t: t.common, ...rest };
}
