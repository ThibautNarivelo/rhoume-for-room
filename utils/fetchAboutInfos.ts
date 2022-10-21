import { AboutInfo } from "../typings";

export const fetchAboutInfos = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getAboutInfos`);

    const data = await res.json()
    const aboutInfos: AboutInfo[] = data.aboutInfos;

    return aboutInfos;
}