import { Button } from "../typings";

export const fetchButtons = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getButtons`);

    const data = await res.json()
    const buttons: Button[] = data.socials;

    return buttons;   
}