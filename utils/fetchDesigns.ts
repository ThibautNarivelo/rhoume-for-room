import { groq } from "next-sanity";
import { sanityClient } from "../sanity";
import { Design } from "../typings";

const query = groq`
    *[_type == "design"]
`

export const fetchDesigns = async() => {
    const res = await sanityClient.fetch(query);

    const designs: Design[] = res;

    return designs;   
}