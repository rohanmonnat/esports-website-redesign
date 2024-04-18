import { createContext, ReactNode, useContext, useState } from 'react';

interface ContextProps {
  open: boolean;
  handleOpen: () => void;
  handleClose: () => void;
}

interface ProviderProps {
  children: ReactNode;
}

export const NavMenuOverlayContext = createContext<null | ContextProps>(null);

export const useNavMenuOverlayContext = () => {
  const value = useContext(NavMenuOverlayContext);
  if (!value) {
    throw new Error('menu overlay context not found');
  }

  return value;
};

const Provider = NavMenuOverlayContext.Provider;

export const NavMenuOverlayProvider = ({ children }: ProviderProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const contextValues: ContextProps = {
    open,
    handleClose,
    handleOpen,
  };

  return <Provider value={contextValues}>{children}</Provider>;
};
