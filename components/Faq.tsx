import React, { FC } from "react";
import { AboutInfo, PageInfo } from "../typings";
import { motion } from "framer-motion";
import PortableText from "react-portable-text";
import ArrowSmallUpIcon from "@heroicons/react/24/outline/ArrowSmallUpIcon";

type Props = {
  pageInfos: PageInfo[];
  aboutInfos: AboutInfo[];
};

export const Faq: FC<Props> = ({ pageInfos, aboutInfos }) => {
  return (
    <div className="h-full w-screen bg-r-mainblack flex flex-col justify-center items-center snap-mandatory snap-y">
      {pageInfos?.map((pageInfo) => (
        <div key={pageInfo._id}>
          <motion.div
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
            className="faqContainer"
          >
            <h3 className="faqTitle">{pageInfo.appointmentsTitle}</h3>
            <PortableText
              dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
              projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
              content={pageInfo.appointmentsBody}
              className="faqBody"
            />
          </motion.div>
          <motion.div
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
            className="faqContainer"
          >
            <h3 className="faqTitle">{pageInfo.bookingsTitle}</h3>
            <PortableText
              dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
              projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
              content={pageInfo.bookingsBody}
              className="faqBody"
            />
          </motion.div>
          <motion.div
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
            className="faqContainer"
          >
            <h3 className="faqTitle">{pageInfo.beforeCareTitle}</h3>
            <PortableText
              dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
              projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
              content={pageInfo.beforeCareBody}
              className="faqBody"
            />
          </motion.div>
          <motion.div
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
            className="faqContainer"
          >
            <h3 className="faqTitle">{pageInfo.afterCareTitle}</h3>
            <PortableText
              dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
              projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
              content={pageInfo.afterCareBody}
              className="faqBody"
            />
          </motion.div>
        </div>
      ))}
      <div className="z-50 bg-r-mainwhite/25 hover:bg-r-mainwhite rounded-full p-2 mb-10 text-r-mainblack h-10 w-10 animate-bounce duration-700">
        <a className="cursor-pointer" href="#home">
          <ArrowSmallUpIcon />
        </a>
      </div>
    </div>
  );
};
