'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { fr } from './locales/fr';
import { en } from './locales/en';
import { zh } from './locales/zh';
import { de } from './locales/de';
import type { TranslationSchema } from './locales/fr';

export type Locale = 'fr' | 'en' | 'zh' | 'de';

const locales: Record<Locale, TranslationSchema> = { fr, en, zh, de };

export const LOCALE_LABELS: Record<Locale, string> = {
  fr: 'FR',
  en: 'EN',
  zh: '中文',
  de: 'DE',
};

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: TranslationSchema;
}

const LanguageContext = createContext<LanguageContextType>({
  locale: 'fr',
  setLocale: () => {},
  t: fr,
});

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  // Start with 'fr' on server; hydrate from localStorage on client
  const [locale, setLocaleState] = useState<Locale>('fr');

  useEffect(() => {
    try {
      const stored = localStorage.getItem('wolf-locale');
      if (stored && stored in locales) {
        setLocaleState(stored as Locale);
      }
    } catch {}
  }, []);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    try {
      localStorage.setItem('wolf-locale', l);
    } catch {}
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t: locales[locale] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => useContext(LanguageContext);
