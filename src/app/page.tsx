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
// // import { Atharv } from '@/components/Sections/Atharv';

// // export const metadata = {
// //   title: "Atharv Naik — Full Stack Developer",
// //   description:
// //     "Atharv Naik is a Full Stack Developer building scalable web apps with Node.js, React, Next.js, Kafka, ClickHouse, MySQL. Startup-perfect, wears multiple hats.",
// //   openGraph: {
// //     title: "Atharv Naik — Full Stack Developer",
// //     description:
// //       "Atharv Naik is a Full Stack Developer building scalable web apps with Node.js, React, Next.js, Kafka, ClickHouse, MySQL. Startup-perfect, wears multiple hats.",
// //     type: "website",
// //   },
// // };

// export default function Home() {
//   return (
//     <main>
//       <div className="hello-section" id="hello">
//         <Navigation />
//         <Hero />
//       </div>
// {/*       <Reviews /> */}

//       <ProjectsCarousel
//         projects={personalProjects}
//         heading="Personal Projects"
//       />
//       <ProjectsCarousel
//         projects={web3Projects}
//         heading="AI and Web3 projects"
//       />
//       <ProjectsCarousel
//         projects={opensourceProjects}
//         heading="Opensource Projects"
//         carouselSettings={{
//           slidesToScroll: 1,
//           slidesToShow: 2
//         }}
//       />

//       <Divider className="bg-divider" />
// {/*       <Atharv /> */}
//       <Footer />
//     </main>
//   );
// }
export default function Home() {
  return (
    <main>
      <div className="hello-section" id="hello">
        <Navigation />
        <Hero />
      </div>

      <section id="personal-projects" aria-label="Personal projects" className="py-8">
        <ProjectsCarousel
          projects={personalProjects}
          heading="Personal Projects"
        />
      </section>

      <section id="AI-and-web3-projects" aria-label="AI and Web3 projects" className="py-8">
        <ProjectsCarousel
          projects={web3Projects}
          heading="AI and Web3 projects"
        />
      </section>

      <section id="Opensource-projects" aria-label="Opensource projects" className="py-8">
        <ProjectsCarousel
          projects={opensourceProjects}
          heading="Opensource Projects"
          carouselSettings={{
            slidesToScroll: 1,
            slidesToShow: 2
          }}
        />
      </section>
      <section id="contact-me" aria-label="Contact me" className="py-16">
  <h2 className="text-center text-3xl font-bold mb-4">Contact Me</h2>
  <p className="text-center text-gray-400 text-lg">
    Feel free to reach out anytime 👇
  </p>

  <div className="text-center mt-4">
    <a
      href="mailto:atharvajaynaik.com"
      className="text-primary underline text-xl"
    >
      atharvajaynaik.com
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

