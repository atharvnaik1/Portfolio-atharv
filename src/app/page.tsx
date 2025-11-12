import Footer from '@/components/Sections/Footer';
import Hero from '@/components/Sections/Hero';
import { Divider } from '@nextui-org/react';
import Head from "next/head";


import {
  web3Projects,
  opensourceProjects,
  personalProjects
} from '@/assests/data/projectsData';

import ProjectsCarousel from '@/components/Sections/ProjectsCarousel';
import Navigation from '@/components/Navigation/Navigation';
// import { Atharv } from '@/components/Sections/Atharv';

export default function Home() {
  return (
     <Head>
        <title>Atharv Naik — Full Stack Developer</title>
        <meta name="description" content="Atharv Naik is a Full Stack Developer building scalable web apps with Node.js, React, Next.js, Kafka, ClickHouse, MySQL. Startup-perfect, wears multiple hats." />
        {/* Open Graph */}
        <meta property="og:title" content="Atharv Naik — Full Stack Developer" />
        <meta property="og:description" content="Atharv Naik is a Full Stack Developer building scalable web apps with Node.js, React, Next.js, Kafka, ClickHouse, MySQL. Startup-perfect, wears multiple hats." />
        <meta property="og:type" content="website" />
      </Head>
    <main>
      <div className="hello-section" id="hello">
        <Navigation />
        <Hero />
      </div>
{/*       <Reviews /> */}

      <ProjectsCarousel
        projects={personalProjects}
        heading="Personal Projects"
      />
      <ProjectsCarousel
        projects={web3Projects}
        heading="AI and Web3 projects"
      />
      <ProjectsCarousel
        projects={opensourceProjects}
        heading="Opensource Projects"
        carouselSettings={{
          slidesToScroll: 1,
          slidesToShow: 2
        }}
      />

      <Divider className="bg-divider" />
{/*       <Atharv /> */}
      <Footer />
    </main>
  );
}
