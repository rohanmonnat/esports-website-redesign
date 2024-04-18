'use client';

import { Container } from '@/components/ui/container';
import { TournamentSlideshowImageContainer } from '@/components/tournament/tournament-slideshow-image-container';
import { TournamentSlideshowCard } from '@/components/tournament/tournament-slide-card';
import { TournamentSlideshowPreview } from '@/components/tournament/tournament-slides-preview';
import { TournamentSlideshowContextProvider } from '@/lib/contexts/tournament-slideshow';
import type { Tournament } from '@/lib/types/tournament';

interface TournamentSlideshowProps {
  tournaments: Tournament[];
}

export const TournamentSlideshowContainer = ({
  tournaments,
}: TournamentSlideshowProps) => {
  return (
    <Container className="h-full w-full">
      <TournamentSlideshowContextProvider tournaments={tournaments}>
        <Container className="w-full grid grid-cols-1 grid-rows-2 h-[500px] md:h-[400px] lg:h-[600px] md:grid-cols-6 md:grid-rows-6">
          <Container className="bg-neutral-800 row md:col-span-full md:row-span-full overflow-clip">
            <TournamentSlideshowImageContainer />
          </Container>
          <Container className="md:row-start-3 md:row-span-4 md:col-start-1 md:col-span-3 lg:col-start-1 lg:col-span-2">
            <TournamentSlideshowCard showProgress={true} />
          </Container>
          <Container className="hidden lg:grid lg:row-start-6 lg:row-span-1 lg:col-start-3 lg:col-span-4 bg-black">
            <TournamentSlideshowPreview />
          </Container>
        </Container>
      </TournamentSlideshowContextProvider>
    </Container>
  );
};
