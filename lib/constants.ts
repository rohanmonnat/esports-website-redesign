import type { PageLink } from '@/lib/types/link';

export const APIUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://esports-website-redesign.vercel.app/api'
    : 'http://localhost:3000/api';
export const APIRoutes = {
  events: APIUrl + '/events',
  media: APIUrl + '/media',
  news: APIUrl + '/news',
  tournaments: APIUrl + '/tournaments',
};

export const APKDownloadLinks = {
  android: '#',
  iphone: '#',
};

export const MenuLinks: PageLink[] = [
  {
    title: 'tournament',
    href: '/tournament',
  },
  {
    title: 'schedule',
    href: '/schedule',
  },
  {
    title: 'teams',
    href: '/teams',
  },
  {
    title: 'players',
    href: '/players',
  },
  {
    title: 'news',
    href: '/news',
  },
  {
    title: 'media',
    href: '/media',
  },
  {
    title: 'stats',
    href: '/stats',
  },
  {
    title: 'store',
    href: '/store',
  },
];

export const FooterLinks: PageLink[] = [
  {
    title: 'terms of service',
    href: '/terms_of_service',
  },
  {
    title: 'privacy policy',
    href: '/privacy_policy',
  },
  {
    title: 'cookie settings',
    href: '/cookie_settings',
  },
];

export const SocialLinks: PageLink[] = [
  {
    title: 'instagram',
    href: 'https://instagram.com',
  },
  {
    title: 'youtube',
    href: 'https://youtube.com',
  },
  {
    title: 'twitter',
    href: 'https://twitter.com',
  },
  {
    title: 'twitch',
    href: 'https://twitch.com',
  },
];
