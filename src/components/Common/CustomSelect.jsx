import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct, setProduct } from './../../redux/features/productSlice';

const CustomSelect = ({ data, defaultName }) => {
    const { products } = useSelector((state) => state.productReducer);
    const dispatch = useDispatch();
    const handleChange = (event) => {
        const targetValue = event.target.value;

        if (targetValue === 'Category') {
            dispatch(fetchProduct());
        } else {
            const filteredData = products.filter(
                (item) => item.category === targetValue
            );
            dispatch(setProduct(filteredData));
        }
    };
    return (
        <select
            onChange={handleChange}
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-32"
        >
            <option defaultValue="All">{defaultName}</option>
            {data.map((singleData) => (
                <option key={singleData} defaultValue={singleData}>
                    {singleData}
                </option>
            ))}
        </select>
    );
};

export default CustomSelect;
