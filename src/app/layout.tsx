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

const SITE_URL = 'https://async-atharv.com';
const OG_IMAGE = `${SITE_URL}/og-image.png`;
const PERSON_NAME = 'Atharv Naik';
const PERSON_ALTERNATE = ['async-atharv', 'Atharv Jay Naik'];

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Atharv Naik — Mobile App Developer & GTM Expert',
    template: '%s | Atharv Naik'
  },
  description:
    'Atharv Naik (async-atharv) is a Mobile App Developer & Go-To-Market Expert shipping revenue-ready iOS & Android apps, React Native products, and AI-powered mobile experiences. Founder of IPASHIP LLC — taking apps from zero to App Store & Play Store with full GTM strategy.',
  keywords: [
    'Atharv Naik',
    'Atharv Jay Naik',
    'async-atharv',
    'async atharv',
    'Mobile App Developer',
    'iOS App Developer',
    'Android App Developer',
    'React Native Developer',
    'GTM Expert',
    'Go-To-Market Expert',
    'Go-To-Market Strategy',
    'App Store Optimization',
    'ASO Expert',
    'Mobile Product Launch',
    'App Launch Expert',
    'Product Launch Strategy',
    'Swift Developer',
    'Kotlin Developer',
    'Flutter Developer',
    'Cross-Platform Developer',
    'Mobile App Consultant',
    'Startup App Developer',
    'AI Mobile Apps',
    'IPASHIP',
    'IPASHIP LLC',
    'Hire Mobile Developer',
    'Hire App Developer India',
    'Founding Mobile Engineer',
    'App Store Launch',
    'Play Store Launch',
    'Mobile Growth Expert',
    'Kafka Developer',
    'ClickHouse'
  ],
  authors: [{ name: PERSON_NAME, url: SITE_URL }],
  creator: PERSON_NAME,
  publisher: PERSON_NAME,
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  openGraph: {
    title: 'Atharv Naik — Mobile App Developer & GTM Expert',
    description:
      'Atharv Naik (async-atharv) is a Mobile App Developer & Go-To-Market Expert shipping iOS & Android apps with full GTM strategy. Founder of IPASHIP LLC.',
    url: SITE_URL,
    siteName: 'Atharv Naik',
    locale: 'en_US',
    type: 'profile',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Atharv Naik — Mobile App Developer & GTM Expert',
        type: 'image/png'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Atharv Naik — Mobile App Developer & GTM Expert',
    description:
      'Atharv Naik (async-atharv) is a Mobile App Developer & Go-To-Market Expert shipping iOS & Android apps with full GTM strategy. Founder of IPASHIP LLC.',
    creator: '@athrvNaik7',
    site: '@athrvNaik7',
    images: [OG_IMAGE]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  alternates: {
    canonical: SITE_URL
  },
  category: 'technology'
};

/**
 * JSON-LD structured data for:
 * - Person (Knowledge Graph, Google Images, Bing, DuckDuckGo, AI crawlers)
 * - WebSite (sitelinks searchbox)
 * - Organization (IPASHIP LLC)
 */
const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${SITE_URL}/#person`,
  name: PERSON_NAME,
  alternateName: PERSON_ALTERNATE,
  givenName: 'Atharv',
  familyName: 'Naik',
  url: SITE_URL,
  image: OG_IMAGE,
  description:
    'Atharv Naik is a Mobile App Developer & Go-To-Market Expert with 7+ years of experience shipping production iOS & Android apps for Google ecosystems, MNCs, and high-growth startups. Founder of IPASHIP LLC — taking products from zero to App Store & Play Store with full GTM strategy.',
  jobTitle: 'Mobile App Developer & GTM Expert',
  worksFor: {
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: 'IPASHIP LLC',
    url: 'https://ipaship.com'
  },
  founder: {
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`
  },
  knowsAbout: [
    'Mobile App Development',
    'iOS App Development',
    'Android App Development',
    'React Native',
    'Swift',
    'Kotlin',
    'Go-To-Market Strategy',
    'App Store Optimization',
    'Product Launch',
    'Flutter',
    'AI-Powered Mobile Apps',
    'Cross-Platform Development',
    'Startup Engineering',
    'Mobile Growth & Retention',
    'App Monetization',
    'Full Stack Web Development',
    'Node.js',
    'React.js',
    'Next.js',
    'TypeScript',
    'Apache Kafka',
    'ClickHouse',
    'MySQL',
    'iOS Development',
    'AI-Native Products',
    'Backend Architecture',
    'System Design'
  ],
  sameAs: [
    'https://www.linkedin.com/in/atharvnaik1/',
    'https://github.com/atharvnaik1',
    'https://twitter.com/athrvNaik7',
    'https://www.youtube.com/@IpashipAI',
    'https://async-atharv.com'
  ],
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': SITE_URL
  }
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: 'IPASHIP LLC',
  alternateName: 'IPASHIP',
  url: 'https://ipaship.com',
  logo: OG_IMAGE,
  founder: {
    '@type': 'Person',
    '@id': `${SITE_URL}/#person`,
    name: PERSON_NAME
  },
  description:
    'IPASHIP LLC is a mobile app studio shipping revenue-ready iOS & Android apps with full go-to-market strategy, for startups and enterprises. Offices in Dover, Delaware and Pune, India.',
  address: [
    {
      '@type': 'PostalAddress',
      streetAddress: '8 The Green Suite',
      addressLocality: 'Dover',
      addressRegion: 'DE',
      postalCode: '19901',
      addressCountry: 'US'
    },
    {
      '@type': 'PostalAddress',
      streetAddress:
        'In-Cube Co Working, Plot No 41 & 42, Tejaswini Ln 2, Aundh',
      addressLocality: 'Pune',
      addressRegion: 'Maharashtra',
      postalCode: '411067',
      addressCountry: 'IN'
    }
  ],
  sameAs: [
    'https://www.linkedin.com/in/atharvnaik1/',
    'https://github.com/atharvnaik1',
    'https://twitter.com/athrvNaik7',
    'https://www.youtube.com/@IpashipAI'
  ]
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  name: 'Atharv Naik',
  alternateName: 'async-atharv',
  url: SITE_URL,
  description:
    'Personal portfolio of Atharv Naik — Mobile App Developer & GTM Expert.',
  inLanguage: 'en-US',
  publisher: {
    '@type': 'Person',
    '@id': `${SITE_URL}/#person`,
    name: PERSON_NAME
  }
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  '@id': SITE_URL,
  mainEntity: {
    '@type': 'Person',
    '@id': `${SITE_URL}/#person`,
    name: PERSON_NAME
  },
  about: {
    '@type': 'Person',
    '@id': `${SITE_URL}/#person`,
    name: PERSON_NAME
  },
  primaryImageOfPage: {
    '@type': 'ImageObject',
    url: OG_IMAGE,
    width: 1200,
    height: 630,
    caption: 'Atharv Naik — Mobile App Developer & GTM Expert'
  },
  lastReviewed: new Date().toISOString().split('T')[0],
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: SITE_URL
      }
    ]
  }
};

const imageObjectSchema = {
  '@context': 'https://schema.org',
  '@type': 'ImageObject',
  name: 'Atharv Naik',
  contentUrl: OG_IMAGE,
  url: SITE_URL,
  width: 1200,
  height: 630,
  caption: 'Atharv Naik — Mobile App Developer & GTM Expert',
  creator: {
    '@type': 'Person',
    '@id': `${SITE_URL}/#person`,
    name: PERSON_NAME
  },
  creditText: 'Atharv Naik',
  copyrightNotice: `© ${new Date().getFullYear()} Atharv Naik. All rights reserved.`,
  copyrightHolder: {
    '@type': 'Person',
    '@id': `${SITE_URL}/#person`,
    name: PERSON_NAME
  },
  license: SITE_URL,
  acquireLicensePage: SITE_URL
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
        <link rel="canonical" href={SITE_URL} />

        {/* Author & Attribution */}
        <meta name="author" content={PERSON_NAME} />
        <meta name="designer" content={PERSON_NAME} />
        <meta name="copyright" content={PERSON_NAME} />
        <meta name="reply-to" content="atharvajaynaik@gmail.com" />

        {/* Bing Webmaster Verification (add your key from Bing Webmaster Tools) */}
        <meta name="msvalidate.01" content="" />

        {/* Yandex Verification */}
        <meta name="yandex-verification" content="" />

        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#f52041" />
        <meta name="apple-mobile-web-app-title" content="Atharv Naik" />

        {/* Geo tags for local SEO signals */}
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Pune, India" />

        {/* Additional OG for profile type */}
        <meta property="profile:first_name" content="Atharv" />
        <meta property="profile:last_name" content="Naik" />
        <meta property="profile:username" content="async-atharv" />

        {/* JSON-LD Structured Data — Person, Organization, WebSite, ProfilePage, ImageObject */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              personSchema,
              organizationSchema,
              websiteSchema,
              webPageSchema,
              imageObjectSchema
            ])
          }}
        />

        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-S17K26RB4M"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-S17K26RB4M');
            `
          }}
        />
      </head>
      <body className={`${inter.variable} ${monserrat.variable}`}>
        {/* Hidden rel=me links for identity verification (Knowledge Graph / social proof) */}
        <div className="sr-only" aria-hidden="true">
          <a href="https://www.linkedin.com/in/atharvnaik1/" rel="me">
            LinkedIn
          </a>
          <a href="https://github.com/atharvnaik1" rel="me">
            GitHub
          </a>
          <a href="https://twitter.com/athrvNaik7" rel="me">
            Twitter
          </a>
          <a href="https://www.youtube.com/@IpashipAI" rel="me">
            YouTube
          </a>
        </div>
        {children}
      </body>
    </html>
  );
}
