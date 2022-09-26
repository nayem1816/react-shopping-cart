import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/productSlice';
import cartReducer from '../features/cartSlice';
import filterReducer from '../features/filterSlice';

const store = configureStore({
    reducer: {
        productReducer: productReducer,
        cartReducer: cartReducer,
        filterReducer: filterReducer,
    },
});

export default store;
