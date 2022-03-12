import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { calcNewPrice } from '../../../utils';
import { removeFromCart, setQuantity } from '../cartSlice';
import './style.scss';

const CartItem = ({ item }) => {
    const dispatch = useDispatch();
    const { id, product, quantity } = item;
    const newPrice = calcNewPrice(product.price, product.sale);
    const handleChangeQuantity = (e) => {
        const { value } = e.target;
        dispatch(setQuantity({ id, quantity: value }));
    };
    const handleDecreaseQuantity = () => {
        dispatch(setQuantity({ id, quantity: quantity - 1 }));
    };
    const handleIncreaseQuantity = () => {
        dispatch(setQuantity({ id, quantity: quantity + 1 }));
    };
    const handleRemoveFromCart = () => {
        dispatch(removeFromCart(id));
    };
    return (
        <div className="cartItem">
            <img src={product.thumb} alt="" className="cartItem__img" />
            <div className="cartItem__info">
                <h4 className="cartItem__title">{product.name}</h4>
                <div className="cartItem__addCart">
                    <span className="cartItem__price">￥{newPrice}</span>
                    <div className="cartItem__form">
                        <div onClick={handleDecreaseQuantity}>
                            <FontAwesomeIcon className="cartItem__icon" icon={faMinus} />
                        </div>
                        <input
                            type="number"
                            onChange={handleChangeQuantity}
                            value={quantity}
                            className="cartItem__input"
                        />
                        <div onClick={handleIncreaseQuantity}>
                            <FontAwesomeIcon className="cartItem__icon" icon={faPlus} />
                        </div>
                    </div>
                    <span className="cartItem__totalPrice">￥{newPrice * quantity}</span>
                </div>
            </div>
            <div className="cartItem__remove" onClick={handleRemoveFromCart}>
                <FontAwesomeIcon className="cartItem__removeIcon" icon={faMinus} />
            </div>
        </div>
    );
};

export default CartItem;
