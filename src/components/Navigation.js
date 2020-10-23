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
                        <li className="desktop-itemList__item">Strona główna</li>
                        <li className="desktop-itemList__item">Oferta</li>
                        <li className="desktop-itemList__item">Galeria</li>
                        <li className="desktop-itemList__item">Kontakt</li>
                    </ul>
                </div>
            :
            <MenuIcon className="navigation__menu"/>
            }
        </div>
     );
}
 
export default Navigation;