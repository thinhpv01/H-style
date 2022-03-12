import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../components/Cart/cartSlice';

const rootReducer = {
    cart: cartReducer,
};

const store = configureStore({
    reducer: rootReducer,
});
export default store;
