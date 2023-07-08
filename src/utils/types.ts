import { StaticImageData } from "next/image";

export type Product = {

    id: string,
    name: string,
    price: number,
    category: string,
    tagline: string,
    image: string | StaticImageData

};