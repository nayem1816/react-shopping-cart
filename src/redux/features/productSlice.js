import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProduct = createAsyncThunk(
    'product/fetchProduct',
    async () => {
        const response = await axios.get('http://localhost:3000/products.JSON');
        return response.data;
    }
);

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        products: [],
        categories: [],
        colors: [],
        loading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProduct.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchProduct.fulfilled, (state, action) => {
            state.products = action.payload;
            state.loading = false;
            state.error = null;
            state.categories = [
                ...new Set(action.payload.map((item) => item.category)),
            ];
            state.colors = [
                ...new Set(action.payload.map((item) => item.color)),
            ];
        });
        builder.addCase(fetchProduct.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            state.products = [];
        });
    },
    reducers: {
        setProduct: (state, action) => {
            state.products = action.payload;
        },
    },
});

export const { setProduct } = productSlice.actions;

export default productSlice.reducer;
