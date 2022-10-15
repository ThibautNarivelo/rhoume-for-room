import React, { FC } from "react";
import { PageInfo } from "../typings";
import PortableText from "react-portable-text";

type Props = {
  pageInfo: PageInfo;
};

export const FaqCard: FC<Props> = ({ pageInfo }) => {
  return (
    <div className="h-screen flex  flex-col snap-center cursor-default">
      <h3 className="w-screen h-auto flex justify-end mt-10 tracking-[5vw] p-5 uppercase text-r-mainblack sm:text-md md:text-xl lg:text-2xl  md:mt-20 md:p-10 xl:p-20 hover:blur-sm ease-in-out duration-700">
        {pageInfo.title}
      </h3>
      <article className=" text-r-mainblack gap-5 items-center space-x-10 flex-shrink-0 p-6 text-sm md:leading-5 md:px-8 lg:leading-6 lg:px-20 xl:text-md xl:leading-6 xl:px-20 2xl:px-30">
        <PortableText
          dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
          projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
          content={pageInfo.body}
        />
      </article>
    </div>
  );
};

export default null;
