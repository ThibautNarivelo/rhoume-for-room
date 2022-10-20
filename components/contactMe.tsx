import React, { FC } from "react";
import { motion } from "framer-motion";
import { MapPinIcon, InboxArrowDownIcon } from "@heroicons/react/24/outline";
import { Design } from "../typings";

interface ContactMeProps {
  designs: Design[];
}

export const ContactMe: FC<ContactMeProps> = ({ designs }) => {
  return (
    <motion.div
      initial={{
        y: 20,
        opacity: 0,
      }}
      whileInView={{
        y: 0,
        opacity: 1,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
      }}
      className="w-screen h-screen bg-r-mainblack text-r-mainwhite flex flex-col text-center md:text-left md:flex-row max-w-7 xl px-10 justify-evenly mx-auto items-center"
    >
      {designs?.map((design) => (
        <div key={design._id} className="flex flex-col space-y-10">
          {/* <p className="flex justify-center items-center w-screen text-[.7vw] text-r-mainwhite ease-in-out duration-500">
            All contents of this website are the property of 
            <a href="#home">Rhoume for room</a>. Copyright © 2022 All Rights
            Reserved. Based in Paris, France.
          </p> */}
          <h4 className="text-2xl font-semibold text-center">Let's talk.</h4>
          <div className="space-y-5">
            <div className="flex items-center space-x-5 ">
              <MapPinIcon className="text-r-white50 h-7 w-7 animate-pulse" />
              <p className="text-xl">Paris, France</p>
            </div>
            <div className="flex items-center space-x-5 ">
              <InboxArrowDownIcon className="text-r-white50 h-7 w-7 animate-pulse" />
              <p className="text-xl">{design.emailAddress}</p>
            </div>
          </div>

          <form className="flex flex-col space-y-2  w-fit mx-auto">
            <div className="flex space-x-2">
              <input className="contactInput" type="text" />
              <input className="contactInput" type="text" />
            </div>
            <input className="contactInput" type="text" />
            <textarea className="contactInput" />
            <button className="contactMeButton">Submit</button>
          </form>
        </div>
      ))}
    </motion.div>
  );
};

export default null;
