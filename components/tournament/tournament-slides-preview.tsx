'use client';

import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { Typography } from '@/components/ui/typography';
import { useTournamentSlideshowContext } from '@/lib/contexts/tournament-slideshow';
import useHoverState from '@/lib/hooks/use-hover-state';
import { cn } from '@/lib/utils';
import type { Tournament } from '@/lib/types/tournament';

interface TournamentSlideshowPreviewCardProps {
  tournament: Tournament;
  slide: number;
  activeSlide: number;
  onClick: () => void;
}

const TournamentSlideshowMiniPreviewCard = ({
  tournament,
  slide,
  activeSlide,
  onClick,
}: TournamentSlideshowPreviewCardProps) => {
  const isActive = slide === activeSlide;
  const { hover, onMouseLeave, onMouseOver } = useHoverState(false);
  return (
    <Button
      className={cn(
        'relative flex flex-col justify-center items-start p-4 lg:p-6 col-span-1 row-span-1 space-y-1 cursor-pointer smooth-color-animate',
        {
          'bg-emerald-500 text-black': !hover,
          'bg-black text-white': hover,
        }
      )}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      {isActive && (
        <Container
          className={cn(
            'absolute top-0 left-0 w-full bg-black smooth-color-animate',
            {
              'bg-emerald-500': !hover,
              'bg-black': hover,
            }
          )}
        >
          <Container
            className={cn(
              'h-1 bg-emerald-500 animate-linear-progress smooth-color-animate',
              {
                'bg-black': !hover,
                'bg-emerald-500': hover,
              }
            )}
          />
        </Container>
      )}
      <Typography className="text-sm font-semibold line-clamp-1 text-left">
        {tournament.title}
      </Typography>
      <Typography
        className={cn('text-xs line-clamp-1 smooth-color-animate text-left', {
          'text-neutral-500': !hover,
          'text-emerald-500': hover,
        })}
      >
        {tournament.description}
      </Typography>
    </Button>
  );
};

export const TournamentSlideshowPreview = () => {
  const blockSize = 4;
  const { activeSlide, totalSlides, tournaments, goTo } =
    useTournamentSlideshowContext();

  const totalBlocks =
    totalSlides % blockSize
      ? Math.floor(totalSlides / blockSize) + 1
      : Math.floor(totalSlides / blockSize);
  const activeBlock = Math.floor(activeSlide / blockSize) + 1;
  const isLastBlock = activeBlock === totalBlocks;
  const blockStart = (activeBlock - 1) * blockSize;
  const slideRange = isLastBlock
    ? totalSlides - blockSize * (activeBlock - 1)
    : blockSize;
  const blockEnd = blockStart + slideRange;
  const slides = tournaments.slice(blockStart, blockEnd);

  return (
    <Container className="w-full h-full grid md:grid-rows-1 md:grid-cols-3 lg:grid-cols-4 divide-x-[1px] divide-neutral-800/25 ">
      {slides.map((tournament, idx) => (
        <TournamentSlideshowMiniPreviewCard
          key={tournament.title}
          tournament={tournament}
          slide={idx + blockStart}
          activeSlide={activeSlide}
          onClick={() => goTo(idx + blockStart)}
        />
      ))}
    </Container>
  );
};
