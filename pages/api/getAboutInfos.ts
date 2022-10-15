// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { AboutInfo } from "../../typings";

const query = groq`
*[_type == "aboutInfo"]`

type Data = {
    aboutInfos: AboutInfo[]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    const aboutInfos: AboutInfo[] = await sanityClient.fetch(query);

    res.status(200).json({ aboutInfos })
  }