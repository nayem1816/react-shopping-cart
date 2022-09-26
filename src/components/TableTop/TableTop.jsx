import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AiOutlineReload } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import {
    FILTER_BY_SEARCH,
    RESET_FILTER,
} from '../../redux/features/filterSlice';
import SelectCategory from './SelectCategory';
import SelectColor from './SelectColor';

const TableTop = () => {
    const [selectCategory, setSelectCategory] = useState('All');
    const [selectColor, setSelectColor] = useState('All');
    const [searchText, setSearchText] = useState('');
    const { products } = useSelector((state) => state.productReducer);

    const dispatch = useDispatch();

    const handleReset = () => {
        setSelectCategory('All');
        setSelectColor('All');
        dispatch(RESET_FILTER(products));
    };

    const handleSearch = (e) => {
        const targetValue = e.target.value;
        setSearchText(targetValue);
    };

    useEffect(() => {
        dispatch(FILTER_BY_SEARCH({ products, searchText }));
    }, [searchText, dispatch, products]);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 p-2 gap-10">
            <div className="flex gap-3 mb-2 items-center ">
                <span className="category">
                    <SelectCategory
                        selectCategory={selectCategory}
                        setSelectCategory={setSelectCategory}
                        setSelectColor={setSelectColor}
                    />
                </span>
                <span className="color">
                    <SelectColor
                        selectColor={selectColor}
                        setSelectColor={setSelectColor}
                        selectCategory={selectCategory}
                        setSelectCategory={setSelectCategory}
                    />
                </span>
                <Link
                    onClick={() => handleReset()}
                    style={{ color: '#4CC0D7' }}
                    to="/"
                    className="reset flex items-center gap-2"
                >
                    <AiOutlineReload style={{ color: '#4CC0D7' }} /> Reset
                </Link>
            </div>
            <div className="flex items-center mb-2 gap-3 justify-start md:justify-end ">
                <div className="search flex gap-2 items-center">
                    <p>Search:</p>
                    <input
                        onChange={(e) => handleSearch(e)}
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-40"
                    />
                </div>
                <Link
                    to="/checkout"
                    style={{ backgroundColor: '#4CC0D7' }}
                    className="bg-blue-500 text-white px-3 py-2 rounded-sm"
                >
                    Add To Cart
                </Link>
            </div>
        </div>
    );
};

export default TableTop;
