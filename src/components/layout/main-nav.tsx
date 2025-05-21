'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import type { LucideIcon } from 'lucide-react';
import { Home, FileText, Users, LayoutGrid, Menu, X, TestTubeDiagonal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import React from 'react';

interface NavItem {
  href: string;
  label: string;
  icon: LucideIcon;
  testid: string;
}

const navItems: NavItem[] = [
  { href: '/', label: 'Simple Page', icon: Home, testid: 'nav-simple-page' },
  { href: '/forms', label: 'Forms', icon: FileText, testid: 'nav-forms' },
  { href: '/crm', label: 'CRM', icon: Users, testid: 'nav-crm' },
  { href: '/elements', label: 'All Elements', icon: LayoutGrid, testid: 'nav-elements' },
];

export function MainNav() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const renderNavLinks = (isMobile: boolean = false) => (
    navItems.map((item) => (
      <Link
        key={item.href}
        href={item.href}
        onClick={() => isMobile && setIsMobileMenuOpen(false)}
        className={cn(
          'transition-colors hover:text-primary',
          pathname === item.href ? 'text-primary font-semibold' : 'text-foreground/80',
          isMobile ? 'flex items-center space-x-2 p-3 rounded-md hover:bg-accent' : 'text-sm'
        )}
        data-testid={item.testid}
      >
        <item.icon className={cn("h-5 w-5", isMobile ? "inline-block" : "hidden md:inline-block mr-1")} />
        {item.label}
      </Link>
    ))
  );

  return (
    <>
      <nav className="hidden md:flex items-center space-x-6" data-testid="desktop-nav">
        {renderNavLinks()}
      </nav>
      <div className="md:hidden">
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" data-testid="mobile-menu-trigger">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full max-w-xs p-0" data-testid="mobile-menu-sheet">
            <div className="flex justify-between items-center p-4 border-b">
               <Link href="/" className="flex items-center space-x-2" onClick={() => setIsMobileMenuOpen(false)}>
                <TestTubeDiagonal className="h-6 w-6 text-primary" />
                <span className="font-bold text-lg">NextQA</span>
              </Link>
              <SheetClose asChild>
                 <Button variant="ghost" size="icon">
                    <X className="h-6 w-6" />
                    <span className="sr-only">Close menu</span>
                 </Button>
              </SheetClose>
            </div>
            <nav className="flex flex-col space-y-2 p-4" data-testid="mobile-nav">
              {renderNavLinks(true)}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
