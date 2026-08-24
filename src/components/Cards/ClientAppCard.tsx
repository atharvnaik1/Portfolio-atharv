'use client';

import Link from 'next/link';
import React, { useMemo, useState } from 'react';
import { Button, Image, Link as NextLink } from '@nextui-org/react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaApple, FaGooglePlay } from 'react-icons/fa';
import { ProjectDataType } from '@/assests/data/projectsData';

type ClientAppCardProps = {
  projectDetail: ProjectDataType;
  slug: string;
};

export default function ClientAppCard({
  projectDetail,
  slug
}: ClientAppCardProps) {
  const screens = useMemo(() => {
    const list = projectDetail.images?.filter(Boolean) ?? [];
    if (list.length) return list;
    return projectDetail.image ? [projectDetail.image] : [];
  }, [projectDetail.images, projectDetail.image]);

  const [active, setActive] = useState(0);
  const total = screens.length;

  const cycle = (event?: React.MouseEvent) => {
    event?.stopPropagation();
    if (total <= 1) return;
    setActive((prev) => (prev + 1) % total);
  };

  const goTo = (index: number, event?: React.MouseEvent) => {
    event?.stopPropagation();
    setActive(index);
  };

  // Show up to 3 stacked layers behind/around the active screen
  const stackOrder = useMemo(() => {
    if (total <= 1) return [0];
    return [0, 1, 2].map((offset) => (active + offset) % total);
  }, [active, total]);

  return (
    <article className="w-[280px] md:w-[310px]">
      <div className="rounded-[2.2rem] border border-white/10 bg-[#0b1120] p-3 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
        <button
          type="button"
          onClick={cycle}
          className="group relative mx-auto block h-[430px] w-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 md:h-[470px]"
          style={{ perspective: 1400 }}
          aria-label={`View next screen of ${projectDetail.name}`}
        >
          <div className="text-white/55 pointer-events-none absolute inset-x-6 top-2 z-20 flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.16em]">
            <span>Tap to flip</span>
            <span>
              {active + 1}/{total}
            </span>
          </div>

          {stackOrder.map((screenIndex, depth) => {
            const isFront = depth === 0;
            const src = screens[screenIndex];
            const rotate = depth === 0 ? 0 : depth === 1 ? -11 : 11;
            const x = depth === 0 ? 0 : depth === 1 ? -18 : 18;
            const y = depth === 0 ? 8 : depth * 10;
            const scale = 1 - depth * 0.06;
            const z = 40 - depth * 18;

            return (
              <motion.div
                key={`${projectDetail.name}-${screenIndex}-${depth}`}
                className="absolute inset-x-6 bottom-4 top-8 origin-bottom"
                style={{ transformStyle: 'preserve-3d', zIndex: 30 - depth }}
                initial={false}
                animate={{
                  x,
                  y,
                  rotateZ: rotate,
                  scale,
                  opacity: depth === 0 ? 1 : 0.72 - depth * 0.12,
                  filter: depth === 0 ? 'brightness(1)' : 'brightness(0.72)'
                }}
                transition={{ type: 'spring', stiffness: 260, damping: 24 }}
              >
                <div
                  className={`h-full rounded-[2rem] bg-black p-2 shadow-[0_18px_40px_rgba(0,0,0,0.45)] ${
                    isFront
                      ? 'ring-1 ring-white/20 group-hover:ring-primary/50'
                      : 'ring-1 ring-white/5'
                  }`}
                  style={{ transform: `translateZ(${z}px)` }}
                >
                  <div className="pointer-events-none absolute left-1/2 top-3 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-black/90" />
                  <div className="h-full overflow-hidden rounded-[1.55rem] border border-white/5 bg-[#111827]">
                    <AnimatePresence mode="wait">
                      {isFront ? (
                        <motion.div
                          key={src}
                          initial={{ opacity: 0.35, scale: 1.04 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.98 }}
                          transition={{ duration: 0.28 }}
                          className="h-full"
                        >
                          <Image
                            src={src}
                            alt={`${projectDetail.name} screen ${
                              screenIndex + 1
                            }`}
                            width={560}
                            height={1180}
                            className="h-full w-full object-cover"
                            classNames={{
                              wrapper: 'h-full w-full !max-w-none',
                              img: 'h-full w-full object-cover'
                            }}
                          />
                        </motion.div>
                      ) : (
                        <Image
                          src={src}
                          alt=""
                          width={560}
                          height={1180}
                          className="h-full w-full object-cover"
                          classNames={{
                            wrapper: 'h-full w-full !max-w-none',
                            img: 'h-full w-full object-cover'
                          }}
                        />
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </button>

        {total > 1 ? (
          <div className="mt-2 flex items-center justify-center gap-1.5">
            {screens.map((_, index) => (
              <button
                key={`${projectDetail.name}-dot-${index}`}
                type="button"
                onClick={(event) => goTo(index, event)}
                aria-label={`Show screen ${index + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  index === active
                    ? 'w-5 bg-primary'
                    : 'w-1.5 bg-white/25 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        ) : null}

        <div className="px-1 pb-1 pt-3">
          <div className="flex items-center gap-2">
            <Link
              href={`/apps/${slug}`}
              className="text-lg font-semibold text-white transition hover:text-primary"
            >
              {projectDetail.name}
            </Link>
            {projectDetail.featured ? (
              <span className="bg-amber-400/15 rounded-full border border-amber-400/40 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-amber-300">
                Founder
              </span>
            ) : null}
          </div>
          <p className="mt-2 line-clamp-3 text-sm text-gray-400">
            {projectDetail.des}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            <Link
              href={`/apps/${slug}`}
              className="border-white/15 inline-flex items-center rounded-lg border bg-white/5 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-white/10"
            >
              View Details
            </Link>
            {projectDetail.appStore ? (
              <NextLink href={projectDetail.appStore} target="_blank">
                <Button
                  size="sm"
                  color="primary"
                  variant="flat"
                  startContent={<FaApple />}
                  aria-label={`${projectDetail.name} on App Store`}
                >
                  App Store
                </Button>
              </NextLink>
            ) : null}
            {projectDetail.playStore ? (
              <NextLink href={projectDetail.playStore} target="_blank">
                <Button
                  size="sm"
                  color="success"
                  variant="flat"
                  startContent={<FaGooglePlay />}
                  aria-label={`${projectDetail.name} on Play Store`}
                >
                  Play Store
                </Button>
              </NextLink>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}
