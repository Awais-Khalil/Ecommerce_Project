"use client";

import logo from "public/Logo.webp"
import Image from "next/image"
import React from 'react'
import Link from "next/link"
import { useSelector } from "react-redux";
import { RootState } from 'store/store';


import { ShoppingCart } from "lucide-react"

const Header = () => {

    const cartValue = useSelector((state: RootState) => state.cart.totalQuantity);
    return (
        <div className="flex bg-white justify-between items-center py-6 px-8">
            <Link href={"/"}>
                <Image
                    src={logo} alt="" />
            </Link>
            <ul className="flex justify-between gap-x-8">
                <li className="text-lg">
                    <Link href={"category/Female"}> Female </Link>
                </li>
                <li className="text-lg">
                    <Link href={"category/Male"}> Male </Link>
                </li>
                <li className="text-lg">
                    <Link href={"category/Kids"}> Kids </Link>
                </li>

                <li className="text-lg">
                    <Link href={"/products"}> All Products </Link>
                </li>

            </ul>

            <div className="h-6 w-6 rounded-full bg-gray-400 relative">
                <span className="absolute right-1 top-0  text-sx rounded-full bg-red-500 h-5 text-center w-5 text-white"> {cartValue}</span>
                <ShoppingCart className="w-10 h-10 flex justify-center items-center  bg-gray-100" />
            </div>

        </div>
    )
}

export default Header
