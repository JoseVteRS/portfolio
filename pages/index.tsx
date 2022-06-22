import type { NextPage } from "next";
import Link from "next/link";
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

const Home: NextPage = () => {
  return (
    <main className="bg-slate-800">
      <Navbar />
      <div>
        <SectionLayout id="about" container dark>
          <TitleHeader subtitle="asdfasfff asd fa">About</TitleHeader>
          <div className="mb-8">
            <p className="text-white tracking-wide leading-8 text-xl">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered
            </p>
          </div>
          <ButtonCta onClick={() => console.log("Hola mundo")}>
            Ver más
          </ButtonCta>
        </SectionLayout>

        <SectionLayout id="projects"  dark>
          <TitleHeader subtitle="that I have made for improve knowlegedments">
            Projects
          </TitleHeader>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {projects.map((project) => (
              <CardProject
                title={project.title}
                description={project.description}
                imgSrc={project.imagSrc}
                tecnologies={project.tecnologies}
                linkCode={project.linkCode}
                linkDemo={project.linkDemo}
              />
            ))}
          </div>
        </SectionLayout>

        <SectionLayout id="stack" container dark>
          <TitleHeader subtitle="which have been used by me">
            Technologies
          </TitleHeader>

          <div className="py-8">
            <BannerTecnologies />
          </div>
        </SectionLayout>

        <SectionLayout id="contact">
          <TitleHeader dark subtitle="I let you some ways for contact me">
            Contact
          </TitleHeader>
          <div className="flex items-center justify-center gap-10 mt-12">
            <Link href="https://linkedin.com">
              <a target="_blank" rel="noopener noreferrer">
                <LinkedinIcon className="fill-slate-500 h-10 w-10" />
              </a>
            </Link>
            <Link href="https://github.com/JoseVteRS">
              <a target="_blank" rel="noopener noreferrer">
                <GithubIcon className="fill-slate-500 h-10 w-10" />
              </a>
            </Link>
            <Link href="mailto:jvrs.90@gmail.com">
              <a rel="noopener noreferrer">
                <EnvelopeIcon className="fill-slate-500 h-10 w-10" />
              </a>
            </Link>
          </div>
        </SectionLayout>
      </div>
    </main>
  );
};

export default Home;
