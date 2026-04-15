'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from '@/i18n';

const SLIDES = [
  {
    src: '/lovable-uploads/banniere-1.jpeg',
    overlay: 'bg-wolf-dark-green/65',
  },
  {
    src: '/lovable-uploads/banniere-2.jpeg',
    overlay: 'bg-wolf-dark-green/60',
  },
  {
    src: '/lovable-uploads/banniere-3.jpeg',
    overlay: 'bg-wolf-dark-green/60',
  },
  {
    src: '/lovable-uploads/banniere-4.jpeg',
    overlay: 'bg-wolf-dark-green/65',
  },
  {
    src: '/lovable-uploads/banniere-5.jpeg',
    overlay: 'bg-wolf-dark-green/60',
  },
];

const INTERVAL = 5000; // 5 seconds

const HeroSlider = () => {
  const { t } = useTranslation();
  const h = t.home;
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [transitioning, setTransitioning] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = useCallback((index: number) => {
    if (transitioning) return;
    setTransitioning(true);
    setTimeout(() => {
      setCurrent(index);
      setTransitioning(false);
    }, 50);
  }, [transitioning]);

  const next = useCallback(() => {
    goTo((current + 1) % SLIDES.length);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + SLIDES.length) % SLIDES.length);
  }, [current, goTo]);

  // Autoplay
  useEffect(() => {
    if (paused) return;
    timerRef.current = setTimeout(next, INTERVAL);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [current, paused, next]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [next, prev]);

  // Touch swipe
  const touchStart = useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStart.current === null) return;
    const diff = touchStart.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
    touchStart.current = null;
  };

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      aria-label="Carrousel hero"
    >
      {/* Slides */}
      {SLIDES.map((slide, i) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            i === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
          aria-hidden={i !== current}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-[1.02] transition-transform duration-[8000ms] ease-out"
            style={{
              backgroundImage: `url('${slide.src}')`,
              transform: i === current ? 'scale(1.0)' : 'scale(1.04)',
            }}
          />
          <div className={`absolute inset-0 ${slide.overlay}`} />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-32 md:pt-40">
        <div className="max-w-3xl">
          <span
            className="inline-block text-wolf-sand text-xs font-semibold tracking-widest uppercase mb-6 opacity-0 animate-fade-in"
            style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
          >
            {h.heroLabel}
          </span>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight opacity-0 animate-fade-up"
            style={{ animationDelay: '0.35s', animationFillMode: 'forwards' }}
          >
            {h.heroTitle}{' '}
            <span className="text-wolf-sand">{h.heroHighlight}</span>
          </h1>
          <p
            className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl leading-relaxed opacity-0 animate-fade-up"
            style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
          >
            {h.heroDesc}
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-up"
            style={{ animationDelay: '0.65s', animationFillMode: 'forwards' }}
          >
            <Link
              href="/demande-offre"
              className="inline-flex items-center justify-center bg-wolf-sand text-white font-semibold px-8 py-4 rounded transition-colors hover:bg-wolf-sand/90 text-sm"
            >
              {h.heroCta1}
            </Link>
            <Link
              href="/produits"
              className="inline-flex items-center justify-center border-2 border-white/40 text-white font-semibold px-8 py-4 rounded transition-colors hover:border-white hover:bg-white/10 text-sm gap-2"
            >
              {h.heroCta2} <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* Arrow controls (desktop) */}
      <button
        onClick={prev}
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-30 hidden md:flex items-center justify-center w-11 h-11 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors backdrop-blur-sm"
        aria-label="Slide précédent"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-30 hidden md:flex items-center justify-center w-11 h-11 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors backdrop-blur-sm"
        aria-label="Slide suivant"
      >
        <ChevronRight size={20} />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2.5">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
            className={`transition-all duration-300 rounded-full ${
              i === current
                ? 'w-7 h-2 bg-wolf-sand'
                : 'w-2 h-2 bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 z-30 bg-white/10">
        <div
          key={current}
          className="h-full bg-wolf-sand origin-left"
          style={{
            animation: paused ? 'none' : `progress ${INTERVAL}ms linear forwards`,
          }}
        />
      </div>

      <style>{`
        @keyframes progress {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
      `}</style>
    </section>
  );
};

export default HeroSlider;
