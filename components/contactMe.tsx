import React, { FC } from "react";
import { motion } from "framer-motion";
import { useForm, SubmitHandler } from "react-hook-form";
import { AboutInfo } from "../typings";
import {
  MapPinIcon,
  InboxArrowDownIcon,
  ArrowSmallUpIcon,
} from "@heroicons/react/24/outline";
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
      className="cursor-default w-screen h-screen bg-r-mainblack text-r-mainwhite flex relative text-center md:text-left md:flex-row max-w-7 xl px-10 justify-evenly mx-auto items-center"
    >
      {aboutInfos?.map((aboutInfo) => (
        <div key={aboutInfo._id} className="flex flex-col space-y-10">
          <p className="text-center text-xl hover:blur-sm duration-300">
            {aboutInfo.contactMeTitle}
          </p>
          <div className="space-y-5">
            <div className="flex items-center space-x-5">
              <MapPinIcon className="text-r-white50 h-7 w-7 animate-pulse" />
              <p className="text-xl">{aboutInfo.rhoumeLocation}</p>
            </div>
            <div className="flex items-center space-x-5">
              <InboxArrowDownIcon className="text-r-white50 h-7 w-7 animate-pulse" />
              <p className="text-xl">{aboutInfo.rhoumeEmail}</p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-2 w-fit mx-auto"
          >
            <div className="flex space-x-2">
              <input
                {...register("name")}
                placeholder="Name"
                className="contactInput"
                type="text"
              />
              <input
                {...register("email")}
                placeholder="Email"
                className="contactInput"
                type="email"
              />
            </div>

            <input
              {...register("subject")}
              placeholder="Subject"
              className="contactInput"
              type="text"
            />

            <textarea
              {...register("message")}
              placeholder="Message"
              className="contactInput"
            />
            <input
              type="submit"
              className="cursor-pointer m-20 hover:m-1 p-1 text-r-mainwhite border-solid border-2 border-r-mainwhite rounded-full hover:bg-r-mainwhite hover:text-r-mainblack duration-300"
            />
          </form>
          <div className="z-30 absolute bg-r-mainwhite/10 hover:bg-r-mainwhite rounded-full p-2 text-r-mainblack  bottom-10 right-10 h-10 w-10 animate-bounce duration-700">
            <a className="cursor-pointer" href="#home">
              <ArrowSmallUpIcon />
            </a>
          </div>
          <div className="z-10 w-auto select-none absolute left-0 right-0 bottom-3 text-sm text-center text-r-mainblack hover:text-r-mainwhite/30 ease-in-out duration-700 ">
            <PortableText
              dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
              projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
              content={aboutInfo.copyrightsInfo}
            />
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default null;
