import React from 'react';
import SingleProduct from './SingleProduct';

const TableBody = ({ productsData }) => {
    return (
        <tbody>
            {productsData?.map((product) => (
                <SingleProduct key={product?.id} product={product} />
            ))}
        </tbody>
    );
};

export default TableBody;
