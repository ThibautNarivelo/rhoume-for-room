import { PageInfo } from "../typings";

export const fetchPageInfos = async() => {
    const res = await fetch(`http://localhost:3000/api/getPageInfos`);

    const data = await res.json()
    const pageInfos: PageInfo[] = data.pageInfos;

    return pageInfos;   
}