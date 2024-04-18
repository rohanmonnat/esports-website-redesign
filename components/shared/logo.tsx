import { Crosshair, LucideProps } from 'lucide-react';
import { ElementRef, forwardRef } from 'react';

export const Logo = forwardRef<ElementRef<typeof Crosshair>, LucideProps>(
  (props, ref) => {
    return <Crosshair ref={ref} {...props} />;
  }
);

Logo.displayName = 'logo';
