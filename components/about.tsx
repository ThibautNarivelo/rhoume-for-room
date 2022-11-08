import React, { FC } from "react";
import { motion } from "framer-motion";
import { AboutInfo } from "../typings";
import PortableText from "react-portable-text";

type Props = {
  aboutInfos: AboutInfo[];
};

export const About: FC<Props> = ({ aboutInfos }) => {
  return (
    <div className="h-screen w-screen bg-r-mainwhite text-r-mainblack flex items-center justify-center text-center cursor-default select-none">
      {aboutInfos?.map((aboutInfo) => (
        <motion.div
          key={aboutInfo._id}
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
          viewport={{ once: true }}
          className="p-10 gap-40 flex flex-col leading-snug font-['Lora'] text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl"
        >
          <div className="text-start lg:hover:blur-sm transition ease-in-out duration-500">
            <PortableText
              dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
              projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
              content={aboutInfo.definition}
            />
          </div>
          <div className="text-end lg:hover:blur-sm transition ease-in-out duration-500">
            <PortableText
              dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
              projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
              content={aboutInfo.bio}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

// eslint-disable-next-line import/no-anonymous-default-export
