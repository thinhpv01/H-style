import { createSlice } from '@reduxjs/toolkit';

const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        showMiniCar: false,
        cartItems: [],
    },
    reducers: {
        // toggleShowCart(state) {
        //     if (state.showMiniCar) state.showMiniCar = false;
        //     else state.showMiniCar = true;
        // },
        showCart(state) {
            state.showMiniCar = true;
        },
        hiddenCart(state) {
            state.showMiniCar = false;
        },
        addToCart(state, action) {
            const newItem = action.payload;
            const idx = state.cartItems.findIndex((x) => x.id === newItem.id);
            if (idx >= 0) state.cartItems[idx].quantity += newItem.quantity;
            else state.cartItems.push(newItem);
        },
        setQuantity(state, action) {
            const { id, quantity } = action.payload;
            const idx = state.cartItems.findIndex((x) => x.id === id);
            if (idx >= 0) state.cartItems[idx].quantity = quantity;
        },
        removeFromCart(state, action) {
            state.cartItems = state.cartItems.filter((x) => x.id !== action.payload);
        },
    },
});
const { actions, reducer } = CartSlice;
export const { showCart, hiddenCart, addToCart, setQuantity, removeFromCart } = actions;
export default reducer;
