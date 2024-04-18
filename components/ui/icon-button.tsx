import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        className={cn(
          'h-10 w-10 border border-neutral-800 bg-neutral-950 hover:bg-neutral-900 text-white',
          className
        )}
        {...props}
      >
        {children}
      </Button>
    );
  }
);

IconButton.displayName = 'icon-button';
