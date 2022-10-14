import React, { FC } from "react";
import Link from "next/link";
import { Post } from "../typings";
import { urlFor } from "../sanity";
import { motion } from "framer-motion";

type Props = {
  posts: Post[];
};

export const ImagesSection: FC<Props> = ({ posts }) => {
  return (
    <div className="bg-r-mainblack h-screen w-screen flex justify-center items-center place-items-center">
      <div className="rounded-lg h-auto w-[60vw] md:w-[50vw] lg:w-[90vw] xl:w-[90vw] carousel mx-10">
        {posts?.map((post) => (
          <motion.div
            key={post._id}
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
            className="carousel carousel-item cursor-pointer"
          >
            <Link href={`/post/${post.slug?.current}`}>
              <img
                className="rounded-lg h-auto w-[60vw] md:w-[50vw] lg:w-[30vw] xl:w-[20vw] mx-1 opacity-60 hover:opacity-100 snap-center ease-in-out duration-300"
                src={urlFor(post.image).url()!}
                alt="rhoume's pictures"
              />
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default null;
