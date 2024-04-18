import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import type { Tournament } from '@/lib/types/tournament';

export interface ContextProps {
  activeSlide: number;
  totalSlides: number;
  tournament: Tournament;
  tournaments: Tournament[];
  next: () => void;
  prev: () => void;
  goTo: (position: number) => void;
}

interface ProviderProps {
  tournaments: Tournament[];
  children?: ReactNode;
}

export const TournamentSlideshowContext = createContext<ContextProps | null>(
  null
);

export const useTournamentSlideshowContext = () => {
  const value = useContext(TournamentSlideshowContext);

  if (!value) {
    throw new Error('tournament slideshow context not found');
  }

  return value;
};

const ContextProvider = TournamentSlideshowContext.Provider;

export const TournamentSlideshowContextProvider = ({
  children,
  tournaments,
}: ProviderProps) => {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const totalSlides = tournaments.length;

  const isFirstSlide = activeSlide === 0;
  const isLastSlide = activeSlide === totalSlides - 1;
  const tournament = tournaments[activeSlide];

  const next = () => {
    if (isLastSlide) {
      setActiveSlide(0);
      return;
    }

    setActiveSlide((prev) => prev + 1);
  };

  const prev = () => {
    if (isFirstSlide) {
      setActiveSlide(totalSlides - 1);
      return;
    }

    setActiveSlide((prev) => prev - 1);
  };

  const goTo = (position: number) => {
    if (position >= 0 && position < totalSlides) {
      setActiveSlide(position);
    }
  };

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      next();
    }, 4 * 1000);

    return () => {
      clearTimeout(timeoutID);
    };
  });

  const contextValues: ContextProps = {
    activeSlide,
    totalSlides,
    tournament,
    tournaments,
    next,
    prev,
    goTo,
  };

  return <ContextProvider value={contextValues}>{children}</ContextProvider>;
};
