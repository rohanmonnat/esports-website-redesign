import { getNews } from '@/lib/data/handlers';

export const GET = async (request: Request) => {
  const news = await getNews();

  return Response.json(news);
};
