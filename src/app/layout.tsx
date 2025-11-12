import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import Script from 'next/script';


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
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
       <Script async src="https://www.googletagmanager.com/gtag/js?id=G-S17K26RB4M"> </Script>
        <Script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-S17K26RB4M');
</Script>
      </head>
      <body className={`${inter.variable} ${monserrat.variable}`}>
        {children}
      </body>
    </html>
  );
}
