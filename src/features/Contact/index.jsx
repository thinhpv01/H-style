import React from 'react';
import From from './ContactForm';
import Header from './HeaderContact';
const Contact = () => {
    document.title = 'Contact';
    return (
        <div>
            <Header />
            <From />
        </div>
    );
};
export default Contact;
