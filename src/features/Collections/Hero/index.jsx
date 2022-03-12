import React from 'react'
import './style.scss'
import arrow from '../../../img/arrow.png';
import image1 from '../../../img/71008b98d23ec316b77716c52d851c42.jpg'
import image2 from '../../../img/120013138_261788528304275_6889414303221423611_n.jpg';

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero__left">
                <div className="hero__left__image1 hasShadow">
                    <img src={image1} alt="" />
                </div>
                <div className="hero__left__image2 hasShadow">
                    <img src={image2} alt="" />
                </div>
            </div>
            <div className="hero__center">
                <p className="hero__center__text-left">
                    Collection
                </p>
                <img src={arrow} alt='arrow' className="hero__center__arrow" />
                <p className="hero__center__text-right">
                    Style
                </p>
            </div>
            <div className="hero__right">
                <div className="hero__right__image1 hasShadow">
                    <img src="https://i.imgur.com/f5AY5spl.jpg" alt="" />
                </div>
                <div className="hero__right__image2 hasShadow">
                    <img src="https://i.imgur.com/5zjSstul.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero
