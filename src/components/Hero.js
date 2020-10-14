import React from 'react';
import '../style/Hero.scss';

import obrazek from "../images/vector.png"
const Hero = () => {
    return (
        <div className="hero">
            <h2 className="hero__author">Jane Doe</h2>
            <div className="hero__poster">
                <img src={obrazek} alt="" className="hero__img" />
                <h1 className="hero__primaryTitle"><span>Torty</span> na wszelkie okazje</h1>
            </div>
            {/* <img src={obrazek} alt="" /> */}
            {/* <h1 className="test">Torty na wszelkie okazje</h1> */}
            <div className="hero__buttons">
                <button className="hero__button hero__button--check">Sprawdź</button>
                <button className="hero__button hero__button--contact">Kontakt</button>
            </div>
        </div>

    );
}

export default Hero;