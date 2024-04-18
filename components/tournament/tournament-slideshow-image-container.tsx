'use client';

import Image from 'next/image';
import { Container } from '@/components/ui/container';
import { useTournamentSlideshowContext } from '@/lib/contexts/tournament-slideshow';

export const TournamentSlideshowImageContainer = () => {
  const { tournament } = useTournamentSlideshowContext();
  return (
    <Container className="relative h-full w-full">
      <Image
        src={tournament.img}
        alt={tournament.title}
        fill={true}
        className="object-cover brightness-90"
      />
    </Container>
  );
};
