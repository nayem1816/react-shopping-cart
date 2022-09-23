import React from 'react';
import { useSelector } from 'react-redux';
import { AiOutlineReload } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import CustomSelect from './../Common/CustomSelect';

const TableTop = () => {
    const { categories, colors } = useSelector((state) => state.productReducer);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 p-2">
            <div className="flex gap-3 mb-2 items-center ">
                <span className="category">
                    <CustomSelect data={categories} defaultName={'Category'} />
                </span>
                <span className="color">
                    <CustomSelect data={colors} defaultName={'Color'} />
                </span>
                <Link
                    style={{ color: '#4CC0D7' }}
                    to="/"
                    className="reset flex items-center gap-2"
                >
                    <AiOutlineReload style={{ color: '#4CC0D7' }} /> Reset
                </Link>
            </div>
            <div className="flex items-center gap-3 justify-start md:justify-end ">
                <div className="search flex gap-2 items-center">
                    <p>Search:</p>
                    <input
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
