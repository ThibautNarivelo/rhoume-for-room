// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { Design } from "../../typings";

const query = groq`
    *[_type == "design"]
`

type Data = {
    designs: Design[];
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    const designs: Design[] = await sanityClient.fetch(query);

    res.status(200).json({ designs });
  }