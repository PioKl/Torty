import React, { useContext } from 'react';
import { IsDesktopContext } from '../contexts/IsDesktopContext';
import { BurgerMenuContext } from '../contexts/BurgerMenuContext';
import '../style/Contact.scss';
import aboutContactWave from '../images/aboutContactWave.png'
const Contact = () => {
    const { width } = useContext(IsDesktopContext);
    const { burgerMenu } = useContext(BurgerMenuContext);
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div id="contact" className={`contact ${width <= 1280 && burgerMenu && 'grayScale'}`}>
            {width < 1280 ? <img className="contact__waveTop" src={aboutContactWave} alt="" /> : null}
            <div className="contact__section-title"></div>
            <form onSubmit={handleSubmit} className="form-contact" action="">
                <h1 className="form-contact__title">Wyślij mi wiadomość</h1>
                <div className="form-contact__infoAndMessageContainer">
                    <div className="form-contact__userInformationContainer">
                        <label className="form-contact__item form-contact__item--name" htmlFor="name">Imię
                        <input className="form-contact__input form-contact__input--name" type="text" id="name" name="name" required />
                        </label>
                        <label className="form-contact__item form-contact__item--email" htmlFor="email">e-mail
                        <input className="form-contact__input form-contact__input--email" type="email" id="email" name="email" required />
                        </label>
                        <label className="form-contact__item form-contact__item--number" htmlFor="phone">numer telefonu
                        <input className="form-contact__input form-contact__input--number" type="tel" id="phone" name="phone" required/*  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" */ />
                        </label>
                    </div>
                    <div className="form-contact__userMessageContainer">
                        <label className="form-contact__message" htmlFor="message">wiadomość
                        <textarea className="form-contact__information" id="message" name="message" />
                        </label>
                        <button className="form-contact__sendButton">Wyślij</button>
                    </div>
                </div>

            </form>
        </div>
    );
}

export default Contact;