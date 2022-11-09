import React, { FC } from "react";
import { Post } from "../typings";
import { urlFor } from "../sanity";
import Image from "next/image";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

type Props = {
  posts: Post[];
};

export const ImagesSection: FC<Props> = ({ posts }) => {
  return (
    <div className="bg-r-mainblack h-screen w-screen flex justify-center items-center place-items-center">
      <div className="scroll-smooth rounded-lg  carousel mx-10">
        {posts.map((post) => (
          <div
            key={post._id}
            className="carousel-item cursor-pointer portait:w-full portrait:h-[100vw] landscape:w-[42vw] landscape:h-[50vw] landscape:md:h-[40vw] landscape:md:w-[32vw] portrait:md:w-[75vw] portrait:md:h-[100vw] "
          >
            {post.image && (
              <Zoom>
                <Image
                  className="rounded-lg portrait:w-[80vw] portrait:h-[100vw] landscape:w-[40vw] landscape:h-[50vw] landscape:md:h-[40vw] landscape:md:w-[30vw] portrait:md:w-[70vw] portrait:md:h-[100vw] mx-1 opacity-80 hover:opacity-100 transition-opacity"
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
    </div>
  );
};
