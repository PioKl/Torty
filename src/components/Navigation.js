import React, { useContext } from 'react';
import '../style/Navigation.scss';
import { IsDesktopContext } from '../contexts/IsDesktopContext';
import { BurgerMenuContext } from '../contexts/BurgerMenuContext';

import { ReactComponent as MenuIcon } from '../svg/menuIcon.svg';
import { ReactComponent as CakeLogo } from '../svg/cakeLogo.svg';
import { ReactComponent as ClearIcon } from '../svg/clearIcon.svg';

const Navigation = () => {
    const { width } = useContext(IsDesktopContext);
    const { burgerMenu, setBurgerMenu } = useContext(BurgerMenuContext);
    const handleBurgerMenu = () => {
        setBurgerMenu(!burgerMenu);
    }
    return (
        <div className="navigation">
            <CakeLogo className="navigation__logo" />
            {width >= 1280 ?
                <div className="navigation__menu-desktop">
                    <ul className="desktop-itemList">
                        <a href="#mainSite"><li className="desktop-itemList__item">Strona główna</li></a>
                        <a href="#offer"><li className="desktop-itemList__item">Oferta</li></a>
                        <a href="#gallery"><li className="desktop-itemList__item">Galeria</li></a>
                        <a href="#about"><li className="desktop-itemList__item">O mnie</li></a>
                        <a href="#contact"><li className="desktop-itemList__item">Kontakt</li></a>
                    </ul>
                </div>
                :
                <>
                    <MenuIcon className="navigation__menu" onClick={handleBurgerMenu} />
                    <div className={`navigation__burgerMenu navigation__burgerMenu--${burgerMenu ? "visible" : "hidden"}`}>
                        <ClearIcon className="navigation__burgerClearMenu" onClick={handleBurgerMenu} />
                        <ul className="navigation__burgerItemList">
                            <a href="#mainSite"><li className="navigation__burgerItem navigation__burgerItem--mainSite">Strona Główna</li></a>
                            <a href="#offer"><li className="navigation__burgerItem">Oferta</li></a>
                            <a href="#gallery"><li className="navigation__burgerItem">Galeria</li></a>
                            <a href="#about"><li className="navigation__burgerItem">O mnie</li></a>
                            <a href="#contact"><li className="navigation__burgerItem">Kontakt</li></a>
                        </ul>
                    </div>
                </>
            }
        </div>
    );
}

export default Navigation;