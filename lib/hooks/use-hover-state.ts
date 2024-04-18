import { useCallback, useState } from 'react';

export default function useHoverState(initialValue?: boolean) {
  const [hover, setHover] = useState<boolean>(initialValue || false);

  const onMouseOver = useCallback(() => {
    setHover(true);
  }, []);

  const onMouseLeave = useCallback(() => {
    setHover(false);
  }, []);

  return { hover, onMouseOver, onMouseLeave };
}
