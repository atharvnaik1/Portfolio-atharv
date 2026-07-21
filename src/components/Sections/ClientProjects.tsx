'use client';

import React from 'react';
import { Image } from '@nextui-org/react';
import Marquee from 'react-fast-marquee';
import { agencyShowcase, clientProjects } from '@/assests/data/projectsData';
import ClientAppCard from '../Cards/ClientAppCard';

const credibilityPoints = [
  {
    title: 'AI-Native Builds',
    body: 'Custom AI modules, role-based suggestions, and intelligent dispatch wired into real product flows.'
  },
  {
    title: 'Shipped to Stores',
    body: 'Production apps live on the App Store & Play Store — not mockups, not prototypes.'
  },
  {
    title: 'Full-Stack Delivery',
    body: 'Mobile UX, backends, analytics, payments, and community features owned end-to-end.'
  }
];

export default function ClientProjects() {
  return (
    <section
      id="successful-clients"
      aria-label="Successful clients projects"
      className="py-8"
    >
      {/* <div className="mx-auto w-[98%] md:w-[90%] 2xl:w-[85%]">
        <h1 className="animate_charcter text_sub_heading_size p-2 font-Monserrat font-semibold">
          Successful Clients Projects
        </h1>
        <p className="mb-6 max-w-3xl px-2 text-base text-gray-400 md:text-lg">
          AI-native product work for startups — from emergency logistics and
          community super-apps to marketplaces and compliance portals.
        </p>

        {/* Top shelf — advertisement / agency showcase */}
        {/* <div className="mb-8 overflow-hidden rounded-2xl border border-[#ffffff14] bg-gradient-to-br from-[#0b1220] via-[#121a2b] to-[#1a1030] p-4 shadow-xl md:p-6">
          <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400/90">
                AI-Native Agency
              </p>
              <h2 className="mt-1 font-Monserrat text-2xl font-bold text-white md:text-3xl">
                {agencyShowcase.title}
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-gray-300 md:text-base">
                {agencyShowcase.subtitle}
              </p>
            </div>
          </div> */}

          {/* <Image
            src={agencyShowcase.image}
            alt="AI-native agency product showcase"
            className="h-auto w-full rounded-xl object-cover"
            width={1400}
            height={933}
          /> */}

          {/* <div className="mt-6 grid gap-4 md:grid-cols-3">
            {credibilityPoints.map((point) => (
              <div key={point.title} className="rounded-xl bg-white/5 p-4">
                <h3 className="font-semibold text-white">{point.title}</h3>
                <p className="mt-1 text-sm text-gray-400">{point.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div> */} */}

      <div className="mx-auto w-[98%] md:w-[90%] 2xl:w-[85%]">
        <h2 className="animate_charcter text_sub_heading_size p-2 font-Monserrat font-semibold">
          Live Client Apps
        </h2>
      </div>

      <div className="mb-8 mt-4 w-[100vw] rotate-[-2deg] overflow-hidden">
        <Marquee pauseOnHover={true} speed={32} gradient={false}>
          {Object.keys(clientProjects).map((key, index) => {
            const item = clientProjects[key as keyof typeof clientProjects];
            return (
              <div className="mx-3 py-4" key={index}>
                <ClientAppCard projectDetail={item} />
              </div>
            );
          })}
        </Marquee>
      </div>
    </section>
  );
}
