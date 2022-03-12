import { faCartPlus, faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { addToCart, showCart } from '../../../../components/Cart/cartSlice';
import { calcNewPrice, formatNumb } from '../../../../utils';
import './style.scss';

const Card = ({ item }) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const handleAddToCart = (item) => {
        console.log(item);
        const newItems = {
            id: item.id,
            product: item,
            quantity: 1,
        };
        dispatch(addToCart(newItems));
        dispatch(showCart());
    };
    return (
        <div className="card">
            <div className="card__img">
                <img className="card__img__1" src={item.thumb} alt="" />
                <img className="card__img__2" src={item.image[1]} alt="" />
                <div className="card__img__icon">
                    <FontAwesomeIcon icon={faCartPlus} onClick={() => handleAddToCart(item)} />
                    <FontAwesomeIcon
                        icon={faEye}
                        onClick={() => history.push(`/product/${item.id}`)}
                    />
                </div>
            </div>
            <div className="card__content">
                <div className="card__title">{item.name}</div>
                <div className="card__description">{item.desc}</div>
                <div className="card__price">
                    <span className="card__newPrice">
                        {formatNumb(calcNewPrice(item.price, item.sale))}
                    </span>
                    <span className="card__originalPrice">{formatNumb(item.price)}</span>
                    <span className="card__sale">{item.sale}%</span>
                </div>
            </div>
        </div>
    );
};

export default Card;
