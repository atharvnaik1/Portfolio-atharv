'use client';

import Link from 'next/link';
import { Button, Chip, Image, Link as NextLink } from '@nextui-org/react';
import { FaApple, FaArrowLeft, FaGooglePlay } from 'react-icons/fa';
import Navigation from '@/components/Navigation/Navigation';
import Footer from '@/components/Sections/Footer';
import {
  AppProjectEntry,
  getAppScreens,
  getDeliveryDays
} from '@/lib/projectRoutes';

type AppProjectPageProps = {
  entry: AppProjectEntry;
};

export default function AppProjectPage({ entry }: AppProjectPageProps) {
  const { project, slug } = entry;
  const screens = getAppScreens(project);
  const deliveryDays = getDeliveryDays(slug);

  return (
    <main className="hello-section min-h-screen">
      <Navigation />

      <section className="relative mx-auto w-[94%] max-w-6xl px-2 pb-16 pt-8 sm:px-4 md:pt-12">
        <Link
          href="/#successful-clients"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 transition hover:text-white"
        >
          <FaArrowLeft className="text-xs" />
          Back to Live Client Apps
        </Link>

        <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              {project.featured ? (
                <span className="rounded-full border border-amber-400/40 bg-amber-400/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-amber-300">
                  Founder
                </span>
              ) : null}
              <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-primary">
                {project.type}
              </span>
            </div>

            <h1 className="mt-4 font-Monserrat text-4xl font-bold leading-tight text-white sm:text-5xl">
              {project.name.trim()}
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-relaxed text-gray-300 md:text-lg">
              {project.des}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {project.appStore ? (
                <NextLink href={project.appStore} target="_blank">
                  <Button
                    color="primary"
                    variant="shadow"
                    startContent={<FaApple />}
                    aria-label={`${project.name} on App Store`}
                  >
                    App Store
                  </Button>
                </NextLink>
              ) : null}
              {project.playStore ? (
                <NextLink href={project.playStore} target="_blank">
                  <Button
                    color="success"
                    variant="shadow"
                    startContent={<FaGooglePlay />}
                    aria-label={`${project.name} on Play Store`}
                  >
                    Play Store
                  </Button>
                </NextLink>
              ) : null}
            </div>
          </div>

          <aside className="rounded-3xl border border-white/10 bg-[#120c22]/70 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl">
            <h2 className="font-Monserrat text-lg font-semibold text-white">
              Project Snapshot
            </h2>
            <dl className="mt-5 space-y-4 text-sm">
              {project.industry ? (
                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-500">
                    Industry
                  </dt>
                  <dd className="mt-1 text-base text-white">
                    {project.industry}
                  </dd>
                </div>
              ) : null}
              {project.client ? (
                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-500">
                    Client
                  </dt>
                  <dd className="mt-1 text-base text-white">
                    {project.client}
                  </dd>
                </div>
              ) : null}
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-500">
                  Time Taken
                </dt>
                <dd className="mt-1 text-base text-white">
                  {deliveryDays} days end-to-end
                </dd>
              </div>
            </dl>

            <div className="mt-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-500">
                Stack
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.skills.map((skill, index) => (
                  <Chip
                    key={`${skill.name}-${index}`}
                    color="warning"
                    variant="flat"
                    radius="md"
                    startContent={skill.icon}
                  >
                    {skill.name}
                  </Chip>
                ))}
              </div>
            </div>
          </aside>
        </div>

        <div className="mt-14">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
                Product Screens
              </p>
              <h2 className="mt-2 font-Monserrat text-2xl font-semibold text-white md:text-3xl">
                Mobile experience gallery
              </h2>
            </div>
            <p className="hidden text-sm text-gray-500 sm:block">
              Scroll horizontally to explore
            </p>
          </div>

          <div
            className="scrollbar-thin mt-6 flex gap-5 overflow-x-auto scroll-smooth pb-4 pt-2"
            style={{ WebkitOverflowScrolling: 'touch', scrollbarWidth: 'thin' }}
          >
            {screens.map((src, index) => (
              <div
                key={`${slug}-screen-${index}`}
                className="w-[220px] shrink-0 sm:w-[250px] md:w-[280px]"
              >
                <div className="rounded-[2rem] border border-white/10 bg-[#0b1120] p-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
                  <div className="relative rounded-[1.7rem] bg-black p-2">
                    <div className="pointer-events-none absolute left-1/2 top-3 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-black/90" />
                    <div className="overflow-hidden rounded-[1.45rem] border border-white/5 bg-[#111827]">
                      <Image
                        src={src}
                        alt={`${project.name} screen ${index + 1}`}
                        className="aspect-[9/19.5] h-auto w-full object-cover"
                      />
                    </div>
                  </div>
                  <p className="mt-3 text-center text-xs font-medium text-gray-500">
                    Screen {index + 1}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {project.testimonials && project.testimonials.length > 0 ? (
          <div className="mt-14">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
              Founder Words
            </p>
            <h2 className="mt-2 font-Monserrat text-2xl font-semibold text-white md:text-3xl">
              What clients say
            </h2>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {project.testimonials.map((testimonial, index) => (
                <blockquote
                  key={`${slug}-testimonial-${index}`}
                  className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-[#1a1230]/80 to-[#0d0a18]/90 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.3)] md:p-8"
                >
                  <span
                    className="font-Monserrat text-5xl leading-none text-primary/40"
                    aria-hidden
                  >
                    &ldquo;
                  </span>
                  <p className="mt-2 text-base leading-relaxed text-gray-200 md:text-lg">
                    {testimonial.quote}
                  </p>
                  <footer className="mt-6 border-t border-white/10 pt-4">
                    <cite className="not-italic">
                      <p className="font-semibold text-white">
                        {testimonial.author}
                      </p>
                      <p className="mt-1 text-sm text-gray-400">
                        {testimonial.role}
                      </p>
                    </cite>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        ) : null}

        <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
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
            View All Client Apps
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
