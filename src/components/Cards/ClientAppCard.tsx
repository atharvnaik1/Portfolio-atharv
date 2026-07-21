'use client';

import React from 'react';
import { Button, Image, Link } from '@nextui-org/react';
import { FaApple, FaGooglePlay } from 'react-icons/fa';
import { ProjectDataType } from '@/assests/data/projectsData';

type ClientAppCardProps = {
  projectDetail: ProjectDataType;
};

export default function ClientAppCard({
  projectDetail
}: ClientAppCardProps) {
  return (
    <article className="w-[260px] md:w-[290px]">
      <div className="rounded-[2.2rem] border border-white/10 bg-[#0b1120] p-3 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
        <div className="relative rounded-[2rem] bg-black p-2">
          <div className="pointer-events-none absolute left-1/2 top-3 z-10 h-6 w-28 -translate-x-1/2 rounded-full bg-black/90" />
          <div className="overflow-hidden rounded-[1.6rem] border border-white/5 bg-[#111827]">
            <Image
              src={projectDetail.image}
              alt={projectDetail.name}
              width={560}
              height={1180}
              className="aspect-[9/19.5] h-auto w-full object-cover"
            />
          </div>
        </div>

        <div className="px-1 pb-1 pt-4">
          <h3 className="text-lg font-semibold text-white">
            {projectDetail.name}
          </h3>
          <p className="mt-2 line-clamp-3 text-sm text-gray-400">
            {projectDetail.des}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {projectDetail.appStore ? (
              <Link href={projectDetail.appStore} target="_blank">
                <Button
                  size="sm"
                  color="primary"
                  variant="flat"
                  startContent={<FaApple />}
                  aria-label={`${projectDetail.name} on App Store`}
                >
                  App Store
                </Button>
              </Link>
            ) : null}
            {projectDetail.playStore ? (
              <Link href={projectDetail.playStore} target="_blank">
                <Button
                  size="sm"
                  color="success"
                  variant="flat"
                  startContent={<FaGooglePlay />}
                  aria-label={`${projectDetail.name} on Play Store`}
                >
                  Play Store
                </Button>
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}
