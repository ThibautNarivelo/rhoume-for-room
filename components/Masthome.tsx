import React from "react";
import { motion } from "framer-motion";
import { Design } from "../typings";
import Image from "next/image";
import { urlFor } from "../sanity";

// BACKEND

type Props = {
  designs: Design[];
};

// FRONTEND

export default function Masthome({ designs }: Props) {
  console.log("math", urlFor(designs[0].image).url());
  return (
    <div className="bg-r-mainblack h-screen w-screen">
      <div className="h-full w-full flex flex-col items-center justify-center">
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
          className="w-[60vw] lg:w-[40vw] xl:[15vw] 2xl:w-[35vw] hover:w-[63vw] hover:lg:w-[43vw] hover:xl:[18vw] hover:2xl:w-[38vw] ease-in-out duration-700"
        ></motion.div>
        {/* {designs. && (
          <img alt={designs.title} src={urlFor(designs?.image).url()} />
        )} */}
        {designs?.map(
          (design) => (
            // <p>{design.}</p>
            console.log(design.image.asset),
            (
              <div key={design._id}>
                {/* <img src={design.image.asset._ref} /> */}
                <img src={urlFor(design.image).url()} />
              </div>
            )
          )
        )}
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
    </div>
  );
}
