import type {Metadata} from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'NextQA - Web Automation Practice',
  description: 'A website to practice web automation with various UI elements.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8" data-testid="main-content-area">
          {children}
        </main>
        <Toaster />
        <footer className="py-6 text-center text-muted-foreground text-sm" data-testid="footer">
          <p>&copy; {new Date().getFullYear()} NextQA. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
