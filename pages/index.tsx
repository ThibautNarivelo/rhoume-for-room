import React, { FC } from "react";
import Head from "next/head";
import { Header } from "../components/header";
import { Masthome } from "../components/mastHome";
import { About } from "../components/about";
import { ContactMe } from "../components/contactMe";
import { Faq } from "../components/faq";
import { ImagesSection } from "../components/imageSection";
import { Post, Social, PageInfo, Design, AboutInfo } from "../typings";
import { GetStaticProps } from "next";
import { fetchSocials } from "../utils/fetchSocials";
import { fetchDesigns } from "../utils/fetchDesigns";
import { fetchPageInfos } from "../utils/fetchPageInfos";
import { fetchPosts } from "../utils/fetchPosts";
import { fetchAboutInfos } from "../utils/fetchAboutInfos";

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
    // At most once every 5 seconds
    revalidate: 5,
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
    <div className="bg-r-mainblack h-screen snap-y snap-mandatory overflow-scroll z-0 scrollbar-thin scrollbar-track-r-mainblack/50 scrollbar-thumb-r-mainwhite/30 ">
      <Head>
        <title>Rhoume</title>
        <link rel="icon" href="favicon.ico" />
      </Head>

      <Header socials={socials} />

      <section id="home" className="snap-start">
        <Masthome designs={designs} />
      </section>

      <section id="about" className="snap-center">
        <About aboutInfos={aboutInfos} />
      </section>

      <section id="images-section" className="snap-center">
        <ImagesSection posts={posts} />
      </section>

      <section id="faq" className="snap-center">
        <Faq pageInfos={pageInfos} />
      </section>

      <section id="contactMe" className="snap-center">
        <ContactMe aboutInfos={aboutInfos} />
      </section>
    </div>
  );
};

export default Home;
