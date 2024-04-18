import { getTournaments } from '@/lib/data/handlers';

export const GET = async (request: Request) => {
  const tournaments = await getTournaments();

  return Response.json(tournaments);
};
