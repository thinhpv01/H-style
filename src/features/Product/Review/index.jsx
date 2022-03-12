import React from 'react';
import './style.scss';
export default function Review() {
    return (
        <div className="review">
            <div className="review__header">
                <div className="review__title">J.estina</div>
                <div className="review__subtitle">falling in jewelry</div>
            </div>
            <div className="review__headerImage">
                <img src="https://i.imgur.com/qOfjXtD.jpg" alt="q" />
                <div className="review__product">
                    <div className="review__item">
                        <img src="https://i.imgur.com/FU3RvNA.png" alt="w" />
                        <div className="review__item__name">J.estina Jewelry</div>
                        <div className="review__item__price">$322</div>
                        <button>Add to cart</button>
                    </div>
                    <div className="review__item">
                        <img src="https://i.imgur.com/pzxSJMH.png" alt="w" />
                        <div className="review__item__name">J.estina Jewelry</div>
                        <div className="review__item__price">$322</div>
                        <button>Add to cart</button>
                    </div>{' '}
                    <div className="review__item">
                        <img src="https://i.imgur.com/bJp4sXM.png" alt="w" />
                        <div className="review__item__name">J.estina Jewelry</div>
                        <div className="review__item__price">$322</div>
                        <button>Add to cart</button>
                    </div>
                </div>
            </div>
            <div className="review__section">
                <div className="review__product">
                    <div className="review__item">
                        <img src="https://i.imgur.com/XgO8Unr.png" alt="w" />
                        <div className="review__item__name">J.estina Jewelry</div>
                        <div className="review__item__price">$322</div>
                        <button>Add to cart</button>
                    </div>

                    <div className="review__item">
                        <img src="https://i.imgur.com/O6naMlE.png" alt="w" />
                        <div className="review__item__name">J.estina Jewelry</div>
                        <div className="review__item__price">$322</div>
                        <button>Add to cart</button>
                    </div>
                </div>
                <div className="review__image">
                    <img src="https://i.imgur.com/XsyTKKt.jpg" alt="q" />
                </div>
            </div>
            <div className="review__section">
                <div className="review__image">
                    <img src="https://i.imgur.com/vCGdjkJ.jpg" alt="q" />
                </div>
                <div className="review__product">
                    <div className="review__item">
                        <img src="https://i.imgur.com/4Soks3g.png" alt="w" />
                        <div className="review__item__name">J.estina Jewelry</div>
                        <div className="review__item__price">$322</div>
                        <button>Add to cart</button>
                    </div>

                    <div className="review__item">
                        <img src="https://i.imgur.com/xKCXutc.png" alt="w" />
                        <div className="review__item__name">J.estina Jewelry</div>
                        <div className="review__item__price">$322</div>
                        <button>Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
