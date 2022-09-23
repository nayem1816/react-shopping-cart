import React from 'react';

const headName = [
    {
        id: '1',
        name: 'Product',
    },
    {
        id: '2',
        name: 'Price',
    },
    {
        id: '3',
        name: 'Quantity',
    },
    {
        id: '4',
        name: 'Subtotal',
    },
];

const CheckoutTableHead = () => {
    return (
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-x-0 border-b-2 border-slate-500">
            <tr>
                {headName.map((item) => {
                    return (
                        <th
                            key={item.id}
                            scope="col"
                            className="py-3 text-left"
                        >
                            <div className="flex items-center justify-center">
                                {item.name}
                            </div>
                        </th>
                    );
                })}
            </tr>
        </thead>
    );
};

export default CheckoutTableHead;
