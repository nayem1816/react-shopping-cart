import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TableBody from '../components/Table/TableBody';
import TableHead from '../components/Table/TableHead';
import { fetchProduct } from './../redux/features/productSlice';

const Home = () => {
    const { products, loading, error } = useSelector(
        (state) => state.productReducer
    );
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProduct());
    }, [dispatch]);

    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="container mx-auto flex items-center justify-center my-10">
            <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <TableHead />
                    <TableBody productsData={products} />
                </table>
            </div>
        </div>
    );
};

export default Home;
