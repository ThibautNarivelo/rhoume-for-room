import { Design } from "../typings";

export const fetchDesigns = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getDesigns`);

    const data = await res.json()
    const designs: Design[] = data.designs;

    return designs;   
}