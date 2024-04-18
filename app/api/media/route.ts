import { getMedia } from '@/lib/data/handlers';

export const GET = async (request: Request) => {
  const media = await getMedia();

  return Response.json(media);
};
