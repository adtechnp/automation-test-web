import Link from 'next/link';
import { MainNav } from '@/components/layout/main-nav';
import { TestTubeDiagonal } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" data-testid="app-header">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2" data-testid="logo-link">
          <TestTubeDiagonal className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl">NextQA</span>
        </Link>
        <MainNav />
      </div>
    </header>
  );
}
