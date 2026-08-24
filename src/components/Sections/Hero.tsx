// import useSocialMediaLinks from '@/hooks/useSocialMediaLinks';
// import React from 'react';
// import ProjectCard from '../Cards/ProjectCard';
// import { personalProjects } from '@/assests/data/projectsData';
// import { Chip } from '@nextui-org/react';
// import useSkills from '@/hooks/useSkills';
// import Marquee from 'react-fast-marquee';

// export const HelloDetails = () => {
//   const { renderSocialMediaLinks } = useSocialMediaLinks();
//   return (
//    <div>
//   <h1 className="text_heading_size mt-10 py-5 text-center font-Monserrat font-bold sm:mt-20">
//     <span className="text-primary">Atharv Naik</span> <br />
//     Full Stack Developer
//   </h1>

//   <h2 className="text-center text-md sm:text-lg md:text-xl font-Monserrat text-gray-400 mb-4">
//     Builds scalable backend systems using kafka, Clickhouse along with iOS app Development.
//   </h2>

//   <div className="flex items-center justify-center gap-5 text-2xl text-blue-500 sm:text-3xl xl:text-4xl 2xl:text-5xl">
//     {renderSocialMediaLinks()}
//   </div>
// </div>
//   );
// };

// const Hero = () => {
//   const { allSkills } = useSkills();
//   return (
//     <div>
//       <HelloDetails />
//       <div className="mt-10 w-[100vw] rotate-[-4deg] md:mt-20 ">
//         <Marquee pauseOnHover={true}>
//           {Object.keys(allSkills).map((key, index) => {
//             const item = allSkills[key as keyof typeof allSkills];
//             return (
//               <div className="mx-2 cursor-pointer" key={index}>
//                 <Chip
//                   className="text-1xl p-5 hover:border-primary hover:text-primary md:p-8 md:text-3xl"
//                   color="warning"
//                   variant="bordered"
//                   radius="md"
//                   startContent={item.icon}
//                 >
//                   {item.name}
//                 </Chip>
//               </div>
//             );
//           })}
//         </Marquee>
//       </div>

//       <div className="mb-10  mt-6 w-[100vw]  rotate-[-4deg]  md:mb-20">
//         <Marquee direction="right" pauseOnHover={true}>
//           {Object.keys(personalProjects).map((key, index) => {
//             const item = personalProjects[key as keyof typeof personalProjects];
//             return (
//               <div className="mx-2" key={index}>
//                 <ProjectCard projectDetail={item} />
//               </div>
//             );
//           })}
//         </Marquee>
//       </div>
//     </div>
//   );
// };

// export default Hero;
'use client';

import React from 'react';
import { Chip } from '@nextui-org/react';
import useSkills from '@/hooks/useSkills';
import Marquee from 'react-fast-marquee';
import ProjectCard from '../Cards/ProjectCard';
import { personalProjects } from '@/assests/data/projectsData';
import ClientProjects from './ClientProjects';
import HeroIntro from './HeroIntro';

export { default as HelloDetails } from './HeroIntro';

const Hero: React.FC = () => {
  const { allSkills } = useSkills();

  return (
    <>
      {/* Schema for Hero — visible structured name for crawlers */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPageElement',
            name: 'Atharv Naik — Mobile App Developer & GTM Expert',
            description:
              'Atharv Naik (async-atharv) is a Mobile App Developer & Go-To-Market Expert with 7+ years shipping production iOS & Android apps for startups and MNCs. Founder of IPASHIP LLC.',
            mainEntity: { '@id': 'https://async-atharv.com/#person' }
          })
        }}
      />

      <main>
        <HeroIntro />

        <section
          id="about-me"
          aria-label="About me"
          className="mx-auto mt-8 w-[92%] max-w-4xl px-4 text-center md:mt-12"
        >
          <h2 className="animate_charcter text_sub_heading_size font-Monserrat font-semibold">
            About Me
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-300 md:text-lg">
            With{' '}
            <span className="font-semibold text-white">
              7 years of experience
            </span>{' '}
            shipping production mobile apps for{' '}
            <span className="font-semibold text-white">
              Google ecosystems, MNCs, and high-growth startups
            </span>
            , I help founders turn app ideas into revenue engines — launching
            iOS & Android apps that have driven{' '}
            <span className="font-semibold text-primary">
              2–3× revenue growth
            </span>{' '}
            and unlocked{' '}
            <span className="font-semibold text-white">
              5-10 lakh monthly recurring outcomes
            </span>{' '}
            for client businesses.
          </p>
          <p className="mt-4 text-base leading-relaxed text-gray-400 md:text-lg">
            Several mobile products I&apos;ve built have helped startups raise{' '}
            <span className="font-semibold text-white">
              seed funding through Startup India
            </span>
            , and one shipped app was accepted into{' '}
            <span className="font-semibold text-white">
              Microsoft for Startups
            </span>{' '}
            — combining go-to-market strategy with real commercial traction on
            the App Store &amp; Play Store.
          </p>
        </section>

        <section
          id="skills"
          aria-label="Skills section"
          className="mt-10 pb-10 md:mt-14 md:pb-16"
        >
          <h3 className="sr-only">Skills</h3>
          <div className="mt-6 w-full overflow-hidden py-6 md:mt-10 md:py-10">
            <div className="w-[100vw] rotate-[-4deg]">
              <Marquee pauseOnHover={true}>
                {Object.keys(allSkills).map((key, index) => {
                  const item = allSkills[key as keyof typeof allSkills];
                  return (
                    <div className="mx-2 cursor-pointer" key={index}>
                      <Chip
                        className="text-1xl p-5 hover:border-primary hover:text-primary md:p-8 md:text-3xl"
                        color="warning"
                        variant="bordered"
                        radius="md"
                        startContent={item.icon}
                      >
                        {item.name}
                      </Chip>
                    </div>
                  );
                })}
              </Marquee>
            </div>
          </div>
        </section>

        <ClientProjects />

        <section
          id="intro-projects"
          aria-label="Intro and featured projects"
          className="py-8"
        >
          <h2 className="my-4 text-center text-lg font-semibold md:text-xl">
            Featured
          </h2>
          <p className="mx-auto max-w-3xl px-4 text-center text-gray-400"></p>

          <div className="mb-10 mt-6 w-[100vw] rotate-[-4deg] md:mb-20">
            <Marquee direction="right" pauseOnHover={true}>
              {Object.keys(personalProjects).map((key, index) => {
                const item =
                  personalProjects[key as keyof typeof personalProjects];
                return (
                  <div className="mx-2" key={index}>
                    <ProjectCard projectDetail={item} />
                  </div>
                );
              })}
            </Marquee>
          </div>
        </section>
      </main>
    </>
  );
};

export default Hero;
