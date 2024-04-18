import { Container } from '@/components/ui/container';
import { Typography } from '@/components/ui/typography';
import type { Event } from '@/lib/types/event';

interface EventCardProps {
  event: Event;
}

export const EventCard = ({ event }: EventCardProps) => {
  const { title, phase, date, weekday: wd, time } = event;
  const day = date.split(' ')[0];
  const month = date.split(' ')[1];
  const weekday = wd.slice(0, 3);

  return (
    <Container className="flex px-4 sm:px-6 md:px-8 py-4 flex-shrink-0 flex-grow-0 min-w-[200px] sm:w-[40%] md:w-[30%]  lg:w-1/4 xl:w-1/5">
      <Container className="flex flex-col items-center justify-center mr-4 sm:mr-6 md:mr-8">
        <Typography className="font-bold lg:text-lg sm:text-md text-[14px]">
          {day}
        </Typography>
        <Typography className="lg:text-sm md:text-xs text-[10px] text-neutral-500 font-semibold uppercase">
          {month}
        </Typography>
      </Container>
      <Container>
        <Typography className="lg:text-md sm:text-sm text-[12px] ">
          {title}
        </Typography>
        <Typography className="lg:text-sm sm:text-xs text-[10px] text-neutral-500 font-semibold">
          {phase}
        </Typography>
        <Typography className="lg:text-sm sm:text-xs text-[10px] text-emerald-500 font-semibold uppercase">
          {`${weekday} ${time}`}
        </Typography>
      </Container>
    </Container>
  );
};
