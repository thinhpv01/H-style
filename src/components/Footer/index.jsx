import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone, faStreetView } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './style.scss'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__container">
                <div className="footer__brand">
                    <h3 className="footer__title">H-STYLE</h3>
                    <p className="footer__subtitle">Fashion</p>
                    <p className="footer__text">
                        HanDuYiShe (HSTYLE) is a Chinese brand specializing in Korean fast fashion style.
                    </p>
                    <p className="footer__text">
                        As of October 2011, HSTYLE owned 23 operating departments and had more than 1,100 employees. The brand has developed six
                        sub-brands including HSTYLE, AMH, MiniZaru, Soneed, niBBuns, and SOULINE.
                    </p>
                </div>
                <div className="footer__box">
                    <h3 className="footer__box__title">Follow us:</h3>
                    <div className="footer__social">
                        <FontAwesomeIcon className="footer__social__icon" icon={faFacebook} />
                        <span>Facebook</span>
                    </div>
                    <div className="footer__social">
                        <FontAwesomeIcon className="footer__social__icon" icon={faInstagram} />
                        <span>Instagram</span>
                    </div>
                    <div className="footer__social">
                        <FontAwesomeIcon className="footer__social__icon" icon={faYoutube} />
                        <span>Youtube</span>
                    </div>
                    <div className="footer__social">
                        <FontAwesomeIcon className="footer__social__icon" icon={faTwitter} />
                        <span>Twitter</span>
                    </div>
                </div>
                <div className="footer__box">
                    <h3 className="footer__box__title">Contact us:</h3>
                    <div className="footer__social">
                        <FontAwesomeIcon className="footer__social__icon" icon={faEnvelope} />
                        <span>pvt@gmail.com</span>
                    </div>
                    <div className="footer__social">
                        <FontAwesomeIcon className="footer__social__icon" icon={faStreetView} />
                        <span>9882 W. Homestead St. Cary, NC 27511</span>
                    </div>
                    <div className="footer__social">
                        <FontAwesomeIcon className="footer__social__icon" icon={faPhone} />
                        <span>123-456-789</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
