import { cn } from '@/lib/utils';
import { forwardRef, HTMLAttributes } from 'react';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {}
type ElementType = HTMLDivElement;

export const Container = forwardRef<ElementType, ContainerProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(className)} {...props}>
        {children}
      </div>
    );
  }
);

Container.displayName = 'container';
