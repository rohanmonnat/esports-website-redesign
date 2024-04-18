import { EventContainer } from '@/components/event/event-container';
import { APIRoutes } from '@/lib/constants';
import type { Event as EventType } from '@/lib/types/event';

export const Event = async () => {
  const eventsResponse = await fetch(APIRoutes.events, {
    cache: 'no-store',
  });

  const events = (await eventsResponse.json()) as EventType[];

  return <EventContainer events={events} />;
};
