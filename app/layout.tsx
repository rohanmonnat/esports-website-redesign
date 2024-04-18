import type { Metadata } from 'next';

import '@/lib/styles/globals.css';
import { Footer } from '@/components/layout/footer';
import { grotesk } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import { Navbar } from '@/components/layout/navbar';

export const metadata: Metadata = {
  title: 'Host Esports Gaming Tournaments',
  description: 'A gaming website to host e-sports tournaments and events.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'antialiased text-white bg-neutral-950 selection:bg-emerald-500 selection:text-black',
          grotesk.className
        )}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
