import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { FC } from "react";
import ButtonCta from "../components/button-cta";
import CardProject from "../components/card-project";
import TitleHeader from "../components/title-section";

const Home: NextPage = () => {
  return (
    <main className="bg-slate-800">
      <div className="container mx-auto  p-8">
        <TitleHeader subtitle="asdfasfff asd fa">About</TitleHeader>
        <ButtonCta onClick={() => console.log("Hola mundo")}>Ver más</ButtonCta>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <TitleHeader subtitle="asdfasfff asd fa">Projects</TitleHeader>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <CardProject
            title="Image uploader"
            description="App for uploader image and get its link"
            imgSrc="https://via.placeholder.com/400x150"
            tecnologies={[{ name: "NodeJS" }]}
            linkCode="https://github.com"
            linkDemo="https://image-uploader.demo.com"
          />
          <CardProject
            title="Weather app"
            description="App for show current weather"
            imgSrc="https://via.placeholder.com/400x150"
            tecnologies={[{ name: "NextJS" }, {name: 'Tailwindcss'}]}
            linkCode="https://github.com"
            linkDemo="https://image-uploader.demo.com"
          />
          <CardProject
            title="Image uploader"
            description="App for uploader image and get its link"
            imgSrc="https://via.placeholder.com/400x150"
            tecnologies={[{ name: "NodeJS" }]}
            linkCode="https://github.com"
            linkDemo="https://image-uploader.demo.com"
          />
          <CardProject
            title="Image uploader"
            description="App for uploader image and get its link"
            imgSrc="https://via.placeholder.com/400x150"
            tecnologies={[{ name: "NodeJS" }]}
            linkCode="https://github.com"
            linkDemo="https://image-uploader.demo.com"
          />
        </div>
      </div>
    </main>
  );
};

export default Home;
