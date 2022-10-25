import { groq } from "next-sanity";
import { sanityClient } from "../sanity";
import { PageInfo } from "../typings";

const query = groq`
*[_type == "pageInfo"]`

export const fetchPageInfos = async() => {
    const res = await sanityClient.fetch(query);

    const pageInfos: PageInfo[] = res;

    return pageInfos;   
}