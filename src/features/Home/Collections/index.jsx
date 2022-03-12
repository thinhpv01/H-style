import React from 'react'
import './style.scss'
const Collections = () => {
    return (
        <div className="collection">
            <h2 className="title">Our Collection</h2>
            <div className="collection__list">
                <div className="collection__item">
                    <div className="overlay"></div>
                    <img className="collection__img" src="https://i.imgur.com/rdOM1F7h.png" alt="" />
                    <h3 className="collection__title">H-style</h3>
                </div>
                <div className="collection__item">
                    <div className="overlay"></div>
                    <img className="collection__img" src="https://i.imgur.com/QjNXLieh.jpg" alt="" />
                    <h3 className="collection__title">J.estina</h3>
                </div>
                <div className="collection__item">
                    <div className="overlay"></div>
                    <img className="collection__img" src="https://i.imgur.com/6Vo09wGh.jpg" alt="" />
                    <h3 className="collection__title">Vedi Vero</h3>
                </div>
            </div>
        </div>
    )
}

export default Collections
