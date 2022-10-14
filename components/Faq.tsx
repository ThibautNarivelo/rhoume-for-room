import React, { FC } from "react";
import { motion } from "framer-motion";
import { FaqCard } from "./FaqCard";
import { PageInfo } from "../typings";

type Props = {
  pageInfos: PageInfo[];
};

export const Faq: FC<Props> = ({ pageInfos }) => {
  return (
    <div className="h-screen  bg-r-mainwhite flex relative overflow-y-scroll flex-col mx-auto items-center">
      <motion.div
        initial={{
          y: 300,
        }}
        whileInView={{
          y: 0,
        }}
        transition={{
          duration: 1,
        }}
        viewport={{ once: true }}
      >
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 2,
          }}
          className="w-screen flex space-x-5 flex-shrink-0 overflow-x-scroll snap-x snap-mandatory"
        >
          {/* <FaqCard />
          <FaqCard />
          <FaqCard /> */}
          {/* <h4>{pageInfo.title}</h4>
            <article>{pageInfo.text}</article> */}
          {/* <FaqCard key={pageInfo._id} pageInfo={pageInfo} /> */}
          {pageInfos?.map((pageInfo) => (
            <FaqCard key={pageInfo._id} pageInfo={pageInfo} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default null;
