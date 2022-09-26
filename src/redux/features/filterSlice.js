import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    filteredProducts: [],
    filterColor: [],
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        FILTER_BY_SEARCH: (state, action) => {
            const { products, searchText } = action.payload;

            let tempProducts = products.filter(
                (product) =>
                    product.title
                        .toLowerCase()
                        .includes(searchText.toLowerCase()) ||
                    product.category
                        .toLowerCase()
                        .includes(searchText.toLowerCase())
            );

            state.filteredProducts = tempProducts;
        },
        FILTER_BY_CATEGORY: (state, action) => {
            // console.log(action.payload);
            const { products, category } = action.payload;
            let tempProducts = [];
            if (category === 'All') {
                tempProducts = products;
            } else {
                tempProducts = products.filter(
                    (product) => product.category === category
                );
            }
            state.filteredProducts = tempProducts;
        },

        FILTER_BY_COLOR: (state, action) => {
            console.log(action.payload);

            // filter color by category
            const { products, color, category } = action.payload;
            let tempProducts = [];

            if (color === 'All') {
                tempProducts = products;
            } else {
                tempProducts = products.filter(
                    (product) => product.color === color
                );
            }

            if (category !== 'All') {
                tempProducts = tempProducts.filter(
                    (product) => product.category === category
                );
            }

            state.filteredProducts = tempProducts;
        },

        RESET_FILTER: (state, action) => {
            state.filteredProducts = action.payload;
        },
    },
});

export const {
    FILTER_BY_SEARCH,
    FILTER_BY_CATEGORY,
    FILTER_BY_COLOR,
    RESET_FILTER,
} = filterSlice.actions;

export const selectFilteredProducts = (state) => state.filter.filteredProducts;

export default filterSlice.reducer;
