import React from 'react';
import SingleProduct from './SingleProduct';

const TableBody = ({ productsData }) => {
    return (
        <>
            {productsData.length !== 0 ? (
                <tbody>
                    {productsData?.map((product) => (
                        <SingleProduct key={product?.id} product={product} />
                    ))}
                </tbody>
            ) : (
                <tbody>
                    <tr>
                        <td colSpan="5" className="text-center py-5 text-2xl">
                            No Data Found
                        </td>
                    </tr>
                </tbody>
            )}
        </>
    );
};

export default TableBody;
