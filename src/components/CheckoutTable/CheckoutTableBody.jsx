import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ImCross } from 'react-icons/im';
import { Link } from 'react-router-dom';
import { removeFromCart, updateCart } from '../../redux/features/cartSlice';

const CheckoutTableBody = () => {
    const cartData = useSelector((state) => state.cartReducer.cart);
    const dispatch = useDispatch();

    const handleRemoveBtn = (id) => {
        dispatch(removeFromCart({ id }));
    };

    const handlePlusBtn = (id) => {
        dispatch(updateCart({ typeAction: 'plus', id }));
    };

    const handleMinusBtn = (id) => {
        dispatch(updateCart({ typeAction: 'minus', id }));
    };

    return (
        <tbody>
            {cartData?.map((product) => (
                <tr
                    key={product.id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                    <td className="py-4 pl-2 pr-10 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center">
                        <div className="flex gap-3 items-center">
                            <Link
                                onClick={() => handleRemoveBtn(product?.id)}
                                to=""
                                className=""
                            >
                                <ImCross />
                            </Link>
                            <img
                                className="w-14 h-16 rounded"
                                src={product?.image}
                                alt=""
                            />
                            <span className="font-bold">{product?.title}</span>
                        </div>
                    </td>
                    <td className="py-4 text-center px-2">${product?.price}</td>
                    <td className="py-4 px-2">
                        {/* plus and minus button */}
                        <div className="flex items-center justify-center">
                            <button
                                onClick={() => handleMinusBtn(product?.id)}
                                className="rounded-l-full w-8 h-14 flex items-center justify-center border-l-2 border-y-2 border-gray-200 text-xl px-5"
                            >
                                -
                            </button>
                            <button className=" w-8 h-14 flex items-center justify-center border-y-2 border-gray-200 text-xl px-5 cursor-text">
                                {product?.quantity}
                            </button>
                            <button
                                onClick={() => handlePlusBtn(product?.id)}
                                className="rounded-r-full w-8 h-14 flex items-center justify-center border-r-2 border-y-2 border-gray-200 text-xl px-5"
                            >
                                +
                            </button>
                        </div>
                    </td>
                    <td className="py-4 px-2 text-center">
                        <span
                            style={{ color: '#1246AF' }}
                            className="font-bold"
                        >
                            ${(product?.price * product.quantity).toFixed(2)}
                        </span>
                    </td>
                </tr>
            ))}
        </tbody>
    );
};

export default CheckoutTableBody;
