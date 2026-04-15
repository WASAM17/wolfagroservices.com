/**
 * EmailJS configuration
 *
 * Production (Next.js) : variables injectées via NEXT_PUBLIC_* dans le dashboard
 *   de déploiement (Vercel, Netlify, etc.).
 *
 * Développement local (Vite) : Vite n'injecte pas process.env.NEXT_PUBLIC_*.
 *   Créer un fichier .env.local à la racine avec :
 *     NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_87m5p6p
 *     NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_f9dn2af
 *     NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=GZQd9UkWSZa5yFIh6
 *   Vite lira ces valeurs via import.meta.env si les clés sont aussi préfixées VITE_,
 *   sinon les fallbacks ci-dessous garantissent le bon fonctionnement en local.
 */

export const EMAILJS_SERVICE_ID: string =
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? 'service_87m5p6p';

export const EMAILJS_TEMPLATE_ID: string =
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? 'template_f9dn2af';

export const EMAILJS_PUBLIC_KEY: string =
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? 'GZQd9UkWSZa5yFIh6';
