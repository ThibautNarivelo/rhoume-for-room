import React, { FC } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Design } from "../typings";
import { urlFor } from "../sanity";

// BACKEND

interface MastHomeProps {
  designs: Design[];
}

// FRONTEND

export const Masthome: FC<MastHomeProps> = ({ designs }) => {
  return (
    <div className="bg-r-mainblack h-screen w-screen">
      {designs.map((design) => (
        <div
          key={design._id}
          className="h-full w-full flex flex-col items-center justify-center"
        >
          {/* RHOUME */}
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
            <img src="./rhoume.png" alt="rhoume logo" />
          </motion.div>

          {/* FOR__ROOM */}
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
            <img src="./for ___ room.png" alt="for_room" />
          </motion.div>

          {/* RHOUME DESIGN */}
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
            <img src={urlFor(design.image).url()} />
            {/* <Image
                src={urlFor(design?.image).url()}
                width={size}
                height={size}
                layout="fill"
              /> */}
          </motion.div>

          {/* CONTACT ME BUTTON */}
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
            <button className="m-5 p-1 w-[30vw] hover:w-[55vw] lg:w-[25vw] hover:lg:w-[35vw] xl:w-[20vw] hover:xl:w-[35vw] 2xl:w-[12vw] hover:2xl:w-[30vw] text-r-mainwhite border-solid border-2 border-r-mainwhite rounded-full hover:bg-r-mainwhite hover:text-r-mainblack duration-700">
              <a href="mailto:rhoume.forroom@gmail.com">Let's talk!</a>
            </button>
          </motion.div>
        </div>
      ))}
    </div>
  );
};
