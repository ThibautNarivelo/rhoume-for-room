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
      {designs?.map((design) => (
        <div
          key={design._id}
          className="h-full w-full flex flex-col items-center justify-center"
        >
          {/* <motion.div
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
          </motion.div> */}

          {/* <motion.div
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
            className="w-[52vw] my-2 lg:w-[37vw] xl:[15vw] 2xl:w-[32vw] hover:blur-sm duration-700"
          >
            <img src={urlFor(design.forroomTitle).url()} alt="For_Room Title" />
          </motion.div> */}

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
            className=" w-[55vw] hover:w-[60vw] md:w-[55vw] hover:md:w-[60vw] lg:w-[40vw] hover:lg:w-[45vw] xl:w-[20vw] 2xl:w-[20vw] hover:2xl:w-[15vw] hover:xl:w-[25vw] ease-in-out duration-700"
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
            <button className="p-0 md:p-1 my-5 w-[28vw] hover:w-[55vw] lg:w-[25vw] hover:lg:w-[35vw] xl:w-[20vw] hover:xl:w-[35vw] 2xl:w-[12vw] hover:2xl:w-[30vw] text-r-mainwhite border-solid border-2 border-r-mainwhite rounded-full hover:bg-r-mainwhite hover:text-r-mainblack duration-700">
              <a href="#contactMe">{design.contentButton}</a>
            </button>
          </motion.div>
        </div>
      ))}
    </div>
  );
};
