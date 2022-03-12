import React from 'react'

import HeaderLeftImage from '../../../../img/background.png';
import HeaderRightImage from '../../../../img/background3.png';
import HeaderCenterImage from '../../../../img/header-center.png';
import arrow from '../../../../img/arrow.png';
import './style.scss'
const AboutHeader = () => {
    return (
        <div className="aboutHeader">
            <div className="aboutHeader__left">
                <h1 className="aboutHeader__title">About us</h1>
                <img src={arrow} alt="" className="aboutHeader__arrow" />
            </div>
            <div className="aboutHeader__right">
                <img src={HeaderLeftImage} alt="" className="aboutHeader__img__left" />
                <img src={HeaderCenterImage} alt="" className="aboutHeader__img__center" />
                <img src={HeaderRightImage} alt="" className="aboutHeader__img__right" />
            </div>
        </div>
    )
}

export default AboutHeader
