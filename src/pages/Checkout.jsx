import React from 'react';
import CheckoutTableHead from './../components/CheckoutTable/CheckoutTableHead';
import CheckoutTableBody from './../components/CheckoutTable/CheckoutTableBody';
import CartTotal from './../components/CheckoutTable/CartTotal';
import { useSelector } from 'react-redux';

const Checkout = () => {
    const cartData = useSelector((state) => state.cartReducer.cart);
    return (
        <div className="container mx-auto grid grid-cols-1 xl:grid-cols-3 my-10">
            <div className="overflow-x-auto lg:col-span-2 relative ">
                <div className="shadow-md sm:rounded-lg">
                    {cartData.length === 0 ? (
                        <div className="text-center py-10">
                            <h2>Your cart is empty</h2>
                        </div>
                    ) : (
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <CheckoutTableHead />
                            <CheckoutTableBody />
                        </table>
                    )}
                </div>
                <div className="flex justify-end mt-4 space-x-2">
                    <a href="/">
                        <button className="px-6 py-3 text-sm text-gray-800 bg-gray-200 hover:bg-gray-400">
                            Continue Shopping
                        </button>
                    </a>
                </div>
            </div>
            {cartData.length === 0 ? (
                ''
            ) : (
                <div className="cart-total w-96 mx-5">
                    <CartTotal />
                </div>
            )}
        </div>
    );
};

export default Checkout;
