import React, { FC } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Social } from "../../typings";

// BACKEND

type Props = {
  socials: Social[];
};

// FRONTEND

export const Header: FC<Props> = ({ socials }) => {
  return (
    <div>
      <div className="bg-r-mainblack text-r-mainwhite fixed h-[.2vw] w-screen top-0 left-0 right-0 ease-in-out duration-500 z-20">
        <motion.div
          initial={{
            x: -500,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
          viewport={{ once: true }}
          className="flex flex-row justify-center items-center text-center"
        >
          <a className="header" href="#home">
            + home
          </a>
          <a className="header" href="#about">
            + about
          </a>
          <a className="header" href="#images-section">
            + photos
          </a>
          <a className="header" href="#before-after">
            + faq
          </a>

          {socials?.map((social) => (
            <Link key={social._id} href={social.url}>
              <a className="header">+ ig</a>
            </Link>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default null;
