import type { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import BannerTecnologies from "../components/banner-terconologies";
import ButtonCta from "../components/button-cta";
import CardProject from "../components/card-project";
import EnvelopeIcon from "../components/icons/envelope-icon";
import GithubIcon from "../components/icons/github-icon";
import LinkedinIcon from "../components/icons/linkedin-icon";
import SectionLayout from "../components/layouts/section-layout";
import Navbar from "../components/navbar";
import TitleHeader from "../components/title-section";

import projects from "../config/data/projects.json";
import texts from "../config/data/texts.json";

const Home: NextPage = () => {
  const [isLorem, setIsLorem] = useState(true);

  return (
    <main className="bg-slate-800">
      <Navbar />
      <div>
        <SectionLayout id="about"  container className="bg-slate-900">
          <TitleHeader  subtitle="a litter piece of my life">About</TitleHeader>
          <div className="mb-8">
            <p className="text-white tracking-wide leading-8 text-xl font-text subpixel-antialiased">
              {isLorem
                ? `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              feugiat urna aliquet mauris pharetra rhoncus. Nam tortor nulla,
              cursus in lorem ut, cursus feugiat odio. Pellentesque at venenatis
              lectus. Proin rutrum vehicula leo, sed viverra urna scelerisque
              non. Fusce ante elit, varius vel porta non, varius a sem...`
                : texts.about}
            </p>
          </div>
          {isLorem && (
            <div className="my-8 text-white italic text-lg bg-black bg-opacity-20 p-2 rounded">
              Oh no! Another Lorem ipsum text
            </div>
          )}

          <ButtonCta onClick={() => setIsLorem(!isLorem)}>
            {" "}
            {isLorem
              ? "Translate to english"
              : "Back to Lorem, are you sure?"}{" "}
          </ButtonCta>
        </SectionLayout>

        <SectionLayout id="projects" dark className="container mx-auto">
          <TitleHeader subtitle="that I have made for improve knowlegedments">
            Projects
          </TitleHeader>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {projects.map((project) => (
              <CardProject
                key={project.title}
                title={project.title}
                description={project.description}
                imgSrc={project.imagSrc}
                tecnologies={project.tecnologies}
                linkCode={project.linkCode}
                linkDemo={project.linkDemo}
                linkCodespace={project.linkCodespaces}
              />
            ))}
          </div>
        </SectionLayout>

        <SectionLayout id="stack" dark>
          <TitleHeader subtitle="which have been used by me">
            Technologies
          </TitleHeader>

          <div className="py-8">
            <BannerTecnologies />
          </div>
        </SectionLayout>

        <SectionLayout id="contact" className="bg-slate-100">
          <TitleHeader dark subtitle="I let you some ways for contact me">
            Contact
          </TitleHeader>
          <div className="flex items-center justify-center gap-10 mt-12">
            <Link href="https://linkedin.com">
              <a target="_blank" rel="noopener noreferrer">
                <LinkedinIcon className="fill-slate-500 h-10 w-10 hover:p-2 rounded hover:fill-gray-800 hover:bg-gradient-to-r from-red-200 via-red-300 to-yellow-200" />
              </a>
            </Link>
            <Link href="https://github.com/JoseVteRS">
              <a target="_blank" rel="noopener noreferrer">
                <GithubIcon className="fill-slate-500 h-10 w-10 hover:p-2 rounded hover:fill-gray-700 hover:bg-gradient-to-r from-red-200 via-red-300 to-yellow-200" />
              </a>
            </Link>
            <Link href="mailto:jvrs.90@gmail.com">
              <a rel="noopener noreferrer">
                <EnvelopeIcon className="fill-slate-500 h-10 w-10 hover:p-2 rounded hover:fill-gray-800 hover:bg-gradient-to-r from-red-200 via-red-300 to-yellow-200" />
              </a>
            </Link>
          </div>
        </SectionLayout>
      </div>
    </main>
  );
};

export default Home;
