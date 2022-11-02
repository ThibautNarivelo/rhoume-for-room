import { groq } from "next-sanity";
import { sanityClient } from "../sanity";
import { AboutInfo } from "../typings";

const query = groq`
*[_type == "aboutInfo"]`

export const fetchAboutInfos = async() => {
    const res = await sanityClient.fetch(query);

    const aboutInfos: AboutInfo[] = res;

    return aboutInfos;
}