import React, { FC } from "react";
import { Post } from "../typings";
import { urlFor } from "../sanity";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

type Props = {
  posts: Post[];
};

export const ImagesSection: FC<Props> = ({ posts }) => {
  return (
    <div className="bg-r-mainblack h-screen w-screen flex justify-center items-center place-items-center">
      <div className="rounded-lg h-auto w-[75vw] md:w-[57vw] lg:w-[90vw] xl:w-[90vw] carousel mx-10">
        {posts?.map((post) => (
          <div key={post._id} className="carousel carousel-item cursor-pointer">
            {post.image && (
              <Zoom>
                <img
                  className="rounded-lg h-auto w-[75vw] md:w-[57vw] lg:w-[30vw] xl:w-[20vw] mx-1 opacity-80 hover:opacity-100 snap-center ease-in-out duration-300"
                  src={urlFor(post.image).url()!}
                  alt="rhoume's pictures"
                  width="500"
                />
              </Zoom>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
