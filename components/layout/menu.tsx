'use client';

import { Container } from '@/components/ui/container';
import { Logo } from '@/components/shared/logo';
import { MenuDesktop } from '@/components/layout/menu-desktop';
import { MenuMobile } from '@/components/layout/menu-mobile';
import { MenuOverlay } from '@/components/layout/menu-overlay';
import { NavMenuOverlayProvider } from '@/lib/contexts/nav-menu-overlay';
import Link from 'next/link';

export const Menu = () => {
  return (
    <NavMenuOverlayProvider>
      <Container className="flex  lg:px-10 bg-emerald-500 border-b border-neutral-950/25">
        <Link
          href="/"
          className="flex flex-col w-14 lg:w-20 bg-black items-center justify-center p-4 lg:p-0"
        >
          <Logo size={24} />
        </Link>
        <Container className="h-full w-full">
          <MenuDesktop />
          <MenuMobile />
        </Container>
      </Container>
      <MenuOverlay />
    </NavMenuOverlayProvider>
  );
};
