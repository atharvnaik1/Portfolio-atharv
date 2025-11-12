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
 title: "Atharv Naik — Full Stack Developer",
  description: "Atharv Naik is a Full Stack Developer building scalable web apps with Node.js, React, Next.js, Kafka, ClickHouse, MySQL. Startup-perfect, wears multiple hats.",
  openGraph: {
    title: "Atharv Naik — Full Stack Developer",
    description: "Atharv Naik is a Full Stack Developer building scalable web apps with Node.js, React, Next.js, Kafka, ClickHouse, MySQL. Startup-perfect, wears multiple hats.",
    type: "website",
  },
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
