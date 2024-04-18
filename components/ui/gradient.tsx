import { cn } from '@/lib/utils';
import { forwardRef, HTMLAttributes } from 'react';

export interface GradientProps extends HTMLAttributes<HTMLDivElement> {}

export const Gradient = forwardRef<HTMLDivElement, GradientProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('pointer-events-none absolute -z-10', className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Gradient.displayName = 'gradient';
