import { useState } from "react";
import type {
  GetServerSideProps,
  GetServerSidePropsContext,
  NextPage,
} from "next";
import Head from "next/head";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import BannerTecnologies from "../components/banner-terconologies";
import ButtonCta from "../components/button-cta";
import ButtonLink from "../components/button-link";
import CardProject from "../components/card-project";
import EnvelopeIcon from "../components/icons/envelope-icon";
import GithubIcon from "../components/icons/github-icon";
import LinkedinIcon from "../components/icons/linkedin-icon";
import SectionLayout from "../components/layouts/section-layout";
import Navbar from "../components/navbar";
import TitleHeader from "../components/title-section";

import projects from "../config/data/projects.json";
import texts from "../config/data/texts.json";
import TimelineContainer from "../components/timeline/timeline-container";
import TimelineItem from "../components/timeline/timeline-item";

const Home: NextPage = () => {
  const [isLorem, setIsLorem] = useState(true);
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>Portfolio de Jose Vte</title>
      </Head>
      <main className="bg-gradient-to-tr from-slate-700 via-sky-900 to-slate-900">
        <Navbar />
        <div>
          <SectionLayout id="about" container>
            <TitleHeader subtitle={t("about_subtitle")}>
              {t("about")}
            </TitleHeader>
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
                {t("joke_text")}
              </div>
            )}

            <ButtonCta onClick={() => setIsLorem(!isLorem)}>
              {" "}
              {isLorem
                ? "Translate to english"
                : "Back to Lorem, are you sure?"}{" "}
            </ButtonCta>
          </SectionLayout>

          <SectionLayout
            id="projects"
            className=" bg-gradient-to-t  from-slate-900  to-sky-900"
          >
            <TitleHeader subtitle={t("projects_subtitle")}>
              {t("projects")}
            </TitleHeader>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {projects.map((project, index) => (
                <CardProject
                index={index}
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

          <SectionLayout
            id="stack"
            className="bg-gradient-to-b  from-slate-900  to-sky-900"
          >
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
                <a
                  rel="noopener noreferrer"
                  className="hover:shadow-xl p-5 text-white rounded-md transition-all duration-500 bg-gradient-to-tl from-pink-500 via-red-500 to-yellow-400 bg-size-200 bg-pos-0 hover:bg-pos-100"
                >
                  <LinkedinIcon className="fill-slate-50 h-8 w-8" />
                </a>
              </Link>
              <Link href="https://github.com/JoseVteRS">
                <a
                  rel="noopener noreferrer"
                  className="hover:shadow-xl p-5 text-white rounded-md transition-all duration-500 bg-gradient-to-tl from-pink-500 via-red-500 to-yellow-400 bg-size-200 bg-pos-0 hover:bg-pos-100"
                >
                  <GithubIcon className="fill-slate-50 h-8 w-8" />
                </a>
              </Link>
              <Link href="mailto:jvrs.90@gmail.com">
                <a
                  rel="noopener noreferrer"
                  className="hover:shadow-xl p-5 text-white rounded-md transition-all duration-500 bg-gradient-to-tl from-pink-500 via-red-500 to-yellow-400 bg-size-200 bg-pos-0 hover:bg-pos-100"
                >
                  <EnvelopeIcon className="fill-slate-50 h-8 w-8" />
                </a>
              </Link>
            </div>
          </SectionLayout>
        </div>
      </main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  locale,
}: GetServerSidePropsContext) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || "es", ["common"])),
    },
  };
};

export default Home;
