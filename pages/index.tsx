import type { NextPage } from "next";
import BannerTecnologies from "../components/banner-terconologies";
import ButtonCta from "../components/button-cta";
import CardProject from "../components/card-project";
import TitleHeader from "../components/title-section";

import projects from "../config/data/projects.json";

const Home: NextPage = () => {
  return (
    <main className="bg-slate-800">
      <div className="container mx-auto  p-8">
        <section id="about" className="my-36">
          <TitleHeader subtitle="asdfasfff asd fa">About</TitleHeader>
          <ButtonCta onClick={() => console.log("Hola mundo")}>
            Ver más
          </ButtonCta>
        </section>

        <section id="#projects" className="my-36">
          <TitleHeader subtitle="that I have made for improve knowlegedments">
            Projects
          </TitleHeader>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {projects.map((project) => (
              <CardProject
                title={project.title}
                description={project.description}
                imgSrc="https://via.placeholder.com/400x250"
                tecnologies={project.tecnologies}
                linkCode={project.linkCode}
                linkDemo={project.linkDemo}
              />
            ))}
          </div>
        </section>

        <section id="#stack" className="my-36">
          <TitleHeader subtitle="which have been used by me">
            Technological stack
          </TitleHeader>

          <div className="py-8">
            <BannerTecnologies />
          </div>
        </section>

        <section id="#contact" className="my-36">
          <TitleHeader subtitle="I let you some ways for contact me">Contact</TitleHeader>
        </section>
      </div>
    </main>
  );
};

export default Home;
