import React from 'react'
import Collections from './Collections'
import Hero from './Hero'
import Hot from './Hot'
import New from './New'

const Home = ({ items }) => {
    return (
        <div>
            <Hero />
            <New items={items} />
            <Collections />
            <Hot items={items} />
        </div>
    )
}

export default Home
