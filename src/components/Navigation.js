import React from 'react';
import '../style/Navigation.scss';

import { ReactComponent as MenuIcon } from '../svg/menuIcon.svg';
import { ReactComponent as CakeLogo } from '../svg/cakeLogo.svg';
const Navigation = () => {
    return ( 
        <div className="navigation">
            <CakeLogo className="navigation__logo"/>
            <MenuIcon className="navigation__menu"/>
        </div>
     );
}
 
export default Navigation;