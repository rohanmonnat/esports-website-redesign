import { getEventById, getEvents } from '@/lib/data/handlers';

export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  if (id !== undefined && id !== null) {
    const event = await getEventById(id);

    if (event) {
      return Response.json(event);
    }

    return Response.json(
      {
        error: 'Event not found',
      },
      { status: 404 }
    );
  }

  const events = await getEvents();

  return Response.json(events);
};
