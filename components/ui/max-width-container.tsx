import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export interface MaxWidthContainerProps
  extends HTMLAttributes<HTMLDivElement> {}

export const MaxWidthContainer = forwardRef<
  HTMLDivElement,
  MaxWidthContainerProps
>(({ className, children, ...props }: MaxWidthContainerProps, ref) => {
  return (
    <div
      ref={ref}
      className={cn('mx-auto max-w-screen-2xl w-full h-full', className)}
      {...props}
    >
      {children}
    </div>
  );
});

MaxWidthContainer.displayName = 'container';
