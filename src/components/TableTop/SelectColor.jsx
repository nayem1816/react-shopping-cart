import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FILTER_BY_COLOR } from '../../redux/features/filterSlice';

const SelectColor = ({
    selectColor,
    setSelectColor,
    selectCategory,
    setSelectCategory,
}) => {
    const { products } = useSelector((state) => state.productReducer);
    const dispatch = useDispatch();

    const allColors = [
        'All',
        ...new Set(products.map((product) => product.color)),
    ];

    const handleOnChange = (e) => {
        const targetValue = e.target.value;
        setSelectColor(targetValue);
        dispatch(
            FILTER_BY_COLOR({
                products,
                color: targetValue,
                category: selectCategory,
            })
        );
    };

    return (
        <select
            onChange={(event) => handleOnChange(event)}
            value={selectColor}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-32"
        >
            {allColors.map((singleData) => (
                <option key={singleData} value={singleData}>
                    {singleData}
                </option>
            ))}
        </select>
    );
};

export default SelectColor;
