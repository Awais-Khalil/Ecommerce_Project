"use client";

import { RootState } from 'store/store';
import { cartActions } from 'store/slice/cartSlice';
import { useSelector, useDispatch } from "react-redux";
import counterSlice from '../store/slice/cartSlice';



const CounterView = () => {

    const dispatch = useDispatch();

    const counterValue = useSelector((state: RootState) => state.cart.totalQuantity);
    const increment = () => {

        dispatch(cartActions.addToCart({}));
    };

    const decrement = () => {

        dispatch(cartActions.removeFromCart({}));
    };

    return (

        <div className='py-6 flex gap-6 justify-center' >
            <button className='py-4 px-3 rounded-md bg-green-500' onClick={increment} > Increment </button>
            < div className='text-bold text-lg' > Counter Value {counterValue} </div>
            < button className='py-4 px-3 rounded-md bg-red-500' onClick={decrement} > Decrement </button>

        </div>
    );
}
export default CounterView;