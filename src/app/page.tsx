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
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Atharv Naik — Mobile App Developer & GTM Expert',
  description:
    'Atharv Naik (async-atharv) — Mobile App Developer & Go-To-Market Expert. 7+ years shipping production iOS & Android apps with full GTM strategy. Founder of IPASHIP LLC.',
  alternates: {
    canonical: 'https://async-atharv.com'
  }
};

export default function Home() {
  return (
    <main itemScope itemType="https://schema.org/ProfilePage">
      <meta itemProp="mainEntity" content="https://async-atharv.com/#person" />
      <div className="hello-section" id="hello">
        <Navigation />
        <Hero />
      </div>
      <section id="personal-projects" aria-label="Personal projects by Atharv Naik" className="py-8">
        <ProjectsCarousel
          projects={personalProjects}
          heading="Personal Projects"
        />
      </section>

      <section id="AI-and-web3-projects" aria-label="AI and Web3 projects by Atharv Naik" className="py-8">
        <ProjectsCarousel
          projects={web3Projects}
          heading="AI and Web3 projects"
        />
      </section>

      <section id="Opensource-projects" aria-label="Opensource projects by Atharv Naik" className="py-8">
        <ProjectsCarousel
          projects={opensourceProjects}
          heading="Opensource Projects"
          carouselSettings={{
            slidesToScroll: 1,
            slidesToShow: 2
          }}
        />
      </section>
      <section id="contact-me" aria-label="Contact Atharv Naik" className="py-16">
        <h2 className="text-center text-3xl font-bold mb-4">Contact Me</h2>
        <p className="text-center text-gray-400 text-lg">
          Feel free to reach out anytime 👇
        </p>

        <div className="text-center mt-4">
          <a
            href="mailto:atharvajaynaik@gmail.com"
            className="text-primary underline text-xl"
          >
            atharvajaynaik@gmail.com
          </a>
        </div>
      </section>

      <Divider className="bg-divider" />
      <footer id="footer">
        <Footer />
      </footer>
    </main>
  );
}

