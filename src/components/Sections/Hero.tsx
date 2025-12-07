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

        <section id="intro-projects" aria-label="Intro and featured projects" className="py-8">
          <h2 className="text-center text-lg md:text-xl font-semibold my-4">Featured / Highlighted Work</h2>
          <p className="text-center text-gray-400 max-w-3xl mx-auto px-4">
            A selection of projects I built — backend systems, mobile apps and experimental AI / Web3 work.
            Full lists are below.
          </p>
        </section>

        <section id="contact-me" className="py-8" aria-label="Contact me">
          <h3 className="text-2xl font-semibold mb-3 text-center">Contact</h3>
          <p className="text-center">
            Email:{' '}
            <a
              href="mailto:atharvajaynaik.com"
              className="text-primary underline"
              rel="noopener noreferrer"
            >
              atharvajaynaik.com
            </a>
          </p>
        </section>
      </main>
    </>
  );
};

export default Hero;

