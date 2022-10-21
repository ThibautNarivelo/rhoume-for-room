import { Design } from "../typings";

export const fetchDesigns = async() => {
    const res = await fetch(`http://localhost:3000/api/getDesigns`);

    const data = await res.json()
    const designs: Design[] = data.designs;

    return designs;   
}