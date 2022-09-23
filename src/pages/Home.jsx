import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TableBody from '../components/Table/TableBody';
import TableHead from '../components/Table/TableHead';
import { fetchProduct } from './../redux/features/productSlice';
import TableTop from './../components/TableTop/TableTop';
import { ToastContainer } from 'react-toastify';

const Home = () => {
    const { products, loading, error } = useSelector(
        (state) => state.productReducer
    );
    // const cartData = useSelector((state) => state.cartReducer.cart);
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

    // console.log(cartData);

    return (
        <div className="container mx-auto flex items-center justify-center my-10">
            <ToastContainer />
            <div className="overflow-x-auto relative ">
                <div className="">
                    <TableTop />
                </div>
                <div className="shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <TableHead />
                        <TableBody productsData={products} />
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Home;
