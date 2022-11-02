import { createClient } from "next-sanity";
import createImageUrlBuilder from '@sanity/image-url'

export const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    apiVersion: "2022-08-21",
    useCdn: process.env.NODE_ENV === "production",
};

if (config.projectId === '') {
    throw new Error('project id is not initialized');
}

export const sanityClient = createClient(config);

export const urlFor = (source: any) => createImageUrlBuilder(config).image(source); 
