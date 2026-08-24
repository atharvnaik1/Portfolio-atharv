import type { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation/Navigation';
import Footer from '@/components/Sections/Footer';

export const metadata: Metadata = {
  title: 'About IPASHIP LLC — Mobile App Studio by Atharv Naik',
  description:
    'IPASHIP LLC is a mobile app studio founded by Atharv Naik (async-atharv), shipping revenue-ready iOS & Android apps with full go-to-market strategy. Offices in Dover, Delaware and Pune, India.',
  openGraph: {
    title: 'About IPASHIP LLC — Mobile App Studio Founded by Atharv Naik',
    description:
      'IPASHIP LLC — a mobile app studio shipping iOS & Android apps with full GTM strategy that turn ideas into commercial traction. Founded by Atharv Naik.',
    type: 'website',
    images: [
      {
        url: 'https://async-atharv.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Atharv Naik — Mobile App Developer & Founder of IPASHIP LLC'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About IPASHIP LLC — Mobile App Studio Founded by Atharv Naik',
    description:
      'IPASHIP LLC — a mobile app studio shipping iOS & Android apps with full GTM strategies that turn ideas into commercial traction.',
    images: ['https://async-atharv.com/og-image.png']
  },
  alternates: {
    canonical: 'https://async-atharv.com/about'
  }
};

const milestones = [
  {
    title: 'Founder-led craft',
    body: 'Built by engineers who have lived the startup grind — from seed-stage MVPs to store-shipped products used by real customers every day.'
  },
  {
    title: 'AI-native by default',
    body: 'We weave AI into product workflows — dispatch, community insights, role-based suggestions — not as demos, but as durable growth engines.'
  },
  {
    title: 'Global footprint',
    body: 'US-registered company with deep delivery roots in India — close to founders, close to craft, close to the markets we ship for.'
  }
];

export default function AboutPage() {
  return (
    <main className="hello-section min-h-screen">
      <Navigation />

      <section className="relative mx-auto w-[94%] max-w-4xl px-2 pb-16 pt-10 sm:px-4 md:pt-16">
        <p className="text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-primary sm:text-xs">
          Our Story
        </p>
        <h1 className="mt-3 text-center font-Monserrat text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
          <span className="text-primary">IPASHIP LLC</span>
          <br />
          <span className="text-white/90">Built to ship what matters</span>
        </h1>

        <div className="mt-10 space-y-6 rounded-3xl border border-white/10 bg-[#120c22]/60 p-6 text-base leading-relaxed text-gray-300 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-8 md:text-lg">
          <p>
            IPASHIP started with a simple conviction: the world doesn&apos;t need
            more slides — it needs products that open, load, convert, and keep
            people coming back. IPASHIP LLC is a mobile app studio that partners
            with founders and operators who want iOS & Android apps that move revenue,
            not just roadmaps.
          </p>
          <p>
            From emergency logistics and community super-apps to marketplaces
            and compliance portals, our work lives on the App Store, Play Store,
            and in production backends that stay up when it counts. We have
            helped startups unlock seed funding through Startup India, shipped a
            product into Microsoft for Startups, and stayed in the trenches
            through every launch night.
          </p>
          <p>
            Passion is our operating system. We obsess over craft — polished mobile
            experiences, App Store & Play Store launches, and go-to-market strategies
            that drive real user acquisition and retention. Whether you are
            validating a first release or scaling a mobile growth engine, IPASHIP is
            built to go the distance with you.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {milestones.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <h2 className="font-Monserrat text-lg font-semibold text-white">
                {item.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-400">
                {item.body}
              </p>
            </div>
          ))}
        </div>

        <address className="mt-12 rounded-3xl border border-primary/20 bg-primary/5 p-6 not-italic sm:p-8">
          <h2 className="font-Monserrat text-xl font-semibold text-white md:text-2xl">
            Registered Offices
          </h2>
          <div className="mt-5 space-y-5 text-sm leading-relaxed text-gray-300 md:text-base">
            <div>
              <p className="font-semibold text-primary">IPASHIP LLC</p>
              <p className="mt-1">
                Reg. Office: 8 The Green Suite, Dover, DE 19901, USA
              </p>
              <p>Reg. No: 10592846</p>
            </div>
            <div>
              <p className="font-semibold text-primary">IPASHIP PVT. LTD.</p>
              <p className="mt-1">
                In-Cube Co Working, Plot No 41 &amp; 42, Tejaswini Ln 2, next to
                Medipoint Hospital, Aundh, Pune, Maharashtra 411067, India
              </p>
            </div>
          </div>
        </address>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="https://lp.ipaship.com/apply"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(245,32,65,0.35)] transition hover:brightness-110 sm:w-auto"
          >
            Book a Build Call
          </Link>
          <Link
            href="/#successful-clients"
            className="inline-flex w-full items-center justify-center rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10 sm:w-auto"
          >
            See Live Client Apps
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
