import type { Event } from '@/lib/types/event';
import type { Media } from '@/lib/types/media';
import type { News } from '@/lib/types/news';
import type { Tournament } from '@/lib/types/tournament';

interface IDB {
  events: Event[];
  media: Media[];
  news: News[];
  tournaments: Tournament[];
}

export const db = (): IDB => ({
  events: [
    {
      id: '1',
      title: 'OPEC Qual Phase 1',
      phase: 'Playoff day 1',
      time: '4:00 PM',
      date: '26 May 2024',
      weekday: 'tuesday',
    },
    {
      id: '2',
      title: 'OPEC Qual Phase 1',
      phase: 'Playoff day 2',
      time: '4:00 PM',
      date: '27 May 2024',
      weekday: 'wednesday',
    },
    {
      id: '3',
      title: 'OPEC Qual Phase 1',
      phase: 'Playoff day 1',
      time: '2:00 PM',
      date: '28 May 2024',
      weekday: 'thursday',
    },
    {
      id: '4',
      title: '2024 LPI: Phase 1',
      phase: 'Week 2 day 1',
      time: '3:00 PM',
      date: '30 May 2024',
      weekday: 'saturday',
    },
    {
      id: '5',
      title: 'OPEC Qual Phase 1',
      phase: 'Finals day 1',
      time: '4:00 PM',
      date: '30 May 2024',
      weekday: 'saturday',
    },
    {
      id: '6',
      title: '2024 LPI: Phase 1',
      phase: 'Week 2 day 2',
      time: '4:00 PM',
      date: '31 May 2024',
      weekday: 'snunday',
    },
    {
      id: '7',
      title: 'OPEC Qual Phase 1',
      phase: 'Finals day 2',
      time: '4:00 PM',
      date: '31 May 2024',
      weekday: 'sunday',
    },
  ],

  media: [
    {
      img: '/pubg-halloween.webp',
      href: '/',
      eventType: 'regional',
      title: 'PUBG EMEA Championship: Spring Last Chance - Day 2',
      streamingPlatform: 'YouTube',
      date: '03-05-2024',
    },
    {
      img: '/pubg-state-squad.webp',
      href: '/',
      eventType: 'regional',
      title: 'PUBG Americas Series 3: Last Chance - Day 2',
      streamingPlatform: 'YouTube',
      date: '03-05-2024',
    },
    {
      img: '/two-shooters.webp',
      href: '/',
      eventType: 'regional',
      title: 'PUBG Weekly Series: Phase 1 W1D2',
      streamingPlatform: 'YouTube',
      date: '03-05-2024',
    },
  ],

  news: [
    {
      img: 'https://wallpapers.com/images/high/playerunknown-s-battlegrounds-miramar-map-ylhmtfha8vkxnbjb.webp',
      href: '/',
      type: 'general',
      title: 'Road to PGC: PUBG Exclusive 2024 Point distribution',
      date: '03-03-2024',
      newsPlatform: 'platform',
    },
    {
      img: 'https://wallpapers.com/images/high/playerunknown-s-battleground-soldier-in-motorcycle-0e6mqh3rzzaw8sty.webp',
      href: '/',
      type: 'general',
      title: 'PUBG Exclusive 2024 Roadmap',
      date: '03-03-2024',
      newsPlatform: 'platform',
    },
    {
      img: 'https://wallpapers.com/images/high/pubg-next-level-character-5vv67xxoyvsohi78.webp',
      href: '/',
      type: 'general',
      title: 'Introducing 2024 PUBG Exclusive Items',
      date: '03-03-2024',
      newsPlatform: 'platform',
    },
    {
      img: '/pubg-car-in-the-air.webp',
      href: '/',
      type: 'general',
      title: 'Disciplinary Action Update - Mercy Gaming',
      date: '03-03-2024',
      newsPlatform: 'platform',
    },
  ],

  tournaments: [
    {
      title: 'PUBG Exclusive 2024 Roadmap',
      description: 'Learn more about the PUBG Exclusive 2024 Season',
      date: '03-05-2024',
      img: 'https://images.unsplash.com/photo-1557461762-e08315322e3d?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      href: '/',
    },
    {
      title: 'PUBG Exclusive Global Partner Teams 2024',
      description:
        'The list of Partner Teams for PUBG Exclusive 2024 has been announced!',
      img: 'https://images.unsplash.com/photo-1626240130051-68871c71de47?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      date: '03-05-2024',
      href: '/',
    },
    {
      title: 'Introducing 2024 PUBG Exclusive Items!',
      description: "Let's take a moment to preview the spectacular PUBG Esp",
      date: '03-05-2024',
      img: 'https://images.unsplash.com/photo-1632523127466-ec657d4edcb5?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      href: '/',
    },
    {
      title: 'PEC: Spring - Tournament Format, Schedule And More!',
      description:
        "Here's what you need to know before PEC: Spring kicks off on Friday!",
      date: '03-05-2024',
      img: 'https://images.unsplash.com/photo-1564049489314-60d154ff107d?q=80&w=1783&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      href: '/',
    },
    {
      title: 'Road To PGC: PUBG Exclusive 2024 Point Distribution',
      description: 'Learn more about PGS and PGC points of the 2024 Season',
      date: '03-05-2024',
      img: 'https://images.unsplash.com/photo-1602901248692-06c8935adac0?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      href: '/',
    },
    {
      title: 'PEC: Spring - Participating Teams',
      description: 'Meet the teams competing in the PEC: Spring Playoffs!',
      date: '03-05-2024',
      img: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=1957&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      href: '/',
    },
    {
      title: 'PEC: Indie - Participating Players',
      description: 'Meet players competing in the PEC: Indie Playoffs!',
      date: '03-05-2024',
      img: 'https://images.unsplash.com/photo-1579912436616-f74ceee1ae07?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      href: '/',
    },
    {
      title: 'PEC: Spring - Talent Announcement',
      description:
        "Meet the cast of talent who'll be taking you through every step of the PEC: Spring action!",
      date: '03-05-2024',
      img: 'https://images.unsplash.com/photo-1616594418225-8721ec37fa82?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      href: '/',
    },
    {
      title: 'Introducing The PUBG EMEA Championship 2024 Roadmap',
      description:
        'The 2024 season for PUBG Exclusive in EMEA is just around the corner - here’s what you need to know!',
      date: '03-05-2024',
      img: 'https://images.unsplash.com/photo-1602673221577-0b56d7ce446b?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      href: '/',
    },
  ],
});
