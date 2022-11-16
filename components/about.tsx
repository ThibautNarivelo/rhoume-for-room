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
          className="p-10 flex flex-col leading-snug font-['Lora'] text-sm gap-20 md:text-lg lg:text-xl xl:text-2xl xl:gap-28 2xl:text-3xl"
        >
          <motion.div
            initial={{
              opacity: 0,
              y: 10,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.3,
            }}
            viewport={{ once: true }}
            className="text-start transition ease-in-out duration-500"
          >
            <PortableText
              dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
              projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
              content={aboutInfo.definition}
            />
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              y: 10,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            viewport={{ once: true }}
            className="text-end transition ease-in-out duration-500"
          >
            <PortableText
              dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
              projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
              content={aboutInfo.bio}
            />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};
