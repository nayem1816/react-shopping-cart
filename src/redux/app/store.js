import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/productSlice';

const store = configureStore({
    reducer: {
        productReducer: productReducer,
    },
});

export default store;
