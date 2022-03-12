import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'
const Glasses = () => {
    return (
        <div className="glasses">
            <div className="glasses__container">
                <div className="glasses__left">
                    <img src="https://i.imgur.com/klapufSh.jpg" className="hasShadow" alt="" />
                </div>
                <div className="glasses__right">
                    <div className="glasses__link">
                        <Link to='/collections'>Collections</Link>
                        <br />
                        <Link to='/Shop'>Shop</Link>
                    </div>
                    <div className="glasses__text">
                        <p className="glasses__title">Look hot with cool</p>
                        <h3 className="glasses__subtitle">Glasses.</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Glasses
