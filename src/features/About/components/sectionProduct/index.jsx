import React from 'react'
import clothing from '../../../../img/clothing-thum.png';
import jew from '../../../../img/jew-thum.png';
import glasses from '../../../../img/glass-thum.png';
import './style.scss'
const SectionProduct = () => {
    return (
        <div className="sectionProduct">
            <div className="sectionProduct__skew"></div>
            <div className="sectionProduct__container">
                <div className="sectionProduct__content">
                    <p className="sectionProduct__title">Our Products</p>
                    <div className="sectionProduct__background">
                        <div className="sectionProduct__text">
                            <p>“A classic that is loved by all.”</p>
                            <p> - Elsie-Rose Arroyo - </p>
                        </div>
                    </div>
                    <div className="sectionProduct__img">
                        <div className="hasShadow sectionProduct__clothing">
                            <img src={clothing} alt="" />
                            <span>Clothing</span>
                        </div>
                        <div className="hasShadow sectionProduct__glasses">
                            <img src={glasses} alt="" />
                            <span>Glasses</span>
                        </div>
                        <div className="hasShadow sectionProduct__jewelries">
                            <span>jewelries</span>
                            <img src={jew} alt="" />
                        </div>
                    </div>
                </div>
                <div className="sectionProduct__slogan">Product</div>
            </div>
        </div>
    )
}

export default SectionProduct
