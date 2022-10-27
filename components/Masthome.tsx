import React, { FC } from "react";
import { motion } from "framer-motion";
import { Design, Social } from "../typings";
import { urlFor } from "../sanity";
import Link from "next/link";

interface MastHomeProps {
  designs: Design[];
  socials: Social[];
}

export const Masthome: FC<MastHomeProps> = ({ designs, socials }) => {
  return (
    <div className="bg-r-mainblack flex flex-row h-screen w-screen">
      {designs?.map((design) => (
        <div
          key={design._id}
          className="h-full w-full flex  items-center justify-center"
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
            className="flex flex-col-reverse space-y-1 lg:flex-row-reverse lg:space-x-4 w-[55vw] md:w-[55vw] lg:w-[40vw] xl:w-[30vw] 2xl:w-[20vw]"
          >
            {/* MAIN POSTER */}
            <img
              src={urlFor(design.rhoumeMainDesign).url()}
              alt="Rhoume Design"
            />
            {/* ABOUT */}
            <div className="postersWrapper w-fit">
              <a href="#about" className="text-r-mainwhite text-lg z-20">
                about
              </a>
              <img
                src={urlFor(design.rhoumeAboutDesign).url()}
                alt="About Poster"
                className="hoverPosters w-[55vw] lg:w-[40vw] xl:w-[30vw] 2xl:w-[20vw]"
              />
            </div>
            {/* PHOTOS */}
            <div className="postersWrapper w-fit">
              <a href="#about" className="text-r-mainwhite text-lg z-20">
                photos
              </a>
              <img
                src={urlFor(design.rhoumePhotosDesign).url()}
                alt="Photos Poster"
                className="hoverPosters w-[55vw] lg:w-[40vw] xl:w-[30vw] 2xl:w-[20vw]"
              />
            </div>
            {/* CONTACT */}
            <div className="postersWrapper w-fit">
              <a href="#contactMe" className="text-r-mainwhite text-lg z-20">
                contact
              </a>
              <img
                src={urlFor(design.rhoumeContactDesign).url()}
                alt="Contact Poster"
                className="hoverPosters w-[55vw] lg:w-[40vw] xl:w-[30vw] 2xl:w-[20vw]"
              />
            </div>
            {/* FAQ */}
            <div className="postersWrapper w-fit">
              <a href="#faq" className="text-r-mainwhite text-lg z-20">
                faq
              </a>
              <img
                src={urlFor(design.rhoumeFaqDesign).url()}
                alt="FAQ Poster"
                className="hoverPosters w-[55vw] lg:w-[40vw] xl:w-[30vw] 2xl:w-[20vw]"
              />
            </div>
            {/* IG */}
            {socials?.map((social) => (
              <div className="postersWrapper w-fit" key={social._id}>
                <a href={social.url} className="text-r-mainwhite text-lg z-20">
                  ig
                </a>
                <img
                  src={urlFor(design.rhoumeIGDesign).url()}
                  alt="IG Poster"
                  className="hoverPosters w-[55vw] lg:w-[40vw] xl:w-[30vw] 2xl:w-[20vw]"
                />
              </div>
            ))}
          </motion.div>
          {/* 
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
          </motion.div> */}
        </div>
      ))}
    </div>
  );
};
