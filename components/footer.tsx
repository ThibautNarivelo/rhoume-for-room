import React from "react";
import { motion } from "framer-motion";

export default function footer() {
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
      className="cursor-default w-screen p-2"
    >
      <div className="bg-r-mainblack hover:bg-r-mainwhite  ease-in-out duration-500">
        <div>
          <p className="flex justify-center items-center w-screen text-[.7vw] text text-r-mainwhite hover:text-r-mainblack ease-in-out duration-500">
            All contents of this website are the property of 
            <a href="#home">Rhoume for room</a>. Copyright © 2022 All Rights
            Reserved. Based in Paris, France.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
