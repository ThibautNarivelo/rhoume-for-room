import React, { FC } from "react";
import { AboutInfo, PageInfo } from "../typings";
import { motion } from "framer-motion";
import PortableText from "react-portable-text";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

type Props = {
  pageInfos: PageInfo[];
  aboutInfos: AboutInfo[];
};

export const Faq: FC<Props> = ({ pageInfos, aboutInfos }) => {
  return (
    <div className="h-screen w-screen bg-r-mainblack justify-center items-center scroll-smooth">
      {pageInfos?.map((pageInfo) => (
        <div
          key={pageInfo._id}
          className="w-screen h-screen p-[10vw] space-y-2 lg:space-y-5 overflow-y-scroll scrollbar-thin scrollbar-thumb-r-mainwhite/20"
        >
          <Disclosure>
            {({ open }) => (
              <>
                {/* APPOINTMENTS */}

                <Disclosure.Button className="faqTitle">
                  {pageInfo.appointmentsTitle}
                  {/* <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-r-mainblack animate-pulse`}
                  /> */}
                </Disclosure.Button>
                <Disclosure.Panel className="faqBody">
                  <motion.div
                    initial={{
                      opacity: 0,
                    }}
                    whileInView={{
                      opacity: 1,
                    }}
                    transition={{
                      duration: 0.5,
                    }}
                  >
                    <PortableText
                      dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
                      projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
                      content={pageInfo.appointmentsBody}
                      className="faqBody"
                    />
                  </motion.div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>

          {/* BOOKINGS */}

          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="faqTitle">
                  {pageInfo.bookingsTitle}
                  {/* <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-r-mainblack animate-pulse`}
                  /> */}
                </Disclosure.Button>
                <Disclosure.Panel className="faqBody">
                  <motion.div
                    initial={{
                      opacity: 0,
                    }}
                    whileInView={{
                      opacity: 1,
                    }}
                    transition={{
                      duration: 0.5,
                    }}
                  >
                    <PortableText
                      dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
                      projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
                      content={pageInfo.bookingsBody}
                      className="faqBody"
                    />
                  </motion.div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>

          {/* BEFORE CARE */}

          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="faqTitle">
                  {pageInfo.beforeCareTitle}
                  {/* <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-r-mainblack animate-pulse`}
                  /> */}
                </Disclosure.Button>
                <Disclosure.Panel className="faqBody">
                  <motion.div
                    initial={{
                      opacity: 0,
                    }}
                    whileInView={{
                      opacity: 1,
                    }}
                    transition={{
                      duration: 0.5,
                    }}
                  >
                    <PortableText
                      dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
                      projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
                      content={pageInfo.beforeCareBody}
                      className="faqBody"
                    />
                  </motion.div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>

          {/* AFTER CARE */}

          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="faqTitle">
                  {pageInfo.afterCareTitle}
                  {/* <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-r-mainblack animate-pulse`}
                  /> */}
                </Disclosure.Button>
                <Disclosure.Panel className="faqBody">
                  <motion.div
                    initial={{
                      opacity: 0,
                    }}
                    whileInView={{
                      opacity: 1,
                    }}
                    transition={{
                      duration: 0.5,
                    }}
                  >
                    <PortableText
                      dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
                      projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
                      content={pageInfo.afterCareBody}
                      className="faqBody"
                    />
                  </motion.div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      ))}
    </div>
  );
};
