import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import '@/styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
});

const monserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat'
});

export const metadata: Metadata = {
  title: 'Atharv Naik',
  description: 'PORTFOLIO'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${monserrat.variable}`}>
        {children}
      </body>
    </html>
  );
}
