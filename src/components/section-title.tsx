import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  testid?: string;
}

export function SectionTitle({ children, className, as: Comp = 'h2', testid, ...props }: SectionTitleProps) {
  return (
    <Comp
      className={cn(
        'text-2xl font-semibold tracking-tight text-foreground mb-6 pb-2 border-b border-border',
        {
          'text-3xl md:text-4xl': Comp === 'h1',
          'text-2xl md:text-3xl': Comp === 'h2',
          'text-xl md:text-2xl': Comp === 'h3',
        },
        className
      )}
      data-testid={testid}
      {...props}
    >
      {children}
    </Comp>
  );
}
