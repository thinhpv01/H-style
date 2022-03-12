import React from 'react'
import Card from '../../New/Card'
import './style.scss'
const Section = ({ title, image, items }) => {
    return (
        <div className="section">
            <div className="section__side">
                <div className="overlay"></div>
                <img className="section__img" src={image} alt="" />
                <h3 className="section__title">{title}</h3>
            </div>
            <div className="section__list">
                {items.map((item, idx) => (
                    <Card item={item} key={idx} />
                ))}
            </div>
        </div>
    )
}

export default Section
