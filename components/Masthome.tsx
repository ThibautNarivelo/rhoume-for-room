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
    <div className="bg-r-mainblack h-screen w-screen relative">
      {designs?.map((design) => (
        <div
          key={design._id}
          className="h-screen w-screen flex flex-col items-center justify-center p-20"
        >
          <div className="tracking-widest flex flex-row gap-6 text-lg text-r-mainwhite transition-all">
            <span>
              <a
                onMouseEnter={() => setIsAboutPoster(true)}
                onMouseLeave={() => setIsAboutPoster(false)}
                href="#about"
              >
                about
              </a>
            </span>
            <a
              onMouseEnter={() => setIsPhotosPoster(true)}
              onMouseLeave={() => setIsPhotosPoster(false)}
              href="#images-section"
            >
              photos
            </a>
            <a
              onMouseEnter={() => setIsContactPoster(true)}
              onMouseLeave={() => setIsContactPoster(false)}
              href="#contactMe"
            >
              contact
            </a>
            <a
              onMouseEnter={() => setIsFqaPoster(true)}
              onMouseLeave={() => setIsFqaPoster(false)}
              href="#contactMe"
            >
              faq
            </a>

            {socials?.map((social) => (
              <Link
                onMouseEnter={() => setIsIGPoster(true)}
                onMouseLeave={() => setIsIGPoster(false)}
                key={social._id}
                href={social.url}
              >
                ig
              </Link>
            ))}
          </div>
          <div className="flex justify-center -space-x-[75vw] md:-space-x-[50vw] lg:-space-x-[40vw] xl:-space-x-[30vw] 2xl:-space-x-[25vw] items-center w-screen h-screen">
            <Zoom>
              <Image
                src={urlFor(design.rhoumeMainDesign).url()}
                alt="Rhoume Design"
                className="mainPosters -z-10"
                width={500}
                height={500}
                quality={100}
              />
            </Zoom>
            {isAboutPoster && (
              <Image
                src={urlFor(design.rhoumeAboutDesign).url()}
                alt="About Poster"
                className="mainPosters"
                width={500}
                height={500}
                quality={90}
              />
            )}
            {isPhotosPoster && (
              <Image
                src={urlFor(design.rhoumePhotosDesign).url()}
                alt="About Poster"
                className="mainPosters"
                width={500}
                height={500}
                quality={90}
              />
            )}
            {isContactPoster && (
              <Image
                src={urlFor(design.rhoumeContactDesign).url()}
                alt="About Poster"
                className="mainPosters"
                width={500}
                height={500}
                quality={90}
              />
            )}
            {isFaqPoster && (
              <Image
                src={urlFor(design.rhoumeFaqDesign).url()}
                alt="About Poster"
                className="mainPosters"
                width={500}
                height={500}
                quality={90}
              />
            )}
            {isIGPoster && (
              <Image
                src={urlFor(design.rhoumeIGDesign).url()}
                alt="About Poster"
                className="mainPosters"
                width={500}
                height={500}
                quality={90}
              />
            )}
          </div>
        </div>
      ))}
      <div className="text-r-mainwhite w-7 h-7 absolute bottom-7 right-7 animate-bounce opacity-50">
        <ArrowlongDown />
      </div>
    </div>
  );
};
