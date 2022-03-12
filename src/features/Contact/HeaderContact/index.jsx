import React from 'react';
import './style.scss'

export default function Header() {
    return (
        <div className="contactHeader">
            <div className="contactHeader__left">
                <div className="contactHeader__title">Get in touch</div>
                <div className="contactHeader__content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quia fugit aperiam ea ipsa laudantium natus harum nostrum?
                    Reprehenderit eius molestiae architecto, non doloribus consequuntur et consectetur fugiat labore est quam quo ipsa fugit totam
                    nulla cum repellendus. Non autem enim id illo aperiam? Voluptates suscipit dicta est voluptate. Eum veniam voluptates praesentium
                    deserunt modi quaerat impedit aliquid distinctio iusto doloremque quasi commodi explicabo similique non dolorem, consequuntur t?
                </div>
            </div>
            <div className="contactHeader__right">
                <div className="contactHeader__img ">
                    <img className="hasShadow" src='https://i.imgur.com/CDPwm13h.jpg' alt='images' />
                </div>
            </div>
        </div>
    );
}

