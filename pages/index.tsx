import React, { FC } from "react";
import { Helmet } from "react-helmet";
import Head from "next/head";
import { GetStaticProps } from "next";
import { Post, Social, PageInfo, Design, AboutInfo } from "../typings";
import { Masthome } from "../components/Masthome";
import { About } from "../components/about";
import { ContactMe } from "../components/contactMe";
import { Faq } from "../components/Faq";
import { ImagesSection } from "../components/ImageSection";
import { fetchSocials } from "../utils/fetchSocials";
import { fetchDesigns } from "../utils/fetchDesigns";
import { fetchPageInfos } from "../utils/fetchPageInfos";
import { fetchPosts } from "../utils/fetchPosts";
import { fetchAboutInfos } from "../utils/fetchAboutInfos";
import { urlFor } from "../sanity";

interface Props {
  socials: Social[];
  designs: Design[];
  pageInfos: PageInfo[];
  posts: Post[];
  aboutInfos: AboutInfo[];
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const socials: Social[] = await fetchSocials();
  const designs: Design[] = await fetchDesigns();
  const pageInfos: PageInfo[] = await fetchPageInfos();
  const posts: Post[] = await fetchPosts();
  const aboutInfos: AboutInfo[] = await fetchAboutInfos();

  return {
    props: {
      socials,
      designs,
      pageInfos,
      posts,
      aboutInfos,
    },
    // Next.js will attempt to re-generate the page:
    // When a request comes in
    // At most once every 2 seconds
    revalidate: 10,
  };
};

const Home: FC<Props> = ({
  socials,
  designs,
  pageInfos,
  posts,
  aboutInfos,
}: Props) => {
  return (
    <div className=" bg-r-mainblack h-screen w-screen scroll-smooth snap-y snap-mandatory scrollbar-thin scrollbar-track-r-mainblack/50 scrollbar-thumb-r-mainwhite/30 ">
      {designs?.map((design) => (
        <Head key={design._id}>
          {/* <Helmet> */}
          <title>Rhoume</title>
          <meta
            name="viewport"
            content="height=device-height, initial-scale=1"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="title" content="Rhoume for__room" />
          <meta
            name="description"
            content="Rhoume is a welcoming, intimate and ever-evolving creative space curated by Moriah Georges.
Moriah is an Australian illustrator and tattoo artist based in Paris, France. She gathers inspiration from her dance and choreography background, music, spirituality and nature while exploring the rhythms and patterns of her surroundings."
          />
          {/* <!-- Open Graph / Facebook --> */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://rhoume.com/" />
          <meta property="og:title" content="Rhoume for__room" />
          <meta
            property="og:description"
            content="Rhoume is a welcoming, intimate and ever-evolving creative space curated by Moriah Georges.
Moriah is an Australian illustrator and tattoo artist based in Paris, France. She gathers inspiration from her dance and choreography background, music, spirituality and nature while exploring the rhythms and patterns of her surroundings."
          />
          <meta property="og:image" content={urlFor(design.imageSEO).url()} />

          {/* <!-- Twitter --> */}
          <meta property="twitter:card" content="Rhoume" />
          <meta property="twitter:url" content="https://rhoume.com/" />
          <meta property="twitter:title" content="Rhoume for__room" />
          <meta
            property="twitter:description"
            content="Rhoume is a welcoming, intimate and ever-evolving creative space curated by Moriah Georges.
Moriah is an Australian illustrator and tattoo artist based in Paris, France. She gathers inspiration from her dance and choreography background, music, spirituality and nature while exploring the rhythms and patterns of her surroundings."
          />
          <meta
            property="twitter:image"
            content={urlFor(design.imageSEO).url()}
          />
          <link rel="icon" href="favicon.ico" />
          {/* </Helmet> */}
        </Head>
      ))}

      <section id="home" className="snap-center">
        <Masthome designs={designs} socials={socials} />
      </section>

      <section id="about" className="snap-center">
        <About aboutInfos={aboutInfos} />
      </section>

      <section id="images-section" className="snap-center">
        <ImagesSection posts={posts} />
      </section>

      <section id="contactMe" className="snap-center">
        <ContactMe aboutInfos={aboutInfos} socials={socials} />
      </section>

      <section id="faq" className="snap-center">
        <Faq pageInfos={pageInfos} aboutInfos={aboutInfos} />
      </section>
    </div>
  );
};

export default Home;
