import React, { FC, useState } from "react";
import { motion } from "framer-motion";
import { Design, Social } from "../typings";
import { urlFor } from "../sanity";
import Link from "next/link";
import Zoom from "react-medium-image-zoom";
import Image from "next/image";
import ArrowlongDown from "@heroicons/react/24/outline/ArrowLongDownIcon";

interface MastHomeProps {
  designs: Design[];
  socials: Social[];
}

export const Masthome: FC<MastHomeProps> = ({ designs, socials }) => {
  const [isAboutPoster, setIsAboutPoster] = useState(false);
  const [isPhotosPoster, setIsPhotosPoster] = useState(false);
  const [isContactPoster, setIsContactPoster] = useState(false);
  const [isFaqPoster, setIsFqaPoster] = useState(false);
  const [isIGPoster, setIsIGPoster] = useState(false);

  return (
    <div className="bg-r-mainblack h-screen w-screen flex flex-col justify-center items-center">
      {designs?.map((design) => (
        <motion.div
          key={design._id}
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
          className="h-screen w-screen flex flex-col xl:flex-row items-center justify-center p-28 xl:px-[30vw]"
        >
          <div className="lowercase tracking-wide lg:tracking-widest flex flex-row xl:flex-col gap-4 text-lg text-center xl:text-end text-r-mainwhite transition-all">
            <a
              className="headerEffect"
              onMouseOver={() => setIsAboutPoster(true)}
              onMouseLeave={() => setIsAboutPoster(false)}
              href="#about"
            >
              about
            </a>
            <a
              className="headerEffect"
              onMouseOver={() => setIsPhotosPoster(true)}
              onMouseLeave={() => setIsPhotosPoster(false)}
              href="#images-section"
            >
              photos
            </a>
            <a
              className="headerEffect"
              onMouseOver={() => setIsContactPoster(true)}
              onMouseLeave={() => setIsContactPoster(false)}
              href="#contactMe"
            >
              contact
            </a>
            <a
              className="headerEffect"
              onMouseOver={() => setIsFqaPoster(true)}
              onMouseLeave={() => setIsFqaPoster(false)}
              href="#faq"
            >
              faq
            </a>

            {socials?.map((social) => (
              <Link
                className="headerEffect"
                onMouseOver={() => setIsIGPoster(true)}
                onMouseLeave={() => setIsIGPoster(false)}
                key={social._id}
                href={social.url}
              >
                ig
              </Link>
            ))}
          </div>
          <div className="flex justify-center landscape:-space-x-[30vw] portrait:-space-x-[80vw] items-center w-screen h-screen transition-all ease-in-out duration-300">
            <Zoom>
              <Image
                src={urlFor(design.rhoumeMainDesign).url()}
                alt="Rhoume Design"
                className="mainPosters"
                width={400}
                height={400}
                quality={90}
                priority
              />
            </Zoom>
            {isAboutPoster && (
              <Image
                src={urlFor(design.rhoumeAboutDesign).url()}
                alt="About Poster"
                className="mainPosters"
                width={400}
                height={400}
                quality={90}
              />
            )}
            {isPhotosPoster && (
              <Image
                src={urlFor(design.rhoumePhotosDesign).url()}
                alt="About Poster"
                className="mainPosters"
                width={400}
                height={400}
                quality={90}
              />
            )}
            {isContactPoster && (
              <Image
                src={urlFor(design.rhoumeContactDesign).url()}
                alt="About Poster"
                className="mainPosters"
                width={400}
                height={400}
                quality={90}
              />
            )}
            {isFaqPoster && (
              <Image
                src={urlFor(design.rhoumeFaqDesign).url()}
                alt="About Poster"
                className="mainPosters"
                width={400}
                height={400}
                quality={90}
              />
            )}
            {isIGPoster && (
              <Image
                src={urlFor(design.rhoumeIGDesign).url()}
                alt="About Poster"
                className="mainPosters"
                width={400}
                height={400}
                quality={90}
              />
            )}
          </div>
        </motion.div>
      ))}
      <div className="text-r-mainwhite pb-28 landscape:hidden landscape:md:hidden landscape:lg:block landscape:xl:block landscape:2xl:block lg:pb-14 xl:pb-10 2xl:pb-10 animate-bounce opacity-50">
        <ArrowlongDown width={30} height={30} />
      </div>
    </div>
  );
};
