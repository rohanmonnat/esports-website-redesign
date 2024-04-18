import { cn } from '@/lib/utils';
import { forwardRef, HTMLAttributes } from 'react';

export interface TypographyProps extends HTMLAttributes<HTMLParagraphElement> {}

export const Typography = forwardRef<HTMLParagraphElement, TypographyProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <p ref={ref} className={cn(className)} {...props}>
        {children}
      </p>
    );
  }
);

Typography.displayName = 'typography';
