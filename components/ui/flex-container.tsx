import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface FlexContainerProps extends HTMLAttributes<HTMLDivElement> {
  direction?: 'row' | 'col';
}

type ElementType = HTMLDivElement;

export const FlexContainer = forwardRef<ElementType, FlexContainerProps>(
  ({ className, children, direction = 'row', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'flex',
          {
            'flex-col': direction === 'col',
          },
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

FlexContainer.displayName = 'flex-container';
