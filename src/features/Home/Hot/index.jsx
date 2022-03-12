import React from 'react'
import './style.scss'
import Section from './section'

const Hot = ({ items }) => {
    const jewelryItems = items.filter((x) => x.category === 'jewelry').splice(0, 3);
    const glassesItems = items.filter((x) => x.category === 'glasses').splice(0, 3);
    const clothesItems = items.filter((x) => x.category === 'clothes').splice(0, 3);
    console.log(jewelryItems, glassesItems, clothesItems)
    return (
        <div className="hot">
            <h3 className="title">Best Pick</h3>
            <div className="hot__list">
                <Section title="jewelry" image="https://i.imgur.com/s191gRTh.jpg" items={jewelryItems} />
                <Section title="glasses" image="https://i.imgur.com/5X6bac4h.jpg" items={glassesItems} />
                <Section title="clothes" image="https://i.imgur.com/RnREW2Dh.jpg" items={clothesItems} />
            </div>
        </div>
    )
}

export default Hot
