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
import React from 'react';
import Head from 'next/head';
import useSocialMediaLinks from '@/hooks/useSocialMediaLinks';
import { Chip } from '@nextui-org/react';
import useSkills from '@/hooks/useSkills';
import Marquee from 'react-fast-marquee';
import ProjectCard from '../Cards/ProjectCard';
import { personalProjects } from '@/assests/data/projectsData';
import ClientProjects from './ClientProjects';

export const HelloDetails: React.FC = () => {
  const { renderSocialMediaLinks } = useSocialMediaLinks();
  return (
    <section id="title" aria-label="Hero title" className="pt-8">
      <h1 className="text_heading_size mt-6 py-4 text-center font-Monserrat font-bold sm:mt-12">
        <span className="text-primary">Atharv Naik</span> <br />
        Full Stack Developer
      </h1>

      <h2
        id="social-content"
        className="text-center text-md sm:text-lg md:text-xl font-Monserrat text-gray-400 mb-4"
      >
        Builds scalable backend systems using Kafka, ClickHouse along with iOS app development.
      </h2>

      <div
        className="flex items-center justify-center gap-5 text-2xl text-blue-500 sm:text-3xl xl:text-4xl 2xl:text-5xl"
        aria-label="Social links"
      >
        {renderSocialMediaLinks()}
      </div>
    </section>
  );
};

const Hero: React.FC = () => {
  const { allSkills } = useSkills();

  return (
    <>
      <Head>
        <title>Atharv Naik — Full Stack Developer</title>
        <meta
          name="description"
          content="Atharv Naik — Full Stack Developer building scalable backends with Kafka & ClickHouse and iOS apps. View projects, open-source work and contact details."
        />
      </Head>

      <main>
        <HelloDetails />

        <section
          id="about-me"
          aria-label="About me"
          className="mx-auto mt-10 w-[92%] max-w-4xl px-4 text-center md:mt-14"
        >
          <h2 className="animate_charcter text_sub_heading_size font-Monserrat font-semibold">
            About Me
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-300 md:text-lg">
            With{' '}
            <span className="font-semibold text-white">7 years of experience</span>{' '}
            building production apps for{' '}
            <span className="font-semibold text-white">
              Google ecosystems, MNCs, and high-growth startups
            </span>
            , I help founders turn product ideas into revenue engines — shipping
            apps that have driven{' '}
            <span className="font-semibold text-primary">
              2–3× revenue growth
            </span>{' '}
            and unlocked{' '}
            <span className="font-semibold text-white">
              multi-lakh monthly recurring outcomes
            </span>{' '}
            for client businesses.
          </p>
          <p className="mt-4 text-base leading-relaxed text-gray-400 md:text-lg">
            Several products I&apos;ve built have helped startups raise{' '}
            <span className="font-semibold text-white">
              seed funding through Startup India
            </span>
            , and one shipped product was accepted into{' '}
            <span className="font-semibold text-white">
              Microsoft for Startups
            </span>{' '}
            — combining AI-native engineering with real commercial traction.
          </p>
        </section>

        <section id="skills" aria-label="Skills section" className="mt-8">
          <h3 className="sr-only">Skills</h3>
          <div className="mt-6 w-full md:mt-10">
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
          <h2 className="text-center text-lg md:text-xl font-semibold my-4">
            Featured
          </h2>
          <p className="text-center text-gray-400 max-w-3xl mx-auto px-4"></p>

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

