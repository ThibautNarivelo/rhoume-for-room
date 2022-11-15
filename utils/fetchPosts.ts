import { groq } from "next-sanity";
import { sanityClient } from "../sanity";
import { Post } from "../typings";

const query = groq`
*[_type == "post"] | order(_createdAt desc)`

export const fetchPosts = async() => {
    const res = await sanityClient.fetch(query);

    const posts: Post[] = res;

    return posts;   
}