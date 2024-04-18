'use client';

import Image from 'next/image';
import { Clock } from 'lucide-react';

import { Container } from '@/components/ui/container';
import { Typography } from '@/components/ui/typography';
import { cn } from '@/lib/utils';
import useHoverState from '@/lib/hooks/use-hover-state';
import type { News } from '@/lib/types/news';

interface NewsCardProps {
  news: News;
}

export const NewsCard = ({ news }: NewsCardProps) => {
  const { hover, onMouseOver, onMouseLeave } = useHoverState(false);
  return (
    <Container
      className="relative bg-black h-full w-full grid grid-rows-[repeat(2,minmax(160px,1fr))] grid-cols-1 md:grid-rows-1 md:grid-cols-[repeat(2,minmax(160px,1fr))]"
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
    >
      <Typography className="uppercase text-xs font-bold px-2 py-1 bg-emerald-400 text-black absolute top-4 left-0">
        {news.type}
      </Typography>
      <Container className="relative bg-neutral-800">
        <Image
          src={news.img}
          alt={news.title}
          fill={true}
          className="object-cover"
        />
      </Container>
      <Container
        className={cn('p-4 flex flex-col justify-between card-animate', {
          'bg-black text-white': !hover,
          'bg-emerald-400 text-black': hover,
        })}
      >
        <Container className="space-y-2">
          <Typography className="uppercase text-neutral-500 text-xs lg:text-sm font-semibold">
            {news.newsPlatform}
          </Typography>
          <Typography className="text-md lg:text-lg font-bold line-clamp-2">
            {news.title}
          </Typography>
        </Container>
        <Container className="flex items-center text-neutral-500 space-x-2">
          <Clock size={12} />
          <Typography className="text-xs">{news.date}</Typography>
        </Container>
      </Container>
    </Container>
  );
};
