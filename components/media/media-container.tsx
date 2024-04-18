'use client';

import useMediaQuery from '@/lib/hooks/use-media-query';
import { Container } from '@/components/ui/container';
import { GradientMediaCard } from '@/components/media/media-gradient-card';
import { MediaCard } from '@/components/media/media-card';
import type { Media } from '@/lib/types/media';

interface MediaContainerProps {
  mediaList: Media[];
}

export const MediaContainer = ({ mediaList }: MediaContainerProps) => {
  const firstMedia = mediaList[0];
  const { isDesktop } = useMediaQuery();
  const restMedia = isDesktop ? mediaList.slice(1) : mediaList;

  return (
    <Container className="w-full flex gap-8 flex-col sm:flex-row sm:overflow-x-auto">
      {isDesktop && <GradientMediaCard media={firstMedia} />}
      {restMedia.map((media) => (
        <MediaCard key={media.title} media={media} />
      ))}
    </Container>
  );
};
