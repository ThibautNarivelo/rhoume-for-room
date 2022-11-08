import React, { FC } from "react";
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
    <div className=" bg-r-mainblack h-screen snap-y snap-mandatory overflow-scroll scrollbar-thin scrollbar-track-r-mainblack/50 scrollbar-thumb-r-mainwhite/30 ">
      <Head>
        <title>Rhoume</title>
        <meta name="Rhoume" content="Tattoo Artist" lang="en" />
        <meta name="Rhoume for room" content="Website of Rhoume" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="favicon.ico" />
      </Head>

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
