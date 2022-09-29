import React, { FC } from "react";
import type { NextPage } from "next";
import { Post } from "../typings";
import Link from "next/link";
import { urlFor } from "../sanity";

interface Props {
  post: Post;
}

export const ImagesSection: FC<Props> = ({ post }) => {
  console.log(post);
  return (
    <div className="">
      <Link href={`/post/${post.slug?.current}`}>
        <img
          className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          src={urlFor(post.mainImage).url()!}
          alt="rhoume's tattoo"
        />
      </Link>
    </div>
  );
};

export default null;
