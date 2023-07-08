import React from 'react'
import product1 from "/public/p1.webp"
import Image, { StaticImageData } from 'next/image'
import { Button } from 'components/ui/button'
import Link from 'next/link'
import AddToCart from 'components/AddToCart'


function ProductCard(props: { title: string, price: number, img: StaticImageData, category: string, id: number }) {
    return (
        <Link href={`/products/${props.id}`}>

            <div className='py-5'>
                <Image src={props.img} alt="product1" />
                <h3 className='font-bold text-lg mt-3'> {props.title}</h3>
                <p className='font-bold text-lg'> ${props.price}</p>
                <p className='font-bold text-lg'>Category <span className='font-normal text-base'> {props.category} </span> </p>

                <AddToCart />
            </div>

        </Link>
    )
}

export default ProductCard
