import React, { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { AboutInfo } from "../typings";
import { MapPinIcon, InboxArrowDownIcon } from "@heroicons/react/24/outline";
import PortableText from "react-portable-text";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

interface ContactMeProps {
  aboutInfos: AboutInfo[];
}

export const ContactMe: FC<ContactMeProps> = ({ aboutInfos }) => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:rhoume.forroom@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email}) ${formData.name}`;
  };
  return (
    <div className="cursor-default w-screen h-screen bg-r-mainblack text-r-mainwhite flex relative text-center md:text-left md:flex-row max-w-7 xl px-10 justify-evenly mx-auto items-center">
      {aboutInfos?.map((aboutInfo) => (
        <div key={aboutInfo._id} className="flex flex-col space-y-10">
          <p className="uppercase text-center tracking-[5vw] md:tracking-[3vw] xl:tracking-[3vw] 2xl:tracking-[2.5vw] text-xl hover:blur-sm duration-300">
            {aboutInfo.contactMeTitle}
          </p>
          <div className="space-y-5">
            <div className="flex items-center space-x-5">
              <MapPinIcon className="text-r-white10 h-7 w-7 animate-pulse" />
              <p className="text-xl">{aboutInfo.rhoumeLocation}</p>
            </div>
            <div className="flex items-center space-x-5">
              <InboxArrowDownIcon className="text-r-white10 h-7 w-7 animate-pulse" />
              <p className="text-xl">{aboutInfo.rhoumeEmail}</p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-4 w-fit mx-auto"
          >
            <div className="flex space-x-2">
              <input
                {...register("name")}
                placeholder="Name"
                className="contactInput contactNano"
                type="text"
              />
              <input
                {...register("email")}
                placeholder="Email"
                className="contactInput contactNano"
                type="email"
              />
            </div>

            <input
              {...register("subject")}
              placeholder="Subject"
              className="contactInput contactNano"
              type="text"
            />

            <textarea
              {...register("message")}
              placeholder="Message"
              className="contactInput contactNano"
            />
            <input
              type="submit"
              className="contactNano rounded-full px-2 md:px-6 py-4 border-solid border-2 border-r-mainblack text-r-mainwhite hover:shadow-inner hover:bg-r-r-black50  ease-in-out duration-500 transition-colors
            "
            />
          </form>
          <div className="z-40 w-auto select-none absolute left-0 right-0 bottom-3 text-sm text-center text-r-mainblack hover:text-r-mainwhite/70 ease-in-out duration-700 ">
            <PortableText
              dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
              projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
              content={aboutInfo.copyrightsInfo}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
