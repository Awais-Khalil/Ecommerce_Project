"use client"
import { useDispatch } from 'react-redux';
import { createAction } from '@reduxjs/toolkit';
import { Button } from 'components/ui/button'
import { cartActions } from 'store/slice/cartSlice';
import toast from 'react-hot-toast';
const AddToCart = () => {

    const dispatch = useDispatch();
    const addItems = () => {
        dispatch(cartActions.addToCart({ quantity: 1 }));
        toast.success("Product Added");
    };
    return <Button className='bg-black h-12 mt-4 px-8' onClick={addItems}> Add to Cart</Button>

};

export default AddToCart;