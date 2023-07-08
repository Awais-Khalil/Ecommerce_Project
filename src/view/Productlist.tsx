import React from 'react'
import product1 from "/public/p1.webp"
import product2 from "/public/p2.webp"
import product3 from "/public/p3.webp"
import product4 from "/public/p4.webp"
import product5 from "/public/p5.webp"
import product6 from "/public/p6.webp"

import { Products } from '@/utils/mock'
import ProductCard from '@/components/ProductCard'
import { StaticImageData } from "next/image";

const ProductList = () => {

    const productChunks = Products.slice(0, 3);

    return (
        <div className='flex  justify-evenly mt-16 py-10'>

            {productChunks.map((product) => (
                <ProductCard key={product.id} title={product.name} price={product.price} img={product.image} category={product.category} id={product.id} />


            ))}




        </div>
    )
}

export default ProductList
