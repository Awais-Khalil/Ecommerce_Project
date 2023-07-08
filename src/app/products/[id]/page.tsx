import Quantity from "@/components/Quantity";
import { Products } from "@/utils/mock"
import AddToCart from "components/AddToCart";
import Image, { StaticImageData } from 'next/image'

const getProductsDetail = (id: number | string) => {
    return Products.filter((product) => product.id === id);

}


const sizes = ["xs", "sm", "md", "lg", "xl"];
export default function Page({ params }: { params: { id: string } }) {
    const result = getProductsDetail(params.id);

    return (
        <div className='flex  flex-wrap mt-16 py-10'>
            {
                result.map((product) => (

                    <div key={product.id} className="flex justify-between gap-6">

                        <div>
                            <Image src={product.image} alt={product.name} />
                        </div>
                        <div>
                            <div>
                                <h1 className="text-2xl"> {product.name} </h1>
                                <h2 className="text-base text-gray-300 font-semibold"> {product.tagline}</h2>
                            </div>

                            <div className="mt-8">
                                <h3 className="text-sm font-semibold"> Select Size</h3>
                                <div className="flex gap-x-3">

                                    {
                                        sizes.map((item) => {
                                            return (

                                                <div className="h-6 w-6 hover:shadow-2xl border mt-2 flex justify-center items-center rounded-full">
                                                    <span className="font-semibold text-center text-gray-600 text-[13   px]"> {item}</span>
                                                </div>
                                            );
                                        })}
                                </div>

                                <div className="flex gap-x-3 mt-6 items-center">
                                    <h3 className="text-[15px] font-semibold">  Quantity  </h3>
                                    <Quantity />
                                </div>

                                <div className="mt-2 flex items-center gap-x-3 justify-between">
                                    <AddToCart />
                                    <h2 className="text-2xl font-bold mt-3">$ {product.price.toFixed(2)}</h2>
                                </div>
                            </div>

                        </div>
                    </div>
                ))
            }
        </div >
    );
}


/*

import { Products } from "@/utils/mock"
import ProductCard from "@/components/ProductCard"
import Image, { StaticImageData } from 'next/image'

const getProductsByCategory = (category: string) => {
return Products.filter((product) => product.category === category);

}
export default function Page({ params }: { params: { id: string } }) {
// const result = getProductsByCategory(params.slug);

return (
<div className='flex justify-evenly flex-wrap mt-16 py-10'>
 {result.length > 0 ? (
result.map((product) => (
<ProductCard
key={product.id}
title={product.name}
price={product.price}
img={product.image}
category={product.category}
/>
))
) : (
<p>No Products Found</p>
)}

This is Product detailed page for Product ID: { params.id }
</div >

);
}
*/