'use client';

import Link from 'next/link';
import { ChevronRight, X } from 'lucide-react';

import { Container } from '@/components/ui/container';
import { FlexContainer } from '@/components/ui/flex-container';
import { IconButton } from '@/components/ui/icon-button';
import { Socials } from '@/components/layout/socials';
import { Logo } from '@/components/shared/logo';
import { Typography } from '@/components/ui/typography';
import { MenuLinks } from '@/lib/constants';
import { useNavMenuOverlayContext } from '@/lib/contexts/nav-menu-overlay';
import { cn } from '@/lib/utils';
import type { PageLink } from '@/lib/types/link';

const MenuLink = ({ href, title }: PageLink) => {
  return (
    <Link href={href}>
      <FlexContainer className="justify-between items-center py-2">
        <Typography className="uppercase text-md font-semibold">
          {title}
        </Typography>
        <ChevronRight size={20} />
      </FlexContainer>
    </Link>
  );
};

export const MenuOverlay = () => {
  const { open, handleClose } = useNavMenuOverlayContext();

  return (
    open && (
      <FlexContainer
        direction="col"
        className={cn(
          'fixed z-50 inset-0 items-center bg-black text-white space-y-16 pt-8'
        )}
      >
        <IconButton
          onClick={handleClose}
          className="absolute top-2 left-2 bg-transparent text-emerald-400"
        >
          <X size={20} />
        </IconButton>
        <Container>
          <Logo />
        </Container>
        <FlexContainer
          direction="col"
          className="w-full text-black bg-emerald-500 px-4 divide-y divide-neutral-800/50"
        >
          {MenuLinks.map((menuLink) => (
            <MenuLink
              key={menuLink.href}
              title={menuLink.title}
              href={menuLink.href}
            />
          ))}
        </FlexContainer>
        <FlexContainer className="items-center justify-center">
          <Socials />
        </FlexContainer>
      </FlexContainer>
    )
  );
};
