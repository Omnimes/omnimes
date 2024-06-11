import {Pathnames} from 'next-intl/navigation';

export const locales = ['en', 'pl', 'de'] as const;

export const pathnames = {
  '/': '/',
  '/admin': '/admin',
  '/dashboard': '/dashboard',

  '/faq': '/faq',
  '/blog': '/blog',
  '/login': '/login',
  '/register': {
    en: '/register',
    de: '/register',
    pl: '/rejestracja'
  },
  '/blog/[slug]': {
    en: '/blog/[slug]',
    de: '/blog/[slug]',
    pl: '/blog/[slug]'
  },
  '/about': {
    en: '/about',
    de: '/ueber-uns',
    pl: '/o-nas'
  },
  '/project': {
    en: '/project',
    de: '/projekt',
    pl: '/projekt'
  },
  '/project/monitoring': "/project/monitoring",
  '/project/dashboard': "/project/dashboard",
  '/project/gpt-assistant': "/project/gpt-assistant",
  '/project/planogram': "/project/planogram",
  '/project/history-events': {
    en: "/project/history-events",
    de: "/project/historische-ereignisse",
    pl: "/project/historia-zdarzen",
  },
  '/project/schedule': {
    en: "/project/schedule",
    de: "/project/zeitplan",
    pl: "/project/harmonogram",
  },
  '/project/analysis': {
    en: "/project/analysis",
    de: "/project/analyse",
    pl: "/project/analiza",
  },
  '/project/report-creator': {
    en: "/project/report-creator",
    de: "/project/berichtsersteller",
    pl: "/project/kreator-raportow",
  },
  '/project/configurator': {
    en: "/project/configurator",
    de: "/project/konfigurator",
    pl: "/project/konfigurator",
  },
  '/project/administration': {
    en: "/project/administration",
    de: "/project/verwaltung",
    pl: "/project/administracja",
  },
  '/project/installation': {
    en: "/project/installation",
    de: "/project/installation",
    pl: "/project/instalacja",
  },
  '/project/subscription': {
    en: "/project/subscription",
    de: "/project/abonnement",
    pl: "/project/subskrypcja",
  },
  '/offer': {
    en: '/offer',
    de: '/angebot',
    pl: '/oferta'
  },
  '/contact': {
    en: '/contact',
    de: '/kontakt',
    pl: '/kontakt'
  },
  '/privacy-policy': {
    en: '/privacy-policy',
    de: '/datenschutzrichtlinie',
    pl: '/polityka-prywatnosci'
  },
  '/tags': {
    en: '/tags',
    de: '/stichworte',
    pl: '/tagi',
  },
  '/tags/[tag]': {
    en: '/tags/[tag]',
    de: '/stichworte/[tag]',
    pl: '/tagi/[tag]'
  },
  '/terms': {
    en: '/terms',
    de: '/regelwerk',
    pl: '/regulamin',
  },
  '/resources': {
    en: '/resources',
    de: '/ressourcen',
    pl: '/zasoby',
  },
  '/gallery': {
    en: '/gallery',
    de: '/galerie',
    pl: '/galeria',
  },
} satisfies Pathnames<typeof locales>;

// Use the default: `always`
export const localePrefix = `always`;
export const localeDetection = true;

export type AppPathnames = keyof typeof pathnames;