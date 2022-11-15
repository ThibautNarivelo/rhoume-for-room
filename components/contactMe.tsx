import React, { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { AboutInfo, Social } from "../typings";
import Link from "next/link";
import PortableText from "react-portable-text";
import { motion } from "framer-motion";
import ArrowSmallUpIcon from "@heroicons/react/24/outline/ArrowSmallUpIcon";
import {
  MapPinIcon,
  InboxArrowDownIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

interface ContactMeProps {
  aboutInfos: AboutInfo[];
  socials: Social[];
}

export const ContactMe: FC<ContactMeProps> = ({ aboutInfos, socials }) => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:rhoume.forroom@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email}) ${formData.name}`;
  };
  return (
    <div className="cursor-default w-screen h-screen bg-r-mainblack text-r-mainwhite flex relative text-center md:text-left md:flex-row max-w-7 xl px-10 justify-evenly mx-auto items-center">
      {aboutInfos?.map((aboutInfo) => (
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
          key={aboutInfo._id}
          className="flex flex-col space-y-12 portrait:space-y-10 landscape:md:space-y-[3vw] landscape:lg:space-y-[3vw] landscape:xl:space-y-[3vw] landscape:2xl:space-y-[2vw]"
        >
          <p
            className="uppercase text-center tracking-[5vw] md:tracking-[3vw] xl:tracking-[3vw] 2xl:tracking-[2.5vw] text-xl hover:blur-sm duration-300
              portrait:visible landscape:invisible landscape:md:visible landscape:lg:visible landscape:xl:visible landscape:2xl:visible"
          >
            {aboutInfo.contactMeTitle}
          </p>
          <div className="px-2 space-y-4 portrait:-space-y-[20vw] landscape:-space-y-20 portrait:invisible landscape:sm:invisible landscape:md:invisible landscape:lg:visible landscape:xl:visible landscape:2xl:visible landscape:lg:space-y-[1vw] landscape:xl:space-y-[1vw] landscape:2xl:space-y-[1vw]">
            <div className="flex items-center space-x-5">
              <MapPinIcon className="text-r-white10 h-7 w-7 animate-pulse" />
              <p>{aboutInfo.rhoumeLocation}</p>
            </div>
            <div className="flex items-center space-x-5">
              <InboxArrowDownIcon className="text-r-white10 h-7 w-7 animate-pulse" />
              <p>{aboutInfo.rhoumeEmail}</p>
            </div>
            {socials?.map((social) => (
              <Link
                key={social._id}
                className="flex items-center space-x-5"
                href={social.url}
              >
                <UserCircleIcon className="text-r-white10 h-7 w-7 animate-pulse" />
                <p>instagram.com/_rhoume</p>
              </Link>
            ))}
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
              className="contactNano rounded-full px-2 md:px-6 py-4 border-solid border-2 border-r-mainblack text-r-mainwhite hover:shadow-inner hover:bg-r-black50  ease-in-out duration-500 transition-colors
            "
            />
          </form>
          <div className="p-8 space-y-10  bottom-0 items-center justify-between flex flex-col">
            <div className="z-50 bg-r-mainwhite/25 hover:bg-r-mainwhite rounded-full p-1  text-r-mainblack  w-10 animate-bounce duration-700">
              <a href="#home" aria-label="Go to Home Page">
                <ArrowSmallUpIcon />
              </a>
            </div>
          </div>
          <div
            className="absolute bottom-2 left-0 right-0 select-none text-sm text-center text-r-mainwhite/30 ease-in-out duration-700
          landscape:invisible landscape:sm:invisible landscape:md:visibe landscape:lg:visible landscape:xl:visible landscape:2xl:visible portrait:visible"
          >
            <PortableText
              dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
              projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
              content={aboutInfo.copyrightsInfo}
              className="text-clip"
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
};
