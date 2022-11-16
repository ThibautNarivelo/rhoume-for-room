import React, { FC } from "react";
import { AboutInfo, PageInfo } from "../typings";
import { motion } from "framer-motion";
import PortableText from "react-portable-text";
import { Disclosure } from "@headlessui/react";
import ArrowlongDown from "@heroicons/react/24/outline/ArrowLongDownIcon";

type Props = {
  pageInfos: PageInfo[];
  aboutInfos: AboutInfo[];
};

export const Faq: FC<Props> = ({ pageInfos, aboutInfos }) => {
  return (
    <div className="h-screen w-screen bg-r-mainblack flex flex-col justify-center items-center scroll-smooth">
      {pageInfos?.map((pageInfo) => (
        <div
          key={pageInfo._id}
          className="w-[90vw] h-screen space-y-2 lg:space-y-5 px-6 py-20 overflow-y-scroll scrollbar-thin scrollbar-thumb-r-mainwhite/20"
        >
          <motion.div
            initial={{
              opacity: 0,
              y: 10,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.3,
              stiffness: 10,
            }}
            viewport={{ once: true }}
          >
            <Disclosure>
              {({ open }) => (
                <>
                  {/* APPOINTMENTS */}

                  <Disclosure.Button className="faqTitle">
                    {pageInfo.appointmentsTitle}
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
                        duration: 0,
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
          </motion.div>

          {/* BOOKINGS */}
          <motion.div
            initial={{
              opacity: 0,
              y: 10,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            viewport={{ once: true }}
          >
            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="faqTitle">
                    {pageInfo.bookingsTitle}
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
                        duration: 0.3,
                        stiffness: 10,
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
          </motion.div>

          {/* BEFORE CARE */}

          <motion.div
            initial={{
              opacity: 0,
              y: 10,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            viewport={{ once: true }}
          >
            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="faqTitle">
                    {pageInfo.beforeCareTitle}
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
                        stiffness: 10,
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
          </motion.div>

          {/* AFTER CARE */}

          <motion.div
            initial={{
              opacity: 0,
              y: 10,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.9,
              stiffness: 10,
            }}
            viewport={{ once: true }}
          >
            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="faqTitle">
                    {pageInfo.afterCareTitle}
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
          </motion.div>
        </div>
      ))}
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
        className="text-r-mainwhite/50  h-[25vw] w-10 p-2 mt-4 flex flex-col items-center justify-center animate-bounce opacity-50"
      >
        <ArrowlongDown width={30} height={30} />
      </motion.div>
    </div>
  );
};
