import { AboutInfo } from "../typings";

export const fetchAboutInfos = async() => {
    const res = await fetch(`http://localhost:3000/api/getAboutInfos`);

    const data = await res.json()
    const aboutInfos: AboutInfo[] = data.aboutInfos;

    return aboutInfos;
}