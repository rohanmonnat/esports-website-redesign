'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';

import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { EventCard } from '@/components/event/event-card';
import type { Event } from '@/lib/types/event';

interface EventContainerProps {
  events: Event[];
}

export const EventContainer = ({ events }: EventContainerProps) => {
  return (
    <Container className="bg-black flex relative divide-x-[1px] divide-neutral-600/25 overflow-x-clip w-full h-full">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
      {/* <Container className="absolute h-full right-0 flex flex-col w-10 divide-y-[1px] divide-neutral-700/50 border-l border-neutral-700/50">
          <Button className="h-full text-neutral-500 hover:text-white transition-colors ease-in-out">
            <ChevronLeft size={16} />
          </Button>
          <Button className="h-full text-neutral-500 hover:text-white transition-colors ease-in-out">
            <ChevronRight size={16} />
          </Button>
        </Container> */}
    </Container>
  );
};
