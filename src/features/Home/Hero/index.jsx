import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.scss'


const Hero = () => {
    const settings = {
        infinite: true,
        speed: 0,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="heroCollections">
            <div className="heroCollections__container">
                <Slider {...settings}>
                    <div className="heroCollections__item">
                        <div className="heroCollections__content">
                            <div>
                                <h1 className="heroCollections__title">
                                    I J.ESTINA U
                                </h1>
                                <p className="heroCollections__subtitle">2020 FW Collection</p>
                                <button className="heroCollections__btn">Buy It Now</button>
                            </div>
                        </div>
                        <div className="heroCollections__img">
                            <img src='https://i.imgur.com/UYKC1V7.jpg' alt='banner1' />
                        </div>
                    </div>
                    <div className="heroCollections__item">
                        <div className="heroCollections__content">
                            <div>
                                <h1 className="heroCollections__title">
                                    IU x H-Style
                                </h1>
                                <p className="heroCollections__subtitle">2020 FW Collection</p>
                                <button className="heroCollections__btn">Buy It Now</button>
                            </div>
                        </div>
                        <div className="heroCollections__img">
                            <img src='https://i.imgur.com/FcJojsm.jpg' alt='banner1' />
                        </div>
                    </div>
                    <div className="heroCollections__item">
                        <div className="heroCollections__content">
                            <div>
                                <h1 className="heroCollections__title">
                                    VEDI VERO
                                </h1>
                                <p className="heroCollections__subtitle">2020 FW Collection</p>
                                <button className="heroCollections__btn">Buy It Now</button>
                            </div>
                        </div>
                        <div className="heroCollections__img">
                            <img src='https://i.imgur.com/s2voK9s.jpg' alt='banner1' />
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default Hero
