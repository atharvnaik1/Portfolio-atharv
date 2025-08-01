import Footer from '@/components/Sections/Footer';
import Hero from '@/components/Sections/Hero';
import { Divider } from '@nextui-org/react';

import {
  web3Projects,
  opensourceProjects,
  personalProjects
} from '@/assests/data/projectsData';

import ProjectsCarousel from '@/components/Sections/ProjectsCarousel';
import Navigation from '@/components/Navigation/Navigation';
import { Atharv } from '@/components/Sections/Atharv';

export default function Home() {
  return (
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
      <Atharv />
      <Footer />
    </main>
  );
}
