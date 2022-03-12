import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { hiddenCart } from './cartSlice';
import classnames from 'classnames';
import CartItem from './Item';
import { cartItemsCountSelector, cartItemsTotalSelector } from './selectors';
import './style.scss';

const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.cartItems);
    const totalItemsPrice = useSelector(cartItemsTotalSelector);
    const showCart = useSelector((state) => state.cart.showMiniCar);
    const handleHiddenCart = () => {
        dispatch(hiddenCart());
    };
    return (
        <div className={classnames('cart', 'hasShadow', { show: showCart })}>
            <FontAwesomeIcon className="cart__close" onClick={handleHiddenCart} icon={faTimes} />
            <div className="cart__container">
                <h3 className="cart__title">Items in your cart</h3>
                <div>
                    <div className="cart__items">
                        {cartItems[0] ? (
                            cartItems.map((item, index) => <CartItem item={item} key={index} />)
                        ) : (
                            <div className="cart__empty">
                                <img
                                    src="https://i.pinimg.com/originals/73/8c/42/738c42927ad3573197b3ba01035fb538.gif"
                                    alt="404"
                                />
                                <h1>Cart is empty</h1>
                            </div>
                        )}
                    </div>
                    <div className="cart__info">
                        <Link
                            to="/checkout"
                            onClick={() => dispatch(hiddenCart())}
                            className="cart__checkout"
                        >
                            Check out
                        </Link>
                        <span className="cart__total">Total: ￥{totalItemsPrice} </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
