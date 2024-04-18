'use client';

import { useRef, useEffect } from 'react';
import Link from 'next/link';

import { Container } from '@/components/ui/container';
import { Typography } from '@/components/ui/typography';
import { IconButton } from '@/components/ui/icon-button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTournamentSlideshowContext } from '@/lib/contexts/tournament-slideshow';

interface TournamentSlideshowCardProps {
  showProgress: boolean;
}

export const TournamentSlideshowCard = ({
  showProgress,
}: TournamentSlideshowCardProps) => {
  const { tournament, prev, next, totalSlides, activeSlide } =
    useTournamentSlideshowContext();
  const progressRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    const element = progressRef.current;

    if (!element) return;

    element.style.animationName = 'none';

    requestAnimationFrame(() => {
      setTimeout(() => {
        element.style.animationName = '';
      }, 0);
    });
  }, [activeSlide]);

  return (
    <Container className="relative p-8 flex flex-col space-y-4 justify-between bg-black text-white h-full w-full">
      {showProgress && (
        <Container className="absolute lg:hidden top-0 left-0 w-full bg-black">
          <Container
            ref={progressRef}
            className="h-1 bg-emerald-500 animate-linear-progress"
          />
        </Container>
      )}
      <Container className="space-y-4">
        <Link href={tournament.href}>
          <Typography className="text-2xl lg:text-4xl font-bold hover:underline hover:decoration-2 lg:hover:decoration-4 line-clamp-2 sm:line-clamp-3">
            {tournament.title}
          </Typography>
        </Link>
        <Typography className="text-neutral-500 text-sm line-clamp-2">
          {tournament.description}
        </Typography>
      </Container>
      <Container className="flex justify-between items-end">
        <Container>
          <IconButton
            className="border-r-0  lg:h-16 lg:w-16 hover:bg-emerald-950 hover:text-emerald-400 smooth-color-animate"
            onClick={prev}
          >
            <ChevronLeft />
          </IconButton>
          <IconButton
            className=" lg:h-16 lg:w-16 bg-emerald-500 text-black hover:bg-neutral-200 smooth-color-animate"
            onClick={next}
          >
            <ChevronRight />
          </IconButton>
        </Container>
        <Typography className="text-sm text-neutral-500">
          <span className="text-emerald-400">{activeSlide + 1}</span>
          {' | '}
          <span>{totalSlides}</span>
        </Typography>
      </Container>
    </Container>
  );
};
