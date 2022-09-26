import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: localStorage.getItem('cart')
            ? JSON.parse(localStorage.getItem('cart'))
            : [],
    },
    reducers: {
        addToCart: (state, action) => {
            const id = action.payload.product.id;
            const quantity = action.payload.quantity;

            console.log(id, quantity);

            const isProductInCart = state.cart.find(
                (product) => product.id === id
            );

            if (isProductInCart) {
                isProductInCart.quantity = quantity;
            } else {
                state.cart.push({
                    ...action.payload.product,
                    quantity: quantity,
                });
            }

            // add data to local storage
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        selectedCart: (state, action) => {
            const id = action.payload.product.id;
            const quantity = action.payload.quantity;
            const isChecked = action.payload.isChecked;

            const isProductInCart = state.cart.find(
                (product) => product.id === id
            );

            if (isChecked) {
                if (isProductInCart) {
                    isProductInCart.quantity = quantity;
                } else {
                    state.cart.push({
                        ...action.payload.product,
                        quantity: quantity,
                    });
                    toast.success('Product added to cart', {
                        position: 'top-right',
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
                localStorage.setItem('cart', JSON.stringify(state.cart));
            } else {
                state.cart = state.cart.filter((product) => product.id !== id);
                localStorage.setItem('cart', JSON.stringify(state.cart));
                toast.error('Product removed from cart', {
                    position: 'top-right',
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        },
        updateCart: (state, action) => {
            const id = action.payload.id;
            const isProductInCart = state.cart.find(
                (product) => product.id === id
            );

            const type = action.payload.typeAction;

            if (type === 'plus') {
                isProductInCart.quantity += 1;
            } else if (type === 'minus') {
                if (isProductInCart.quantity > 1) {
                    isProductInCart.quantity -= 1;
                } else {
                    toast.info('Product quantity cannot be less than 1', {
                        position: 'top-right',
                        autoClose: 1000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                    });
                }
            }
            // add data to local storage
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        removeFromCart: (state, action) => {
            const id = action.payload.id;
            const isProductInCart = state.cart.find(
                (product) => product.id === id
            );

            if (isProductInCart) {
                state.cart = state.cart.filter((product) => product.id !== id);
                toast.success(`${isProductInCart.title} removed from cart`, {
                    position: 'top-right',
                    autoClose: 1000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
            } else {
                toast.info('This product is not in your cart', {
                    position: 'top-right',
                    autoClose: 1000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
            }
            // add data to local storage
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        clearCart: (state) => {
            state.cart = [];
            // add data to local storage
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
    },
});

export const {
    addToCart,
    selectedCart,
    updateCart,
    removeFromCart,
    clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
