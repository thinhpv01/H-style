import React from 'react';
import { useSelector } from 'react-redux';
import './style.scss';
import CartItem from '../../components/Cart/Item';
import { cartItemsTotalSelector } from '../../components/Cart/selectors';

const Checkout = () => {
    const items = useSelector((state) => state.cart.cartItems);
    const total = useSelector(cartItemsTotalSelector);
    return (
        <div className="checkout">
            <div className="checkout__products">
                <h3 className="checkout__title">Items in your cart</h3>
                <div className="checkout__items">
                    {items.map((item, index) => (
                        <CartItem item={item} key={index} />
                    ))}
                </div>
            </div>
            <div className="checkout__info">
                <h3 className="checkout__total">Total: ￥{total}</h3>
                <p className="checkout__title">Shipping address</p>
                <form className="checkout__form">
                    <div className="checkout__form__group">
                        <input className="checkout__input" type="text" placeholder="First name" />
                        <input className="checkout__input" type="text" placeholder="Last name" />
                    </div>
                    <input className="checkout__input" type="text" placeholder="Your Address" />
                    <input className="checkout__input" type="text" placeholder="Your Phone" />
                    <div className="checkout__form__group">
                        <input className="checkout__input" type="text" placeholder="City" />
                        <input
                            className="checkout__input"
                            type="text"
                            placeholder="State/Province/Region"
                        />
                    </div>
                    <div className="checkout__form__group">
                        <input
                            className="checkout__input"
                            type="text"
                            placeholder="Zip/Postal Code"
                        />
                        <input className="checkout__input" type="text" placeholder="Country" />
                    </div>
                    <button className="checkout__btn">Place your order</button>
                </form>
            </div>
        </div>
    );
};

export default Checkout;
