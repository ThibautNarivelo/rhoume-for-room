import { Design } from "../typings";

export const fetchDesigns = async() => {
    // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getDesigns`).then(res => console.log('async',res)).catch((err)=> console.log(err));
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getDesigns`);

    
    console.log(res);
    console.log(process.env.NEXT_PUBLIC_BASE_URL);

    const data = await res.json()
    const designs: Design[] = data.designs;

    // console.log(designs);

    return designs;   
}