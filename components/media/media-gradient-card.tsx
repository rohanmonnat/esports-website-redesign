'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Clock, Play } from 'lucide-react';

import { Container } from '@/components/ui/container';
import { Typography } from '@/components/ui/typography';
import useHoverState from '@/lib/hooks/use-hover-state';
import { cn } from '@/lib/utils';
import type { Media } from '@/lib/types/media';

interface GradientMediaCardProps {
  media: Media;
}

export const GradientMediaCard = ({ media }: GradientMediaCardProps) => {
  const { hover, onMouseOver, onMouseLeave } = useHoverState();

  return (
    <Link
      href={media.href}
      className="relative hidden lg:flex flex-col h-[400px] w-full lg:w-[40%] "
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseLeave}
    >
      <Typography className="z-10 absolute left-0 top-2 uppercase px-2 py-1 text-xs font-semibold bg-black text-emerald-400">
        {media.eventType}
      </Typography>
      <Container
        className={cn(
          'relative aspect-[5/3] h-full w-full transition-all duration-300 ease-in-out',
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
          'w-full absolute bottom-0 p-4 flex flex-col font-semibold gap-y-4 transition-colors duration-300 ease-in-out bg-gradient-to-b',
          {
            'from-transparent to-black': !hover,
            'from-transparent to-emerald-400': hover,
          },
        ])}
      >
        <Container className="relative space-y-2">
          <Container
            className={cn(
              'absolute flex items-center justify-center bottom-0 right-0 rounded-full h-12 w-12 md:h-16 md:w-16 transition-colors duration-300 ease-in-out',
              {
                'bg-gradient-to-br from-black to-emerald-800 text-white': hover,
                'bg-gradient-to-br from-emerald-500/75 to-emerald-400 text-black':
                  !hover,
              }
            )}
          >
            <Play size={28} />
          </Container>
          <Typography className="uppercase text-sm text-neutral-500">
            {media.streamingPlatform}
          </Typography>
          <Typography className="font-semibold line-clamp-1">
            {media.title}
          </Typography>
          <Container className="flex gap-x-1 text-neutral-500 items-center">
            <Clock size={12} />
            <Typography className="text-xs">{media.date}</Typography>
          </Container>
        </Container>
      </Container>
    </Link>
  );
};
