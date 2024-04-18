'use client';

import { MenuIcon } from 'lucide-react';
import { FlexContainer } from '@/components/ui/flex-container';
import { IconButton } from '@/components/ui/icon-button';
import { useNavMenuOverlayContext } from '@/lib/contexts/nav-menu-overlay';

export const MenuMobile = () => {
  const { handleOpen } = useNavMenuOverlayContext();

  return (
    <FlexContainer className="py-2 px-4 justify-end lg:hidden">
      <IconButton
        onClick={handleOpen}
        className="border-0 p-1 bg-emerald-500 text-black hover:bg-black hover:text-emerald-400 smooth-color-animate"
      >
        <MenuIcon className="h-6 w-6" />
      </IconButton>
    </FlexContainer>
  );
};
