import React from 'react'
import AboutHeader from './components/header'
import AboutSection from './components/sectionAbout'
import SectionProduct from './components/sectionProduct'
const About = () => {
    return (
        <div className="about">
            <AboutHeader />
            <AboutSection />
            <SectionProduct />
        </div>
    )
}

export default About
