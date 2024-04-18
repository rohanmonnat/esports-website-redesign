import { Container } from '@/components/ui/container';
import type { News } from '@/lib/types/news';
import { NewsCard } from './news-card';
import Link from 'next/link';

interface NewsContainerProps {
  news: News[];
}

export const NewsContainer = ({ news }: NewsContainerProps) => {
  return (
    <Container className="grid grid-cols-[repeat(1,minmax(280px,1fr))] md:grid-cols-[repeat(2,minmax(280px,1fr))] auto-rows-[minmax(180px,1fr)] w-full  gap-8">
      {news.map((item) => (
        <Link key={item.title} href={item.href}>
          <NewsCard news={item} />
        </Link>
      ))}
    </Container>
  );
};
