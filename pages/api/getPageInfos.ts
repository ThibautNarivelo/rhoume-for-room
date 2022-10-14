// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { PageInfo } from "../../typings";

const query = groq`
*[_type == "pageInfo"]| order(orderId asc)`

type Data = {
    pageInfos: PageInfo[]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    const pageInfos: PageInfo[] = await sanityClient.fetch(query);

    res.status(200).json({ pageInfos })
  }