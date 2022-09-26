import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FILTER_BY_CATEGORY } from '../../redux/features/filterSlice';

const SelectCategory = ({
    selectCategory,
    setSelectCategory,
    setSelectColor,
}) => {
    const { products } = useSelector((state) => state.productReducer);
    const dispatch = useDispatch();

    const allCategories = [
        'All',
        ...new Set(products.map((product) => product.category)),
    ];

    const handleOnChange = (e) => {
        const targetValue = e.target.value;
        setSelectColor('All');
        setSelectCategory(targetValue);
        dispatch(FILTER_BY_CATEGORY({ products, category: targetValue }));
    };

    return (
        <select
            onChange={(event) => handleOnChange(event)}
            value={selectCategory}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-32"
        >
            {allCategories.map((singleData) => (
                <option key={singleData} value={singleData}>
                    {singleData}
                </option>
            ))}
        </select>
    );
};

export default SelectCategory;
