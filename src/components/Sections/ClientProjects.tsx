'use client';

import React, { useRef, useState } from 'react';
import Marquee from 'react-fast-marquee';
import { FaPause, FaPlay, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { clientProjects } from '@/assests/data/projectsData';
import ClientAppCard from '../Cards/ClientAppCard';

const projectKeys = Object.keys(clientProjects);

export default function ClientProjects() {
  const [autoScroll, setAutoScroll] = useState(true);
  const manualTrackRef = useRef<HTMLDivElement>(null);

  const scrollManual = (direction: 'left' | 'right') => {
    const el = manualTrackRef.current;
    if (!el) return;
    const amount = Math.min(340, el.clientWidth * 0.8);
    el.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth'
    });
  };

  return (
    <section
      id="successful-clients"
      aria-label="Successful clients projects"
      className="py-8"
    >
      <div className="mx-auto w-[98%] md:w-[90%] 2xl:w-[85%]">
        <div className="flex flex-col gap-3 px-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="animate_charcter text_sub_heading_size font-Monserrat font-semibold">
              Live Client Apps
            </h2>
            <p className="mt-1 text-sm text-gray-400 md:text-base">
              Tap phones to flip screens. Pause auto-scroll anytime to browse
              manually.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setAutoScroll((v) => !v)}
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-xs font-semibold text-white transition hover:bg-white/10 sm:text-sm"
              aria-pressed={!autoScroll}
              aria-label={autoScroll ? 'Pause auto scroll' : 'Play auto scroll'}
            >
              {autoScroll ? <FaPause /> : <FaPlay />}
              {autoScroll ? 'Pause Auto' : 'Play Auto'}
            </button>

            {!autoScroll ? (
              <>
                <button
                  type="button"
                  onClick={() => scrollManual('left')}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white transition hover:bg-white/10"
                  aria-label="Scroll client apps left"
                >
                  <FaChevronLeft />
                </button>
                <button
                  type="button"
                  onClick={() => scrollManual('right')}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white transition hover:bg-white/10"
                  aria-label="Scroll client apps right"
                >
                  <FaChevronRight />
                </button>
              </>
            ) : null}
          </div>
        </div>
      </div>

      <div className="mb-8 mt-4 w-[100vw] overflow-hidden md:rotate-[-1deg]">
        {autoScroll ? (
          <Marquee
            pauseOnHover={true}
            pauseOnClick={true}
            speed={28}
            gradient={false}
            play={autoScroll}
          >
            {projectKeys.map((key) => {
              const item = clientProjects[key as keyof typeof clientProjects];
              return (
                <div className="mx-4 py-6" key={key}>
                  <ClientAppCard projectDetail={item} />
                </div>
              );
            })}
          </Marquee>
        ) : (
          <div
            ref={manualTrackRef}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 py-6 scrollbar-thin scroll-smooth"
            style={{
              WebkitOverflowScrolling: 'touch',
              scrollbarWidth: 'thin'
            }}
            aria-label="Manually scroll live client apps"
          >
            {projectKeys.map((key) => {
              const item = clientProjects[key as keyof typeof clientProjects];
              return (
                <div className="snap-center shrink-0" key={key}>
                  <ClientAppCard projectDetail={item} />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
