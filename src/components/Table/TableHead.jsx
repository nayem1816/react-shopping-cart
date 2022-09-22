import React from 'react';
import FilteredIcon from './../FilteredIcon/FilteredIcon';

const headName = [
    {
        id: '1',
        name: 'Image',
    },
    {
        id: '2',
        name: 'Name',
        filtered: 'true',
    },
    {
        id: '3',
        name: 'Color',
        filtered: 'true',
    },
    {
        id: '4',
        name: 'Stock',
        filtered: 'true',
    },
    {
        id: '5',
        name: 'Price',
        filtered: 'true',
    },
    {
        id: '6',
        name: 'Buy',
    },
];

const TableHead = () => {
    return (
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-x-0 border-b-2 border-slate-500">
            <tr>
                {headName.map((item) => {
                    return (
                        <th
                            key={item.id}
                            scope="col"
                            className="px-6 py-3 text-left"
                        >
                            <div
                                className={`flex items-center gap-1  ${
                                    item.name === 'Buy'
                                        ? 'justify-end'
                                        : 'justify-start'
                                }`}
                            >
                                {item.name}
                                {item.filtered ? <FilteredIcon /> : ''}
                            </div>
                        </th>
                    );
                })}
            </tr>
        </thead>
    );
};

export default TableHead;
