import { sanityClient, urlFor } from "../sanity";
import Head from "next/head";
import Header from "../components/header";
import Masthome from "../components/Masthome";
import About from "../components/about";
import { ImagesSection } from "../components";
import { Post } from "../typings";
import BeforeAfter from "../components/before-after";
import Footer from "../components/footer";
import React, { useRef } from "react";

interface Props {
  posts: [Post];
}

export default function Home({ posts }: Props) {
  return (
    <div className="bg-r-mainblack h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Rhoume</title>
        <link rel="icon" href="favicon.ico" />
      </Head>

      <Header />

      <section id="home" className="snap-start">
        <Masthome />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="images-section" className="snap-center">
        <div className="bg-r-mainblack h-screen w-screen flex justify-center items-center snap-mandatory">
          <div className="rounded-lg carousel h-auto w-[75vw] md:w-[90vw] lg:w-[90vw] xl:w-[90vw] 2xl:w-[90vw] mx-10">
            {posts.map((post, idx) => {
              return <ImagesSection post={post} key={idx} />;
            })}
          </div>
        </div>
      </section>

      <section id="before-after" className="snap-center">
        <BeforeAfter />
      </section>

      <section id="footer" className="snap-center">
        <Footer />
      </section>
    </div>
  );
}

// DON'T TOUCH!

// This will change the Home route to a server side rended page route
export const getServerSideProps = async () => {
  const query = `*[_type == "post"] {
    _id,
    title,
    author -> {
    name,
    image
  },
    description,
    mainImage,
    slug,
  }`;

  const posts = await sanityClient.fetch(query);

  return {
    props: {
      posts,
    },
  };
};
