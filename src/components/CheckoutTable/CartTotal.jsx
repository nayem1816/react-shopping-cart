import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../../redux/features/cartSlice';
import { toast } from 'react-toastify';

const CartTotal = () => {
    const cartData = useSelector((state) => state.cartReducer.cart);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const total = cartData.reduce((acc, item) => {
        return acc + item.price * item.quantity;
    }, 0);

    const handleCheckoutBtn = () => {
        navigate('/');
        dispatch(clearCart());
        toast.success('Checkout successfully', {
            position: 'top-right',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

    return (
        <div className="border w-full">
            <div className="px-8 py-10">
                <h1 className="text-2xl font-semibold ">Cart Totals</h1>
                <div className="sub-total flex justify-between mt-10">
                    <h5 className="font-semibold text-slate-500">Subtotal</h5>
                    <h5 className="font-semibold text-blue-400">${total}</h5>
                </div>
                <hr className="my-2 h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
                <div className="sub-total flex justify-between mt-2">
                    <h2 className="font-bold text-xl">Total</h2>
                    <h5
                        style={{ color: '#1246AF' }}
                        className="font-bold text-xl"
                    >
                        ${total}
                    </h5>
                </div>
                <button
                    onClick={() => handleCheckoutBtn()}
                    style={{ backgroundColor: '#1246AF' }}
                    className="w-full mt-10 text-white py-3 rounded-full uppercase font-bold"
                >
                    Proceed to Checkout
                </button>
            </div>
        </div>
    );
};

export default CartTotal;
