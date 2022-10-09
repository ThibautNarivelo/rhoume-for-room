import { sanityClient, urlFor } from "../sanity";
import Head from "next/head";
import Header from "../components/header";
import Masthome from "../components/Masthome";
import About from "../components/about";
import ImagesSection from "../components/images-section";
import BeforeAfter from "../components/before-after";
import Footer from "../components/footer";
import React, { useRef } from "react";
import { Post, Social, PageInfo, Design } from "../typings";

interface Props {
  posts: [Post];
  socialsData: [Social];
  pageInfosData: [PageInfo];
  designsData: [Design];
}

// FRONT END

export default function Home({
  posts,
  socialsData,
  pageInfosData,
  designsData,
}: Props) {
  return (
    console.log(designsData),
    (
      <div className="bg-r-mainblack h-screen snap-y snap-mandatory overflow-scroll z-0">
        <Head>
          <title>Rhoume</title>
          <link rel="icon" href="favicon.ico" />
        </Head>

        {/* HEADER SECTION */}
        <Header socialsData={socialsData} />

        {/* HOME SECTION */}
        <section id="home" className="snap-start">
          {designsData.map((design, idx) => {
            return <Masthome design={design} key={idx} />;
          })}
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="snap-center">
          <About />
        </section>

        {/* IMAGE SECTION */}
        <section id="images-section" className="snap-center">
          <div className="bg-r-mainblack h-screen w-screen flex justify-center items-center snap-mandatory">
            <div className="rounded-lg carousel h-auto w-[75vw] md:w-[90vw] lg:w-[90vw] xl:w-[90vw] 2xl:w-[90vw] mx-10">
              {posts.map((post, idx) => {
                return <ImagesSection post={post} key={idx} />;
              })}
            </div>
          </div>
        </section>

        {/* INFORMATION SECTION */}
        <section id="before-after" className="snap-center">
          <BeforeAfter />
        </section>

        {/* FOOTER SECTION */}
        <section id="footer" className="snap-center">
          <Footer />
        </section>
      </div>
    )
  );
}

// BACK END

// This will change the Home route to a server side rended page route
export const getServerSideProps = async () => {
  // POSTS PICTURE
  const query = `
  *[_type == "post"] {
    _id,
    title,
    author -> {
    name,
    image
  },
    description,
    mainImage,
    slug,
  }
  `;
  const posts = await sanityClient.fetch(query);

  // SOCIALS
  const socialQuery = `
  *[_type == "social"] {
    title,
    url
  }
  `;
  const socialsData = await sanityClient.fetch(socialQuery);

  // PAGE INFO
  const pageInfoQuery = `
    *[_type == "pageInfo"]
    `;
  const pageInfosData = await sanityClient.fetch(pageInfoQuery);

  // DESIGN
  const designQuery = `
  *[_type ==  "design"]{
    title,
    image {
    asset
  },
    slug
  }
    `;
  const designsData = await sanityClient.fetch(designQuery);

  return {
    props: {
      posts,
      socialsData,
      pageInfosData,
      designsData,
    },
  };
};
