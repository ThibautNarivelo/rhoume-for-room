import React, { FC } from "react";
import { AboutInfo, PageInfo } from "../typings";
import PortableText from "react-portable-text";
import AwesomeSlider from "react-awesome-slider";
import AwesomeSliderStyle from "./module-component/awesomeslider.module.scss";
import ArrowSmallUpIcon from "@heroicons/react/24/outline/ArrowSmallUpIcon";

type Props = {
  pageInfos: PageInfo[];
  aboutInfos: AboutInfo[];
};

export const Faq: FC<Props> = ({ pageInfos, aboutInfos }) => {
  return (
    <div className="h-full w-screen bg-r-mainblack relative snap-mandatory snap-y">
      {pageInfos?.map((pageInfo) => (
        <div key={pageInfo._id}>
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
          {/* </AwesomeSlider> */}

          <div className="z-50 absolute bg-r-mainwhite/10 hover:bg-r-mainwhite rounded-full p-2 text-r-mainblack  bottom-10 right-10 h-10 w-10 animate-bounce duration-700">
            <a className="cursor-pointer" href="#home">
              <ArrowSmallUpIcon />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};
