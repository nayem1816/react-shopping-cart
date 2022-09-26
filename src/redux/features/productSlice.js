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
                'Category',
                ...new Set(action.payload.map((item) => item.category)),
            ];
            state.colors = [
                'Color',
                ...new Set(action.payload.map((item) => item.color)),
            ];
        });
        builder.addCase(fetchProduct.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            state.products = [];
        });
    },
});

export default productSlice.reducer;
