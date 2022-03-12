import React from 'react';
import './style.scss'
export default function From() {
    return (
        <div className="contactForm">
            <div className="contactForm__title">
                <p>Message us</p>
                <img className="hasShadow" src="https://nld.mediacdn.vn/2019/10/19/1571405322-201910180-iu-15714805252122044141800.jpg" alt="" />
            </div>
            <div className="contactForm__container">
                <form method='post' className="contactForm__content">
                    <div className="contactForm__group">
                        <label htmlFor='name'>Your Name:</label>
                        <input type='text' name='name' id='name' />
                    </div>
                    <div className="contactForm__group">
                        <label htmlFor='email'>Your Email:</label>
                        <input type='text' name='email' id='email' />
                    </div>
                    <div className="contactForm__group">
                        <label htmlFor='message'>Your Message:</label>
                        <textarea name='message' row='200' id='message' />
                    </div>
                </form>
                <button className="contactForm__btn">Send</button>
            </div>
        </div>
    );
}
