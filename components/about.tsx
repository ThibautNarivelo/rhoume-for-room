import React, { FC } from "react";
import { motion } from "framer-motion";
import { PageInfo } from "../typings";
import { fetchPageInfos } from "../utils/fetchPageInfos";

// BACKEND

type Props = {
  pageInfos: PageInfo[];
};

// FRONTEND

export const About: FC = () => {
  return (
    <div className="h-screen w-screen bg-r-mainwhite text-r-mainblack flex items-center justify-center text-center">
      <div className="p-10 gap-40 flex flex-col leading-snug font-['Lora'] text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
        {/* DEFINITION */}
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
          className="text-start"
        >
          <span className="aboutHover">
            rhoume
            <br />
            /room,ru:m/
            <br />
            noun: rhoume;
            <br />
            1. a free space part of a bigger building.
          </span>
        </motion.div>
        {/* BIO */}
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
          className="text-end"
        >
          <span className="aboutHover">
            Rhoume is a welcoming, intimate and ever-evolving creative space
            curated by Moriah Georges.
            <br />
            Moriah is an Australian illustrator and tattoo artist based in
            Paris, France.
            <br />
            She gathers inspiration from her dance and choreography background,
            music,
            <br />
            spirituality and nature while exploring the rhythms and patterns of
            her surroundings.
            <br />
            Moriah prides herself on offering a personal and human touch to all
            her projects and commissions.
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default null;
