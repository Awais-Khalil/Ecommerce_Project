"use client"
import React from 'react'
import { useState } from 'react';


const Quantity = () => {
    let [num, setNum] = useState(1);
    return (
        <div className='flex gap-x-2 items-center'>
            <button className='border h-6 w-6 rounded-full center' onClick={() => {
                setNum(num <= 1 ? 1 : --num)
            }}> - </button>

            <span className='text-sm'> {num} </span>
            <button className='border h-6 w-6 rounded-full center' onClick={() => {
                setNum(++num)
            }} > + </button>



        </div >
    )
}

export default Quantity
