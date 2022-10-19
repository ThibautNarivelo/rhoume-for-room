import React, { FC } from "react";
import { PageInfo } from "../typings";
import { motion } from "framer-motion";
import PortableText from "react-portable-text";
import AwesomeSlider from "react-awesome-slider";
import AwesomeSliderStyle from "./module-component/awesomeslider.module.scss";

type Props = {
  pageInfos: PageInfo[];
};

export const Faq: FC<Props> = ({ pageInfos }) => {
  return (
    <div className="h-screen w-screen bg-r-mainwhite">
      {pageInfos?.map((pageInfo) => (
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
          <div key={pageInfo._id}>
            <AwesomeSlider
              animation="scaleOutAnimation"
              cssModule={AwesomeSliderStyle}
              className="w-screen h-screen flex justify-center items-center"
            >
              <div className="faqContainer">
                <h3 className="faqTitle">{pageInfo.appointmentsTitle}</h3>
                <PortableText
                  dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
                  projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
                  content={pageInfo.appointmentsBody}
                  className="faqBody"
                />
              </div>
              <div className="faqContainer">
                <h3 className="faqTitle">{pageInfo.bookingsTitle}</h3>
                <PortableText
                  dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
                  projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
                  content={pageInfo.bookingsBody}
                  className="faqBody"
                />
              </div>
              <div className="faqContainer">
                <h3 className="faqTitle">{pageInfo.beforeCareTitle}</h3>
                <PortableText
                  dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
                  projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
                  content={pageInfo.beforeCareBody}
                  className="faqBody"
                />
              </div>
              <div className="faqContainer">
                <h3 className="faqTitle">{pageInfo.afterCareTitle}</h3>
                <PortableText
                  dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
                  projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
                  content={pageInfo.afterCareBody}
                  className="faqBody"
                />
              </div>
            </AwesomeSlider>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default null;
