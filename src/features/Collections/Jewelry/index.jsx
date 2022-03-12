import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
const Jewelry = () => {
    return (
        <div className="jewelry">
            <div className="jewelry__container">
                <div className="jewelry__left">
                    <img
                        src="https://i.imgur.com/2qbIXyR.jpg"
                        className="jewelry__left__image1 hasShadow"
                        alt=""
                    />
                    <img
                        src="https://i.imgur.com/ZpWBK3p.jpg"
                        className="jewelry__left__image2 hasShadow"
                        alt=""
                    />
                </div>
                <div className="jewelry__right">
                    <div>
                        <p className="jewelry__text">A Trendy</p>
                        <h3 className="jewelry__title">Jewelry</h3>
                        <p className="jewelry__text">spot.</p>
                    </div>
                    <div className="jewelry__link">
                        <Link to="/collections">Collections</Link>
                        <br />
                        <Link to="/shop">Shop</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Jewelry;
