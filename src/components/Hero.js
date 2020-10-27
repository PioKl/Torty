import React, { useContext } from 'react';
import '../style/Hero.scss';
import { IsDesktopContext } from '../contexts/IsDesktopContext';

import obrazek from "../images/vector.png";
import lukier from "../images/lukier.png";
import lukierDesktop from "../images/lukierdesktop.png";
import kwiatPoster from "../images/fancyplant.png";
import kwiatyTransparent from "../images/tłoKwiatyTransparent.png";
const Hero = () => {
    const { width } = useContext(IsDesktopContext);
    return (
        <>
            {width >= 1280 ?
                <div className="hero-desktop">
                    <div className="hero-desktop__left-side">
                        <div className="hero-desktop__mainImageContainer">
                            <img className="hero-desktop__mainImage" src={kwiatyTransparent} alt="" />
                        </div>
                    </div>
                    <div className="hero-desktop__right-side">
                        <h1 className="hero-desktop__author">Jane Doe</h1>
                        {/*                   <img className="hero-desktop__flower" src={kwiatPoster} alt="" /> */}
                        <div className="hero-desktop__poster">
                            <img className="hero-desktop__flower" src={kwiatPoster} alt="" />
                            <h2 className="hero-desktop__primaryTitle">Torty na wszelkie okazje</h2>
                        </div>
                        <span className="hero-desktop__barrier"></span>
                        <div className="hero-desktop__buttons">
                            <button className="hero-desktop__button hero-desktop__button--check">Sprawdź</button>
                            <button className="hero-desktop__button hero-desktop__button--contact">Kontakt</button>
                        </div>
                    </div>
                    <div className="hero-desktop__lukier">
                        <img src={lukierDesktop} alt="" className="hero-desktop__lukier-img" />
                    </div>

                </div>
                :
                <div className="hero">
                    {/*             <div className="hero__test">
                <h2 className="hero__author">Jane Doe</h2>
            </div> */}
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
                    {/* <img className="hero__lukier" src={lukier} alt="lukier" /> */} {/* z tym rozwiazaniem jest taki problem, ze nie zle sie position na telefonie ustawia, w wersji life, testowanym na moim */}
                    <div className="hero__lukier"> {/* w wersji z divem dziala */}
                        <img className="hero__lukier-img" src={lukier} alt="lukier" />
                    </div>
                </div>
            }
        </>

    );
}

export default Hero;