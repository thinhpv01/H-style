import React from 'react'
import Card from './Card'
import './style.scss'

const New = ({ items }) => {
    const newItems = items.splice(0, 5)
    console.log(newItems)
    return (
        <div className="new">
            <h1 className="new__title">What's New?</h1>
            <div className="new__list">
                {newItems.map((x, index) => (
                    <Card key={index} item={x} />
                ))}
            </div>
        </div>
    )
}

export default New
