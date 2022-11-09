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
      <div className="scroll-smooth rounded-lg h-auto w-[75vw] md:w-[57vw] lg:w-[90vw] xl:w-[90vw] carousel mx-10 landscape:h-[40vw] landscape:w-[100vw]">
        {posts.map((post) => (
          <div key={post._id} className="carousel-item cursor-pointer">
            {post.image && (
              <Zoom>
                <Image
                  className="rounded-lg h-[110vw] md:h-[85vw] lg:h-[45vw] xl:h-[25vw] w-[75vw] md:w-[57vw] lg:w-[30vw] xl:w-[20vw] mx-1 opacity-80 hover:opacity-100 transition-opacity landscape:h-[40vw] landscape:w-[28vw]"
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
