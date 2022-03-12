import { createSelector } from 'reselect';
import { calcNewPrice } from '../../utils';

const cartItemsSelector = (state) => state.cart.cartItems;
export const cartItemsCountSelector = createSelector(cartItemsSelector, (items) =>
    items.reduce((total, item) => total + item.quantity, 0)
);
export const cartItemsTotalSelector = createSelector(cartItemsSelector, (items) =>
    items.reduce(
        (total, item) =>
            total + calcNewPrice(item.product.price, item.product.sale) * item.quantity,
        0
    )
);
