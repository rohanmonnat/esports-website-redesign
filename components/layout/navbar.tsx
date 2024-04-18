import { Container } from '@/components/ui/container';
import { Menu } from '@/components/layout/menu';
import { Event } from '@/components/layout/event';

export const Navbar = () => {
  return (
    <Container className="flex flex-col sticky top-0 w-full z-40 h-[140px] lg:h-[200px]">
      <Event />
      <Menu />
    </Container>
  );
};
