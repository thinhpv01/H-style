import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import './style.scss';
import { useSelector } from 'react-redux';
import { cartItemsCountSelector } from '../Cart/selectors';
import { useDispatch } from 'react-redux';
import { hiddenCart, showCart } from '../Cart/cartSlice';

const Navbar = () => {
    const dispatch = useDispatch();
    const totalCountItems = useSelector(cartItemsCountSelector);
    const isShowCart = useSelector((state) => state.cart.showMiniCar);
    console.log(isShowCart);
    const handleToggleCart = () => {
        if (isShowCart) dispatch(hiddenCart());
        else dispatch(showCart());
    };
    return (
        <div className="nav">
            <div className="nav__menu">
                <ul className="nav__list">
                    <li className="nav__item">
                        <NavLink to="/collections">Collections</NavLink>
                    </li>
                    <li className="nav__item">
                        <NavLink to="/shop">Shop</NavLink>
                    </li>
                    <li className="nav__item brandName">
                        <NavLink to="/">H-STYLE</NavLink>
                    </li>
                    <li className="nav__item">
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li className="nav__item">
                        <NavLink to="/contact">Contact</NavLink>
                    </li>
                </ul>
            </div>
            <div className="nav__icons">
                <ul className="nav__icons__list">
                    <li className="nav__icons__item">
                        <FontAwesomeIcon icon={faSearch} />
                    </li>
                    <li className="nav__icons__item cartIcon" onClick={handleToggleCart}>
                        <FontAwesomeIcon icon={faShoppingCart} />
                        <span className="quantity">
                            {totalCountItems > 0 ? totalCountItems : ''}
                        </span>
                    </li>
                    <li className="nav__icons__item">
                        <FontAwesomeIcon icon={faSignInAlt} />
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
