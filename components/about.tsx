import React, { FC } from "react";
import { motion } from "framer-motion";
import { AboutInfo } from "../typings";
import PortableText from "react-portable-text";

type Props = {
  aboutInfos: AboutInfo[];
};

export const About: FC<Props> = ({ aboutInfos }) => {
  return (
    <div className="h-screen w-screen bg-r-mainwhite text-r-mainblack flex items-center justify-center text-center">
      {aboutInfos?.map((aboutInfo) => (
        <div
          key={aboutInfo._id}
          className="p-10 gap-40 flex flex-col leading-snug font-['Lora'] text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl"
        >
          <motion.div
            initial={{
              x: -400,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1,
            }}
            viewport={{ once: true }}
            className="text-start hover:blur-sm transition ease-in-out duration-500"
          >
            <PortableText
              dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
              projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
              content={aboutInfo.definition}
            />
          </motion.div>
          <motion.div
            initial={{
              x: 400,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1,
            }}
            viewport={{ once: true }}
            className="text-end hover:blur-sm transition ease-in-out duration-500"
          >
            <PortableText
              dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
              projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
              content={aboutInfo.bio}
            />
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default null;
