import React, { FC } from "react";
import { sanityClient, urlFor } from "../sanity";
import Head from "next/head";
import { Post, Social, PageInfo, Design } from "../typings";
import { GetStaticProps, NextPage } from "next";
import { fetchSocials } from "../utils/fetchSocials";
import { fetchDesigns } from "../utils/fetchDesigns";
import { fetchPageInfos } from "../utils/fetchPageInfos";
import { fetchPosts } from "../utils/fetchPosts";
import {
  About,
  Faq,
  Footer,
  Header,
  Masthome,
  ImagesSection,
} from "../components";

// BACKEND

interface Props {
  socials: Social[];
  designs: Design[];
  pageInfos: PageInfo[];
  posts: Post[];
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const socials: Social[] = await fetchSocials();
  const designs: Design[] = await fetchDesigns();
  const pageInfos: PageInfo[] = await fetchPageInfos();
  const posts: Post[] = await fetchPosts();

  return {
    props: {
      socials,
      designs,
      pageInfos,
      posts,
    },
    // Next.js will attempt to re-generate the page:
    // When a request comes in
    // At most once every 5 seconds
    revalidate: 5,
  };
};

// FRONTEND

const Home: FC<Props> = ({ socials, designs, pageInfos, posts }: Props) => {
  return (
    <div className="bg-r-mainblack h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Rhoume</title>
        <link rel="icon" href="favicon.ico" />
      </Head>

      {/* HEADER SECTION */}
      <Header socials={socials} />

      {/* HOME SECTION */}
      <section id="home" className="snap-start">
        <Masthome designs={designs} />
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="snap-center">
        <About />
      </section>

      {/* IMAGE SECTION */}
      <section id="images-section" className="snap-center">
        <ImagesSection posts={posts} />
      </section>

      {/* INFORMATION SECTION */}
      <section id="faq" className="snap-center">
        <Faq pageInfos={pageInfos} />
      </section>

      {/* FOOTER SECTION */}
      <section id="footer" className="snap-center">
        <Footer />
      </section>
    </div>
  );
};

export default Home;
