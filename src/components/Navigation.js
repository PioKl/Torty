import React, {useContext} from 'react';
import '../style/Navigation.scss';
import { IsDesktopContext } from '../contexts/IsDesktopContext';

import { ReactComponent as MenuIcon } from '../svg/menuIcon.svg';
import { ReactComponent as CakeLogo } from '../svg/cakeLogo.svg';
const Navigation = () => {
    const { width } = useContext(IsDesktopContext);
    return ( 
        <div className="navigation">
            <CakeLogo className="navigation__logo"/>
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
            <MenuIcon className="navigation__menu"/>
            }
        </div>
     );
}
 
export default Navigation;