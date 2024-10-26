import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { DonationProvider } from '@/components/donation/donation-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Hmemsa - Empowering Moroccan Children',
  description: 'Dedicated to improving education and healthcare for underprivileged Moroccan children.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="min-h-screen">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Navigation />
        <main className="flex-1 w-full">
          {children}
        </main>
        <Footer />
        <DonationProvider />
      </body>
    </html>
  );
}