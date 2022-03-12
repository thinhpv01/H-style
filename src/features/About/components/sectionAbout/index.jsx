import React from 'react'
import image from '../../../../img/about-thum.png';
import './style.scss'
const AboutSection = () => {
    return (
        <div className="sectionAbout">
            <div className="sectionAbout__skew"></div>
            <div className="sectionAbout__container">
                <div className="sectionAbout__slogan">H-STYLE</div>
                <div className="sectionAbout__content">
                    <p className="sectionAbout__title">About H-style</p>
                    <div className="sectionAbout__background"></div>
                    <img className="sectionAbout__img hasShadow" src={image} alt="" />
                    <div className="sectionAbout__text hasShadow">
                        <p>HanDuYiShe (H-STYLE) is a Chinese brand specializing in Korean fast fashion styles.</p>
                        <p>In 2010, H-STYLE launched Tao Brand, and received:</p>
                        <ul>
                            <li>Top 10 China’s Online Brand awards</li>
                            <li>The Best Globalization E-commerce Corporation awards</li>
                        </ul>
                        <p>
                            The company also won the "Top 10 Online Brand" award from the Chinese Annual Elite List of Textile & Clothing Industry. In
                            2012, H-STYLE’s sales ranked first in both Tmall.com and JD.com.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection

