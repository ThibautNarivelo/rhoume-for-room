import React, { FC } from "react";
import { motion } from "framer-motion";
import { Design } from "../typings";
import { urlFor } from "../sanity";

interface MastHomeProps {
  designs: Design[];
}

export const Masthome: FC<MastHomeProps> = ({ designs }) => {
  return (
    <div className="bg-r-mainblack h-screen w-screen">
      {designs.map((design) => (
        <div
          key={design._id}
          className="h-full w-full flex flex-col items-center justify-center"
        >
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 1,
            }}
            viewport={{ once: true }}
            className="w-[50vw] lg:w-[35vw] xl:[15vw] 2xl:w-[30vw] hover:blur-sm duration-700"
          >
            <img
              src={urlFor(design.rhoumeTitle).url()}
              alt="Rhoume Title Design"
            />
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 1,
            }}
            viewport={{ once: true }}
            className="w-[52vw] lg:w-[37vw] xl:[15vw] 2xl:w-[32vw] pb-2 hover:blur-sm duration-700"
          >
            <img src={urlFor(design.forroomTitle).url()} alt="For_Room Title" />
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
            }}
            viewport={{ once: true }}
            className="w-[55vw] hover:w-[60vw] md:w-[55vw] hover:md:w-[60vw] lg:w-[40vw] hover:lg:w-[45vw] xl:w-[40vw] 2xl:w-[35vw] hover:2xl:w-[40vw] hover:xl:w-[45vw]  ease-in-out duration-700"
          >
            <img src={urlFor(design.rhoumeDesign).url()} alt="Rhoume Design" />
          </motion.div>

          <motion.div
            initial={{
              y: 500,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1,
            }}
          >
            <a href="#contactMe" className="contactMeButton">
              <p>{design.contentButton}</p>
            </a>
          </motion.div>
        </div>
      ))}
    </div>
  );
};
