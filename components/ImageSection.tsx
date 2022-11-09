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
      <div className="scroll-smooth rounded-lg landscape:w-[100vw] landscape:h-[35vw] portrait:h-[100vw] portrait:w-[70vw] md:h-[40vw] md:w-[100vw] lg:h-[40vw] lg:w-[100vw] xl:w-[100vw] xl:h-[50vw] 2xl:h-[25vw] 2xl:w-[90vw] carousel mx-10">
        {posts.map((post) => (
          <div key={post._id} className="carousel-item cursor-pointer">
            {post.image && (
              <Zoom>
                <Image
                  className="rounded-lg landscape:w-[23vw] landscape:h-[35vw] portrait:h-[100vw] portrait:w-[70vw] md:h-[40vw] md:w-[30vw] lg:h-[40vw] lg:w-[30vw] xl:h-[50vw] xl:w-[35vw] 2xl:w-[20vw] 2xl:h-[25vw] mx-1 opacity-80 hover:opacity-100 transition-opacity"
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
