import React, { useContext } from 'react';
import '../style/Hero.scss';
import { IsDesktopContext } from '../contexts/IsDesktopContext';
import { BurgerMenuContext } from '../contexts/BurgerMenuContext';

import obrazek from "../images/vector.webp";
import lukier from "../images/lukier.webp";
import lukierDesktop from "../images/lukierdesktop.webp";
import kwiatPoster from "../images/fancyplant.webp";
import kwiatyTransparent from "../images/tłoKwiatyTransparent.webp";
const Hero = () => {
    const { width } = useContext(IsDesktopContext);
    const { burgerMenu } = useContext(BurgerMenuContext);
    return (
        <>
            {width >= 1280 ?
                <div className="hero-desktop">
                    <div className="hero-desktop__left-side">
                        <div className="hero-desktop__mainImageContainer">
                            <img className="hero-desktop__mainImage" src={kwiatyTransparent} alt="tort z kwiatami" />
                        </div>
                    </div>
                    <div className="hero-desktop__right-side">
                        <h1 className="hero-desktop__author">Jane Doe</h1>
                        <div className="hero-desktop__poster">
                            <img className="hero-desktop__flower" src={kwiatPoster} alt="kwiat" />
                            <h2 className="hero-desktop__primaryTitle">Torty na wszelkie okazje</h2>
                        </div>
                        <span className="hero-desktop__barrier"></span>
                        <div className="hero-desktop__buttons">
                            <a href="#gallery"><button className="hero-desktop__button hero-desktop__button--check">Sprawdź</button></a>
                            <a href="#contact"><button className="hero-desktop__button hero-desktop__button--contact">Kontakt</button></a>
                        </div>
                    </div>
                    <div className="hero-desktop__lukier">
                        <img src={lukierDesktop} alt="lukier" className="hero-desktop__lukier-img" />
                    </div>

                </div>
                :
                <div id="mainSite" className={`hero ${burgerMenu && 'grayScale'}`}>
                    <h2 className="hero__author">Jane Doe</h2>
                    <div className="hero__poster">
                        <img src={obrazek} alt="tort z kwiatami" className="hero__img" />
                        <h1 className="hero__primaryTitle"><span>Torty</span> na wszelkie okazje</h1>
                    </div>
                    <div className="hero__buttons">
                        <a href="#gallery"><button className="hero__button hero__button--check">Sprawdź</button></a>
                        <a href="#contact"><button className="hero__button hero__button--contact">Kontakt</button></a>
                    </div>
                    <div className="hero__lukier">
                        <img className="hero__lukier-img" src={lukier} alt="lukier" />
                    </div>
                </div>
            }
        </>

    );
}

export default Hero;