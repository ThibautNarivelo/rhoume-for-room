import React, { FC, useState, useEffect } from "react";
import { Post } from "../typings";
import { urlFor } from "../sanity";
import { motion } from "framer-motion";
import Image from "next/image";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import ArrowRightIcon from "@heroicons/react/24/outline/ArrowRightIcon";

type Props = {
  posts: Post[];
};

export const ImagesSection: FC<Props> = ({ posts }) => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", checkScrollRight);
    return function cleanup() {
      window.removeEventListener("scroll", checkScrollRight);
    };
  });

  const checkScrollRight = () => {
    if (showScroll && window.pageXOffset <= 400) {
      setShowScroll(true);
    } else if (!showScroll && window.pageXOffset > 400) {
      setShowScroll(false);
    }
    setShowScroll(true);
  };

  const scrollRight = () => {
    window.scrollTo({ behavior: "smooth" });
  };
  return (
    <div className="bg-r-mainblack h-screen w-screen flex relative justify-center items-center place-items-center">
      <div className="scroll-smooth rounded-lg carousel mx-14">
        {posts.map((post) => (
          <div
            key={post._id}
            className="carousel-item cursor-pointer portait:w-[80vw] portrait:h-[100vw] landscape:w-[42vw] landscape:h-[50vw] landscape:md:h-[39vw] landscape:md:w-[29vw] portrait:md:w-[92vw] portrait:md:h-[120vw] portrait:lg:w-[43vw] portait:lg:h-[55vw] xl:w-[31vw] xl:h-[40vw] 2xl:w-[30vw] 2xl:h-[40vw]"
          >
            {post.image && (
              <Zoom>
                <Image
                  className="rounded-lg portrait:w-[80vw] portrait:h-[100vw] landscape:w-[40vw] landscape:h-[50vw] landscape:md:h-[39vw] landscape:md:w-[28vw] portrait:md:w-[90vw] portrait:md:h-[120vw] portait:lg:w-[42vw] portait:lg:h-[55vw] xl:w-[30vw] xl:h-[40vw] 2xl:w-[32vw] 2xl:h-[40vw] mx-1 opacity-80 hover:opacity-100 transition-opacity"
                  src={urlFor(post.image).url()!}
                  alt="rhoume's pictures"
                  aria-label="rhoume's pictures"
                  width={500}
                  height={500}
                  quality={100}
                />
              </Zoom>
            )}
          </div>
        ))}
      </div>
      <motion.div
        // initial={{
        //   opacity: 1,
        // }}
        // whileInView={{
        //   opacity: 0,
        // }}
        // transition={{
        //   duration: 3,
        // }}
        className="text-r-mainwhite/50 absolute rounded-full h-auto w-[5vw] md:w-[3vw] lg:w-[2vw] xl:w-[2vw] 2xl:w-[2vw] animate-pulse right-2"
      >
        <ArrowRightIcon
        // className="scrollTop text-red-500 bg-white h-20 w-20"
        // onClick={scrollRight}
        />
        {/* <span>scroll to right</span> */}
      </motion.div>
    </div>
  );
};
