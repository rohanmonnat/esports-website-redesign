'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Clock, Play } from 'lucide-react';

import useHoverState from '@/lib/hooks/use-hover-state';
import { Container } from '@/components/ui/container';
import { Typography } from '@/components/ui/typography';
import { cn } from '@/lib/utils';
import type { Media } from '@/lib/types/media';

interface MediaCardProps {
  media: Media;
}

export const MediaCard = ({ media }: MediaCardProps) => {
  const { hover, onMouseOver, onMouseLeave } = useHoverState(false);
  return (
    <Link
      href={media.href}
      className="relative flex flex-col h-fit lg:h-[400px] w-full sm:w-1/2 md:w-1/3 shadow-2xl"
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseLeave}
    >
      <Typography className="z-10 absolute left-0 top-2 uppercase px-2 py-1 text-xs font-bold bg-black text-emerald-400">
        {media.eventType}
      </Typography>
      <Container
        className={cn(
          'relative aspect-video sm:aspect-[4/3] min-h-[200px] w-full transition-all duration-300 ease-in-out',
          {
            'brightness-90': !hover,
            'brightness-100': hover,
          }
        )}
      >
        <Image
          src={media.img}
          alt="media video"
          className="object-cover"
          fill={true}
        />
      </Container>
      <Container
        className={cn([
          'h-full p-4 flex flex-col font-semibold gap-y-4 transition-colors duration-300 ease-in-out',
          {
            'bg-black text-white': !hover,
            'bg-emerald-400 text-black': hover,
          },
        ])}
      >
        <Container className="relative space-y-2">
          <Container
            className={cn(
              'absolute flex items-center justify-center bottom-0 right-0 rounded-full h-10 w-10 md:h-12 md:w-12 transition-colors duration-300 ease-in-out',
              {
                'bg-gradient-to-br from-black to-emerald-800 text-white': hover,
                'bg-gradient-to-br from-emerald-500/75 to-emerald-400 text-black':
                  !hover,
              }
            )}
          >
            <Play size={20} />
          </Container>
          <Typography className="uppercase text-sm text-neutral-600">
            {media.streamingPlatform}
          </Typography>
          <Typography className="h-12 font-semibold line-clamp-2">
            {media.title}
          </Typography>
          <Container className="flex gap-x-1 text-neutral-600 items-center pb-8">
            <Clock size={12} />
            <Typography className="text-xs">{media.date}</Typography>
          </Container>
        </Container>
      </Container>
    </Link>
  );
};
