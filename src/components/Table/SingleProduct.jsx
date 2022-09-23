import React, { useRef, useState } from 'react';
import { FaSmile } from 'react-icons/fa';
import { ImSad2 } from 'react-icons/im';
import { useDispatch } from 'react-redux';
import { addToCart, selectedCart } from '../../redux/features/cartSlice';

const SingleProduct = ({ product }) => {
    const [isChecked, setIsChecked] = useState(false);
    const ref = useRef(null);
    const dispatch = useDispatch();

    const handleInput = (event) => {
        const value = event.target.value;
        if (value < 1) {
            return (ref.current.value = 1);
        }
        if (isChecked) {
            dispatch(addToCart({ product, quantity: value }));
        }
    };

    const handleCart = () => {
        let value = ref.current.value;
        let quantity = parseInt(value) + 1;
        ref.current.value = quantity;
        if (isChecked) {
            dispatch(addToCart({ product, quantity }));
        }
    };
    const handleSelectCart = () => {
        let value = ref.current.value;
        let quantity = parseInt(value);
        setIsChecked(!isChecked);
        dispatch(selectedCart({ product, isChecked: !isChecked, quantity }));
    };

    return (
        <>
            <tr
                key={product.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
                <th
                    scope="row"
                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                    <img
                        className="w-24 h-28 rounded"
                        src={product?.image}
                        alt=""
                    />
                </th>
                <th
                    scope="row"
                    style={{ color: '#4CC0D7' }}
                    className="py-4 px-6"
                >
                    <span className="underline font-bold">
                        {product?.title}
                    </span>
                </th>
                <td
                    style={{ color: '#4CC0D7' }}
                    className="py-4 px-6 underline font-bold"
                >
                    {product?.color.charAt(0).toUpperCase() +
                        product?.color.slice(1)}
                </td>
                <td className="py-4 px-6">
                    {product?.stock === true ? (
                        <span
                            style={{ color: 'green' }}
                            className="flex items-center gap-1 font-bold"
                        >
                            <FaSmile />
                            In Stock
                        </span>
                    ) : (
                        <span
                            style={{ color: 'red' }}
                            className="flex items-center gap-1 font-bold"
                        >
                            <ImSad2 />
                            Stock out
                        </span>
                    )}
                </td>
                <td className="py-4 px-6">${product?.price}</td>
                <td className="py-4 px-6 text-right">
                    <div className="flex items-center gap-2">
                        <input
                            type="number"
                            ref={ref}
                            defaultValue={product?.stock === true ? 1 : 0}
                            className="text-black bg-slate-100 font-medium text-sm py-1 text-center w-20"
                            {...(product?.stock === true
                                ? {
                                      onChange: (event) => handleInput(event),
                                  }
                                : { disabled: true })}
                        />
                        <button
                            type="button"
                            className="text-white bg-black font-medium text-sm px-7 py-1 text-center"
                            {...(product?.stock === true
                                ? {
                                      onClick: () => handleCart(),
                                  }
                                : { disabled: true })}
                        >
                            <svg
                                aria-hidden="true"
                                className="mr-2 -ml-1 w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                            </svg>
                        </button>
                        <input
                            id="default-checkbox"
                            type="checkbox"
                            checked={isChecked}
                            className="w-4 h-4 text-blue-600 bg-gray-100 rounded-sm border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            {...(product?.stock === true
                                ? {
                                      onChange: () => handleSelectCart(),
                                  }
                                : { disabled: true })}
                        />
                    </div>
                </td>
            </tr>
        </>
    );
};

export default SingleProduct;
