import React, { FC } from "react";

import { motion } from "framer-motion";

export default function ImagesSection() {
  return (
    <div className="h-screen w-screen bg-r-mainblack">
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
        }}
        viewport={{ once: true }}
        className="carousel-item mx-2 cursor-pointer"
      >
        {" "}
        hello world
        {/* <Link href={`/post/${post.slug?.current}`}>
        <img
          className="rounded-lg w-[75vw] h-auto md:w-[40vw] lg:w-[30vw] xl:w-[25vw] 2xl:w-[20vw] opacity-60 hover:opacity-100 snap-center ease-in-out duration-300"
          src={urlFor(post.mainImage).url()!}
          alt="rhoume's pictures"
        />
      </Link> */}
      </motion.div>
    </div>
  );
}
