import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'
const Clothes = () => {
    return (
        <div className="clothes">
            <div className="clothes__background">H-STYLE</div>
            <div className="clothes__left">
                <div className="clothes__left__up">
                    <p className="clothes__slogan">A new Look</p>
                    <h3 className="clothes__collection">FW 2020 Collection</h3>
                </div>
                <div className="clothes__link">
                    <Link to="/collections">Collections</Link>
                    <br />
                    <Link to="/shop">Shop</Link>
                </div>
                <div className="clothes__low">
                    <p className="clothes__title">Expect more from your</p>
                    <h3 className="clothes__subtitle">Clothes.</h3>
                </div>
            </div>
            <div className="clothes__right">
                <div className="clothes__img">
                    <img src="https://i.imgur.com/7BLnd0n.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Clothes
