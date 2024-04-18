import { db } from '@/lib/db';
import { promisify } from '@/lib/utils';
import type { Event } from '@/lib/types/event';
import type { Media } from '@/lib/types/media';
import type { News } from '@/lib/types/news';
import type { Tournament } from '@/lib/types/tournament';

const DEFAULT_TIMEOUT = 1;

export const getEvents = promisify<Event[]>(() => {
  return db().events;
}, DEFAULT_TIMEOUT);

export const getEventById = promisify<Event | undefined>((id: string) => {
  return db().events.find((event: Event) => event.id === id);
}, DEFAULT_TIMEOUT);

export const getMedia = promisify<Media[]>(() => {
  return db().media;
}, DEFAULT_TIMEOUT);

export const getNews = promisify<News[]>(() => {
  return db().news;
}, DEFAULT_TIMEOUT);

export const getTournaments = promisify<Tournament[]>(() => {
  return db().tournaments;
});
