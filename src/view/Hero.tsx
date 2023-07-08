import { Badge } from 'components/ui/badge'
import React from 'react'
import { Button } from 'components/ui/button'
import heroimage from "/public/hero-img.webp"
import Image from "next/image"
const Hero = () => {
    return (
        <section className='flex flex-col gap-y-10 lg:flex-row py-6'>

            <div className='flex-1'>
                <Badge className='py-3 px-6 rounded-lg bg-blue-200 text-blue-900 hover:bg-blue-300'>Badge</Badge>

                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-6">
                    An Industrial Take on Streetwear
                </h1>

                <p className="leading-7 [&:not(:first-child)]:mt-6">
                    Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
                </p>

                <Button className='bg-black h-12 mt-4 px-8'> Start Shoping</Button>
            </div>


            <div className='flex-1'>
                <Image src={heroimage} alt="hero" />
            </div>

        </section>
    )
}

export default Hero
