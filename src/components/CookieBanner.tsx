'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';
import { useTranslation } from '@/i18n';

const STORAGE_KEY = 'wolf-cookie-consent';

type ConsentValue = 'accepted' | 'rejected';

const CookieBanner = () => {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show only when no previous choice is stored
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      // Small delay so it doesn't flash on first paint
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleConsent = (value: ConsentValue) => {
    localStorage.setItem(STORAGE_KEY, value);
    setVisible(false);
  };

  if (!visible) return null;

  const l = t.legal;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[60] px-4 pb-4 md:px-6 md:pb-6 md:left-auto md:right-6 md:max-w-md"
      role="dialog"
      aria-label="Gestion des cookies"
    >
      {/* On mobile: sits above the sticky RFQ bar (which is lg:hidden bottom-0 z-40).
          On desktop: floating card bottom-right */}
      <div className="lg:hidden h-14" aria-hidden="true" />

      <div className="bg-wolf-dark-green text-white rounded-xl shadow-2xl border border-white/10 overflow-hidden">
        {/* Top bar */}
        <div className="flex items-start justify-between gap-3 px-5 pt-5 pb-4">
          <div className="flex-1">
            <p className="text-xs font-semibold text-wolf-sand uppercase tracking-widest mb-2">
              🍪 Cookies
            </p>
            <p className="text-white/80 text-sm leading-relaxed">{l.bannerText}</p>
          </div>
          <button
            onClick={() => handleConsent('rejected')}
            className="text-white/40 hover:text-white transition-colors mt-0.5 flex-shrink-0"
            aria-label="Fermer"
          >
            <X size={16} />
          </button>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 px-5 pb-5 flex-wrap">
          <button
            onClick={() => handleConsent('accepted')}
            className="flex-1 min-w-0 bg-wolf-green text-white text-sm font-semibold py-2.5 px-4 rounded hover:bg-wolf-green/90 transition-colors"
          >
            {l.bannerAccept}
          </button>
          <button
            onClick={() => handleConsent('rejected')}
            className="flex-1 min-w-0 border border-white/30 text-white text-sm font-semibold py-2.5 px-4 rounded hover:border-white transition-colors"
          >
            {l.bannerReject}
          </button>
          <Link
            href="/politique-cookies"
            className="w-full text-center text-wolf-sand/80 hover:text-wolf-sand text-xs py-1 transition-colors"
          >
            {l.bannerMore}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;

/** Utility: read stored consent outside React */
export const getStoredConsent = (): ConsentValue | null => {
  if (typeof window === 'undefined') return null;
  const v = localStorage.getItem(STORAGE_KEY);
  return v === 'accepted' || v === 'rejected' ? v : null;
};
