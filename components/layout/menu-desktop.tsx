import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { MenuLinks } from '@/lib/constants';

export const MenuDesktop = () => {
  return (
    <Container
      className="w-full py-10 px-8 hidden lg:flex bg-emerald-500 items-center flex-start gap-x-8
        "
    >
      {MenuLinks.map((menuLink) => (
        <Link
          key={menuLink.href}
          className="relative uppercase text-md text-black font-semibold after:absolute after:-bottom-1 after:left-0 after:content-[' '] after:bg-black after:h-[2px] after:w-0 hover:after:w-full after:transition-all after:ease-in-out"
          href={menuLink.href}
        >
          {menuLink.title}
        </Link>
      ))}
    </Container>
  );
};
